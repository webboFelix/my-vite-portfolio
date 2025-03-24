import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Education from "../education/Education";
import Home from "../home/Home";
import Layout from "../layout/Layout";

const Details = ({ position, company, compoanyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto dark:text-white flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bol text-2xl dark:text-white sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={compoanyLink} className="text-cyan-300 uppercase">
            @{company}
          </a>
        </h3>
        <span className="capitalize fond-medium dark:text-white/80 text-black/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experiene = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <Home />
      <div className="my-0 dark:bg-black dark:text-white">
        <h2 className="font-bold dark:text-white text-4xl mb-2 w-full text-center md:text-3xl xs:text-2xl md:mb-2 capitalize">
          experience.
        </h2>
        <h5 className="text-center dark:text-white/60 text-black/20 mb-5 capitalize">
          over the years I have gained excellent hands on experience.
        </h5>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-white origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Junior Structural Engineer"
              company="Chastin Structural Solutions"
              compoanyLink={""}
              time={"2024-2025"}
              address={""}
              work={
                <div>
                  <p>
                    Visited construction sites to collaborate with construction
                    personnel and to ensure compliance with design parameters
                    and regulations.
                  </p>
                  <p className="my-2">
                    Provided technical advice to industrial personnel regarding
                    design, construction, and structural repair.
                  </p>
                </div>
              }
            />

            <Details
              position="Senior Structural Engineer"
              company="Fauget Structural Solutions"
              compoanyLink={""}
              time={"2019 - present"}
              address={""}
              work={`Engaged in the construction of more than two new
buildings during the one year period. - Presented
environmental laws, fire regulations, and building
codes to city and county government agencies.`}
            />

            <Details
              position=""
              company="Multimedia University of Kenya."
              compoanyLink={""}
              time={"present"}
              address={""}
              work={`Currently undertaking the design of an 11-storey student hostel in Multimedia University
of Kenya as my final year project.`}
            />

            <Details
              position=""
              company="Ruiru."
              compoanyLink={""}
              time={""}
              address={""}
              work={`Design of a 6-storey residential apartment in Kirigiti- off Kiambu town for Anna Njenga.`}
            />

            <Details
              position=""
              company="Kirigiti- off Kiambu town."
              compoanyLink={""}
              time={""}
              address={""}
              work={`Design of a 6-storey residential apartment in Kirigiti- off Kiambu town for Anna Njenga.`}
            />
          </ul>
        </div>
        <Layout>
          <h3 className="text-center text-3xl mt-16 capitalize font-bold underline">
            other experience.
          </h3>
          <h4 className="font-semibold dark:text-white/60 text-2xl my-5 text-center text-black/60 capitalize">
            More Information: My Experiences and Qualifications.
          </h4>

          <div className="flex justify-between w-full gap-[5%] mt-10 lg:space-y-10 lg:flex-col">
            <div className="bg-black/70 dark:bg-transparent dark:border-2 dark:shadow-shadowLight p-8 rounded-xl relative w-[50%] lg:w-full shadow-custom hover:bg-transparent dark:hover:bg-white/10 hover:border-2 hover:bottom-5 transform transition-all duration-300 easeInOut">
              <h4 className="font-semibold dark:text-white/60 text-2xl text-center text-black/60 capitalize">
                leadership experience.
              </h4>
              <div className="bg-black/20 rounded-xl h-2 w-full dark:bg-white/20"></div>
              <ul className="flex flex-col">
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />

                  <p>
                    President of student council- Gethsemane Garden High school-
                    2018.
                  </p>
                </li>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />
                  Multimedia University of Kenya Civil engineering students’
                  class representative.
                </li>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />
                  <p>
                    {" "}
                    Finance coordinator- Multimedia University of Kenya Seventh
                    day Adventist church 2023 mission.
                  </p>
                </li>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />
                  <p>
                    {" "}
                    Events coordinator- Multimedia University of Kenya
                    Engineering students’ association, MUKESA.
                  </p>
                </li>
              </ul>
            </div>

            {/**certifications */}
            <div className="bg-black/30 p-8 dark:shadow-shadowLight dark:border-2 dark:hover:bg-white/10 dark:border-dashed rounded-xl relative w-[50%] lg:w-full shadow-custom hover:bg-transparent hover:border-2 hover:bottom-5 transform transition-all duration-300 easeInOut">
              <h4 className="font-semibold dark:text-white/60 text-2xl text-center text-black/60 capitalize">
                leadership experience.
              </h4>
              <div className="bg-black/20 dark:bg-white/20 rounded-xl h-2 w-full"></div>
              <ul>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/certificate.png"
                    alt="certificate"
                    className="animate-pulse"
                  />
                  <p>
                    Certificate of merit- Kenya science and engineering Fair-
                    County level.
                  </p>
                </li>

                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/certificate.png"
                    alt="certificate"
                    className="animate-pulse"
                  />
                  <p>
                    Certificate of merit- Class representative Civil engineering
                    students- 2024
                  </p>
                </li>

                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/certificate.png"
                    alt="certificate"
                    className="animate-pulse"
                  />
                  <p>
                    Certificate of merit- Event coordinator Multimedia
                    University of Kenya Engineering Students’ association,
                    MUKESA.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
        <Education />
      </div>
    </>
  );
};

export default Experiene;
