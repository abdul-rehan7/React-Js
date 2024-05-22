import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex md:flex-row  md:justify-between md:w-[100vw] bg-blue-400 justify-center items-center
     flex-col px-[10%] py-[3%] text-center "
    >
      <div className="left md:px-5 md:py-5 bg-red-400">
        <div className="btns space-y-2">
          <div className="top bg-green-300 md:w-[30vw] w-[50vw] justify-center space-x-[4%] flex">
            <button className="bg-black  text-white text-[8px] md:text-base font-semibold px-2 py-1 rounded-sm">
              VIA CHAT SUPPORT
            </button>
            <button className="bg-black  text-white text-[8px] md:text-base font-semibold px-2 py-1 rounded-sm">
              VIA CALL
            </button>
          </div>
          <div className="bottom  w-[50vw]">
            <button className="text-black font-semibold text-[8px] md:text-base border-[1px] border-black px-3 py-1 w-[88%] md:w-[30vw] ">
              VIA EMAIL FORM
            </button>
          </div>
        </div>
      </div>
      <div className="right"> 
      I AM LEFT SECTION
      </div>
    </div>
  );
};

export default ContactForm;
