
const navbar = () => {
  return (
    
      <nav className="flex fixed bg-white w-[100vw] top-0 text-[9px] md:text-base justify-between items-center md:px-16 px-3 py-2">
        {/* LOGO  */}
        <div className="logo w-[15%]">
          <img src="/imgs/brand_logo.png" alt="" />
        </div>

        {/* NAV  */}

        <ul className=" md:space-x-7 space-x-2">
          <a href="">MENU</a>
          <a href="">LOCAION</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT</a>
        </ul>

        <button className="bg-red-600 md:px-5 px-2  py-1  rounded-sm text-white">Login</button>
      </nav>
   
  )
}

export default navbar;
