import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center mx-auto text-center bg-[#191919] pt-14 gap-6 pb-5"
      id="contact"
    >
      <p className="text-xl md:text-2xl font-extrabold">Get In Touch</p>
      <p className="md:w-[650px] text-sm text-[#CACACA]">
        Ready to bring your ideas to life? Let's collaborate! Whether you're a
        startup, established company, or individual with a vision, I'm here to
        help. From concept to execution, let's create something amazing together
      </p>
      <div className="flex items-center gap-1">
        <Mail className="fill-white stroke-black h-6 w-6" />
        <Link
          href="mailto:thoufiqthedesigner@gmail.com"
          className=" text-base font-semibold underline underline-offset-4"
        >
          thoufiqthedesigner@gmail.com
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <Phone className="fill-white stroke-black h-6 w-6" />
        <Link
          href="tel:+918778467927"
          className=" text-base font-semibold underline underline-offset-4"
        >
          +91 8778467927
        </Link>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <Image width={25} height={20} src="/assets/linkedin.svg" />
        <Image width={25} height={20} src="/assets/behance.svg" />
        <Image width={25} height={20} src="/assets/youtube.svg" />
        <Image
          width={20}
          height={20}
          src="/assets/instagram.svg"
          className=""
        />
        <Image width={20} height={20} src="/assets/x.svg" className="" />
      </div>
      <span className="text-sm text-[#818181] mt-5 flex items-center gap-1">
        <p className=" font-light">©Designed By </p>
        <p className="font-semibold">Thoufiq M</p>
      </span>
    </footer>
  );
};

export default Contact;
