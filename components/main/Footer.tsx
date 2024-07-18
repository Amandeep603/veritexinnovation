"use client";
import Image from "next/image";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4 md:my-0">
            <div className="flex flex-row items-center">
              <Image src="/VeritexLogo.png" alt="Company Logo" width={45} height={45} className="mr-2.5" />
              <div className="font-bold text-lg">Veritex Innovation Pvt. Ltd.</div>
            </div>
            <div className="my-4">
              <p></p>
              <p></p>
              <p></p>
            </div>
            <p className="text-sm my-2.5">Email: veritexinnovation@gmail.com</p>
            <p className="text-sm">Phone: +91 95011-38548</p>
            <p className="text-sm">Phone: +91 73475-36599</p>
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4 md:my-0">
            <div className="font-bold text-base">Navigation</div>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-sm ml-1.5">Home</span>    
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-sm ml-1.5">About</span>    
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-sm ml-1.5">Services</span>    
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-sm ml-1.5">Contact</span>    
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4 md:my-0">
            <div className="font-bold text-base">Community</div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-2.5 cursor-pointer">
              <RxInstagramLogo />
              <span className="text-sm ml-1.5">Instagram</span>    
            </a>
            <a href="https://www.linkedin.com/company/veritex-innovations/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-2.5 cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-sm ml-1.5">LinkedIn</span>    
            </a>
          </div>
        </div>

        <div className="mb-5 text-sm text-center">
          &copy; Veritex Innovation Company 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;
