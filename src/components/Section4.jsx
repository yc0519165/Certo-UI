import React from "react";
import { assets } from "../assets/assets";

const Section4 = () => {
  return (
    <>
      <div className="p-24 h-auto bg-[#E7EFFA] flex flex-col items-center gap-24">
        <h1 className="text-4xl text-center font-bold">
          Get your freedom back, stop mobile <br /> spyware today
        </h1>
        <div className="w-[840px] bg-[#fff] rounded-3xl shadow-xl">
          <div className="grid grid-cols-3 grid-rows-2">
            <div className="p-10 flex flex-col items-center gap-5 text-center">
              <img src={assets.spyware} alt="" className="w-[70px]" />
              <h3 className="text-lg font-bold">Spyware detection</h3>
              <p className="text-base">
                Our advanced spyware detection engine can identify if a device
                contains spyware or bugging software.
              </p>
            </div>
            <div className="p-10 flex flex-col items-center gap-5 text-center">
              <img src={assets.keylogger} alt="" className="w-[70px]" />
              <h3 className="text-lg font-bold">Keylogger detection</h3>
              <p className="text-base">
                Find malicious keyboards installed on your device that could
                allow someone to record things you type (e.g. passwords).
              </p>
            </div>
            <div className="p-10 flex flex-col items-center gap-5 text-center">
              <img src={assets.trakking} alt="" className="w-[70px]" />
              <h3 className="text-lg font-bold">Find tracking apps</h3>
              <p className="text-base">
                Check which apps can access your location, microphone or camera.
                Get alerted if a known tracking app is installed.
              </p>
            </div>
            <div className="p-10 flex flex-col items-center gap-5 text-center">
              <img src={assets.check} alt="" className="w-[70px]" />
              <h3 className="text-lg font-bold">OS integrity check</h3>
              <p className="text-base">
                Analyze your operating system for signs of tampering that could
                compromise security, such as Jailbreaking.
              </p>
            </div>
            <div className="p-10 flex flex-col items-center gap-5 text-center">
              <img src={assets.threat} alt="" className="w-[70px]" />
              <h3 className="text-lg font-bold">Threat removal</h3>
              <p className="text-base">
                Our intelligent scan will either safely remove threats for you
                or provide easy-to-follow instructions.
              </p>
            </div>
            <div className="p-10 flex flex-col items-center gap-5 text-center">
              <img src={assets.settings} alt="" className="w-[70px]" />
              <h3 className="text-lg font-bold">Easy to use</h3>
              <p className="text-base">
                We create easy to use apps that can check your device for
                vulnerabilities in a matter of minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-10 p-10 items-center w-full justify-center">
            <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] bg-[#FFC247] transition-[0.6s] hover:bg-transparent hover:border-black">
              Get Cetro for iPhone
              <i class="bx bx-right-arrow-alt pt-1 text-xl font-light"></i>
            </button>
            <button className="px-4 py-2 text-lg font-semibold rounded-full flex items-center gap-5 text-[#02033B] border-[2px] border-black hover:bg-[#FFC247] hover:border-none transition-[0.6s]">
              Get Cetro for iPhone
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
