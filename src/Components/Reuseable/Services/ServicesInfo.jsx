import React from "react";

const ServicesInfo = (props) => {
  return (
    <div className="flex gap-3">
      <div>
        <img src={props.img} alt="icon" />
      </div>
      <div style={{}} className="border-l-2 border-black pl-6">
        <h5 className="text-2xl font-normal leading-7 text-[#1C1F35]">
          {props.title}
        </h5>
        <p className="text-base font-medium leading-6 text-[#666C89] mt-2">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesInfo;
