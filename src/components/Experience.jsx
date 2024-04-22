import JSONData from "../util/Experience.json";
import ExperienceCard from "./Cards/ExperienceCard";
const Experience = () => {
  const data = JSONData;
  return (
    <div className="flex flex-col" id="experience">
      <div className="text-[#FF8660] text-4xl text-center font-extrabold">Experience</div>
      <div className="flex flex-col justify-center gap-12 mt-12">
        {data.map((item, index) => (
          <ExperienceCard
            key={index}
            imgurl={item.imgurl}
            title={item.title}
            date={item.date}
            role={item.role}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
