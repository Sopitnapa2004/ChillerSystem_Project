import React from "react";

function OverviewCards({ summary }) {
  const cards = [
    { title: "Status", value: summary.systemStatus, sub: "" },
    { title: "Buildings", value: summary.totalBuildings, sub: "" },
    { title: "Units Online", value: summary.activeChillers, sub: "" },
    { title: "Active Alerts", value: summary.totalAlerts, sub: "" },
    { title: "Power/Ton", value: summary.avgPowerTon, sub: "Above target" },
    { title: "Total Power (kW)", value: summary.totalPower, sub: "Combined equipment load" },
    { title: "Target (kW/Ton)", value: summary.targetPowerTon, sub: "Configured threshold" },
    { title: "Efficiency (%)", value: summary.efficiency, sub: "Excellent" },
  ];

  return (
    <div className="overview-grid">
      {cards.map((card, index) => (
        <div key={index} className="overview-card">
          <p className="overview-card-label">{card.title}</p>
          <h3 className="overview-card-value">{card.value}</h3>
          <span className="overview-card-sub">{card.sub}</span>
        </div>
      ))}
    </div>
  );
}

export default OverviewCards;