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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="flex flex-row items-center">
              <Image src="/VeritexLogo.png" alt="Company Logo" width={40} height={40} className="mr-[10px]" />
              <div className="font-bold text-[16px]">Veritex Innovation Company</div>
            </div>
            <div className="my-[15px]">
              <p>1234 Innovation Drive</p>
              <p>Suite 567</p>
              <p>City, State, ZIP</p>
            </div>
            <p className="text-[15px] my-[10px]">Email: veritexinnovation@gmail.com</p>
            <p className="text-[15px]">Phone: +91 95011-38548</p>
            <p className="text-[15px]">Phone: +91 73475-36599</p>
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Navigation</div>
            <p className="flex flex-row items-center my-[8px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Home</span>    
            </p>
            <p className="flex flex-row items-center my-[8px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">About</span>    
            </p>
            <p className="flex flex-row items-center my-[8px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Services</span>    
            </p>
            <p className="flex flex-row items-center my-[8px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Contact</span>    
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>    
            </a>
            <a href="https://www.linkedin.com/company/veritex-innovations/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>    
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Veritex Innovation Company 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;
