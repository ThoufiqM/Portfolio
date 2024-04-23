"use client";
import React, { useState, useRef, useEffect } from "react";
import menuItems from "../util/MenuItems";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMenuClick = (url) => {
      if (url === "#contact") {
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        const target = document.querySelector(url);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    menuItems.forEach((item) => {
      const menuItem = document.querySelector(`[href='${item.url}']`);
      if (menuItem) {
        menuItem.addEventListener("click", () => handleMenuClick(item.url));
      }
    });

    return () => {
      menuItems.forEach((item) => {
        const menuItem = document.querySelector(`[href='${item.url}']`);
        if (menuItem) {
          menuItem.removeEventListener("click", () =>
            handleMenuClick(item.url)
          );
        }
      });
    };
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="h-20 flex justify-between text-white text-lg">
      <span className="flex items-center cursor-pointer">
        <Image
          src="/assets/thoufRes.svg"
          alt=""
          width={70}
          height={19}
          className="w-[70px] h-[40px] mb-5 md:mb-0 md:h-full md:w-full"
        />
      </span>
      <div className="md:hidden mt-4 mr-5" onClick={handleClick}>
        <MenuIcon />
      </div>
      <ul
        ref={menuRef}
        className={
          "md:flex flex-col gap-4 mt-5 md:gap-0 md:mt-0 md:flex-row md:space-x-4 md:items-center" +
          (active ? " flex" : " hidden")
        }
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className="py-2 px-4 rounded-lg text-white transition duration-300"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
