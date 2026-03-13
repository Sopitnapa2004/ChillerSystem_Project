import React from "react";

function Analytics({ chillers }) {
  const criticalCount = chillers.filter((item) => item.powerTon > 0.85).length;
  const warningCount = chillers.filter(
    (item) => item.powerTon > 0.75 && item.powerTon <= 0.85
  ).length;
  const normalCount = chillers.filter((item) => item.powerTon <= 0.75).length;

  return (
    <>
      <section className="page-title-section">
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">
          Analyze system performance, efficiency, and abnormal behavior
        </p>
      </section>

      <section className="section-block">
        <div className="overview-grid analytics-grid-small">
          <div className="overview-card">
            <p className="overview-card-label">Normal Units</p>
            <h3 className="overview-card-value">{normalCount}</h3>
            <span className="overview-card-sub analytics-normal">
              Within target threshold
            </span>
          </div>

          <div className="overview-card">
            <p className="overview-card-label">Warning Units</p>
            <h3 className="overview-card-value">{warningCount}</h3>
            <span className="overview-card-sub">Needs inspection</span>
          </div>

          <div className="overview-card">
            <p className="overview-card-label">Critical Units</p>
            <h3 className="overview-card-value">{criticalCount}</h3>
            <span className="overview-card-sub analytics-critical">
              Immediate action required
            </span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="panel-card">
          <h3 className="panel-title">Analysis Summary</h3>
          <p className="placeholder-text">
            This page will later include rule-based diagnostics and AI-based
            recommendations to identify which equipment may be causing high
            Power/Ton.
          </p>
        </div>
      </section>
    </>
  );
}

export default Analytics;