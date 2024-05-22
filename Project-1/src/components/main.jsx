import React from "react";

const main = () => {
  return (
    <div className="flex flex-col  items-center space-x-7 text-left mx-[6%] md:flex-row  md:px-[4%] px-[4%] py-[4%] mt-[20%] md:mt-[5%] ">
      {/* LEFT SECTION  */}
      <div className="left md:space-y-3 space-y-1 md:w-[50vw]">
        <h1 className="font-bold text-5xl md:text-7xl">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-xs md:text-xl md:font-medium">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btns space-x-7 py-5">
          <button className="bg-red-600 md:px-5 px-2  py-1  rounded-sm text-white">
            Shop Now
          </button>
          <button className="border-[1px] border-black text-black md:px-5 px-2  py-1  rounded-sm ">
            Category
          </button>
        </div>
       <p className="text-left"> also available on</p>
        <div className="available flex space-x-3  py-1 ">
          <img  src="/imgs/flipkart.png" alt="" />
          <img  src="/imgs/amazon.png" alt="" />
        </div>
      </div>

      {/* RIGHT SECTION  */}
      <div className="right w-[80vw] md:w-[50vw]  ">
        <img src="/imgs/shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default main;
