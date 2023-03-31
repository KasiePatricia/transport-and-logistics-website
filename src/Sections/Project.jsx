import React from "react";
import AcrossWorldPic from "../Components/Project/AcrossWorldPic";

const Project = () => {
  return (
    <div className="px-14 bg-orangeLG">
      <h2 className="text-[#1C1F35] text-center text-4xl font-semibold mb-9">
        Transporting Across The World
      </h2>

      <AcrossWorldPic />
      <div className="flex justify-center items-center mt-16">
        <button className="text-base font-semibold bg-[#091242] px-5 py-3 text-white">
          More Work
        </button>
      </div>
    </div>
  );
};

export default Project;
