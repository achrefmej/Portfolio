import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Styles
import "./styles/rtl.css";

// Components
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";

// Styles
import "./styles/modern.css";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    // Initialiser AOS pour les animations au scroll
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100,
    });

    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <ThemeProvider>
      <Router>
        <Preloader load={load} />
        <motion.div 
          className="App" 
          id={load ? "no-scroll" : "scroll"}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Navbar />
          <ScrollToTop />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
          
          {/* Toast notifications */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
              },
              success: {
                iconTheme: {
                  primary: 'var(--primary-500)',
                  secondary: 'white',
                },
              },
              error: {
                iconTheme: {
                  primary: '#f43f5e',
                  secondary: 'white',
                },
              },
            }}
          />
        </motion.div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
