import React from "react";
import { aboutme } from "../Helper";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiJava, DiJavascript } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const About = () => {
  return (
    <div className="py-5 pt-8  lg:mb-20 px-2 dark:text-white">
      <div className="flex flex-col items-center text-center justify-center m-auto h-1/3">
        <h1 className="font-semibold text-2xl md:text-4xl">About Me</h1>
        <p className="bg-gradient-to-r from-cyan-400 via-slate-500 to-neutral-500 bg-clip-text  tracking-tight text-transparent">
          GET TO KNOW ME
        </p>
        <p className="my-2  sm:w-3/5 md:1/2">{aboutme[0].about}</p>
        <p className="my-2 sm:w-3/5 md:1/2">{aboutme[1].about}</p>
        <button className="px-4 py-2 my-10 border border-neutral-400 rounded-2xl dark:border-[#4FC3F7]">
          <a href="../Assets/Pramod Mahajan-resume.pdf"> Download Resume</a>
        </button>
        <h2 className="text-xl md:text-2xl">My Skills Set</h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-9 -scroll-my-10 px-5"
        >
          <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <RiReactjsLine className="text-2xl md:text-3xl text-cyan-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <SiMongodb className="text-2xl md:text-3xl text-green-500" />
          </motion.div>

          <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <FaNode className="text-2xl md:text-3xl text-green-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <DiJavascript className="text-2xl md:text-3xl text-yellow-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(2.2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <DiJava className="text-2xl md:text-3xl text-cyan-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <SiExpress className="text-2xl md:text-3xl text-gray-400" />
          </motion.div>
          <motion.div
            variants={iconVarients(1.7)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <GrMysql className="text-2xl md:text-3xl text-blue-400" />
          </motion.div>
          <motion.div
            variants={iconVarients(1.7)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <FaDocker className="text-2xl md:text-3xl text-blue-400" />
          </motion.div>
          <motion.div
            variants={iconVarients(1.7)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <SiTailwindcss className="text-2xl md:text-3xl text-blue-800" />
          </motion.div>
          <motion.div
            variants={iconVarients(1.7)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-2 md:p-3 lg:p-4"
          >
            <TbBrandRedux className="text-2xl md:text-3xl text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
