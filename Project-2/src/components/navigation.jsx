const navigation = () => {
  return (
    <div >
      <nav className="flex justify-between px-4 md:py-2 md:px-7 md:text-xl items-center">
        <div className="logo ">
          <img className="w-[30%] md:w-[10%]" src="/imgs/logo.png" alt="" />
        </div>
        <div className="right space-x-2 md:space-x-10 ">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About</a>
        </div>
      </nav>
    </div>
  );
};

export default navigation;
