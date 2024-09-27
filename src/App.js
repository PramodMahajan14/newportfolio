import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import About from "./components/About";
import Service from "./components/Service";
import Projects from "./components/Projects";
import { RiCloseLargeFill } from "react-icons/ri";
import Footer from "./components/Footer";

function App() {
  const [drawer, setdrawer] = useState(true);
  const [theam, setTheam] = useState("light");
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (theam === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const changeTheam = (changeTheam) => {
    setTheam(changeTheam);
  };
  const toggleDrawer = () => {
    console.log("cxgfd");
    setdrawer((prev) => !prev);
  };

  return (
    <div className="overflow-x-hidden antialiased selection:bg-orange-300 selection:text-orange-600 h-full relative">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto md:px-8">
        <Navbar
          handleChangeTheam={changeTheam}
          CurrentTheam={theam}
          openDrawer={toggleDrawer}
        />
        <Heros />
        <About />
        <Service />
        <Projects />
        <Footer />
      </div>
      {/* Drawer */}
      <div
        className={`  ${
          drawer
            ? "hidden h-0 w-0"
            : "flex flex-col py-1 px-3   absolute top-0 w-screen bg-gray-200 h-[19rem] z-40 dark:bg-gray-900 dark:text-white"
        }`}
      >
        <div className="flex py-2 items-center justify-between ">
          <p>🚀</p>
          <p
            className="text-xl p-2 hover:bg-slate-300 rounded-full"
            onClick={toggleDrawer}
          >
            <RiCloseLargeFill />
          </p>
        </div>
        <ul className="mx-2 my-1 flex flex-col space-y-5">
          <li className="px-2 py-1 hover:bg-slate-400 rounded-md font-semibold">
            Home
          </li>
          <li className="px-2 py-1 hover:bg-slate-400 rounded-md font-semibold">
            About
          </li>
          <li className="px-2 py-1 hover:bg-slate-400 rounded-md font-semibold">
            Services
          </li>
          <li className="px-2 py-1 hover:bg-slate-400 rounded-md font-semibold">
            Projects
          </li>
          <li className="px-2 py-1 hover:bg-slate-400 rounded-md font-semibold">
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
