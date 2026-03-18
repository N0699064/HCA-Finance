import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/goldrush/Navbar";
import Hero from "./components/goldrush/Hero";
import Services from "./components/goldrush/Services";
import Partners from "./components/goldrush/Partners";
import About from "./components/goldrush/About";
import Insights from "./components/goldrush/Insights";
import Footer from "./components/goldrush/Footer";
import ServiceDetail from "./components/goldrush/ServiceDetail";
import AboutPage from "./components/goldrush/AboutPage";
import InsightDetail from "./components/goldrush/InsightDetail";
import InsightsPage from "./components/goldrush/InsightsPage";
import ContactPage from "./components/goldrush/ContactPage";
import SBAEligibility from "./components/goldrush/SBAEligibility";
import TermsPage from "./components/goldrush/TermsPage";
import PrivacyPage from "./components/goldrush/PrivacyPage";
import SMSConsentPage from "./components/goldrush/SMSConsentPage";
import { serviceData, insightData } from "./data/mockData";

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <About />
      <Insights />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="antialiased text-slate-800 bg-white selection:bg-pink-200 selection:text-pink-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:id" element={<ServiceDetail serviceData={serviceData} />} />
          <Route path="/insights" element={<InsightsPage insightData={insightData} />} />
          <Route path="/insights/:id" element={<InsightDetail insightData={insightData} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sba-eligibility" element={<SBAEligibility />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sms-consent" element={<SMSConsentPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
