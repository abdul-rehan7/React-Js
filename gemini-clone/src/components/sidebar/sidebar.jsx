import React, { useState } from "react";
import { assets } from "../../assets/assets";
const sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className=" z-40 fixed  flex flex-col  text-xs md:text-base min-h-[100vh] bg-gray-200  pl-1 md:px-4 py-5 justify-between w-auto ">
      {/* ============================ TOP ========================== */}
      <div  className="w-auto space-y-3 ">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu mb-16  w-5 block mx-4 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />

        <div className="new-chat  md:ml-2  text-xs flex items-center md:mx-0 bg-gray-300  md:w-[60%]  w-[85%]  rounded-full space-x-1 cursor-pointer  md:px-1 py-2 md:py-1 px-1  md mx-1">
          <img
            className="w-auto p-0 md:h-5  h-5  mx-2 md:mx-1 md:my-0 rounded-full"
            src={assets.plus_icon}
            alt=""
          />
          {extended ? <p className="text-xs md:text-base w-[30vw]">Chat Now</p> : null}
        </div>

        <div className="recent flex items-center space-x-2">
          {extended ? <p className="ml-3">Recent</p> : null}
        </div>

        {extended ? (
          <div className=" text-xs flex items-center md:mx-0 hover:bg-gray-300 md:w-[50%]  w-[85%]  rounded-full space-x-1 cursor-pointer  md:px-2 py-2 px-1  mx-1">
            <img className="w-5 h-5" src={assets.message_icon} alt="" />
            <p className="text-xs md:text-base w-[30vw]">What is React?</p>
          </div>
        ) : null}
      </div>
      {/* ============================ BOTTOM ========================== */}
      <div className="bottom flex flex-col  space-y-1">
        <div className="item  flex space-x-2 w-[80%] md:w-[75%] hover:bg-gray-300 rounded-full p-2 cursor-pointer    items-center ">
          <img className="w-5 h-5" src={assets.question_icon} alt="" />
          {extended ? <p className=" md:w-[30vw] ">Help</p> : null}
        </div>

        <div className="item flex space-x-2 w-[80%] md:w-[75%]  hover:bg-gray-300 rounded-full p-2 cursor-pointer  items-center ">
          <img className="w-5 h-5" src={assets.history_icon} alt="" />
          {extended ? <p className=" md:w-[30vw] ">Activity</p> : null}
        </div>

        <div className="item flex space-x-2 w-[80%] md:w-[75%]  hover:bg-gray-300 rounded-full p-2 cursor-pointer   items-center">
          <img className="w-5 h-5" src={assets.setting_icon} alt="" />
          {extended ? <p className=" md:w-[30vw] ">Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
