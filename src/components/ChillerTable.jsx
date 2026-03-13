import React from "react";
import { getRiskLevel } from "../utils/riskCalculator";

function ChillerTable({ chillers }) {
  return (
    <div className="table-card">
      <h2>Chiller List</h2>
      <table>
        <thead>
          <tr>
            <th>Building</th>
            <th>Chiller</th>
            <th>Status</th>
            <th>Power/Ton</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {chillers.map((chiller) => (
            <tr key={chiller.id}>
              <td>{chiller.building}</td>
              <td>{chiller.name}</td>
              <td>{chiller.status}</td>
              <td>{chiller.powerTon}</td>
              <td>{getRiskLevel(chiller.powerTon)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChillerTable;