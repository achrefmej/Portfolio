import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const PreloaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-500), var(--accent-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
`;

const LoadingText = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background: var(--bg-card);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-500), var(--accent-cyan));
  border-radius: 2px;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-500);
  border-radius: 50%;
  opacity: 0.6;
`;

function Pre({ load }) {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5, duration: 0.6 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        delay: 0.8, 
        duration: 1.2, 
        ease: "easeInOut" 
      }
    }
  };

  // Génération des particules
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  const particleVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: [0, 1, 0],
      y: [0, -50, -100],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatePresence>
      {load && (
        <PreloaderContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ParticleContainer>
            {particles.map((particle) => (
              <Particle
                key={particle.id}
                custom={particle}
                variants={particleVariants}
                initial="hidden"
                animate="visible"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                }}
              />
            ))}
          </ParticleContainer>

          <LoaderContent>
            <LogoContainer
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              AM
            </LogoContainer>

            <LoadingText
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Chargement de l'expérience...
            </LoadingText>

            <ProgressBar>
              <ProgressFill
                variants={progressVariants}
                initial="hidden"
                animate="visible"
              />
            </ProgressBar>
          </LoaderContent>
        </PreloaderContainer>
      )}
    </AnimatePresence>
  );
}

export default Pre;
