import Image from "next/image";

const ExperienceWith = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12" id="experiencewith">
      <div className="text-base md:text-xl text-center font-semibold">EXPERIENCE WITH</div>
      <div className="flex justify-center gap-9 md:gap-14">
        <Image src="/assets/exp1.svg" width={30} height={30} className="h-[26px] md:h-[42px]" alt="" />
        <Image src="/assets/exp2.svg" width={50} height={45} className="h-[26px] md:h-[42px]" alt="" />
        <Image src="/assets/exp3.svg" width={50} height={45} className="h-[26px] md:h-[42px]" alt="" />
        <Image src="/assets/exp4.svg" width={50} height={45} className="h-[26px] md:h-[42px]" alt="" />
        <Image src="/assets/exp5.svg" width={50} height={45} className="h-[26px] md:h-[42px]" alt="" />
      </div>
    </div>
  );
};

export default ExperienceWith;
