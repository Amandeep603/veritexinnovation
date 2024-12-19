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
    <div className="w-full bg-transparent text-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Column 1: Blank */}
        <div className="flex flex-col items-center md:items-start"></div>

        {/* Column 2: Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/VeritexLogo.png"
              alt="Company Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <div className="font-bold text-lg">Veritex Innovation Pvt. Ltd.</div>
          </div>
          <p className="text-sm">Email: veritexinnovation@gmail.com</p>
          <p className="text-sm">Phone: +91 95011-38548</p>
          <p className="text-sm">Phone: +91 73475-36599</p>
        </div>

        {/* Column 3: Community Links */}
        <div className="flex flex-col items-center md:items-end">
          <div className="font-bold text-base mb-4">Community</div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2 text-sm hover:text-gray-400 transition-colors"
          >
            <RxInstagramLogo className="mr-2" /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/veritex-innovations/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2 text-sm hover:text-gray-400 transition-colors"
          >
            <RxLinkedinLogo className="mr-2" /> LinkedIn
          </a>
        </div>

        {/* Column 4: Blank */}
        <div className="flex flex-col items-center md:items-start"></div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; Veritex Innovation Company 2024 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
