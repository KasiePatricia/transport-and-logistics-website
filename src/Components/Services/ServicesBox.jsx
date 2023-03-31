import React from "react";
import ServicesInfo from "./ServicesInfo";
import { SERVICES } from "../../data/data";

const SerivcesBox = () => {
  const { Sea, Warehouse, AirFlight, Shipping } = SERVICES;
  const servicesArray = [Sea, Warehouse, AirFlight, Shipping];

  return (
    <div className="grid grid-cols-2 gap-16">
      {servicesArray.map((service) => {
        return (
          <ServicesInfo
            key={service.id}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        );
      })}
    </div>
  );
};

export default SerivcesBox;
