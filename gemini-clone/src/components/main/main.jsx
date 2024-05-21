import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import Typed from "../typed";
import Navbar from "../main/navbar";

const main = () => {
  return (
    <div className="main-container  px-[2%]  md:text-lg ">
      <Navbar />
      <div className="main ml-[19%]  mt-[20%] md:ml-[10%] md:mt-[7%] ">
        <div className="greet py-3 mb-3 text-4xl md:text-6xl text-gray-300 font-medium">
          <Typed />

          <p className="text-4xl md:text-6xl ">How Can I Help You Today?</p>
        </div>
        <div className="cards flex  text-[6px] md:text-xl   md:space-x-4 space-x-2 ">
          <div className="card cursor-pointer hover:bg-gray-300 flex flex-col justify-between   w-[40%] h-auto border-[1px] p-[.3rem] md:p-[1rem] border-none rounded-md bg-gray-200">
            <p className=" md:text-xl text-gray-700  md:h-[25vh]  h-[7vh]">
              Act like mougli from The Jungle Book and answer Questions
            </p>
            <img
              className=" md:w-10 w-4 p-[2px] md:p-2 bg-white rounded-3xl md:h-[20%] mt-1  "
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="card cursor-pointer hover:bg-gray-300 flex flex-col justify-between   w-[40%] h-auto border-[1px] p-[.3rem] md:p-[1rem] border-none rounded-md bg-gray-200">
            <p className=" md:text-xl text-gray-700  md:h-[25vh] h-[7vh]">
              Guess the Name of the Song from Voice Input
            </p>
            <img
              className=" md:w-10 w-4 p-[2px] md:p-2 bg-white rounded-3xl md:h-[20%] mt-1  "
              src={assets.mic_icon}
              alt=""
            />
          </div>
          <div className="card cursor-pointer hover:bg-gray-300 flex flex-col justify-between   w-[40%] h-auto border-[1px] p-[.3rem] md:p-[1rem] border-none rounded-md bg-gray-200">
            <p className=" md:text-xl text-gray-700 md:h-[25vh] h-[7vh]">
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
     
    </div>
  );
};

export default main;
