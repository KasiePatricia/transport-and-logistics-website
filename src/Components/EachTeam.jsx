import React from "react";
import SocialMediaIcon from "./Reuseable/SocialMediaIcon";
import { SOCIAL_BLACK } from "../data/data";

const EachTeam = (props) => {
  const { instagram, facebook, twitter, linkedin } = SOCIAL_BLACK;
  const socMedArr = [instagram, facebook, twitter, linkedin];
  return (
    <div className="relative">
      <img className="" src={props.img} alt="Image" />
      <div className="bg-[#1C1F35] font-medium pl-4 text-white h-[100px] flex flex-col gap-1 justify-center">
        <h4 className=" text-xl leading-6 font-Rubik">{props.name}</h4>
        <p className="font-Krub text-base">{props.role}</p>
      </div>
      <div className="bg-orangeLG flex items-center gap-4 absolute bottom-[15%] right-0 p-2">
        {socMedArr.map((item) => {
          return <SocialMediaIcon key={item.id} socMedProps={item} />;
        })}
      </div>
    </div>
  );
};

export default EachTeam;
