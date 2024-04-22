import React, { useState } from "react";
import ProjectCard from "./Cards/ProjectCard";
import JSONData from "../util/projects.json";

const Projects = () => {
  const data = JSONData;
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? data : data.slice(0, 9);

  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <div className="flex flex-col" id="project">
      <div className="text-[#FF8660] text-4xl text-center font-extrabold">Projects</div>
      <div className="flex flex-wrap justify-center gap-12 mt-12">
        {visibleCards.map((item, index) => (
          <ProjectCard
            key={index}
            imgurl={item.imgurl}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
      {!showAll && (
        <button
          className="md:text-lg font-semibold bg-white text-black rounded-full px-8 md:px-12 py-3 transition duration-300 ease-in-out mt-8 mx-auto block"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Projects;
