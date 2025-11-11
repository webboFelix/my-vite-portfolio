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
            text="From Blueprint to Breakthrough: Building Secure, High-Performance Digital Solutions."
            className="mb-16 lg:pt-16 lg:!text-4xl sm:!text-2xl xs:!text-xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/50">
                biography
              </h2>
              <p className="font-medium  dark:text-white">
                A Full Stack Developer with a strong background in Applied
                Physics and Computer Science, I combine a deep understanding of
                technology’s theoretical foundations with hands-on expertise in
                modern web development. My technical toolkit includes MongoDB,
                MySQL, JavaScript, TypeScript, React, Next.js, Tailwind CSS, and
                Node.js, complemented by a solid grounding in networking, cloud
                computing, and cybersecurity.
              </p>
              <p className="my-4 font-medium dark:text-white">
                I am passionate about building scalable, efficient, and secure
                web applications that deliver exceptional user experiences. By
                integrating robust security measures into every stage of
                development, I ensure that my solutions are not only
                high-performing but also resilient against evolving digital
                threats.
              </p>
              <p className="my-4 font-medium dark:text-white">
                With the ability to bridge the worlds of software engineering
                and cybersecurity, I excel at crafting secure, innovative
                systems that meet both user needs and industry standards. I am
                driven by a commitment to continuous learning, collaborative
                problem-solving, and developing impactful solutions that push
                technological boundaries.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 bg-black w-[102%] h-[105%] -z-10 -right-4 rounded-[1.5rem]" />
              <img
                src="./profileImg2.png"
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
                  years of experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium dark:text-white/40 capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Certificates.
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl dark:text-white/40 font-medium capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projacts.
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
