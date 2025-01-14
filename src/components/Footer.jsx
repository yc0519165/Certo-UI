import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#02033B] h-[600px] text-[#fff] p-24 flex items-start gap-28">
        <div className="flex flex-col gap-14">
          <h2 className="text-3xl font-bold">Scan.Detect.Remove.</h2>
          <div className="flex gap-5">
            <img src={assets.twiter} alt="" />
            <img src={assets.facebook} alt="" />
            <img src={assets.youtube} alt="" />
          </div>
          <div className="flex gap-10">
            <a href="" className="underline text-base text-[#fff]">
              Privacy Policy
            </a>
            <a href="" className="underline text-base">
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <span>Designed & developed by Bigger Picture</span>
          </div>
        </div>
        <div className=" flex flex-col gap-12 px-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Cetro</h2>
            <hr />
          </div>
          <ul className="text-xl flex flex-col gap-4 text-[#FFC247] font-semibold">
            <li>- iPhone</li>
            <li>- Android</li>
            <li>- Help</li>
            <li>- About</li>
            <li>- Insights</li>
          </ul>
        </div>
        <div className="bg-[#FFC247] p-10 flex flex-col gap-8 text-[#000] rounded-3xl">
          <h3 className="text-3xl font-bold">Sign up to our newsletter</h3>
          <p className="text-base font-normal">
            Receive the latest mobile security news, exclusive discounts &
            offers straight to your inbox!
          </p>
          <div className="w-full bg-[#fff] flex rounded-full">
            <input
              type="text"
              className="bg-transparent w-full outline-none p-2"
              placeholder="Email Address"
            />
            <button className="bg-[#02033B] px-5 text-[#fff] font-bold rounded-r-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
