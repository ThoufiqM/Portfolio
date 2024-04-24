import JSONData from "../util/Education.json";
import EducationCard from "./Cards/EducationCard";
const Education = () => {
  const data = JSONData;
  return (
    <div
      className="mx-3 lg:container lg:px-20 xl:px-40 flex flex-col"
      id="education"
    >
      <div className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF8660] to-[#D5491D] text-4xl text-center font-extrabold">
        Education
      </div>
      <div className="flex flex-col justify-center  ">
        <ol
          className="relative border-s pt-14 pb-10 space-y-10"
          style={{
            borderImage:
              "linear-gradient(to bottom, #FFFFFF00, #FFFFFF80, #FFFFFF00) 10 100%",
          }}
        >
          {data.map((item, index) => (
            <li key={index}>
              <span class="absolute flex items-center justify-center w-2.5 h-2.5 mt-6 bg-[#FF8660] rounded-full -start-1.5 ring-8 ring-[#FF866033] dark:ring-gray-900 dark:bg-blue-900"></span>
              <EducationCard
                key={index}
                imgurl={item.imgurl}
                title={item.title}
                date={item.date}
                role={item.role}
                description={item.description}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
