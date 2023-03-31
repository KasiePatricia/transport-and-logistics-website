import React from "react";
import { SectionTagLight } from "../Components/Reuseable/SectionTag";
import Jessica from "../assets/images/team/Jessica.png";
import Kathleen from "../assets/images/team/Kathleen.png";
import Rebecca from "../assets/images/team/Rebecca.png";
import Twitter from "../assets/icons/team/twitter-black.svg";
import Facebook from "../assets/icons/team/facebook-black.svg";
import Linkedin from "../assets/icons/team/linkedin-black.svg";
import Instagram from "../assets/icons/team/instagram-black.svg";
import EachTeam from "../Components/EachTeam";

const Team = () => {
  const teammates = [
    {
      id: 1,
      img: Jessica,
      name: "Jessica Arow",
      role: "Designer",
      social: [Twitter, Facebook, Instagram],
    },
    {
      id: 2,
      img: Kathleen,
      name: "Kathleen Smith",
      role: "Designer",
      social: [Twitter, Facebook, Instagram, Linkedin],
    },
    {
      id: 3,
      img: Rebecca,
      name: "Rebecca Tylor",
      role: "Designer",
      social: [Facebook, Instagram],
    },
  ];
  return (
    <div className="pb-[50px] ">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <SectionTagLight text="The Transportaters" />
        </div>
        <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-htext mt-[0.875rem]">
          Meet Expert Team
        </h2>
      </div>
      <div className="flex gap-8 justify-center items-center pt-[20px]">
        {teammates.map((item) => {
          return (
            <EachTeam
              key={item.id}
              img={item.img}
              name={item.name}
              role={item.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
