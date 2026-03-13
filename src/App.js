import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HeaderBanner from "./components/HeaderBanner";
import Dashboard from "./pages/Dashboard";
import TrendMonitoring from "./pages/TrendMonitoring";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import { dashboardSummary, chillers, alerts, trendData } from "./data/mockData";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <Dashboard
            dashboardSummary={dashboardSummary}
            chillers={chillers}
            alerts={alerts}
          />
        );
      case "trend":
        return <TrendMonitoring trendData={trendData} />;
      case "analytics":
        return <Analytics chillers={chillers} />;
      case "alerts":
        return <Alerts alerts={alerts} />;
      default:
        return (
          <Dashboard
            dashboardSummary={dashboardSummary}
            chillers={chillers}
            alerts={alerts}
          />
        );
    }
  };

  return (
    <div className="app-shell">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="main-content">
        <HeaderBanner />
        {renderPage()}
      </main>
    </div>
  );
}

export default App;