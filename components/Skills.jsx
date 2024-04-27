import React from "react";
import HardSkills from "../util/HardSkills.json";
import SoftSkills from "../util/SoftSkills.json";
import { Span } from "next/dist/trace";

const Skills = () => {
  return (
    <div className="container grid lg:grid-cols-4 w-full justify-center ">
      <div className=" md:col-span-3 space-y-4 bg-[#FFFFFF1A] px-6 py-5 rounded-xl border border-[#FFFFFF59] mb-10 lg:mb-0 lg:me-20">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF8660] to-[#D5491D] text-xl text-center font-semibold">
          Hard Skills & Techniques
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-none gap-x-5 sm:grid-rows-11 xl:grid-rows-7 gap-1 md:grid-flow-col list-disc list-inside text-sm">
          {HardSkills.map((skill) => (
            <li className="" key={skill.name}>
              {skill.name} {skill.type && <span className="text-[#A7A7A7]">- {skill.type}</span>}
            </li>
          ))}
        </ul>
        <span className="text-[#919191] text-xs flex items-center justify-center gap-6">
            <p>VE - Video Editing</p>
            <p>GD - Graphic Design</p>
        </span>
      </div>

      <div className="md:ms-32 lg:ms-0 space-y-4 bg-[#FFFFFF1A] px-6 py-5 rounded-xl border border-[#FFFFFF59]">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF8660] to-[#D5491D] text-xl text-center font-semibold">
        Soft Skills
        </h2>
        <ul className="grid grid-rows-7 gap-1 grid-flow-col list-disc list-inside text-sm">
          {SoftSkills.map((skill) => (
            <li className="" key={skill.name}>
              {skill.name} {skill.type && <span className="text-[#A7A7A7]">- {skill.type}</span>}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="space-y-4">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF8660] to-[#D5491D] text-xl text-center font-semibold">
          Soft Skills
        </h2>
        <ul className="grid grid-rows-7 gap-1 grid-flow-col list-disc list-inside">
          {SoftSkills.map((skill) => (
            <li className="" key={skill.name}>
              {skill.name} {skill.type && "- " + skill.type}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Skills;
