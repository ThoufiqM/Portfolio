import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ResumeButton = () => {
  const link =
    "https://drive.google.com/file/d/1k966NGYwA1kp_x-sfPbkeGnR9r8MIyGm/view?usp=drive_link";

  return (
    <div className="bg-gradient-to-r from-[#F9DB43] rounded-full p-[1px] min-w-[150px] w-full max-w-[220px] to-[#FD495E]">
      <Link href={link} target="_blank">
        <Button variant="secondary" className="rounded-full bg-[#161513]">
          <span className="  bg-clip-text text-sm md:text-base font-semibold text-transparent bg-gradient-to-r from-[#F9DB43] to-[#FD495E]">
            Resume
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default ResumeButton;
