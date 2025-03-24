import React from "react";
import { motion } from "framer-motion";

const AnimatedComponent = ({ duration = 0.5, children }) => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
