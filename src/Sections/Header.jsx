import React from "react";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { SOCIAL_MEDIA } from "../data/data";
import SocialMediaIcon from "../Components/Reuseable/SocialMediaIcon";

const Header = () => {
  const { instagram, facebook, twitter, linkedin } = SOCIAL_MEDIA;
  const socMedArr = [instagram, facebook, twitter, linkedin];

  return (
    <div className=" flex w-full absolute top-[128px] left-0 bg-[#09124240] ">
      <div className="flex gap-6 items-center h-16 w-[1200px] mx-auto">
        <div>
          <ul className="flex text-white">
            <li className="pr-[1.875rem] border-r border-[#FFFFFF20]">
              <Link to="#" className="">
                <p className="underline underline-offset-[1.5375rem] decoration-2 hover:text-gold hover:decoration-gold">
                  Home
                </p>
              </Link>
            </li>
            <li className="px-[1.875rem] border-r border-[#FFFFFF20]">
              <Link to="#" className="">
                <p className="hover:text-gold">About</p>
              </Link>
            </li>
            <li className="px-[1.875rem] border-r border-[#FFFFFF20]">
              <div className="w-fit flex gap-[4px] items-center cursor-pointer hover:text-gold">
                <p className="">Pages</p>
                <RxCaretDown className="text-[20px]" />
              </div>
            </li>
            <li className="px-[1.875rem] border-r border-[#FFFFFF20]">
              <Link to="#" className="">
                <p className="hover:text-gold">Projects</p>
              </Link>
            </li>
            <li className="pl-[1.875rem] border-[#FFFFFF20]">
              <Link to="#" className="">
                <p className="hover:text-gold">Contacts</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-fit flex gap-6 items-center ml-auto">
          {socMedArr.map((item) => {
            return <SocialMediaIcon key={item.id} socMedProps={item} />;
          })}
        </div>
        <div>
          <button
            className="bg-white text-black border-none outline-none px-[3.25rem] py-[0rem] font-krub
                            font-semibold text-base text-[#23212A] leading-[3.875rem]"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
