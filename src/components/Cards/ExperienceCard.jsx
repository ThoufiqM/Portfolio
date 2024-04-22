import React from "react";

const ExperienceCard = ({ imgurl, title, date, role, description }) => {
  return (
    <div className="md:mx-80 md:w-[864px]">
      <div className="flex items-center p-4">
        <img className="w-9 h-9 mr-4" src={imgurl} alt={title} />
        <div className="flex flex-col md:flex-row w-full md:items-center gap-2">
          <p className="text-lg font-bold mr-5">{title}</p>
          <p className="py-2 px-3 w-24 md:w-auto font-bold text-sm md:py-2 md:px-6 bg-[#1DAB45] bg-opacity-10 text-[#1DAB45] rounded-md md:inline-block">{role}</p>
          <p className="md:ml-auto text-[#8491A0]">{date}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#8491A0]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
