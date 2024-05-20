import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";



const main = () => {
  return (
    <div className="w-[100vw]  bg-white">
      <div className="flex justify-between text-gray-500 text-xl p-[1rem]">
        <p className="md:text-3xl">Gemini</p>
        <img
          className="rounded-full w-[2rem] h-[2rem]"
          src={assets.user_icon}
          alt=""
        />
      </div>

      <div className="main-container px-[5%]  md:text-lg ">
        <div className="greet  py-3 mb-3 text-3xl md:text-6xl text-gray-300 font-semibold">
      <span id="element"  className="gradient-text">Hello, Rehan</span>

          <p>How Can I Help You Today?</p>
        </div>
        <div className="cards flex  text-[6px] md:text-xl   md:space-x-4 space-x-2 ">
          <div className="card cursor-pointer hover:bg-gray-300 flex flex-col justify-between   w-[40%] h-auto border-[1px] p-[.3rem] md:p-[1rem] border-none rounded-md bg-gray-200">
            <p className=" md:text-xl text-gray-700  md:h-[25vh]  h-[10vh]">
              Act like mougli from The Jungle Book and answer Questions
            </p>
            <img
              className=" md:w-10 w-4 p-[2px] md:p-2 bg-white rounded-3xl md:h-[20%] mt-1  "
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="card cursor-pointer hover:bg-gray-300 flex flex-col justify-between   w-[40%] h-auto border-[1px] p-[.3rem] md:p-[1rem] border-none rounded-md bg-gray-200">
            <p className=" md:text-xl text-gray-700  md:h-[25vh] h-[10vh]">
              Guess the Name of the Song from Voice Input
            </p>
            <img
              className=" md:w-10 w-4 p-[2px] md:p-2 bg-white rounded-3xl md:h-[20%] mt-1  "
              src={assets.mic_icon}
              alt=""
            />
          </div>
          <div className="card cursor-pointer hover:bg-gray-300 flex flex-col justify-between   w-[40%] h-auto border-[1px] p-[.3rem] md:p-[1rem] border-none rounded-md bg-gray-200">
            <p className=" md:text-xl text-gray-700 md:h-[25vh] h-[10vh]">
              Write me the Basic Structure of an E-Commerce Website
            </p>
            <img
              className=" md:w-10 w-4 p-[2px] md:p-2 bg-white rounded-3xl  md:h-[20%] mt-1  "
              src={assets.code_icon}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ======================================== BOTTOM SECTION ======================================== */}
      <div className="bottom flex flex-row justify-center">
        <div className="main-bottom flex absolute bottom-[4%] rounded-full justify-center text-center md:justify-between md:p-2 md:px-2  bg-gray-300 w-[80vw]  md:w-[70vw] space-x-1">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent  w-[75%] rounded-full md:w-[85%] text-sm md:text-xl focus:outline-none border-none md:m-0  m-1 px-1 py-1 md:px-2 md:py-2 "
          />
          <div className="imgs pr-1 flex md:space-x-2  ">
            <img
              className="h-4 md:h-5 mt-3 cursor-pointer "
              src={assets.gallery_icon}
              alt=""
            />
            <img
              className="h-4 md:h-5 mt-3 cursor-pointer "
              src={assets.mic_icon}
              alt=""
            />
            <img
              className="h-4 md:h-5 mt-3 cursor-pointer "
              src={assets.send_icon}
              alt=""
            />
          </div>
        </div>
        <p className=" bg-transparent mb-1  absolute bottom-0 flex text-center  md:mx-[35%] md:text-xs text-[8px]">
          Copyright &copy; 2024 Google inc. | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default main;
