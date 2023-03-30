import React from "react";
import AirFlight from "../../../images/services/airFlight.svg";
import Sea from "../../../images/services/sea.svg";
import Shipping from "../../../images/services/shipping.svg";
import Warehouse from "../../../images/services/warehouse.svg";
import ServicesInfo from "./ServicesInfo";

const SerivcesBox = () => {
  const services = [
    {
      id: 1,
      img: Sea,
      title: "Sea Transport Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 2,
      img: Warehouse,
      title: "Warehousing Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 3,
      img: AirFlight,
      title: "Air Fright Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 4,
      img: Shipping,
      title: "Local Shipping Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-8">
      {services.map((service) => {
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
