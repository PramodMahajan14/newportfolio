import React, { useState, useRef } from "react";
import { ReactComponent as SunIcon } from "../Assets/Sun.svg";
import { ReactComponent as MoonIcon } from "../Assets/Moon.svg";
import { ReactComponent as BurgerIcon } from "../Assets/Burger.svg";

const Navbar = ({ handleChangeTheam, CurrentTheam, openDrawer }) => {
  const [activeButton, setActiveButton] = useState(1);

  const changeTheam = () => {
    if (CurrentTheam === "dark") {
      handleChangeTheam("light");
    } else {
      handleChangeTheam("dark");
    }
  };
  return (
    <div className=" py-6 px-3 flex  items-center justify-between md:justify-around dark:text-white">
      <h1 className="font-semibold md:text-xl ">ₚᵣₐₘₒd</h1>
      <ul className="hidden sm:flex md:flex md:justify-center px-1 items-center list-none cursor-pointer ">
        <li
          className={`p-2 m-2  hover:bg-slate-100 rounded-md dark:hover:text-black ${
            activeButton === 1 ? "text-[#4FC3F7]" : ""
          }`}
          onClick={() => {
            setActiveButton(1);
          }}
        >
          Home
        </li>
        <li
          className={`p-2 m-2  hover:bg-slate-100 rounded-md dark:hover:text-black ${
            activeButton === 2 ? "text-[#4FC3F7]" : ""
          }`}
          onClick={() => setActiveButton(2)}
        >
          About
        </li>
        <li
          className={`p-2 m-2  hover:bg-slate-100 rounded-md dark:hover:text-black ${
            activeButton === 3 ? "text-[#4FC3F7]" : ""
          }`}
          onClick={() => setActiveButton(3)}
        >
          Projects
        </li>
        <li
          className={`p-2 m-2  hover:bg-slate-100 rounded-md dark:hover:text-black ${
            activeButton === 4 ? "text-[#4FC3F7]" : ""
          }`}
          onClick={() => setActiveButton(4)}
        >
          Services
        </li>
        <li
          className={`p-2 m-2  hover:bg-slate-100 rounded-md dark:hover:text-black ${
            activeButton === 5 ? "text-[#4FC3F7]" : ""
          }`}
          onClick={() => setActiveButton(5)}
        >
          Resume
        </li>
      </ul>
      <button className="hidden md:block bg-none px-3 py-1  border border-black rounded-md dark:border-[#4FC3F7] ">
        contact Me
      </button>
      <span className="flex items-center  cursor-pointer">
        <p
          onClick={changeTheam}
          className="p-1 hover:bg-neutral-400 rounded-full"
        >
          {" "}
          {CurrentTheam === "dark" ? (
            <SunIcon className="size-6" />
          ) : (
            <MoonIcon className="size-6" />
          )}
        </p>
        <p
          className="p-1 ml-4 sm:hidden md:hidden hover:bg-neutral-400 rounded-full"
          onClick={openDrawer}
        >
          <BurgerIcon />
        </p>
      </span>
    </div>
  );
};

export default Navbar;
