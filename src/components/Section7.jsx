import React from "react";
import { assets } from "../assets/assets";

const Section7 = () => {
  return (
    <>
      <div className="h-[975px] bg-[#F3F8FF] flex p-24 flex-col items-center gap-20">
        <h1 className="text-5xl font-bold text-[#02033B]">Latest insights</h1>
        <div className="grid grid-cols-3 grid-rows-1 gap-16">
          <div className="bg-[#fff] rounded-3xl">
            <div className="relative">
              <img
                className="w-full rounded-t-3xl relative"
                src={assets.card1}
                alt=""
              />
              <button className="absolute top-5 left-5 bg-[#F3F8FF] hover:bg-[#f3f8ffa1] transition-[0.5s] px-4 py-2 text-base font-bold rounded-full">
                Experties
              </button>
            </div>
            <div className="p-14 flex flex-col gap-10">
              <h4 className="text-2xl font-bold text-[#02033B]">
                Signs Your Ex Is Spying On You
              </h4>
              <p className="text-base text-[#02033B]">
                In an ideal world, after a relationship ends both you and your
                ex will move on. But what if they can’t let go, and start spying
                on your...
              </p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-3xl">
            <div className="relative">
              <img
                className="w-full rounded-t-3xl relative"
                src={assets.card2}
                alt=""
              />
              <button className="absolute top-5 left-5 bg-[#F3F8FF] hover:bg-[#f3f8ffa1] transition-[0.5s] px-4 py-2 text-base font-bold rounded-full">
                Guides
              </button>
            </div>
            <div className="p-14 flex flex-col gap-10">
              <h4 className="text-2xl font-bold text-[#02033B]">
                How to Remove a Hacker from Your Samsung Phone
              </h4>
              <p className="text-base text-[#02033B]">
                Samsung is the second most popular manufacturer of smartphones
                in the world, with a market share of 28.19% compared to Apple’s
                28.43% as...
              </p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-3xl">
            <div className="relative">
              <img
                className="w-full rounded-t-3xl relative"
                src={assets.card3}
                alt=""
              />
              <button className="absolute top-5 left-5 bg-[#F3F8FF] hover:bg-[#f3f8ffa1] transition-[0.5s] px-4 py-2 text-base font-bold rounded-full">
                Expertise
              </button>
            </div>
            <div className="p-14 flex flex-col gap-10">
              <h4 className="text-2xl font-bold text-[#02033B]">
                Is Your Cell Phone Under Surveillance?
              </h4>
              <p className="text-base text-[#02033B]">
                In today’s surveillance state, it can feel like your every move
                is being watched. Although your mind may be conjuring up images
                of CCTV...
              </p>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] bg-[#FFC247] transition-[0.6s] hover:bg-transparent hover:border-black">
          Get Cetro for iPhone
          <i class="bx bx-right-arrow-alt pt-1 text-xl font-light"></i>
        </button>
      </div>
    </>
  );
};

export default Section7;
