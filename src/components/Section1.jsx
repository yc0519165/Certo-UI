import React from "react";
import { assets } from "../assets/assets";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <>
      <div className="h-[87vh] flex">
        <div className="bg-[#F3F8FF] h-[87vh] w-[59%] flex flex-col gap-16 rounded-tr-[63%] pt-24 pl-24 pr-14">
          <h1 className="text-6xl font-bold">
            Your mobile privacy is our mission
          </h1>
          <p className="text-xl font-normal">
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats from your iPhone and Android
            devices.
          </p>
          <div className="flex gap-10">
            <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] bg-[#FFC247] transition-[0.6s] hover:bg-transparent hover:border-black">
              Get Cetro for iPhone
              <i class="bx bx-right-arrow-alt pt-1 text-xl font-light"></i>
            </button>
            <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] border-[2px] border-black hover:bg-[#FFC247] hover:border-none transition-[0.6s]">
              Get Cetro for iPhone
            </button>
          </div>
        </div>
        <div className="bg-[#4335DE] h-[75vh] w-[49%] mt-20 relative">
          <img
            src={assets.homeAndroid}
            alt=""
            className="z-10 absolute top-14 left-14 w-52"
          />
          <img
            className="w-[95.5%] object-contain absolute top-7 left-7 z-0"
            src={assets.homeImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
