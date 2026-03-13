import React from "react";

function SystemComponents() {
  const equipment = [
    {
      name: "Chiller",
      image: "/Chiller.png",
      desc: "Main cooling equipment for chilled water production",
    },
    {
      name: "Chilled Pump",
      image: "/chilled_pump.png",
      desc: "Circulates chilled water to HVAC and process systems",
    },
    {
      name: "Condenser Pump",
      image: "/condenser_pump.png",
      desc: "Transfers condenser water between chiller and cooling tower",
    },
    {
      name: "Cooling Tower",
      image: "/cooling_tower.png",
      desc: "Rejects heat from condenser water to the atmosphere",
    },
  ];

  return (
    <div className="components-grid">
      {equipment.map((item, index) => (
        <div key={index} className="component-card">
          <img src={item.image} alt={item.name} className="component-image" />
          <h3 className="component-title">{item.name}</h3>
          <p className="component-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default SystemComponents;