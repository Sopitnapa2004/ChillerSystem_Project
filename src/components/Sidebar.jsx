import React from "react";
import { MdDashboard, MdAnalytics, MdWarning, MdTimeline } from "react-icons/md";

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand-row">
          <img
            src="/seagate_logo.png"
            alt="Seagate"
            className="brand-logo"
          />
          <div>
            <h2 className="brand-title">Chiller System</h2>
            <p className="brand-subtitle">Prototype Dashboard</p>
          </div>
        </div>
      </div>

      <div className="sidebar-divider" />

      <nav className="sidebar-nav">
        <button
          className={`nav-item ${currentPage === "dashboard" ? "active" : ""}`}
          onClick={() => setCurrentPage("dashboard")}
        >
          <MdDashboard /> Dashboard
        </button>

        <button
          className={`nav-item ${currentPage === "trend" ? "active" : ""}`}
          onClick={() => setCurrentPage("trend")}
        >
          <MdTimeline /> Trend Monitoring
        </button>

        <button
          className={`nav-item ${currentPage === "analytics" ? "active" : ""}`}
          onClick={() => setCurrentPage("analytics")}
        >
          <MdAnalytics /> Analytics
        </button>

        <button
          className={`nav-item ${currentPage === "alerts" ? "active" : ""}`}
          onClick={() => setCurrentPage("alerts")}
        >
          <MdWarning /> Alerts
        </button>
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-card">
        <p className="sidebar-card-title">Target Power/Ton</p>
        <div className="target-box">0.75 kW/Ton</div>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-card">
        <p className="sidebar-card-title">System Info</p>
        <p className="sidebar-text">Last updated: 2026-03-13 15:25</p>
        <p className="sidebar-text">Data points: 8</p>
      </div>
    </aside>
  );
}

export default Sidebar;