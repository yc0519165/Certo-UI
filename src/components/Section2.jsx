import React from "react";
import { assets } from "../assets/assets";

const Section2 = () => {
  return (
    <>
      <div className="h-auto bg-[#FFC247]">
        <div className="px-24 py-16">
          <h1 className="text-4xl font-bold">
            Loved by thousands of iPhone <br /> and Android users alike
          </h1>
        </div>
        <marquee behavior="alternate" direction="left">
          <div className="flex gap-5">
            <div className="h-[250px] w-[300px] bg-[#fff] rounded-3xl p-7 flex flex-col items-start gap-3">
              <img src={assets.rating} alt="" />
            </div>
            <div className="h-[250px] w-[300px] bg-[#fff] rounded-3xl p-7 flex flex-col items-start gap-3">
              <img src={assets.rating} alt="" />
            </div>
            <div className="h-[250px] w-[300px] bg-[#fff] rounded-3xl p-7 flex flex-col items-start gap-3">
              <img src={assets.rating} alt="" />
            </div>
            <div className="h-[250px] w-[300px] bg-[#fff] rounded-3xl p-7 flex flex-col items-start gap-3">
              <img src={assets.rating} alt="" />
            </div>
          </div>
        </marquee>
        <div className="px-24 py-16 flex justify-between">
          <img src={assets.cnbc} alt="" />
          <img src={assets.newYorkPost} alt="" />
          <img src={assets.ft} alt="" />
          <img src={assets.readers} alt="" />
          <img src={assets.zdNet} alt="" />
          <img src={assets.wired} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section2;
