import React from "react";
import OverviewCards from "../components/OverviewCards";
import EquipmentStatus from "../components/EquipmentStatus";
import SystemComponents from "../components/SystemComponents";

function Dashboard({ dashboardSummary, chillers, alerts }) {
  return (
    <>
      <section className="page-title-section">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Real-time monitoring of chiller system performance across all facilities
        </p>
      </section>

      <section className="section-block">
        <h2 className="section-title">System Overview</h2>
        <OverviewCards summary={dashboardSummary} />
      </section>

      <section className="section-block">
        <h2 className="section-title">Main Equipment</h2>
        <SystemComponents />
      </section>

      <section className="section-block">
        <h2 className="section-title">Equipment Status</h2>
        <EquipmentStatus chillers={chillers} alerts={alerts} />
      </section>
    </>
  );
}

export default Dashboard;