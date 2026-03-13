import React from "react";

function Alerts({ alerts }) {
  return (
    <>
      <section className="page-title-section">
        <h1 className="page-title">Alerts</h1>
        <p className="page-subtitle">
          Active warnings and critical alerts for the chiller system
        </p>
      </section>

      <section className="section-block">
        <div className="panel-card">
          <h3 className="panel-title">Alert List</h3>

          <div className="alert-list">
            {alerts.map((alert) => (
              <div key={alert.id} className="alert-item">
                <div className="alert-top">
                  <span className={`severity ${alert.severity.toLowerCase()}`}>
                    {alert.severity}
                  </span>
                  <span>{alert.chiller}</span>
                </div>
                <p>{alert.message}</p>
                <small>{alert.recommendation}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Alerts;