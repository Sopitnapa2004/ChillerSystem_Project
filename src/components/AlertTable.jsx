import React from "react";

function AlertTable({ alerts }) {
  return (
    <div className="table-card">
      <h2>Recent Alerts</h2>
      <table>
        <thead>
          <tr>
            <th>Building</th>
            <th>Chiller</th>
            <th>Severity</th>
            <th>Message</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.building}</td>
              <td>{alert.chiller}</td>
              <td>{alert.severity}</td>
              <td>{alert.message}</td>
              <td>{alert.recommendation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;