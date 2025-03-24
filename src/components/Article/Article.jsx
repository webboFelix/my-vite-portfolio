import React, { useRef } from "react";
import Layout from "../layout/Layout";
import { motion, useMotionValue } from "framer-motion";

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
    <a href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 z-10 h-50 hidden absolute rounded-lg md:!hidden"
      />
    </a>
  );
};

const Art = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white first:mt-0 border border-solid border-black border-r-4 border-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-pink-500 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Article = () => {
  return (
    <Layout className="pt-16">
      <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
        All Article
      </h2>
      <ul>
        <Art
          title="Software Development Process"
          date="March 29, 2024"
          link="/"
          img={"./balaka.png"}
        />

        <Art
          title="Software Development Process"
          date="March 29, 2024"
          link="/"
          img={"./balaka.png"}
        />

        <Art
          title="Software Development Process"
          date="March 29, 2024"
          link="/"
          img={"./balaka.png"}
        />
      </ul>
    </Layout>
  );
};

export default Article;
