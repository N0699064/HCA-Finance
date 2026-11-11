"""AgentGate bot & AI-agent protection for FastAPI: checks each request before your routes.

Needs AGENTGATE_SECRET_KEY in your environment variables (AgentGate -> Sites -> Install code).
Fails open: without the key, or if the check is slow or fails, the request continues normally.
Uses only the standard library and Starlette (installed with FastAPI).
"""
import asyncio
import json
import os
import re
import urllib.request

from starlette.responses import HTMLResponse, JSONResponse, PlainTextResponse

API = "https://aikido-clone.vercel.app/api/v1/decide"


def _decide(payload: dict, key: str) -> dict:
    req = urllib.request.Request(
        API,
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=1.5) as res:
        return json.loads(res.read().decode())


async def agentgate_middleware(request, call_next):
    key = os.environ.get("AGENTGATE_SECRET_KEY")
    if not key or request.method == "OPTIONS":
        return await call_next(request)
    try:
        h = request.headers
        cookie = re.search(r"(?:^|;\s*)agentgate=([^;]+)", h.get("cookie", ""))
        forwarded = h.get("x-forwarded-for", "").split(",")[0].strip()
        payload = {
            "ip": forwarded or (request.client.host if request.client else ""),
            "userAgent": h.get("user-agent", ""),
            "path": request.url.path + (("?" + request.url.query) if request.url.query else ""),
            "method": request.method,
            "token": cookie.group(1) if cookie else None,
            "headers": {"acceptLanguage": h.get("accept-language", ""), "accept": h.get("accept", ""), "secChUa": h.get("sec-ch-ua", "")},
        }
        d = await asyncio.to_thread(_decide, payload, key)
        action = d.get("action")
        wants_html = "text/html" in h.get("accept", "")
        if action == "block":
            return PlainTextResponse("Access denied", status_code=403)
        if action == "limit":
            return PlainTextResponse("Too many requests", status_code=429, headers={"Retry-After": "60"})
        if action == "challenge":
            # API clients get JSON; browsers opening a page get the challenge page.
            if wants_html and d.get("challengeHtml"):
                return HTMLResponse(d["challengeHtml"], status_code=403)
            return JSONResponse({"error": "challenge_required"}, status_code=403)
    except Exception:
        pass  # Fail open.
    return await call_next(request)
