import React from "react";

const EducationCard = ({ imgurl, title, date, role, description }) => {
  return (
    <div className="md:mx-80 md:w-[864px]">
      <div className="flex items-center p-4">
        <img className="w-9 h-9 mr-4 rounded-sm" src={imgurl} alt={title} />
        <div className="flex flex-col gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            <p className="text-lg font-bold">{title}</p>
            {role && (
              <p className="w-36 md:w-auto font-bold md:ml-28 text-sm py-2 px-6 bg-[#1DAB45] bg-opacity-10 text-[#1DAB45] rounded-md">
                {role}
              </p>
            )}
          </div>
          <div className="">
            <p className="text-[#8491A0]">{description}</p>
          </div>
        </div>
        <div className="hidden md:block ml-auto p-4">
          <p className="text-[#8491A0]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
