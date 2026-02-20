import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedIn } from "../icons/Linkin";
import { GithubIcon } from "../icons/Github";
import Layout from "../layout/Layout";
import {
  BsArrowUpCircle,
  BsEnvelope,
  BsPhone,
  BsGeoAlt,
  BsCalendarCheck,
} from "react-icons/bs";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const navLinks = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/resume", title: "Resume" },
    { to: "/experience", title: "Experience" },
    { to: "/certifications", title: "Certifications" },
    { to: "/project", title: "Projects" },
    { to: "/labs", title: "Labs" },
    { to: "/contact", title: "Contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/webboFelix",
      icon: GithubIcon,
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/felix-webbo-b4b177235/",
      icon: LinkedIn,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/felaferer",
      icon: null,
      image: "./icons8-fb.gif",
      color: "hover:text-blue-500 dark:hover:text-blue-400",
    },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 sm:right-8 z-50 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Scroll to top"
          >
            <BsArrowUpCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="relative w-full overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black border-t border-slate-800/90">
        <Layout className="pt-12 sm:pt-16 md:pt-20 pb-8">
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            {/* Top Section - Brand & Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Brand Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.img
                    src="./profileImg1.png"
                    alt="Felix Webbo"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-cyan-500/30 dark:border-cyan-400/30 shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Felix Webbo
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cloud & Application Security Specialist
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center md:text-left text-sm sm:text-base leading-relaxed">
                  Building secure digital infrastructures through offensive and
                  defensive security strategies. Always learning, always
                  securing.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center md:items-start"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Quick Links
                </h3>
                <nav className="grid grid-cols-2 gap-2 w-full">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        className={`block py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          location.pathname === link.to
                            ? "text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Contact & Social */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center md:items-start"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Get In Touch
                </h3>
                <div className="space-y-3 w-full">
                  <motion.a
                    href="mailto:felixwebbo.fw@gmail.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/50 transition-colors">
                      <BsEnvelope className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-sm sm:text-base">
                      felixwebbo.fw@gmail.com
                    </span>
                  </motion.a>

                  <motion.a
                    href="tel:+254113323746"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                      <BsPhone className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm sm:text-base">
                      +254 113 323746
                    </span>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <BsGeoAlt className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm sm:text-base">Kenya</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <BsCalendarCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-sm sm:text-base">
                      Available for opportunities
                    </span>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon ? (
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <img
                          src={social.image}
                          alt={social.name}
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-8"
            />

            {/* Bottom Section - Copyright & Additional Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span>
                  &copy; {new Date().getFullYear()} Felix Webbo. All rights
                  reserved.
                </span>
                <span className="hidden sm:inline">·</span>
                <span>Built with React & Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:felixwebbo.fw@gmail.com"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Email
                </a>
                <span>·</span>
                <a
                  href="tel:+254113323746"
                  className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Call
                </a>
                <span>·</span>
                <Link
                  to="/contact"
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Contact Form
                </Link>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20" />
          </motion.div>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
