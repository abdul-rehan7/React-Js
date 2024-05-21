import React from "react";
import { assets } from "../../assets/assets";

const navbar = () => {
  return (
    <div className="w-[87vw] md:w-[95%] fixed right-0 bg-gray-300 ">
      
      <div className="flex justify-between text-gray-500 text-xl md:p-[1rem] p-[.5rem] ">
        <p className="md:text-3xl ml-[4%] md:ml-[3%]">Gemini</p>
        <img
          className="rounded-full w-[2rem] h-[2rem]"
          src={assets.user_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default navbar;
