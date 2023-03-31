import React from "react";
import Logo from "../Components/Reuseable/Logo";
import { CONTACT_DATA } from "../data/data";
import OneAddress from "../Components/Reuseable/OneAddress";

const TopHeader = () => {
  const { mail, time, phone } = CONTACT_DATA;
  const contactsArr = [time, mail, phone];
  return (
    <>
      <section className=" mx-auto flex items-center justify-between bg-[#091242] h-32">
        <div className=" flex w-[1200px] mx-auto items-center text-white text-sm">
          <Logo />
          <div className="w-fit flex gap-10 ml-auto">
            {contactsArr.map((item) => {
              return <OneAddress key={item.id} addressProps={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
