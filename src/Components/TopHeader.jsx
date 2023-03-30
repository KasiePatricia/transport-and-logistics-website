import React from "react";
import Logo from "../images/topheading/Logo.svg";
import Call from "../images/topheading/call.svg";
import envelop from "../images/topheading/envelop.svg";
import time from "../images/topheading/time.svg";

const TopHeader = () => {
  return (
    <div className="bg-[#091242] h-32 flex items-center">
      <div className=" flex w-4/5 mx-auto items-center text-white text-sm">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex ml-auto gap-6">
          <div className="flex items-center gap-2">
            <div>
              <img src={Call} alt="Call" className="w-[40px]" />
            </div>
            <div>
              <p>
                Mon - Sat 9.00 - 18.00 <br />
                Sunday Closed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src={envelop} alt="Call" className="w-[40px]" />
            </div>
            <div>
              <p>
                Email <br />
                contact@logistics.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src={time} alt="Call" className="w-[40px]" />
            </div>
            <div>
              <p>
                Call Us <br />
                (00) 112 365 489
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
