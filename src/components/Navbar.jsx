import React from "react";

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <div className="navbar">
      <div>
        <h1>Chiller System Dashboard</h1>
        <p className="subtitle">Optimization & Analytics Prototype</p>
      </div>

      <div className="nav-buttons">
        <button
          className={currentPage === "dashboard" ? "active-btn" : ""}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={currentPage === "analytics" ? "active-btn" : ""}
          onClick={() => setCurrentPage("analytics")}
        >
          Analytics
        </button>
      </div>
    </div>
  );
}

export default Navbar;