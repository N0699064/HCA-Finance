import React, { useState } from "react";
import "./App.css";
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
import { serviceData, insightData } from "./data/mockData";

function App() {
  const [currentView, setCurrentView] = useState({ type: "home" });

  const navigateToService = (id) => {
    setCurrentView({ type: "service", id });
    window.scrollTo(0, 0);
  };

  const navigateToInsight = (id) => {
    setCurrentView({ type: "insight", id });
    window.scrollTo(0, 0);
  };

  const navigateToInsightsList = () => {
    setCurrentView({ type: "insights-list" });
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentView({ type: "about" });
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    setCurrentView({ type: "contact" });
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setCurrentView({ type: "home" });
    window.scrollTo(0, 0);
  };

  return (
    <div className="antialiased text-slate-800 bg-white selection:bg-pink-200 selection:text-pink-900">
      <Navbar
        isHome={currentView.type === "home"}
        onHome={navigateHome}
        onServiceClick={navigateToService}
        onAboutClick={navigateToAbout}
        onInsightsClick={navigateToInsightsList}
        onContactClick={navigateToContact}
      />

      {currentView.type === "home" && (
        <>
          <Hero
            onContactClick={navigateToContact}
            onAboutClick={navigateToAbout}
          />
          <Services onServiceClick={navigateToService} />
          <Partners />
          <About onAboutClick={navigateToAbout} />
          <Insights
            onInsightClick={navigateToInsight}
            onSeeMore={navigateToInsightsList}
          />
        </>
      )}

      {currentView.type === "about" && (
        <AboutPage
          onBack={navigateHome}
          onContactClick={navigateToContact}
        />
      )}

      {currentView.type === "service" && (
        <ServiceDetail
          data={serviceData[currentView.id] || serviceData["lines-of-credit"]}
          onBack={navigateHome}
          onContactClick={navigateToContact}
        />
      )}

      {currentView.type === "insight" && (
        <InsightDetail
          data={insightData[currentView.id] || insightData["restaurant-expansion"]}
          onBack={navigateToInsightsList}
          onContactClick={navigateToContact}
        />
      )}

      {currentView.type === "insights-list" && (
        <InsightsPage
          insights={Object.values(insightData)}
          onInsightClick={navigateToInsight}
          onBack={navigateHome}
        />
      )}

      {currentView.type === "contact" && (
        <ContactPage onBack={navigateHome} />
      )}

      <Footer />
    </div>
  );
}

export default App;
