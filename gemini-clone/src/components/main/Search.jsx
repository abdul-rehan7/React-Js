import React from 'react'
import { assets } from "../../assets/assets";

const Search = () => {
  return (
    <div className="bottom bg-black flex flex-row justify-center">
    <div className="main-bottom  fixed flex  left-[18%] md:left-[20%] bottom-[4%] rounded-full justify-center text-center md:justify-between md:p-2 md:px-2  bg-gray-300 w-[80vw]  md:w-[70%] space-x-1">
      <input
        type="search"
        placeholder="Enter a prompt Here"
        className="bg-transparent  w-[75%] rounded-full md:w-[85%] text-xs md:text-xl focus:outline-none border-none md:m-1  m-2 px-1 py-1 md:px-2 md:py-2 "
      />
      <div className="imgs md:pr-2 md:mt-1 space-x-1 pr-3 flex md:space-x-2  ">
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
  
  </div>
  )
}

export default Search;
