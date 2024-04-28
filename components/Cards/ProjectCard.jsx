import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import s from "./card.module.css";
import Link from "next/link";

const ProjectCard = ({
  imgurl,
  title,
  date,
  desc,
  button1,
  button1link,
  button2,
  button2link,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer rounded-[8px] overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 ">
          <Image
            width={350}
            height={218}
            className=" object-cover "
            src={imgurl}
            alt="title"
          />
          <div className="bg-[#2A2A2A] p-5 flex items-center justify-between">
            <span className="space-y-1">
              <p className="text-white text-base font-extrabold text-wrap">
                {title}
              </p>
              <p className="text-[#B1B2B380] text-start text-xs">{date}</p>
            </span>
            <ArrowRight />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <Image
            width={350}
            height={218}
            className=" w-full object-cover"
            src={imgurl}
            alt="title"
          />
        </DialogTitle>
        <DialogDescription>
          <div className="bg-[#2A2A2A] space-y-3 px-5 pb-4 rounded-xl">
            <span className="space-y-1">
              <p className="text-white text-xl font-extrabold text-wrap">
                {title}
              </p>
              <p className="text-[#B1B2B380] text-start text-base">{date}</p>
            </span>
            <p className="text-[#B1B2B3] text-start text-sm">{desc}</p>
            <div className={`grid ${button2 && "grid-cols-2"} gap-4`}>
              {button2 && (
                <Link
                  href={button2link}
                  target="_blank"
                  className="bg-gradient-to-r from-[#F9DB43] w-full rounded-[10px] p-[1px] to-[#FD495E]"
                >
                  <Button variant="secondary" className="bg-[#2A2A2A]">
                    <span className=" bg-clip-text text-sm font-bold text-transparent bg-gradient-to-r from-[#F9DB43] to-[#FD495E]">
                      {button2}
                    </span>
                  </Button>
                </Link>
              )}
              <Link href={button1link} target="_blank">
                <Button className="rounded-[10px] font-bold w-full text-sm">
                  {button1}
                </Button>
              </Link>
              {/* {button2 && (
                <span className="w-full border border-red-500 rounded-[10px]">
                  <Button
                    style={{
                      background:
                        "linear-gradient(to right, #F9DB431A, #FD495E1A) border-box",
                      // borderRadius: "10px",
                      // border: "2px solid transparent",
                    }}
                    className="rounded-[10px] h-full w-full text-gradient-to-r from-red-400 to-blue-500"
                  >
                    {button2}
                  </Button>
                </span>
              )} */}
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
