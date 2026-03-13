import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PowerChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.building),
    datasets: [
      {
        label: "Power/Ton",
        data: data.map((item) => item.powerTon),
        backgroundColor: [
          "#4fd1c5",
          "#63b3ed",
          "#f6ad55",
          "#fc8181",
          "#68d391",
          "#f6e05e",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
      title: {
        display: true,
        text: "Chiller Power/Ton Overview",
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
    <div className="chart-card">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default PowerChart;