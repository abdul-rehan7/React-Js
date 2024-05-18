import React from "react";

const Header = (props) => {
  return (
    <nav className="w-[100vw] h-auto bg-black text-white justify-between flex ">
      <h1 className="text-sm md:text-2xl py-3 px-3 font-bold ">{props.title}</h1>
      <ul className="flex py-3 px-3 md:px-7 space-x-3 md:space-x-10 text-xs md:text-lg">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
