import React from "react";
import ServicesBox from "./Reuseable/Services/ServicesBox";

const Services = () => {
  return (
    <div className="flex w-4/5 mx-auto flex py-24">
      <div className="text-[#1C1F35]">
        <span className=" bg-[#e8e8e880] font-normal text-sm leading-4 border-l-3">
          What we do
        </span>
        <h3 className=" text-4xl font-semibold leading-10">
          Safe & Reliable Cargo Solutions
        </h3>
      </div>
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
