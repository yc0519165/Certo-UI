import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="h-[470px] p-20 flex items-center justify-center">
        <div className="w-[840px] flex">
          <div className="w-[50%] bg-[#FDB235] p-14 flex flex-col gap-6 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#02033B]">
              Read Our Story
            </h3>
            <p className="text-base font-normal">
              Find out why thousands trust Certo to secure their mobile world.
            </p>
            <button className="p-2 bg-[#4335DE] hover:bg-[#756af5] transition-[0.5s] mt-4 text-[#fff] font-bold text-lg flex items-center justify-center w-[52%] rounded-full gap-3">
              About us
              <i class="bx bx-right-arrow-alt pt-1 text-xl font-light"></i>
            </button>
          </div>
          <div className="w-[50%] p-14 flex items-start justify-center px-28 flex-col gap-6">
            <h3 className="text-2xl font-bold text-[#02033B]">Help Center</h3>
            <p className="text-base font-normal">
              Help topics, getting started guides and FAQs.
            </p>
            <button className="py-2 px-6 border-[2px] border-black hover:bg-[#2d2d2d] hover:text-[#e5e4e4] transition-[0.5s] mt-4 text-[#000] font-bold text-lg rounded-full gap-3">
              Visit help center
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
