import React from "react";
import { Button } from "../ui/button";

const ResumeButton = () => {
  const handleDownload = () => {
    // Replace 'example.pdf' with the actual path to your PDF file
    const pdfUrl = "../../public/mtresume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Mohammad_Thoufiq_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      onClick={handleDownload}
      className="bg-gradient-to-r from-[#F9DB43] rounded-full p-[1px] min-w-[150px] w-full max-w-[220px] to-[#FD495E]"
    >
      <Button variant="secondary" className="rounded-full bg-[#161513]">
        <span className="  bg-clip-text text-sm md:text-base font-semibold text-transparent bg-gradient-to-r from-[#F9DB43] to-[#FD495E]">
          Resume
        </span>
      </Button>
    </div>
  );
};

export default ResumeButton;
