import React, { useEffect, useRef } from "react";
import AnimatedText from "../animations/AnimatedText";
import Layout from "../layout/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";
//import Experiene from "../experience/Experiene";
//import Education from "../education/Education";
//import Article from "../Article/Article";
import Transition from "../transition/Transition";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Transition />
      <div className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-32">
          <AnimatedText
            text="From Architectural Code to Cutting-Edge, Scalable Digital Ecosystems."
            className="mb-16 lg:pt-16 lg:!text-4xl sm:!text-2xl xs:!text-xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/50">
                biography
              </h2>
              <p className="font-medium  dark:text-white">
                Pursuing a Bachelor's degree in Applied Physics and Computer
                Science, I am a dynamic full-stack web developer with a deep
                understanding of both theoretical principles and practical
                applications in technology. My expertise spans across modern web
                technologies, including MongoDB, MySQL, JavaScript, TypeScript,
                React, Next.js, Tailwind CSS, and Node.js. With a strong
                foundation in cybersecurity fundamentals, I integrate robust
                security measures into my development processes, ensuring the
                resilience and integrity of digital solutions.
              </p>
              <p className="my-4 font-medium dark:text-white">
                Passionate about crafting scalable and efficient web
                applications, I thrive in designing seamless user experiences
                and optimizing system performance. My ability to bridge the gap
                between software engineering and cybersecurity enables me to
                develop secure, high-performance applications that align with
                industry best practices. Continuously expanding my knowledge and
                skill set, I am eager to collaborate with innovative minds and
                contribute to cutting-edge technological advancements.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 bg-black w-[102%] h-[105%] -z-10 -right-4 rounded-[1.5rem]" />
              <img
                src="./web-removebg.png"
                alt="prof"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 h-[50%] xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end dark:text-white justify-between md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium dark:text-white/40 capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  year of experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium dark:text-white/40 capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  my certificates.
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl dark:text-white/40 font-medium capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projacts.
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </div>
    </>
  );
};

export default About;
