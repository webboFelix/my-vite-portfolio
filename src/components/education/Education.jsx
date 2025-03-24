import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../experience/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize dark:text-white/80 font-bol text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize dark:text-white/50 fond-medium text-black/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-16">
      <h2 className="font-bold text-4xl mb-5 w-full text-center md:text-3xl xs:text-2xl md:mb-2">
        Education.
      </h2>
      <h5 className=" dark:text-white/70 text-center text-black/30 mb-10">
        my education background information.
      </h5>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] dark:bg-white h-full bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Science in Civil Engineering."
            time="2019-2024"
            place={"Multimedia University of Kenya."}
            info={"Accomplished my Undergraduate study in Civil Engineering."}
          />

          <Details
            type="Highschool education."
            time="2015-2018"
            place={"Gethsemane Garden High School."}
            info={"Accomplished my Kenya Certificate of Secondary Education."}
          />

          <Details
            type="primary education."
            time="2007 - 2014"
            place={"Shalom Christian Centre, kenya."}
            info={"Accomplished my Keny Certificate of Primary Education."}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
