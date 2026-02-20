import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
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
              position="Frond End Engineer"
              company="Advent Band"
              compoanyLink={""}
              time={"2023-present"}
              address={""}
              work={
                <div>
                  <p className="text-justify">
                    I contribute to the creation of a universal church website
                    aimed at providing resources and support to church 02 / 3
                    members and visitors.
                  </p>
                </div>
              }
            />

            <Details
              position="IT Support(Attachment)"
              company="Masinde Muliro University of Science and Technology"
              compoanyLink={""}
              time={"May, 2025 - August, 2025"}
              address={""}
              work={
                <div>
                  <p className="text-justify">
                    Provided technical support, troubleshot hardware and
                    software issues, configured networks, installed systems,
                    assisted users, and maintained secure, reliable IT
                    infrastructure daily.
                  </p>
                </div>
              }
            />

            <Details
              position="Web Master"
              company="Multimedia University"
              compoanyLink={""}
              time={"2022 - 2024"}
              address={""}
              work={
                <div>
                  <p className="text-justify">
                    I collaborate with my colleagues to develop, deploy and
                    Update websites for various projects and initiatives.
                  </p>
                </div>
              }
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
                leadership Skills.
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

                  <p>Communication Skills.</p>
                </li>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />
                  Emotional Intelligence (EQ).
                </li>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />
                  <p> Decision-Making & Problem-Solving .</p>
                </li>
                <li className="flex items-start gap-4 my-2">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/50/approval.png"
                    alt="approval"
                    className="animate-pulse"
                  />
                  <p> Team Building & Collaboration.</p>
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
                    Certificate of merit- web Master, Multimedia University
                    Science Students Assocication (MMUSSA).
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
                    Certificate of merit- Class representative Applied Physics
                    and Computer Science students- 2025
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Experiene;
