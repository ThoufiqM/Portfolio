import React from "react";

const ExperienceCard = ({ imgurl, title, date, role, description }) => {
  return (
    <div className="ms-5 lg:ms-6">
      <div className="flex md:items-center">
        <img className="w-9 h-9 mr-3" src={imgurl} alt={title} />
        <div className="flex flex-col md:flex-row w-full md:items-center gap-4">
          <p className="text-lg md:text-xl font-bold ">{title}</p>
          <p className="py-2 px-3 w-fit font-bold text-sm bg-[#1DAB45]/10 text-[#1DAB45] rounded-[6px]">
            {role}
          </p>
          <p className="md:ml-auto text-sm text-[#8491A0]">{date}</p>
          <p className="text-[#8491A0] text-sm md:hidden">{description}</p>
        </div>
      </div>
      <div className="pt-5 hidden md:block">
        <p className="text-[#8491A0] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
