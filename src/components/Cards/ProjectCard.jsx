import React from 'react';

const ProjectCard = ({ imgurl }) => {
  return (
    <div className="cursor-pointer max-w-sm rounded overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105">
      <img className="w-full" src={imgurl} alt="title" />
    </div>
  );
};

export default ProjectCard;
