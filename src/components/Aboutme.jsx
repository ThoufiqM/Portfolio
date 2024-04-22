import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const gradientStyle = {
    background: `linear-gradient(to right, #F9EE43, #FD495E)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const textArray = ['Product Designer', 'Graphic Designer', 'Video Editor'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setJobTitleIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [textArray.length]);

  return (
    <div className="flex flex-col-reverse md:flex-row mx-auto md:ml-[20%]" id="home">
      <div className="md:w-1/2">
        <div className="p-4 text-center md:text-left">
          <span className="text-5xl font-extrabold text-center md:text-left">Hi, I am Mohammad Thoufiq I’m a </span>
          <span style={gradientStyle} className="text-5xl font-extrabold text-center md:text-left">{textArray[jobTitleIndex]}</span>          <p className="mt-5 text-center md:text-left">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.Sorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="flex space-x-4 ml-5 md:ml-0">
          <button
            className="md:text-lg font-semibold bg-white text-black rounded-full px-8 md:px-12 py-3 transition duration-300 ease-in-out"
            onClick={handleGetInTouchClick}
          >
            Get In Touch
          </button>
          <button className="md:text-lg font-semibold border-white border-2 text-white rounded-full px-8 md:px-12 py-3 transition duration-300 ease-in-out">
            Download CV
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative md:mt-0 mt-8">
        <img
          className="-mt-40 md:-mt-0 absolute inset-0 object-contain h-44 w-full md:h-full md:w-auto"
          src="/assets/avatarbg.svg"
          alt="Avatar Background"
        />
        <img
          className="-mt-40 md:-mt-0 absolute inset-0 object-contain h-44 w-full md:h-full md:w-auto"
          src="/assets/avatar.svg"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default AboutMe;
