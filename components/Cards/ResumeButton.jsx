import React from "react";
import { Button } from "../ui/button";

const ResumeButton = () => {
  return (
    <div className="bg-gradient-to-r from-[#F9DB43]  rounded-full p-[1px] to-[#FD495E]">
      <Button variant="secondary" className="rounded-full bg-[#161513]">
        <span className=" min-w-[100px] max-w-[158px] bg-clip-text text-sm font-semibold text-transparent bg-gradient-to-r from-[#F9DB43] to-[#FD495E]">
          Resume
        </span>
      </Button>
    </div>
  );
};

export default ResumeButton;
