import React from "react";
import TrendChart from "../components/TrendChart";

function TrendMonitoring({ trendData }) {
  return (
    <>
      <section className="page-title-section">
        <h1 className="page-title">Trend Monitoring</h1>
        <p className="page-subtitle">
          Monitor historical trends of chiller performance and energy usage
        </p>
      </section>

      <section className="section-block">
        <TrendChart trendData={trendData} />
      </section>

      <section className="section-block">
        <div className="panel-card">
          <h3 className="panel-title">Monitoring Notes</h3>
          <ul className="simple-list">
            <li>Power/Ton trend by building</li>
            <li>Chiller load changes over time</li>
            <li>Condenser and evaporator temperature trend</li>
            <li>Cooling tower performance trend</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default TrendMonitoring;