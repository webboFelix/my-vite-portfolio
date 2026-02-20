import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { AnimatePresence, motion } from "framer-motion";
import Experiene from "./components/experience/Experiene";
import Footer from "./components/footer/Footer";
import Article from "./components/Article/Article";
import Certs from "./components/certs/Certs";
//import Education from "./components/education/Education";
//import Edu from "./components/showEducation/Edu";
import LabChallenges from "./components/labs/LabChallenges";
import Resume from "./components/resume/Resume";

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div className="font-mont bg-white dark:bg-black/90 w-full min-h-screen min-h-dvh overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experiene />} />
          <Route path="/certifications" element={<Certs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Article />} />
          <Route path="/labs" element={<LabChallenges />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
