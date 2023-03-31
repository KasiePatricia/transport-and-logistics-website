import React from "react";
import { SectionTagLight } from "../Components/Reuseable/SectionTag";
import ServicesBox from "../Components/Services/ServicesBox";

const Services = () => {
  return (
    <div className="flex w-[1200px] mx-auto flex py-24 ">
      <div className="text-[#1C1F35]">
        <SectionTagLight text="What we do" />
        <h3 className=" text-4xl font-semibold leading-10 pt-3 w-[80%]">
          Safe & Reliable Cargo Solutions
        </h3>
      </div>
      <div className="">
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
