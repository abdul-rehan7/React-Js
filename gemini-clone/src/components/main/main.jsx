import React from 'react'
import { assets } from "../../assets/assets";

const main = () => {
  return (
    <div className="   w-[100vw] bg-white">
      <div className="flex justify-between text-gray-400 text-xl p-[1rem]">
        <p>Gemini</p>
       <img className='rounded-full w-[2rem] h-[2rem]' src={assets.user_icon} alt="" />
      </div>
    </div>
  )
}

export default main;
