import React from "react";
import AcrossWorldBox from "./AcrossWorldBox";
import { ACROSSIMG } from "../../data/data";

const AcrossWorldPic = () => {
  const { liquid, packaging, contact, warehouse, transport } = ACROSSIMG;
  const acrossArray = [liquid, packaging, contact, warehouse, transport];

  return (
    <div className="flex gap-3">
      {acrossArray.map((item) => {
        return (
          <AcrossWorldBox
            key={item.id}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
          />
        );
      })}
    </div>
  );
};

export default AcrossWorldPic;
