import React from "react";
import FormTouch from "./FormTouch";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="py-5  text-center lg:mb-18 px-2 dark:text-white w-full">
      <div className="flex flex-col items-center text-center justify-center m-auto h-1/3  ">
        <h1 className="font-semibold my-3 text-2xl md:text-4xl">
          Get Touch In !
        </h1>
        <FormTouch />
        <ul className="my-2 pt-2 w-full sm:hidden flex text-right space-x-4 border-t-2 border-neutral-200">
          <li className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white ">
            <FaLinkedinIn className="size-5 md:size-8 cursor-pointer" />
          </li>
          <li className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white">
            <FaTwitter className="size-5 md:size-8 " />
          </li>
          <li className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white">
            <a href="https://github.com/PramodMahajan14">
              <FaGithub className="size-5 md:size-8" />
            </a>
          </li>
          <li className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white">
            pramod.14mahajan@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
