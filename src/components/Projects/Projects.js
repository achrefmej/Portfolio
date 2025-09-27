import React from "react";
import { motion } from "framer-motion";
import ModernProjects from "./ModernProjects";

function Projects() {
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
    out: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ minHeight: "100vh" }}
    >
      <ModernProjects />
    </motion.div>
  );
}

export default Projects;