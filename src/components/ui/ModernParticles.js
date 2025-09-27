import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: ${props => props.opacity};
  filter: blur(${props => props.blur}px);
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.gradient};
  border-radius: ${props => props.rounded ? '50%' : '20%'};
  opacity: 0.1;
  filter: blur(40px);
`;

const ModernParticles = ({ 
  particleCount = 50,
  shapes = true,
  interactive = true 
}) => {
  const { isDarkMode } = useTheme();

  // Génération des particules
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    opacity: Math.random() * 0.8 + 0.2,
    blur: Math.random() * 2,
    color: isDarkMode 
      ? `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.3})`
      : `rgba(124, 58, 237, ${Math.random() * 0.4 + 0.2})`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Formes flottantes en arrière-plan
  const floatingShapes = [
    {
      id: 'shape1',
      width: 300,
      height: 300,
      x: 10,
      y: 20,
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
      rounded: true,
      duration: 25,
    },
    {
      id: 'shape2',
      width: 200,
      height: 400,
      x: 70,
      y: 60,
      gradient: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(245, 158, 11, 0.1))',
      rounded: false,
      duration: 30,
    },
    {
      id: 'shape3',
      width: 250,
      height: 250,
      x: 5,
      y: 70,
      gradient: 'linear-gradient(225deg, rgba(244, 63, 94, 0.1), rgba(168, 85, 247, 0.1))',
      rounded: true,
      duration: 20,
    },
  ];

  const particleVariants = {
    animate: (custom) => ({
      y: [0, -20, 0],
      x: [0, Math.sin(custom) * 10, 0],
      scale: [1, 1.2, 1],
      opacity: [custom.opacity, custom.opacity * 0.5, custom.opacity],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay,
      }
    })
  };

  const shapeVariants = {
    animate: (custom) => ({
      x: [0, 50, 0],
      y: [0, -30, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "linear",
      }
    })
  };

  return (
    <ParticlesContainer>
      {/* Formes flottantes */}
      {shapes && floatingShapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          custom={shape}
          variants={shapeVariants}
          animate="animate"
          style={{
            width: shape.width,
            height: shape.height,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          gradient={shape.gradient}
          rounded={shape.rounded}
        />
      ))}

      {/* Particules */}
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          custom={particle}
          variants={particleVariants}
          animate="animate"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          size={particle.size}
          opacity={particle.opacity}
          blur={particle.blur}
          color={particle.color}
        />
      ))}

      {/* Effet de grille en arrière-plan */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 0.02 : 0.03,
        }}
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={isDarkMode ? "#ffffff" : "#000000"}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </ParticlesContainer>
  );
};

export default ModernParticles;