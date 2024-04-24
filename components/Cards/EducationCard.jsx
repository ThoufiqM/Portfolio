import Image from "next/image";
import React from "react";

const EducationCard = ({ imgurl, title, date, role, description }) => {
  return (
    <div className="ms-5 lg:ms-6">
      <div className="flex md:items-center">
        <span className="bg-white rounded-[6px] py-1.5 px-1.5 h-fit flex items-center justify-center mr-3">
          <Image className="w-8 h-8" width={32} height={32} src={imgurl} alt={title} />
        </span>
        <div className="flex flex-col w-full ">
          <span className="flex flex-col md:flex-row gap-2 md:gap-4">
            <p className="text-lg md:text-xl font-bold ">{title}</p>
            <p className="py-2 px-3 w-fit font-bold text-sm bg-[#1DAB45]/10 text-[#1DAB45] rounded-[6px]">
              {role}
            </p>
            <p className="md:ml-auto text-sm text-[#8491A0]">{date}</p>
          </span>
          <p className="text-[#8491A0] mt-2 md:mt-0 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
