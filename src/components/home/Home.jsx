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
                src="./webbo2-removebg.png"
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

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Full Stack Web Developer."
                className="!text-4xl text-left xl:!text-3xl md:!text-2xl sm:!text-xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xl">
                I am a full-stack web developer with a strong passion for
                building scalable, efficient, and user-friendly applications. I
                specialize in both front-end and back-end development,
                leveraging modern frameworks and technologies to create seamless
                digital experiences. My expertise includes designing and
                implementing dynamic web applications, optimizing performance,
                and ensuring security in web-based solutions.
              </p>
              <p>
                I am particularly interested in using my skills to contribute to
                innovative projects that drive technological advancements and
                enhance user engagement. I am eager to collaborate with
                experienced professionals, learn from industry leaders, and
                continuously refine my abilities. My goal is to create impactful
                digital solutions that align with the evolving needs of
                businesses and society.
              </p>
              <div className="flex itemes-center self-start mt-2 lg:self-center">
                <Link
                  to="./resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-black dark:bg-white text-white dark:text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black hover:dark:bg-transparent hover:dark:text-white hover:dark:border-white md:p-2 md:px-4 md:text-base"
                >
                  resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <a
                  href="mailto:felixwebbo8@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-black dark:text-white underline md:text-base"
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
