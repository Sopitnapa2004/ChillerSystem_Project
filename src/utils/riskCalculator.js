export function getRiskLevel(powerTon) {
  if (powerTon <= 0.75) return "Normal";
  if (powerTon <= 0.85) return "Warning";
  return "Critical";
}