import React from "react";
import { assets } from "../assets/assets";

const Section3 = () => {
  return (
    <>
      <div className="h-auto bg-[#fff] flex">
        <div className="w-[50%] p-24 flex flex-col gap-10">
          <h1 className="text-[2.5rem] leading-tight text-[#02033B] font-bold">
            At Certo, mobile security is not an afterthought, it’s what we do.
          </h1>
          <p className="text-[#02033B] font-medium text-xl">
            With years of experience in mobile security and spyware detection,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
          <div className="flex flex-col gap-10 w-[50%]">
            <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] bg-[#FFC247] transition-[0.6s] hover:bg-transparent hover:border-black">
              Get Cetro for iPhone
              <i class="bx bx-right-arrow-alt pt-1 text-xl font-light"></i>
            </button>
            <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] border-[2px] border-black hover:bg-[#FFC247] hover:border-none transition-[0.6s]">
              Get Cetro for iPhone
            </button>
          </div>
        </div>
        <div className="h-[469px] w-[469px] m-24 relative bg-[#FFC247]">
          <img
            src={assets.thirdSection}
            alt=""
            className="absolute top-6 right-6 hover:top-0 hover:right-0 transition-[0.7s]"
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
