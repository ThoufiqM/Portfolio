"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import ResumeButton from "./Cards/ResumeButton";

const HeroSection = () => {
  const gradientStyle = {
    background: `linear-gradient(to right, #F9EE43, #FD495E)`,
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div
      className="container flex pt-20 lg:pt-[200px] flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-10"
      id="about"
    >
      <div className="space-y-4 md:space-y-5  text-center lg:text-left">
        <div className="space-y-2">
          <span className="flex flex-col lg:flex-row md:space-x-3 text-2xl md:text-4xl lg:text-5xl font-extrabold text-center lg:text-left">
            <p>Hi,</p>
            <p>I'm Mohammad Thoufiq</p>
          </span>
          <span className="flex items-center justify-center lg:justify-start ">
            <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center lg:text-left lg:h-14 me-2">
              I’m a{" "}
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Product Designer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Graphic Designer",
                1000,
                "Video Editor",
                1000,
              ]}
              wrapper="p"
              cursor={true}
              speed={50}
              style={gradientStyle}
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center lg:text-left lg:h-14"
              repeat={Infinity}
            />
          </span>
        </div>
        <p className="text-base md:text-lg text-[#C5C5C5] font-light lg:text-left text-pretty lg:w-4/5 xl:w-2/3">
          I specialize in product design for both{" "}
          <span className="text-white font-medium">
            {" "}
            Web 3(Crypto) and Web 2,
          </span>{" "}
          with two years of UX/UI design experience and five years of freelance
          graphic design. Additionally, I'm a self-taught video editor for my
          YouTube channel, named{" "}
          <span className="font-medium">"Thoufiq M”</span>
        </p>

        <div className="flex items-center justify-center lg:justify-start space-x-3 md:space-x-5">
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="text-lightest-slate hover:text-green "
          >
            <Button variant="default" className="text-sm font-semibold">
              Get in touch
            </Button>
          </Link>

          <ResumeButton />
        </div>
      </div>

      <Image
        src="/assets/thoufiqDP.jpeg"
        alt=""
        width={342}
        height={342}
        className="h-[118px] w-[118px] md:w-[260px] md:h-[260px] xl:h-[342px] xl:w-[342px] rounded-full mb-8 lg:mb-0"
      />
    </div>
  );
};

export default HeroSection;
