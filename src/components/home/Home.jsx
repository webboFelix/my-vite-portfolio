import React from "react";
import Layout from "../layout/Layout";
import AnimatedText from "../animations/AnimatedText";
import { Link } from "react-router-dom";
import { LinkArrow } from "../icons/ExternalLink";
import HireMe from "../HireMe";
import Transition from "../transition/Transition";
import { motion } from "framer-motion";
//import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Transition />
      <div className="flex items-center text-black dark:text-white w-full overflow-x-hidden">
        <Layout className="pt-14 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="flex items-center justify-between w-full gap-8 lg:flex-col lg:gap-6">
            <motion.div
              className="w-1/2 lg:w-full flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src="./profileImg1.png"
                alt="profile"
                className="w-[50%] max-w-md h-auto lg:hidden md:inline-block md:w-full transition-all duration-500 ease-in-out"
                style={{
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
                  transform: "perspective(800px) rotateX(30deg)",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
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
            </motion.div>

            <motion.div
              className="w-1/2 lg:w-full mt-12 xl:mt-20 flex flex-col items-center self-center lg:text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatedText
                text="Cloud & Application Security Specialist."
                className="!text-2xl sm:!text-3xl md:!text-4xl text-left xl:!text-3xl lg:!text-center"
              />
              <motion.p
                className="my-4 text-justify text-sm sm:text-base font-medium md:text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I am a Cloud & Application Security Specialist focused on
                strengthening modern digital infrastructure through offensive
                and defensive security strategies. With expertise in penetration
                testing, cloud security, and secure systems architecture, I
                approach security from both an attacker's and engineer's
                perspective. I identify vulnerabilities early and implement
                robust controls that reduce risk and reinforce resilience. My
                work integrates security-by-design principles across the entire
                application lifecycle, ensuring protection from architecture to
                deployment. Driven by continuous growth and evolving threat
                intelligence, I deliver measurable security impact in an
                increasingly complex cyber landscape.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-3 self-start mt-4 lg:self-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="./file\Felix-Webbo-Resume.pdf"
                    target={"_blank"}
                    className="flex items-center justify-center bg-orange-200 dark:bg-white text-white dark:text-black py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black hover:dark:bg-transparent hover:dark:text-white hover:dark:border-white transition-all duration-300 min-h-[44px]"
                  >
                    RESUME <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                </motion.div>
                <motion.a
                  href="mailto:felixwebbo.fw@gmail.com"
                  target={"_blank"}
                  className="text-base sm:text-lg font-medium bg-cyan-300 hover:bg-orange-200 flex items-center justify-center rounded-lg py-3 px-5 capitalize text-black dark:text-white transition-all duration-300 min-h-[44px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </Layout>
        <HireMe />
        <motion.div
          className="absolute right-4 sm:right-6 lg:right-8 top-[85%] sm:top-[90%] inline-block w-16 sm:w-20 lg:w-24 opacity-80 block lg:hidden"
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img src="./light.png" alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
