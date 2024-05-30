import React, { useState } from "react";
import TotalScore from "./components/TotalScore";
import NumberSelector from "./components/NumberSelector";

const GamePlay = () => {
  const [currentDice, setcurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () =>{
    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber)
  }

  return (
    <div>
      <div className="top md:m-10 m-2 flex justify-between items-center ">
        <TotalScore />
        <NumberSelector />
      </div>

      <div className="bottom flex flex-col items-center w-100vw h-auto ">
        <img
          onClick={roleDice}
          className=" mt-10 md:mt-0 md:w-[20vw] w-[40vw] cursor-pointer"
          src={`/images/dice_${currentDice}.png`}
          alt=""
        />
        <p>Click Dice to Roll</p>
        <button
          className="md:w-[10vw] w-[50vw]  m-1 text-black
     px-2 py-1  md:border-[2px] border-[1px] border-black rounded-md"
        >
          Reset
        </button>
        <button className="md:w-[10vw] w-[50vw] bg-black m-1 text-white px-2 py-2  rounded-md">
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default GamePlay;
