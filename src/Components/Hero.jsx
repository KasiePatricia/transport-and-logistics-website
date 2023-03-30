import React from "react";
import heroImg from "../images/heading/hero.png";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="bg-heroBG bg-no-repeat flex  justify-center flex-col bg-cover bg-center h-screen"
    >
      <div className="w-[50%] pl-24 flex flex-col gap-5 mt-24">
        <span className="bg-[#041C37] border-l-2 text-white pl-2 py-1 pr-1 self-start">
          Logistics & Supply Chain Solutions
        </span>
        <h1 className="text-6xl font-bold text-white">
          Your Gateway to any Destination in the World
        </h1>
        <p className="text-white font-base font-medium">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.
        </p>
        <button className="font-base font-semibold text-[#23212A] bg-orangeLG self-start py-4 px-6">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
