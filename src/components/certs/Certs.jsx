import React, { useRef } from "react";
import Layout from "../layout/Layout";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion.img;

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-50);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <a href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 z-10 h-50 hidden absolute rounded-lg md:!hidden"
      />
    </a>
  );
};

const Art = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white first:mt-0 border border-solid border-black border-r-4 border-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-pink-500 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Certs = () => {
  return (
    <Layout className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
        My Certifications
      </h2>
      <ul>
        <Art
          title="Bits and Bytes of Computer Networking"
          date="March, 2022"
          link="./certs/Bits and Bytes of Computer networking.pdf"
          img={"./certs/Bits and Bytes.png"}
        />

        <Art
          title="Front End Development With React"
          date="March, 2023"
          link="./certs/Front-end Development with React.pdf"
          img={"./certs/React.png"}
        />

        <Art
          title="HTML, CSS, JAVASCRIPT"
          date="Feb, 2022"
          link="./certs/HTML CSS JAVASCRIPT.pdf"
          img={"./certs/HTML.png"}
        />

        <Art
          title="Cybersecurity Fundamentals"
          date="April, 2024"
          link="./certs/Cybersecurity Fundamentals 1.pdf"
          img={"./certs/CF.png"}
        />

        <Art
          title="Cyber Investigator An Interactive Cybersecurity Experience"
          date="April, 2024"
          link="./certs/Cyber Investigator An Interactive Cybersecurity Experience.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Cyber Investigator Part 1 An Interactive Cybersecurity Experience"
          date="April, 2024"
          link="./certs/Cyber Investigator Part 1 An Interactive Cybersecurity Experience.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Cyber Investigator Part 2 An Interactive Cybersecurity Experience"
          date="April, 2024"
          link="./certs/Cyber Investigator Part 2 An Interactive Cybersecurity Experience.pdf"
          img={"./certs/IBM.png"}
        />
        <Art
          title="Capstone Project 3 Design a Secure Network for Increased Security"
          date="April, 2024"
          link="./certs/Capstone Project 3 Design a Secure Network for Increased Security.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Capstone Project 5 Assemble a SOC Team and Perform Security Monitoring Tasks"
          date="April, 2024"
          link="./certs/Capstone Project 5 Assemble a SOC Team and Perform Security Monitoring Tasks.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Capstone Project 6 Investigate an Incident Through Digital Forensics"
          date="April, 2024"
          link="./certs/Capstone Project 6 Investigate an Incident Through Digital Forensics.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Cloud Computing and Virtualization"
          date="April, 2024"
          link="./certs/Cloud Computing and Virtualization.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Cloud Security"
          date="April, 2024"
          link="./certs/Cloud Security.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Cyber Threat Management"
          date="April, 2024"
          link="./certs/Cyber Threat Management.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Digital System Forensics.pdf"
          date="April, 2024"
          link="./certs/Digital System Forensics.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Incident Response and Systems Forensics"
          date="April, 2024"
          link="./certs/Incident Response and Systems Forensics.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Network Security"
          date="April, 2024"
          link="./certs/Network Security.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="System and Network Security"
          date="April, 2024"
          link="./certs/System and Network Security.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Vulnerability Management"
          date="April, 2024"
          link="./certs/Vulnerability Management 1.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Theat and Vulnerability"
          date="April, 2024"
          link="./certs/Theat and Vulnerability.pdf"
          img={"./certs/IBM.png"}
        />

        <Art
          title="Protecting a Device with Malwarebytes"
          date="April, 2024"
          link="./certs/Protecting a Device with Malwarebytes.pdf"
          img={"./certs/IBM.png"}
        />
      </ul>
    </Layout>
  );
};

export default Certs;
