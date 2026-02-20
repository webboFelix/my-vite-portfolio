import React, { useRef } from "react";
import Layout from "../layout/Layout";
import { motion, useMotionValue } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";
import Transition from "../transition/Transition";
import { LinkArrow } from "../icons/ExternalLink";

const FramerImage = motion.img;

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-50);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline dark:text-white group-hover:text-cyan-500 transition-colors duration-300">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 z-10 h-50 hidden absolute rounded-lg md:!hidden shadow-2xl border-2 border-black/20 dark:border-white/20"
      />
    </a>
  );
};

const Art = ({ img, title, date, link, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white dark:bg-black/50 first:mt-0 border-2 border-solid border-black dark:border-white/20 border-r-4 sm:flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <MovingImg title={title} img={img} link={link} />
      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:mt-2">
        <span className="text-pink-500 dark:text-cyan-400 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
          {date}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 font-semibold"
        >
          Visit <LinkArrow className="w-4 ml-1" />
        </a>
      </div>
    </motion.li>
  );
};

const Article = () => {
  return (
    <>
      <Transition />
      <Layout className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <AnimatedText
          text="Featured Projects"
          className="!text-5xl text-center mb-4 xl:!text-4xl md:!text-3xl sm:!text-2xl"
        />
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
          A collection of projects showcasing my expertise in web development, security, and modern technologies.
          Each project demonstrates problem-solving skills, technical proficiency, and attention to detail.
        </p>
        <ul>
          <Art
            title="Hotel Vannah - Full Stack Booking Platform (Next.js, Clerk, PostgreSQL)"
            date="June 2025"
            link="https://hotelvannah.com/"
            img={"./HV2.png"}
            index={0}
          />

          <Art
            title="MMU Dispensary Health-Connect Web Application"
            date="April 2025"
            link="https://mmu-healthconnect.netlify.app/"
            img={"./project1.png"}
            index={1}
          />

          <Art
            title="Philip Portfolio Website"
            date="February 2025"
            link="https://philip-portifolio.netlify.app/"
            img={"./project2.png"}
            index={2}
          />

          <Art
            title="Charles Portfolio Website"
            date="October 2024"
            link="https://charles-portifolio.netlify.app/"
            img={"./project3.png"}
            index={3}
          />

          <Art
            title="Advent Band Church Website"
            date="April 2024"
            link="https://adventband.org/#"
            img={"./project4.png"}
            index={4}
          />
        </ul>
      </Layout>
    </>
  );
};

export default Article;
