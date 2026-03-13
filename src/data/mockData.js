export const dashboardSummary = {
  systemStatus: "Critical",
  totalBuildings: 2,
  activeChillers: 4,
  totalAlerts: 3,
  avgPowerTon: 0.78,
  totalPower: 337,
  targetPowerTon: 0.75,
  efficiency: "95.7%",
};

export const chillers = [
  { id: 1, building: "B6", name: "HVAC_CH-1", status: "Running", powerTon: 0.72 },
  { id: 2, building: "B6", name: "HVAC_CH-2", status: "Warning", powerTon: 0.81 },
  { id: 3, building: "B6", name: "PROCESS_CH-1", status: "Critical", powerTon: 0.91 },
  { id: 4, building: "B2", name: "HVAC_CH-1", status: "Running", powerTon: 0.68 },
];

export const alerts = [
  {
    id: 1,
    chiller: "HVAC_CH-2",
    severity: "Warning",
    message: "Power/Ton exceeded target threshold",
    recommendation: "Inspect condenser water flow",
  },
  {
    id: 2,
    chiller: "PROCESS_CH-1",
    severity: "Critical",
    message: "High condenser entering water temperature detected",
    recommendation: "Check cooling tower performance",
  },
  {
    id: 3,
    chiller: "HVAC_CH-1",
    severity: "Warning",
    message: "Evaporator setpoint out of recommended range",
    recommendation: "Inspect evaporator control settings",
  },
];

export const trendData = [
  { time: "08:00", powerTon: 0.72 },
  { time: "09:00", powerTon: 0.74 },
  { time: "10:00", powerTon: 0.76 },
  { time: "11:00", powerTon: 0.79 },
  { time: "12:00", powerTon: 0.81 },
  { time: "13:00", powerTon: 0.78 },
  { time: "14:00", powerTon: 0.77 },
  { time: "15:00", powerTon: 0.80 },
];