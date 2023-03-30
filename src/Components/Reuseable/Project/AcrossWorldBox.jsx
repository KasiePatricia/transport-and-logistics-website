import React from "react";

const AcrossWorldBox = (props) => {
  return (
    <div className="relative">
      <img src={props.img} alt="projects" />
      <div className="absolute left-3 bottom-3">
        <h4 className="text-xl leading-6 font-medium text-white">
          {props.title}
        </h4>
        <p className="text-[#FFB629] font-medium">{props.subTitle}</p>
      </div>
    </div>
  );
};

export default AcrossWorldBox;
