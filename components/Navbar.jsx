"use client";
import { useState, useEffect } from "react";
// import resume from "./resume.pdf";
// import { IdContext } from "./AppContext";
import { Link } from "react-scroll";
// import { navItems } from './constants/Constant';

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaFreeCodeCamp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import ResumeButton from "./Cards/ResumeButton";

function Navbar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(1);

  const [modal, setModal] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
        setModal(false);
      } else {
        // if scroll up show the navbar
        setShow(false);
        setModal(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    {
      to: "about",
      name: "About",
    },
    {
      to: "projects",
      name: "Projects",
    },
    {
      to: "experience",
      name: "Experience",
    },
    {
      to: "education",
      name: "Education",
    },
    {
      to: "contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <section className="">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center items-center">
          <div
            className={`container fixed mx-auto flex justify-between px-5 mt-16 items-center font-mono gap-6 lg:gap-10 h-16 w-full z-40 tracking-widest backdrop-blur-md bg-[#161513]/70 transition-all duration-300 `}
          >
            <span className="flex items-center cursor-pointer">
              <Image
                src="/assets/thoufRes.svg"
                alt=""
                width={136}
                height={50}
                className=""
              />
            </span>
            <ol className="flex space-x-5 lg:space-x-10 text-sm ">
              {navItems.map((item) => (
                <li key={item.to} className="text-green cursor-pointer">
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="text-lightest-slate hover:text-green "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ol>
            {/* <div className="relative h-10 w-24 bg-green rounded-md ">
              <a
                className="alsolute  bg-[#0a192f] h-10 w-24 border text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150"
                href={resume}
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </div> */}
            <span className="hidden lg:block">
              <ResumeButton />
            </span>
          </div>
        </div>

        {/* Mobile Navbar */}

        <div
          className={`fixed h-16 flex items-center justify-end font-mono w-full md:hidden tracking-widest backdrop-blur-md bg-background z-50 transition-all duration-300 `}
        >
          <div
            className="flex items-center h-16 w-full justify-between z-50 "
            onClick={() => {
              modal == true ? setModal(false) : setModal(true);
            }}
          >
            <span className="flex h-full items-center cursor-pointer ms-4">
              <Image
                src="/assets/thoufRes.svg"
                alt=""
                width={50}
                height={19}
                className="w-[130px] h-full "
              />
            </span>
            {!modal ? (
              <svg
                className="ham hamRotate ham1 "
                viewBox="0 0 100 100"
                width="80"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -npm run dev13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            ) : (
              <svg
                className={`${modal && "active"} ham hamRotate ham1`}
                viewBox="0 0 100 100"
                width="80"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            )}
          </div>
          <Sheet
            open={modal}
            onOpenChange={() => setModal(false)}
            className=" z-50"
          >
            <SheetContent className="backdrop-blur bg-background w-[250px] border-none pt-20 ">
              <div className="flex flex-col items-center justify-start space-y-12 ">
                <ul className=" flex flex-col justify-center items-center space-y-10 text-sm font-mono font-semibold">
                  {navItems.map((item) => (
                    <li
                      key={item.to}
                      className="text-green text-center"
                      onClick={() =>
                        modal == true ? setModal(false) : setModal(true)
                      }
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className="text-lightest-slate hover:text-green block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ResumeButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </>
  );
}

export default Navbar;
