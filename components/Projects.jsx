"use client";
import React, { useState } from "react";
import ProjectCard from "./Cards/ProjectCard";
import JSONData from "../util/projects.json";
import { Button } from "./ui/button";

const Projects = () => {
  const data = JSONData;
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? data : data.slice(0, 6);

  const handleViewMore = () => {
    setShowAll((bol) => !bol);
  };

  return (
    <div
      className="container flex flex-col items-center justify-center gap-14"
      id="projects"
    >
      <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF8660] to-[#D5491D] text-4xl text-center font-extrabold">
        Projects
      </h2>
      <div className="flex flex-wrap justify-around gap-14 ">
        {visibleCards.map((item, index) => (
          <ProjectCard
            key={index}
            imgurl={item.imgurl}
            title={item.title}
            date={item.date}
            desc={item.desc}
            button1={item.button1}
            button1link={item.button1link}
            button2={item.button2}
            button2link={item.button2link}
          />
        ))}
      </div>
      <Button className="w-fit" onClick={handleViewMore}>
        {showAll ? "View Less" : "View More"}
      </Button>
    </div>
  );
};

export default Projects;
