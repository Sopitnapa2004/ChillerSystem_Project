import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TrendChart({ trendData }) {
  const data = {
    labels: trendData.map((item) => item.time),
    datasets: [
      {
        label: "Power/Ton",
        data: trendData.map((item) => item.powerTon),
        borderColor: "#4fd1c5",
        backgroundColor: "rgba(79, 209, 197, 0.2)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#ffffff" },
      },
      title: {
        display: true,
        text: "Power/Ton Trend Monitoring",
        color: "#ffffff",
      },
    },
    scales: {
      x: {
        ticks: { color: "#ffffff" },
        grid: { color: "rgba(255,255,255,0.08)" },
      },
      y: {
        ticks: { color: "#ffffff" },
        grid: { color: "rgba(255,255,255,0.08)" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="panel-card">
      <Line data={data} options={options} />
    </div>
  );
}

export default TrendChart;