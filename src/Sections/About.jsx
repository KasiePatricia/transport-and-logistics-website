import React from "react";
import { DELIVERY_TRAVEL } from "../data/data";
import { SectionTagLight } from "../Components/Reuseable/SectionTag";
import aboutTopImg from "../assets/images/about/background.jpg";
import aboutShipping from "../assets/images/about/aboutShipping.png";
import aboutPlane from "../assets/images/about/aboutPlane.jpg";
import DeliveryTravel from "../Components/About/DeliveryTravel";

const About = () => {
  const { money, box } = DELIVERY_TRAVEL;
  const DeliveryTravelArr = [money, box];

  return (
    <div>
      <img src={aboutTopImg} alt="Background" />
      <div className="relative">
        <div className="text-[#1C1F35] flex gap-8 bg-[#fff] w-[80%] mx-auto mt-[-100px] p-12 z-30">
          <div className="w-[60%]">
            <SectionTagLight text="Why us" />
            <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-htext mt-[0.875rem]">
              We provide full range global logistics solution
            </h2>
            <p className="text-base font-medium leading-6 text-[#666C89] mt-2">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
              <br /> <br /> Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            {DeliveryTravelArr.map((item) => {
              return (
                <DeliveryTravel
                  key={item.id}
                  images={item.images}
                  description={item.description}
                />
              );
            })}
          </div>
          <div className="w-[50%]">
            <img src={aboutPlane} alt="About shipping" />
          </div>
        </div>
        <div className="absolute top-[280px] right-[400px] ">
          <img src={aboutShipping} alt="About shipping" />
        </div>
      </div>
      <div className="flex text-[#1C1F35] py-16 justify-center gap-12">
        <div className="flex gap-2">
          <p className=" font-Rubik text-5xl font-semibold leading-7">1294</p>
          <div className="h-4 w-4 bg-orangeLG"></div>
          <p className="font-normal text-xl leading-[18px]">
            Delivered Packages
          </p>
        </div>
        <div className="flex gap-2">
          <p className=" font-Rubik text-5xl font-semibold leading-7">3594</p>
          <div className="h-4 w-4 bg-orangeLG"></div>
          <p className="font-normal text-xl leading-[18px]">
            Satisfied Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
