import React from "react";
import ProjectCard from "./Cards/ProjectCard";
import projectimage from "../Assets/bluerocket.jpg";
import youtubeimage from "../Assets/youtube.jpg";
const Projects = () => {
  return (
    <div className="py-5  text-center lg:mb-24 px-2 dark:text-white w-full">
      <h1 className="font-semibold text-2xl md:text-4xl mb-9">Projects</h1>
      <div className="flex flex-wrap items-center text-center justify-center gap-3 m-auto h-1/3  ">
        <ProjectCard
          image={projectimage}
          tittle={"Blog Platform"}
          subtittle={"BlueRocket "}
          link={"https://bluerocket-app.onrender.com/"}
        />
        <ProjectCard
          image={youtubeimage}
          tittle={"YoutubeClone"}
          subtittle={"My YouTube"}
          link={"https://"}
        />
      </div>
    </div>
  );
};

export default Projects;
