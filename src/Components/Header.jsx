import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className=" flex w-full absolute top-[128px] left-0 bg-[#09124240] ">
      <div className="flex gap-6 items-center h-16 w-4/5 mx-auto">
        <div>
          <ul className="flex gap-12 text-white">
            <li className="border-b-2 border-white">
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Pages</Link>
            </li>
            <li>
              <Link to="#">Project</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 ml-auto text-white">
          <Link to="#">
            <BsInstagram />
          </Link>
          <Link to="#">
            <BsFacebook />
          </Link>
          <Link to="#">
            <BsTwitter />
          </Link>
          <Link to="#">
            <BsLinkedin />
          </Link>
        </div>
        <div>
          <button className="bg-white text-black p-[20px]">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
