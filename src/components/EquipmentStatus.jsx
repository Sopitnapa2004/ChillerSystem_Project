import React from "react";

function EquipmentStatus({ chillers, alerts }) {
  return (
    <div className="equipment-layout">
      <div className="panel-card">
        <h3 className="panel-title">Chiller Units</h3>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Building</th>
              <th>Unit</th>
              <th>Status</th>
              <th>Power/Ton</th>
            </tr>
          </thead>
          <tbody>
            {chillers.map((item) => (
              <tr key={item.id}>
                <td>{item.building}</td>
                <td>{item.name}</td>
                <td>
                  <span className={`status-badge ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.powerTon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel-card">
        <h3 className="panel-title">Recent Alerts</h3>
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
    </div>
  );
}

export default EquipmentStatus;