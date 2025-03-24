import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { AnimatePresence, motion } from "framer-motion";
import Experiene from "./components/experience/Experiene";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div className="font-mont bg-white w-full min-h-screen dark:bg-black/90">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experiene />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
