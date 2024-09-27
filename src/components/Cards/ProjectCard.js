import React from "react";

import { ReactComponent as RightTopArrowIcon } from "../../Assets/RightTopArraow.svg";
const ProjectCard = ({ image, tittle, subtittle, link }) => {
  return (
    <div className="flex flex-col h-70 max-w-80  w-full border-2 rounded-sm">
      <div className="w-full h-54">
        <img src={image} alt="picture" />
      </div>
      <div className="flex justify-between items-end text-left p-1">
        <div>
          <p>{tittle}</p>
          <p>{subtittle}</p>
        </div>
        <p className="p-2 bg-[#4FC3F7] rounded-full cursor-pointer ">
          <a href={link}>
            <RightTopArrowIcon />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
