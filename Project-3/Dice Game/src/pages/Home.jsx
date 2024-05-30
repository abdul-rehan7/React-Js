import React from "react";

const Home = ({toggle}) => {
  return (
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="cont w-[100vw] md:p-10 items-center flex flex-col md:flex-row">
        <div className="left w-[90vw] text-center">
          <img src="/images/dices.png" alt="" />
        </div>
        <div className="Right md:text-7xl text-4xl font-semibold  justify-center md:text-right md:p-10 w-[90vw] text-center  ">
        <h1>  DICE GAME</h1>
        <button onClick={toggle} className="bg-black transition rounded-md cursor-pointer hover:bg-transparent hover:border-[1px] border-black hover:text-black active:bg-[#cecece] text-white font-semibold py-2 px-6 md:px-14 text-lg m-2">PLAY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
