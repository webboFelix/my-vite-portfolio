import React, { useState } from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
//import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedIn } from "../icons/Linkin";
import { GithubIcon } from "../icons/Github";
import Layout from "../layout/Layout";
import { TwitterIcon } from "../icons/Icons";

const iconVariants = (duration) => ({
  initial: { y: -20 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const iconVariants2 = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2, // Adjust the duration as needed
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Footer = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (name) => {
    setTooltip(name);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <footer className="flex  items-center text-black dark:text-white w-full h-max">
      <Layout className="pt-0 md:pt-16 sm:pt-8 bg-gradient-to-b from-black/30 via-black/50 to-black/90">
        <div className="flex mx-5 justify-between items-center sm:flex-col">
          <img
            src="./profileImg1.png"
            className="w-32 h-32 rounded-full flex-shrink-0 border-4 border-solid-cyan-900"
            alt="footerImage"
          />
          <motion.div className="flex flex-col my-5">
            <motion.div className="flex space-x-2">
              {" "}
              <motion.pre
                variants={iconVariants2}
                initial="initial"
                animate="animate"
                className="h-5 w-5 bg-blue-100"
              ></motion.pre>
              <motion.pre
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                whileHover={{ rotateY: 180 }}
                className="h-5 w-5 bg-blue-900"
              ></motion.pre>
              <motion.pre
                variants={iconVariants2}
                initial="initial"
                animate="animate"
                className="h-5 w-5 bg-blue-100"
              ></motion.pre>
              <motion.pre
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                whileHover={{ rotateY: 180 }}
                className="h-5 w-5 bg-blue-900"
              ></motion.pre>
              <motion.pre
                variants={iconVariants2}
                initial="initial"
                animate="animate"
                className="h-5 w-5 bg-blue-100"
              ></motion.pre>
              <motion.pre
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                whileHover={{ rotateY: 180 }}
                className="h-5 w-5 bg-blue-900"
              ></motion.pre>
            </motion.div>
            <div className="flex space-x-2">
              {" "}
              <pre className="h-5 w-5 bg-blue-900"></pre>
              <pre className="h-5 w-5 bg-blue-50 transform rotate-45"></pre>
              <pre className="h-5 w-5 bg-blue-600"></pre>
              <pre className="h-5 w-5 bg-blue-400 transform rotate-45"></pre>
              <pre className="h-5 w-5 bg-blue-900"></pre>
              <pre className="h-5 w-5 bg-blue-100 transform rotate-45"></pre>
            </div>
          </motion.div>
          <div className="text-center sm:text-left">
            <h1>
              <a
                href="#"
                className="text-bold bg-gradient-to-r from-blue-500 via-slate-500 to-purple-500 bg-clip-text tracking-wide text-transparent"
              >
                FELIX WEBBO.
              </a>
            </h1>
            <h4>Web Developer.</h4>
            <h4>Cybersecurity</h4>
          </div>
        </div>
        <hr className="w-full h-5 my-4" />

        {/**middle part */}
        <div className="flex justify-center items-start">
          <div className="grid w-full grid-cols-8 gap-16 mx-10 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start md:col-span-4 sm:col-span-8 sm:items-center">
              <h2 className="text-2xl text-blue-900 underline">Contents.</h2>
              <ul className="permalinks space-y-2 flex flex-col md:items-center">
                <li className="hover:translate-x-2 transition-transform duration-200">
                  <Link to="/" className="hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  <Link to="/about" className="hover:text-blue-500">
                    About
                  </Link>
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  <Link to="/experience" className="hover:text-blue-500">
                    Experience
                  </Link>
                </li>

                <li className="hover:translate-x-2 transition-transform duration-200">
                  <Link to="/contact" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="w-full h-2 bg-black/5 hidden sm:flex dark:bg-white/20" />
            </div>

            <div className="col-span-3 relative h-max w-max  md:col-span-4 flex flex-col ">
              <h2 className="text-2xl  underline text-blue-900">
                Contact Info:
              </h2>
              <a href={`tel:${+254113323746}`}>
                {" "}
                <span className="flex gap-2 items-center mt-2">
                  <img
                    src="./gif-phone.gif"
                    alt="Gmail"
                    width={20}
                    className="rounded-sm"
                  />
                  :<strong className="text-blue-500 p-2">Call Me</strong>
                </span>
              </a>

              <br />
              <span className="flex items-center">
                <a href="mailto:felixwebbo8@gmail.com" className="flex gap-2">
                  {" "}
                  <img
                    src="./gif-gmail-logo.gif"
                    alt="Gmail"
                    width={20}
                    className="rounded-sm"
                  />
                  : Send Me An Email
                </a>
              </span>
            </div>

            {/* Footer social media section */}
            <div className="col-span-2 h-[50%] xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between md:order-3">
              <div className="flex flex-col items-start">
                {" "}
                <h2 className="text-2xl underline text-blue-900 mb-2">
                  Follow Me:
                </h2>
                <div className="flex items-center justify-center gap-4 text-2xl cursor-pointer ">
                  <div className="relative group">
                    {tooltip === "Facebook" && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm p-1 rounded">
                        Facebook
                      </div>
                    )}
                    <a
                      href="https://www.facebook.com/felaferer"
                      className="hover:text-blue-500 hover:text-3xl transition-all duration-300"
                      onMouseEnter={() => handleMouseEnter("Facebook")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src="./icons8-fb.gif"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>

                  <div className="relative group">
                    {tooltip === "Twitter" && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm p-1 rounded">
                        Github
                      </div>
                    )}
                    <a
                      href="https://github.com/webboFelix"
                      className="hover:text-blue-500 hover:text-3xl transition-all duration-300"
                      onMouseEnter={() => handleMouseEnter("Twitter")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <GithubIcon />
                    </a>
                  </div>

                  <div className="relative group">
                    {tooltip === "LinkedIn" && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm p-1 rounded">
                        LinkedIn
                      </div>
                    )}
                    <a
                      href="https://www.linkedin.com/in/felix-webbo-b4b177235/"
                      className="hover:text-blue-500 hover:text-3xl transition-all duration-300"
                      onMouseEnter={() => handleMouseEnter("LinkedIn")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <LinkedIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_copyright mt-4">
          <marquee className="h-6 rounded-full bg-black/30">
            <span>&copy;</span>
            <small>
              @webbo.developer/#/@webbo/ info: Phone :
              <span className="text-green-800 text-lg"> +254 113 323746 </span>|{" "}
              Email :
              <span className="text-blue-600 text-lg">
                {" "}
                felixwebbo8@gmail.com
              </span>
              |{" "}
            </small>
          </marquee>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
