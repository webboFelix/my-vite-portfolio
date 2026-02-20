import React, { useState } from "react";
import Layout from "../layout/Layout";
import AnimatedText from "../animations/AnimatedText";
import Transition from "../transition/Transition";
import { motion, AnimatePresence } from "framer-motion";
import { LinkArrow } from "../icons/ExternalLink";

const LabCard = ({ title, problemStatement, approach, tools, screenshots, lessons, link, date, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black/50 border-2 border-black dark:border-white/20 rounded-2xl p-6 mb-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold dark:text-white mb-2 capitalize">{title}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
        </div>
        <span className="px-3 py-1 bg-cyan-300 dark:bg-cyan-600 text-black dark:text-white rounded-full text-xs font-semibold">
          {category}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold dark:text-white mb-2">Problem Statement</h4>
        <p className="text-gray-700 dark:text-gray-300 text-justify">{problemStatement}</p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold dark:text-white mb-2">Approach</h4>
              <p className="text-gray-700 dark:text-gray-300 text-justify">{approach}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold dark:text-white mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-lg text-sm font-medium dark:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {screenshots && screenshots.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold dark:text-white mb-2">Screenshots</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {screenshots.map((screenshot, index) => (
                    <motion.img
                      key={index}
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full rounded-lg border-2 border-black/20 dark:border-white/20 hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4">
              <h4 className="text-lg font-semibold dark:text-white mb-2">Key Lessons Learned</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 font-semibold"
              >
                View Writeup <LinkArrow className="w-4 ml-1" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </motion.div>
  );
};

const LabSection = ({ title, labs, icon }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-8">
        {icon && <div className="text-4xl">{icon}</div>}
        <h2 className="text-4xl font-bold dark:text-white capitalize">{title}</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>
      <div className="space-y-6">
        {labs.map((lab, index) => (
          <LabCard key={index} {...lab} />
        ))}
      </div>
    </motion.section>
  );
};

const LabChallenges = () => {
  // Sample data - Replace with your actual lab challenges
  const hackTheBoxLabs = [
    {
      title: "Starting Point - Meow",
      problemStatement: "Meow is a beginner-friendly machine designed to introduce basic penetration testing concepts. The goal is to gain initial access and retrieve the user flag.",
      approach: "Started with port scanning using nmap to identify open ports and services. Discovered an open Telnet service on port 23. Attempted default credentials and found that the root user had no password set. Successfully logged in and retrieved the user flag.",
      tools: ["nmap", "telnet", "Linux commands"],
      screenshots: ["./labs/htb-meow-1.png", "./labs/htb-meow-2.png"],
      lessons: [
        "Always check for default credentials and misconfigurations",
        "Port scanning is crucial for reconnaissance",
        "Never leave services with default or weak credentials",
      ],
      link: "#",
      date: "January 2024",
      category: "HackTheBox",
    },
    {
      title: "Starting Point - Fawn",
      problemStatement: "Fawn is another beginner machine focusing on FTP service exploitation. The challenge involves accessing an FTP server and retrieving sensitive information.",
      approach: "Performed port scanning and identified FTP service on port 21. Attempted anonymous FTP login which was successful. Explored the FTP directory structure and found a flag file. Downloaded the flag using FTP commands.",
      tools: ["nmap", "FTP client", "Linux commands"],
      screenshots: ["./labs/htb-fawn-1.png"],
      lessons: [
        "Anonymous FTP access is a common misconfiguration",
        "Always check for anonymous access on FTP services",
        "Proper FTP security configuration is essential",
      ],
      link: "#",
      date: "January 2024",
      category: "HackTheBox",
    },
  ];

  const tryHackMeLabs = [
    {
      title: "Basic Pentesting",
      problemStatement: "A vulnerable machine designed to practice basic penetration testing techniques including enumeration, exploitation, and privilege escalation.",
      approach: "Started with network scanning to identify the target. Enumerated HTTP services and discovered a web application. Found a vulnerable login page and used brute force techniques. Gained initial access through SSH with discovered credentials. Performed privilege escalation using sudo misconfigurations.",
      tools: ["nmap", "gobuster", "hydra", "SSH", "Linux enumeration"],
      screenshots: ["./labs/thm-basic-1.png", "./labs/thm-basic-2.png"],
      lessons: [
        "Enumeration is key to successful penetration testing",
        "Weak passwords are still a common vulnerability",
        "Sudo misconfigurations can lead to privilege escalation",
        "Always document findings during penetration testing",
      ],
      link: "#",
      date: "February 2024",
      category: "TryHackMe",
    },
    {
      title: "OWASP Top 10",
      problemStatement: "A comprehensive lab covering the OWASP Top 10 vulnerabilities including SQL injection, XSS, CSRF, and more.",
      approach: "Systematically worked through each OWASP Top 10 vulnerability. Started with SQL injection testing using manual techniques and SQLMap. Tested for XSS vulnerabilities using various payloads. Explored authentication bypass techniques. Practiced file upload vulnerabilities and command injection.",
      tools: ["Burp Suite", "SQLMap", "OWASP ZAP", "Browser DevTools"],
      screenshots: ["./labs/thm-owasp-1.png"],
      lessons: [
        "Understanding OWASP Top 10 is fundamental for web security",
        "Automated tools complement manual testing",
        "Context matters when exploiting vulnerabilities",
        "Proper input validation prevents most web vulnerabilities",
      ],
      link: "#",
      date: "March 2024",
      category: "TryHackMe",
    },
  ];

  const packetTracerLabs = [
    {
      title: "Network Security Configuration",
      problemStatement: "Design and implement a secure network topology using Cisco Packet Tracer, including firewall rules, VLAN segmentation, and access control lists.",
      approach: "Created a multi-VLAN network topology with separate segments for different departments. Configured inter-VLAN routing using a router-on-a-stick. Implemented ACLs to control traffic between VLANs. Configured firewall rules to block unauthorized access. Set up NAT for internet connectivity while maintaining security.",
      tools: ["Cisco Packet Tracer", "Cisco IOS commands"],
      screenshots: ["./labs/pt-network-1.png", "./labs/pt-network-2.png"],
      lessons: [
        "Network segmentation improves security posture",
        "ACLs are essential for traffic control",
        "Proper VLAN configuration prevents lateral movement",
        "Documentation is crucial for network management",
      ],
      link: "#",
      date: "April 2024",
      category: "Packet Tracer",
    },
    {
      title: "VPN Configuration Lab",
      problemStatement: "Configure site-to-site VPN connections between multiple branch offices using Packet Tracer, ensuring secure communication channels.",
      approach: "Designed a network topology with multiple branch offices. Configured IPsec VPN tunnels between sites. Implemented encryption and authentication protocols. Tested connectivity and verified secure communication. Documented the configuration for future reference.",
      tools: ["Cisco Packet Tracer", "IPsec", "Cisco IOS"],
      screenshots: ["./labs/pt-vpn-1.png"],
      lessons: [
        "VPNs provide secure communication over untrusted networks",
        "Proper key management is critical for VPN security",
        "Testing is essential after VPN configuration",
        "Understanding encryption protocols is important",
      ],
      link: "#",
      date: "May 2024",
      category: "Packet Tracer",
    },
  ];

  return (
    <>
      <Transition />
      <Layout className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <AnimatedText
          text="Lab Challenges & Writeups"
          className="!text-5xl text-center mb-4 xl:!text-4xl md:!text-3xl sm:!text-2xl"
        />
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
          Explore my journey through various cybersecurity challenges, including penetration testing labs,
          network security configurations, and hands-on exercises. Each writeup includes problem statements,
          methodologies, tools used, and key lessons learned.
        </p>

        <LabSection
          title="HackTheBox Labs"
          labs={hackTheBoxLabs}
          icon="🔓"
        />

        <LabSection
          title="TryHackMe Labs"
          labs={tryHackMeLabs}
          icon="🎯"
        />

        <LabSection
          title="Packet Tracer Labs"
          labs={packetTracerLabs}
          icon="🌐"
        />
      </Layout>
    </>
  );
};

export default LabChallenges;
