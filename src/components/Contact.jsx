import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto text-center md:w-[864px] h-screen" id="contact">
      <div className="text-4xl font-extrabold" >Contact</div>
      <div className="mt-12 p-5">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis.
      </div>
      <div className="mt-12 flex items-center">
        <img src="/assets/mail.svg" className="mr-2 mt-1"/>
        <div>abmcodehub@gmail.com</div>
      </div>
      <div className="mt-12 flex items-center">
        <img src="/assets/instagram.svg" className="mr-5"/>
        <img src="/assets/x.svg" className="mr-5"/>
        <img src="/assets/youtube.svg" />
      </div>
    </div>
  );
};

export default Contact;
