import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Hooks
import useResponsive from "./hooks/useResponsive";
import useMobileOptimization from "./hooks/useMobileOptimization";

// Styles
import "./styles/rtl.css";
import "./styles/mobile.css";

// Components Desktop
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";

// Components Mobile
import MobileNavbar from "./components/Mobile/MobileNavbar";
import MobileHero from "./components/Mobile/MobileHero";
import MobileAbout from "./components/Mobile/MobileAbout";
import MobileProjects from "./components/Mobile/MobileProjects";
import MobileContact from "./components/Mobile/MobileContact";
import MobileResume from "./components/Mobile/MobileResume";
import MobileFooter from "./components/Mobile/MobileFooter";

// Styles
import "./styles/modern.css";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {
  const [load, updateLoad] = useState(true);
  const { isMobile, width } = useResponsive();
  
  // Optimisations pour mobile
  useMobileOptimization();

  // Debug log
  useEffect(() => {
    console.log('🔍 Responsive Debug:', { isMobile, width, innerWidth: window.innerWidth });
  }, [isMobile, width]);

  useEffect(() => {
    // Initialiser AOS pour les animations au scroll
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100,
      // Désactiver les animations sur mobile pour améliorer les performances
      disable: isMobile ? 'mobile' : false,
    });

    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Force unlock scroll after preloader
  useEffect(() => {
    if (!load) {
      // Ensure body can scroll after preloader
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      
      // Remove any lingering classes that might block scroll
      document.body.classList.remove('menu-open');
    }
  }, [load]);

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

  // Composant Home adaptatif
  const AdaptiveHome = () => (
    isMobile ? (
      <>
        <MobileHero />
        <MobileContact />
      </>
    ) : (
      <Home />
    )
  );

  // Composant About adaptatif
  const AdaptiveAbout = () => (
    isMobile ? <MobileAbout /> : <About />
  );

  // Composant Projects adaptatif
  const AdaptiveProjects = () => (
    isMobile ? <MobileProjects /> : <Projects />
  );

  // Composant Resume adaptatif
  const AdaptiveResume = () => (
    isMobile ? <MobileResume /> : <Resume />
  );

  return (
    <ThemeProvider>
      <Router>
        <Preloader load={load} />

        <div 
          className="App" 
          id="scroll"
        >
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <ScrollToTop />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<AdaptiveHome />} />
              <Route path="/project" element={<AdaptiveProjects />} />
              <Route path="/about" element={<AdaptiveAbout />} />
              <Route path="/resume" element={<AdaptiveResume />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
          
          {!isMobile && <Footer />}
          
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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
