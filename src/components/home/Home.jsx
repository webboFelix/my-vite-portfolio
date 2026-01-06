import React from "react";
import Layout from "../layout/Layout";
import AnimatedText from "../animations/AnimatedText";
import { Link } from "react-router-dom";
import { LinkArrow } from "../icons/ExternalLink";
import HireMe from "../HireMe";
import Transition from "../transition/Transition";
//import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Transition />
      <div className="flex items-center text-black dark:text-white w-full">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <img
                src="./profileImg1.png"
                alt="profile"
                className="w-[50%] h-auto lg:hidden md:inline-block md:w-full transition-all duration-500 ease-in-out"
                style={{
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
                  transform: "perspective(800px) rotateX(30deg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.maskImage = "none";
                  e.currentTarget.style.WebkitMaskImage = "none";
                  e.currentTarget.style.transform =
                    "perspective(800px) rotateX(0deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.maskImage =
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)";
                  e.currentTarget.style.WebkitMaskImage =
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)";
                  e.currentTarget.style.transform =
                    "perspective(800px) rotateX(30deg)";
                }}
              />
            </div>

            <div className="w-1/2 mt-20 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Full Stack Web Developer || Cybersecurity."
                className="!text-4xl text-left xl:!text-3xl md:!text-2xl sm:!text-xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xl">
                I am a passionate Full Stack Developer with a strong foundation
                in software development, networking, cloud computing, and
                cybersecurity. Skilled in both front-end and back-end
                development, I create scalable, efficient, and secure web
                applications that deliver seamless and engaging digital
                experiences.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xl">
                Leveraging modern frameworks and technologies, I design and
                implement dynamic solutions, from intuitive, responsive user
                interfaces to robust backend architectures, while ensuring
                top-tier performance, security, and reliability.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xl">
                With a mindset driven by innovation, I thrive on building
                impactful solutions that enhance user engagement, solve
                real-world problems, and push the boundaries of technology. I
                value collaboration, continuous learning, and translating ideas
                into secure, scalable systems that meet the evolving needs of
                businesses and society.
              </p>
              <div className="flex itemes-center self-start mt-2 lg:self-center">
                <Link
                  to="./file\Felix-Webbo-Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-orange-200 mx-1 dark:bg-white text-white dark:text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black hover:dark:bg-transparent hover:dark:text-white hover:dark:border-white md:p-2 md:px-4 md:text-base"
                >
                  RESUME <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <a
                  href="mailto:felixwebbo8@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium bg-cyan-300 hover:bg-orange-200 flex items-center rounded-lg p-2 capitalize text-black dark:text-white md:text-base"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <img src="./light.png" alt="light" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Home;
