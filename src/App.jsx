import "./App.css";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ExperienceWith from "./components/ExperienceWith";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mt-36">
        <AboutMe />
      </div>
      {/* <div className="mt-36">
        <Skills />
      </div> */}
      <div className="mt-36">
        <ExperienceWith />
      </div>
      <div className="mt-36">
        <Projects />
      </div>
      <div className="mt-36">
        <Experience />
      </div>
      <div className="mt-36">
        <Education />
      </div>
      <div className="">
        <Contact />
      </div>
    </>
  );
}
