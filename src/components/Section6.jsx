import React from "react";

const Section6 = () => {
  return (
    <>
      <div className="bg-[#4B48E5] flex flex-col items-center justify-center p-20 gap-10">
        <h2 className="text-[#fff] font-bold text-4xl">
          Is someone spying on your phone?
        </h2>
        <p className="text-[#fff] font-light text-lg">Find out with Certo</p>
        <div className="flex gap-10 mt-5 items-center w-full justify-center">
          <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] bg-[#FFC247] transition-[0.6s] hover:bg-transparent hover:border-black">
            Get Cetro for iPhone
            <i class="bx bx-right-arrow-alt pt-1 text-xl font-light"></i>
          </button>
          <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#fff] border-[2px] border-white transition-[0.6s]">
            Get Cetro for iPhone
          </button>
        </div>
      </div>
    </>
  );
};

export default Section6;
