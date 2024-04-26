import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ imgurl,title,date }) => {
  return (
    <div className="cursor-pointer rounded-[8px] overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105">
      <Image
        width={350}
        height={218}
        className=" w-[350px] h-[218px] object-cover"
        src={imgurl}
        alt="title"
      />
      <div className="bg-[#2A2A2A] p-5 flex items-center justify-between">
        <span className="space-y-1">
          <p className="text-white text-base font-extrabold text-wrap">{title}</p>
          <p className="text-[#B1B2B380] text-xs">{date}</p>
        </span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default ProjectCard;
