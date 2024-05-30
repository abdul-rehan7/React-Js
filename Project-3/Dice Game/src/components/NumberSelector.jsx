import React, { useState } from "react";

const NumberSelector = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const [selectedNumber,setselectedNumber] = useState()
  console.log(selectedNumber)

  return (
    <div className="numbers flex md:space-x-5 space-x-3 md:text-lg  text-[10px]">
      {array.map((value, i) => (
        <div selected={value==selectedNumber} key={i} onClick={()=>setselectedNumber(value)} className="box md:py-5 py-1 px-2 md:px-8 md:border-2 border-[1px] hover:bg-[#ebebeb] active:bg-[#dadada] cursor-pointer border-black rounded-md ">
          {value}
        </div>
      ))}
    </div>
  );
};

export default NumberSelector;

<style>

</style>
