import React from "react";
import star from "../../../images/testimonialImg/Star.svg";
import Smith from "../../../images/testimonialImg/Smith.png";
import Martin from "../../../images/testimonialImg/Martin.png";
import Quote from "../../../images/testimonialImg/quote.svg";

const User = () => {
  return (
    <div className="flex">
      <div className="bg-[#F4F4F4] p-14 w-[600px]">
        <div className="flex items-center gap-2">
          <div className="">
            <img src={Smith} alt="Smith's Testimony" className="rounded-full" />
          </div>
          <div className="text-[#091242] font-medium">
            <h4 className=" text-xl leading-6">Kathleen Smith</h4>
            <p className="text-base">Fuel Company</p>
          </div>
          <div className="ml-auto">
            <img src={Quote} alt="Quote" />
          </div>
        </div>
        <div>
          <p className="italic text-[#666C89] mt-6">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
        </div>
        <div className="flex gap-1 mt-8">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>
      <div className="bg-[#091242] p-14 w-[600px] text-white">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={Martin}
              alt="Martin's Testimony"
              className="rounded-full"
            />
          </div>
          <div className=" font-medium">
            <h4 className=" text-xl leading-6">John Martin</h4>
            <p className="text-base">Restoration Company</p>
          </div>
          <div className="ml-auto">
            <img src={Quote} alt="Quote" />
          </div>
        </div>
        <div>
          <p className="italic mt-6">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
        </div>
        <div className="flex gap-1 mt-8">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default User;
