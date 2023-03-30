import React from "react";
import contract from "../../../images/projectImg/contract.png";
import liquid from "../../../images/projectImg/liquid.png";
import packaging from "../../../images/projectImg/packaging.png";
import transport from "../../../images/projectImg/transport.png";
import warehouse from "../../../images/projectImg/warehouse.png";
import AcrossWorldBox from "./AcrossWorldBox";

const AcrossWorldPic = () => {
  const acrossImg = [
    {
      id: 1,
      img: liquid,
      title: "Liguid Transportation",
      subTitle: "Premium Tankers",
    },
    {
      id: 2,
      img: packaging,
      title: "Packaging Solutions",
      subTitle: "Warehouse Management",
    },
    {
      id: 3,
      img: contract,
      title: "Contract Logistics",
      subTitle: "Road Transportation",
    },
    {
      id: 4,
      img: warehouse,
      title: "Warehouse & Distribution",
      subTitle: "Large Warehouse",
    },
    {
      id: 5,
      img: transport,
      title: "Specialized Transport",
      subTitle: "Ocean Transports",
    },
  ];

  return (
    <div className="flex gap-3">
      {acrossImg.map((item) => {
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
