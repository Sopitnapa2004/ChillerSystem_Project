import React from "react";

function SummaryCard({ title, value }) {
  return (
    <div className="summary-card">
      <p className="summary-title">{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default SummaryCard;