import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { LinkedIn } from "../icons/Linkin";
import { GithubIcon } from "../icons/Github";
import { motion, AnimatePresence } from "framer-motion";
import useThemeSwitcher from "../hook/useThemeSwitcher";

const navLinks = [
  { to: "/", title: "Home" },

  { to: "/resume", title: "Resume" },

  { to: "/project", title: "Projects" },
  { to: "/labs", title: "Labs" },
  { to: "/contact", title: "Contact" },
];

const CustomLink = ({ to, title, className = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`${className} relative group text-sm xl:text-base font-medium transition-colors ${
        isActive
          ? "text-cyan-500 dark:text-cyan-400 font-bold"
          : "text-black dark:text-white"
      } hover:text-cyan-500 dark:hover:text-cyan-400`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-cyan-500 dark:bg-cyan-400 absolute left-0 -bottom-0.5 transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ to, title, toggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === to;

  const handleClick = () => {
    toggle();
    navigate(to);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative group py-3 px-4 w-full text-left text-lg font-medium rounded-lg transition-colors min-h-[48px] flex items-center justify-center ${
        isActive
          ? "text-cyan-400 dark:text-cyan-300 bg-white/10 dark:bg-black/20"
          : "text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10"
      }`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-cyan-400 dark:bg-cyan-600 absolute left-4 right-4 bottom-2 transition-[width] ease duration-300 ${
          isActive
            ? "w-[calc(100%-2rem)]"
            : "w-0 group-hover:w-[calc(100%-2rem)]"
        }`}
      />
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    setShadow(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const handleClick = () => setIsOpen((prev) => !prev);

  const iconColor = shadow && !isOpen ? "dark:bg-black" : "dark:bg-white";

  return (
    <header
      className={`w-full flex items-center justify-between fixed z-50 top-0 left-0 right-0 py-3 font-medium transition-all duration-300 ease-out
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 min-[1536px]:px-24
        bg-white/80 dark:bg-black/80 backdrop-blur-md
        ${shadow ? "shadow-lg shadow-black/10 dark:shadow-white/5" : ""}`}
    >
      {/* Left: Hamburger (mobile/tablet) or spacer (desktop) */}
      <div className="flex items-center min-w-[40px] lg:min-w-0">
        <button
          type="button"
          onClick={handleClick}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="hidden lg:flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors touch-manipulation"
        >
          <span
            className={`bg-black ${iconColor} block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`bg-black ${iconColor} block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-1 ${
              isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />
          <span
            className={`bg-black ${iconColor} block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
            }`}
          />
        </button>
      </div>

      <div className="flex items-center md:hidden justify-center">
        <Link to="/">
          <img
            src="./profileImg1.png"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover hover:scale-105 transition-all duration-300"
          />
        </Link>
      </div>

      {/* Center: Desktop nav links (hidden on lg and below) */}
      <nav className="flex lg:hidden items-center justify-center flex-wrap gap-x-1 gap-y-1 xl:gap-x-3 2xl:gap-x-4 max-w-4xl mx-auto">
        {navLinks.map(({ to, title }) => (
          <CustomLink key={to} to={to} title={title} />
        ))}
      </nav>

      {/* Right: Social + theme (desktop) or profile pic (mobile) */}
      <div className="flex items-center justify-end gap-2 sm:gap-3 min-w-[40px] lg:min-w-0">
        <nav className="flex lg:hidden items-center gap-2 xl:gap-4 flex-shrink-0">
          <motion.a
            href="https://github.com/webboFelix"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-full h-full" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/felix-webbo-b4b177235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6"
          >
            <LinkedIn className="w-full h-full" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/felaferer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <img
              src="./icons8-fb.gif"
              alt=""
              className="w-6 h-6 object-contain"
            />
          </motion.a>
          <button
            type="button"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label={
              mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex items-center justify-center rounded-full p-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {mode === "dark" ? (
              <img
                src="./light-bg-r.svg"
                alt=""
                width={28}
                height={28}
                className="xl:w-8 xl:h-8"
              />
            ) : (
              <img
                src="./dark-bg-r1.svg"
                alt=""
                width={28}
                height={28}
                className="xl:w-8 xl:h-8"
              />
            )}
          </button>
        </nav>

        {/* Mobile: profile thumbnail (when menu closed) */}
        <Link to="/" className="hidden lg:flex flex-shrink-0" aria-label="Home">
          <img
            src="./passport-bg-rm.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full border-2 border-black/10 dark:border-white/10 w-9 h-9 object-cover"
          />
        </Link>
      </div>

      {/* Centered logo when scrolled (desktop) */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none block lg:hidden ${
          shadow ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <Logo />
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 dark:bg-white/20 backdrop-blur-sm hidden lg:block"
            onClick={handleClick}
            aria-hidden="true"
          />
        )}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-20 bottom-20 xs:inset-x-6 sm:inset-x-8 rounded-2xl z-50 flex flex-col items-center justify-center py-8 px-4 bg-black/95 dark:bg-white/95 backdrop-blur-xl border border-white/10 dark:border-black/10 shadow-2xl overflow-y-auto hidden lg:flex"
          >
            <nav className="flex flex-col w-full max-w-sm gap-1">
              {navLinks.map(({ to, title }) => (
                <CustomMobileLink
                  key={to}
                  to={to}
                  title={title}
                  toggle={handleClick}
                />
              ))}
            </nav>
            <div className="w-16 h-px bg-white/30 dark:bg-black/30 my-6" />
            <nav className="flex items-center justify-center gap-4 flex-wrap">
              <motion.a
                href="https://github.com/webboFelix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/10 text-white dark:text-black"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/felix-webbo-b4b177235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/10"
              >
                <LinkedIn className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/felaferer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/10"
              >
                <img
                  src="./icons8-fb.gif"
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              </motion.a>
              <motion.button
                type="button"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/10"
              >
                {mode === "dark" ? (
                  <img src="./light-bg-r.svg" alt="" width={24} height={24} />
                ) : (
                  <img src="./dark-bg-r1.svg" alt="" width={24} height={24} />
                )}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
