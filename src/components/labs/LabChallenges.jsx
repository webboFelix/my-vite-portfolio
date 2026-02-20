import React, { useState } from "react";
import Layout from "../layout/Layout";
import AnimatedText from "../animations/AnimatedText";
import Transition from "../transition/Transition";
import { motion, AnimatePresence } from "framer-motion";
import { LinkArrow } from "../icons/ExternalLink";

const LabCard = ({
  title,
  problemStatement,
  approach,
  tools,
  screenshots,
  lessons,
  link,
  date,
  category,
}) => {
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
          <h3 className="text-2xl font-bold dark:text-white mb-2 capitalize">
            {title}
          </h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {date}
          </span>
        </div>
        <span className="px-3 py-1 bg-cyan-300 dark:bg-cyan-600 text-black dark:text-white rounded-full text-xs font-semibold">
          {category}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold dark:text-white mb-2">
          Problem Statement
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          {problemStatement}
        </p>
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
              <h4 className="text-lg font-semibold dark:text-white mb-2">
                Approach
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                {approach}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold dark:text-white mb-2">
                Tools Used
              </h4>
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
                <h4 className="text-lg font-semibold dark:text-white mb-2">
                  Screenshots
                </h4>
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
              <h4 className="text-lg font-semibold dark:text-white mb-2">
                Key Lessons Learned
              </h4>
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
        <h2 className="text-4xl font-bold dark:text-white capitalize">
          {title}
        </h2>
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
  {
    /* HackTheBox Labs */
  }
  const hackTheBoxLabs = [
    {
      title: "Introduction to Network Traffic Analysis",
      problemStatement:
        "Analyze network traffic to identify normal and malicious communication patterns, applying foundational traffic analysis techniques in a controlled lab environment.",
      approach:
        "Completed guided modules focusing on packet inspection, protocol analysis, and traffic pattern recognition. Captured and examined network traffic using analysis tools to identify anomalies and suspicious activity. Applied filtering techniques to isolate specific protocols and sessions for deeper investigation. Interpreted TCP handshakes, DNS queries, and HTTP communications to understand network behavior. Documented findings and correlated observations with security concepts to strengthen investigative skills.",
      tools: [
        "Wireshark",
        "TCP/IP Protocol Suite",
        "HTB Academy Lab Environment",
      ],
      screenshots: ["./labs/htb-network-traffic-analysis-1.png"],
      lessons: [
        "Traffic analysis is critical for detecting intrusions and abnormal behavior",
        "Protocol understanding improves investigative accuracy",
        "Effective filtering streamlines packet analysis",
        "Baseline network behavior is essential for identifying anomalies",
      ],
      link: "./labs/reports/Assignment 2 week 2.pdf",
      date: "January 2026",
      category: "HackTheBox",
    },
    {
      title: "Web Requests",
      problemStatement:
        "Analyze and manipulate web requests to understand how client-server communication operates and identify potential security weaknesses in web applications.",
      approach:
        "Completed practical modules exploring HTTP methods, headers, status codes, and request/response structures. Intercepted and modified web traffic to examine how data is transmitted between clients and servers. Analyzed authentication mechanisms, cookies, and session handling to understand web security fundamentals. Tested parameter manipulation and observed server responses to identify potential vulnerabilities. Documented findings and reinforced understanding of web communication protocols.",
      tools: [
        "Burp Suite",
        "Browser Developer Tools",
        "HTTP/HTTPS Protocols",
        "HTB Academy Lab Environment",
      ],
      screenshots: ["./labs/htb-web-requests-1.png"],
      lessons: [
        "Understanding HTTP is fundamental to web security testing",
        "Interception tools reveal hidden request and response details",
        "Session management plays a critical role in application security",
        "Manipulating requests helps identify potential vulnerabilities",
      ],
      link: "./labs/reports/Assignment 2 week 3.pdf",
      date: "January 2026",
      category: "HackTheBox",
    },
  ];

  {
    /* TryHackMe Labs */
  }
  const tryHackMeLabs = [
    {
      title: "DNS In Detail",
      problemStatement:
        "Explore the Domain Name System (DNS) in depth to understand its structure, record types, resolution process, and associated security risks.",
      approach:
        "Completed hands-on labs analyzing DNS queries, responses, and record types including A, AAAA, MX, CNAME, and TXT. Used command-line tools to perform DNS lookups and trace resolution paths. Investigated how recursive and authoritative DNS servers interact during name resolution. Examined common DNS-related attacks such as cache poisoning and DNS tunneling. Documented findings to strengthen understanding of DNS operations and security implications.",
      tools: [
        "TryHackMe Lab Environment",
        "nslookup",
        "dig",
        "Wireshark",
        "DNS Protocol Analysis",
      ],
      screenshots: ["./labs/thm-dns-in-detail-1.png"],
      lessons: [
        "DNS is a critical foundation of internet communication",
        "Understanding record types improves troubleshooting accuracy",
        "DNS misconfigurations can introduce serious security risks",
        "Traffic analysis helps detect DNS-based attacks",
      ],
      link: "./labs/reports/Assignment 1 Week 3.pdf",
      date: "January 2026",
      category: "TryHackMe",
    },
    {
      title: "OWASP Top 10",
      problemStatement:
        "A comprehensive lab covering the OWASP Top 10 vulnerabilities including SQL injection, XSS, CSRF, and more.",
      approach:
        "Systematically worked through each OWASP Top 10 vulnerability. Started with SQL injection testing using manual techniques and SQLMap. Tested for XSS vulnerabilities using various payloads. Explored authentication bypass techniques. Practiced file upload vulnerabilities and command injection.",
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

  {
    /* Packet Tracer Labs */
  }
  const packetTracerLabs = [
    {
      title: "Examine TCP/IP and OSI Models in Action",
      problemStatement:
        "Analyze and demonstrate how data flows through the TCP/IP and OSI models using Cisco Packet Tracer, identifying the role of each layer during network communication.",
      approach:
        "Designed a simple network topology with end devices, switches, and routers. Generated traffic between hosts to observe encapsulation and de-encapsulation processes. Used simulation mode in Packet Tracer to inspect PDUs at each layer. Analyzed how protocols operate within both the OSI and TCP/IP models. Documented findings to correlate theoretical concepts with practical implementation.",
      tools: [
        "Cisco Packet Tracer",
        "TCP/IP Protocol Suite",
        "OSI Model Analysis",
      ],
      screenshots: ["./labs/pt-osi-tcpip-1.png"],
      lessons: [
        "Each OSI and TCP/IP layer performs a specific function in data transmission",
        "Encapsulation and de-encapsulation occur at every layer during communication",
        "Simulation tools help visualize abstract networking concepts",
        "Understanding protocol layering improves troubleshooting skills",
      ],
      link: "./labs/reports/Assignment 1 week 1.pdf",
      date: "January 2026",
      category: "Packet Tracer",
    },
    {
      title: "Use Wireshark to Examine Network Traffic",
      problemStatement:
        "Capture and analyze network traffic using Wireshark to identify protocols, inspect packet structures, and understand communication patterns between devices.",
      approach:
        "Installed and configured Wireshark to capture live network traffic. Generated different types of traffic including HTTP, DNS, and ICMP. Applied display filters to isolate specific protocols and sessions. Examined packet details to analyze headers, flags, and payload information. Documented findings to correlate observed traffic with networking theory.",
      tools: [
        "Wireshark",
        "TCP/IP Protocol Suite",
        "Network Interface Analyzer",
      ],
      screenshots: ["./labs/wireshark-analysis-1.png"],
      lessons: [
        "Packet analysis reveals how protocols operate in real time",
        "Filtering is essential for efficient traffic investigation",
        "Understanding TCP flags aids in troubleshooting connectivity issues",
        "Network monitoring is critical for security and performance analysis",
      ],
      link: "./labs/reports/Assignment 2 week 1.pdf",
      date: "January 2026",
      category: "Wireshark",
    },
    {
      title: "Build a Switch and Router Network",
      problemStatement:
        "Design and configure a functional network using switches and routers to enable inter-VLAN communication and ensure reliable end-to-end connectivity.",
      approach:
        "Designed a small enterprise topology with multiple VLANs connected through a Layer 2 switch and a router. Configured VLANs, trunk links, and router-on-a-stick for inter-VLAN routing. Assigned IP addressing to all interfaces and end devices. Verified connectivity using ping and troubleshooting commands. Documented configurations and validated proper data flow across the network.",
      tools: [
        "Cisco Packet Tracer",
        "Cisco IOS",
        "VLAN Configuration",
        "Router-on-a-Stick",
      ],
      screenshots: ["./labs/switch-router-network-1.png"],
      lessons: [
        "VLAN segmentation improves network organization and security",
        "Trunk links are essential for inter-VLAN communication",
        "Router-on-a-stick enables routing between multiple VLANs",
        "Systematic testing ensures reliable network deployment",
      ],
      link: "./labs/reports/Assignment 1 week 2.pdf",
      date: "January 2026",
      category: "Packet Tracer",
    },
    {
      title: "VLANs and Secure Switch Configuration",
      problemStatement:
        "Configure VLAN segmentation and implement Layer 2 security features on a switch to enhance network isolation, control access, and mitigate common switching attacks.",
      approach:
        "Designed a segmented network using multiple VLANs to separate departments and improve traffic management. Configured access and trunk ports, assigned VLAN memberships, and implemented inter-VLAN routing where required. Applied switch security features including port security, DHCP snooping, and BPDU Guard to prevent unauthorized access and Layer 2 attacks. Verified configuration using show commands and connectivity tests. Documented all configurations and security measures for validation and future reference.",
      tools: ["Cisco Packet Tracer"],
      screenshots: ["./labs/vlan-secure-switch-1.png"],
      lessons: [
        "VLANs enhance both performance and security through logical segmentation",
        "Port security restricts unauthorized device access",
        "DHCP snooping helps prevent rogue DHCP attacks",
        "Layer 2 security features are critical in protecting switched networks",
      ],
      link: "./labs/reports/Assignment 1 week 4.pdf",
      date: "January 2026",
      category: "Packet Tracer",
    },
    {
      title: "Packet Tracer WLAN Configuration",
      problemStatement:
        "Configure secure wireless LAN environments in Packet Tracer, implementing both WPA2-Personal and WPA2-Enterprise authentication to ensure protected wireless communication.",
      approach:
        "Configured a home wireless router with DHCP services and WPA2-PSK security for secure client connectivity. Deployed and configured a Wireless LAN Controller (WLC) with multiple VLAN interfaces. Created and mapped WLANs to respective VLANs, implementing both WPA2-PSK and WPA2-Enterprise authentication using a RADIUS server. Enabled FlexConnect settings and verified client association, IP assignment, and end-to-end connectivity. Documented configuration steps and validated secure communication across the network.",
      tools: [
        "Cisco Packet Tracer",
        "Wireless LAN Controller (WLC)",
        "WPA2-PSK",
        "WPA2-Enterprise",
        "RADIUS Server",
        "FlexConnect",
      ],
      screenshots: ["./labs/pt-wlan-config-1.png"],
      lessons: [
        "WPA2-Enterprise provides stronger authentication through centralized RADIUS validation",
        "Proper VLAN mapping is essential for WLAN segmentation",
        "DHCP configuration ensures seamless wireless client connectivity",
        "Wireless security configuration requires both encryption and authentication controls",
      ],
      link: "./labs/reports/Assignment 2 week 4.pdf",
      date: "January 2026",
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
          Explore my journey through various cybersecurity challenges, including
          penetration testing labs, network security configurations, and
          hands-on exercises. Each writeup includes problem statements,
          methodologies, tools used, and key lessons learned.
        </p>

        <LabSection title="HackTheBox Labs" labs={hackTheBoxLabs} icon="🔓" />

        <LabSection title="TryHackMe Labs" labs={tryHackMeLabs} icon="🎯" />

        <LabSection
          title="Packet Tracer and Other Tools Labs"
          labs={packetTracerLabs}
          icon="🌐"
        />
      </Layout>
    </>
  );
};

export default LabChallenges;
