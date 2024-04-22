import JSONData from "../util/Education.json";
import EducationCard from "./Cards/EducationCard";
const Education = () => {
  const data = JSONData;
  return (
    <div className="flex flex-col" id="education">
      <div className="text-[#FF8660] text-4xl text-center font-extrabold">Education</div>
      <div className="flex flex-col justify-center gap-12 mt-12">
        {data.map((item, index) => (
          <EducationCard
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

export default Education;
