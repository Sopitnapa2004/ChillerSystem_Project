import React from "react";

function HeaderBanner() {
  return (
    <div className="header-banner">
      <div className="header-banner-content">
        <img
          src="/seagate_logo.png"
          alt="Seagate"
          className="header-logo"
        />
        <div>
          <h2>SEAGATE KORAT FACILITY</h2>
          <p>Chiller System Optimization & Analytics Dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;