import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { TwitterIcon } from "../icons/Icons";
import { LinkedIn } from "../icons/Linkin";
import { GithubIcon } from "../icons/Github";
//import { SunnyIcon } from "../icons/Sunny";
//import { MoonIcon } from "../icons/Moon";

import { motion } from "framer-motion";
import useThemeSwitcher from "../hook/useThemeSwitcher";

const CustomLink = ({ to, title, className = "" }) => {
  const router = useLocation();
  return (
    <Link
      to={to}
      className={`${className} relative group ${
        router.pathname === to ? "font-bold text-cyan-500 text-2xl" : ""
      }`}
    >
      {title}

      <span
        className={`h-[1px] inline-block font-semibold  bg-black dark:bg-white absolute left-0 -bottom-0  group-hover:w-full transition-[width] ease duration-300 ${
          router.pathname === to ? "w-full " : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ to, title, className = "", toggle }) => {
  const router = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    toggle();
    navigate(to);
  };
  return (
    <button
      to={to}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block  bg-black dark:bg-white absolute left-0 -bottom-0  group-hover:w-full transition-[width] ease duration-300 dark:bg-black ${
          router.pathname === to ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`w-full px-32 py-2 font-medium  flex items-center justify-between dark:text-white fixed z-30 lg:px-16 md:px-12 sm:px-8 transition-shadow duration-300 ${
        shadow ? "shadow-navbar dark:shadow-navbarLight dark:bg-white" : ""
      }`}
    >
      <button
        onClick={handleClick}
        className="flex-col my-2 items-center justify-center hidden lg:flex"
      >
        <span
          className={`bg-black  ${
            shadow ? "dark:bg-black" : "dark:bg-white"
          } block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black ${
            shadow ? "dark:bg-black" : "dark:bg-white"
          }  block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black ${
            shadow ? "dark:bg-black" : "dark:bg-white"
          }  block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className={`${shadow ? "dark:text-black" : ""}`}>
          <CustomLink to="/" title="Home" className="mr-4" />

          <CustomLink to="/about" title="About" className="mx-4" />

          <CustomLink to="/education" title="Education" className="mx-4" />

          <CustomLink to="/experience" title="Experience" className="mx-4" />

          <CustomLink
            to="/certifications"
            title="Certifications"
            className="mx-4"
          />

          <CustomLink to="/project" title="Project" className="mx-4" />

          <CustomLink to="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/webboFelix"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/felix-webbo-b4b177235/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedIn />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/felaferer"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <img src="./icons8-fb.gif" alt="fb" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === "dark" ? (
              <img
                src="./light-bg-r.svg"
                alt="lightMode"
                width={50}
                height={50}
                className="animate-pulse animate-spin-slow"
              />
            ) : (
              <img
                src="./dark-bg-r1.svg"
                alt="darkMode"
                width={50}
                height={50}
                className="animate-pulse"
              />
            )}
          </button>
        </nav>
      </div>

      <img
        src="./passport-bg-rm.png"
        alt=""
        width={16}
        height={16}
        className="rounded-full hidden lg:flex "
      />

      {/**for mobile  */}

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 dark:bg-white/70 rounded-lg backdrop-blur-md py-20"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              to="/"
              title="Home"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              to="/about"
              title="About"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              to="/education"
              title="Education"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              to="/experience"
              title="Experience"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              to="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <div className="bg-black/20 w-1/2 h-1 shadow-md" />

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/webboFelix"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/felix-webbo-b4b177235/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedIn />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/felaferer"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <img src="./icons8-fb.gif" alt="fb" />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="ml-3 flex items-center justify-center rounded-full p-1"
            >
              {mode === "dark" ? (
                <img
                  src="./light-bg-r.svg"
                  alt="lightMode"
                  width={50}
                  height={50}
                  className="animate-pulse animate-spin-slow"
                />
              ) : (
                <img
                  src="./dark-bg-r1.svg"
                  alt="darkMode"
                  width={50}
                  height={50}
                  className="animate-pulse"
                />
              )}
            </button>
          </nav>
        </motion.div>
      ) : (
        ""
      )}
      <div
        className={`absolute left-[50%] top-1 translate-x-[-50%] ${
          shadow ? "flex" : "hidden"
        }`}
      >
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
