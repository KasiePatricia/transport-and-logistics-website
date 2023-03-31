import React from "react";
import heroImg from "../assets/images/heading/hero.png";
import { SectionTagDark } from "../Components/Reuseable/SectionTag";
import { ButtonGold } from "../Components/Reuseable/ButtonGroup";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className=" bg-no-repeat object-cover flex  justify-center flex-col bg-cover bg-center h-screen"
    >
      <div className=" w-[1200px] mx-auto">
        <div className=" w-[50%] flex flex-col gap-5 mt-24">
          <SectionTagDark text="Logistics & Supply Chain Solutions" />

          <h1 className="font-rubik text-6xl font-bold text-white">
            Your Gateway to any Destination in the World
          </h1>
          <p className="font-rubik text-white font-base font-medium">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
          <ButtonGold btnProps={{ text: "Explore More" }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
