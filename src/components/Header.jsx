import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#F3F8FF] px-24 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="src/assets/logo.svg" alt="" />
          <h1 className="text-4xl font-bold text-[#02033B] cursor-pointer">
            Cetro
          </h1>
        </div>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-10 cursor-pointer">
            <li className="text-[#02033B] font-bold text-lg">iPhone</li>
            <li className="text-[#02033B] font-bold text-lg">Android</li>
            <li className="text-[#02033B] font-bold text-lg">Help</li>
            <li className="text-[#02033B] font-bold text-lg flex">Company</li>
          </ul>
          <div className="">
            <button className="py-2 px-4 rounded-full text-[#fff] bg-[#4335DE] font-bold hover:bg-[#6356ee]">
              Sing in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
