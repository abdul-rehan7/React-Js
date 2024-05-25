import React from "react";

const ContactForm = () => {
  return (
    <div className="flex mt-[7%] md:mt-0 py-[%] md:flex-row md:justify-between justify-center flex-col  md:space-y-0 space-y-2 w-[100vw]   ">
      <div className="left flex justify-center  md:ml-[10%]">
        <div className="btns flex flex-col space-y-2 md:text-center  justify-center md:justify-center  p-[3%]  md:w-[35vw] w-[80vw] ">
          <div className="b-btns md:space-x-4  space-x-2 text-center ">
            <button className="bg-black md:text-sm md:font-semibold text-white rounded-sm px-2 text-[10px] py-2 w-[35vw] md:w-[15vw] ">VIA SUPPORT CHAT</button>
            <button className="bg-black md:text-sm md:font-semibold text-white rounded-sm px-2 text-[10px] py-2 w-[35vw] md:w-[15vw] ">
              VIA CALL
            </button>
          </div>
          <div>
            <button className="bg-white border-[1px] rounded-sm border-black md:w-[31.5vw] w-[74vw] px-5 py-1">
              VIA EMAIL FORM
            </button>
          </div>
        </div>
      </div>
      <div className="right flex justify-center md:mr-[10%]">
        <div className="btns flex flex-col space-y-2 text-center p-[3%]  md:w-[35vw] w-[80vw] ">
   <img src="/imgs/Service.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
