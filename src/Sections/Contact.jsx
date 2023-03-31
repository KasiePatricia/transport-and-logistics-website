import React from "react";
import { SectionTagDark } from "../Components/Reuseable/SectionTag";
import OneAddress from "../Components/Reuseable/OneAddress";
import { CONTACT_DATA } from "../data/data";
import { InputDark } from "../Components/Reuseable/Input";
import { ButtonGoldNormal } from "../Components/Reuseable/ButtonGroup";

const Contact = () => {
  const { mail, phone, time } = CONTACT_DATA;
  const contactsArr = [mail, phone, time];

  const changeHandler = (e) => {
    const value = e.target.value;
  };

  const clickHandler = (e) => {
    e.preventDefault();
  };

  const subscribeInput = {
    type: "email",
    placeholder: "Email Here*",
    // value,
    changeHandler,
    // hasError,
  };

  const subscribeBtn = {
    // text: isSubmitting ? "Sending..." : "Send now",
    // disabled,
    clickHandler,
  };
  return (
    <div className="bg-[#091242]">
      <div className="w-[1200px] py-12 mx-auto">
        <div className="flex">
          <div className="w-[40%]">
            <SectionTagDark text="Contact" />
            <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-white mt-[0.875rem]">
              Get in touch with us
            </h2>
            <p className="font-krub font-normal text-base text-white mb-8">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
            <div className="flex flex-col gap-[1.875rem]">
              {contactsArr.map((item) => {
                return <OneAddress key={item.id} addressProps={item} />;
              })}
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <InputDark inputProps={subscribeInput} />
              <InputDark inputProps={subscribeInput} />
            </div>
            <ButtonGoldNormal btnProps={subscribeBtn} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
