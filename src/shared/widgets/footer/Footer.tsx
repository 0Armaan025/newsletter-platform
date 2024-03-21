import Link from "next/link";
import React from "react";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <FooterLogo />
          </Link>

          <p className="text-2xl py-4">
            Get it's updates delivered directly to your inbox.
          </p>

          <div className="flex items-center w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-transparent w-full md:w-[60%] h-[42px] border px-2 rounded rounded-r-[0] outline-none"
            />
            <button className="w-[90px] cursor-pointer rounded-r h-[45px] bg-blue-500 text-xl outline-none">
              Submit
            </button>
          </div>
          <br />
          <p className="text-xs">
            By subscribing you agree with our Privacy Policy and provide consent{" "}
            to recieve updates from us.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[50%] flex justify-around">
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer ">Create</li>
                <li className="text-xl pb-4 cursor-pointer ">Write</li>
                <li className="text-xl pb-4 cursor-pointer ">Grow</li>
                <li className="text-xl pb-4 cursor-pointer ">Monetize</li>
                <li className="text-xl pb-4 cursor-pointer ">Analyze</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer ">Careers</li>
                <li className="text-xl pb-4 cursor-pointer ">Pricing</li>
                <li className="text-xl pb-4 cursor-pointer ">Shop</li>
                <li className="text-xl pb-4 cursor-pointer ">Compare</li>
                <li className="text-xl pb-4 cursor-pointer ">Love</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg text-center pb-10">
        ©️ 2024 Armaan, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
