import React from "react";
import { motion } from "framer-motion";
import ModernHero from "./ModernHero";
import Home2 from "./Home2";
import ModernContact from "../Contact/ModernContact";

function Home() {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ModernHero />
      <Home2 />
      <ModernContact />
    </motion.div>
  );
}

export default Home;
