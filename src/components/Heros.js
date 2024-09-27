import React from "react";
import ProfileImg from "../Assets/profilepic.jpg";
import { Summary } from "../Helper";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const Heros = () => {
  return (
    <div className="py-10 pt-10 border-b lg:mb-32 px-2 border-neutral-200   dark:text-white relative h-1/2 w-full ">
      {/* / */}
      <div className="absolute bottom-0 left-0 right-0 top-0  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* </div> */}
      <div className="flex flex-col items-center text-center justify-center m-auto h-1/3">
        <div class="flex items-center gap-4 z-20">
          <img
            class=" w-32 h-32 md:w-40 md:h-40 rounded-full"
            src={ProfileImg}
            alt=""
          />
        </div>
        <h1 className="p-2 my-1 md:my-4 font-Poppins text-2xl md:text-4xl lg:text-6xl font-bold">
          Pramod Mahajan
        </h1>
        <p className="text-md  lg:text-xl bg-gradient-to-r from-pink-200 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent">
          MERN Stack | FrontEnd Developer
        </p>
        🚀
        <p className="py-1 my-6 md:w-1/2 space-x-4">{Summary}</p>
        <button className="my-2 px-4 py-1 cursor-pointer border border-black rounded-2xl hover:border-purple-700 dark:border-[#4FC3F7]">
          Contact Me
        </button>
        <ul className="hidden sm:block cursor-pointer ml-auto mr-2 space-y-3 text-[#4c4d4f] hover:text-white fixed  right-1">
          <motion.li
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white"
          >
            <FaLinkedinIn className="size-5 md:size-8 cursor-pointer" />
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -110 }}
            transition={{ duration: 1 }}
            className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white"
          >
            <FaTwitter className="size-5 md:size-8 " />
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -120 }}
            transition={{ duration: 1.5 }}
            className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white"
          >
            <a href="https://github.com/PramodMahajan14">
              <FaGithub className="size-5 md:size-8" />
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Heros;
