import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ModernParticles from '../ui/ModernParticles';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPlay,
  FaCode,
  FaMobile,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFilter,
  FaDocker
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiFlutter
} from 'react-icons/si';

// Import des images de projets
import appvoloh1 from "../../Assets/Projects/appvoloh1.gif";
import appvolo from "../../Assets/Projects/appvolo.gif";
import appvolo_1 from "../../Assets/Projects/appvolo_1.gif";
import meta from "../../Assets/Projects/gif1.gif";
import ios from "../../Assets/Projects/ios.png";
import VICTORIOUS from "../../Assets/Projects/demo1.gif";

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0; /* Augmenter de 6rem à 8rem pour plus d'espace */
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'var(--primary-500)' : 'var(--bg-card)'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary-500)' : 'var(--border-color)'};
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: var(--primary-500);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
  padding: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0;
  }

  /* Effet de parallaxe pour les cartes */
  perspective: 1000px;

  /* Animation d'apparition en cascade */
  .project-card {
    opacity: 0;
    transform: translateY(50px);
    animation: slideInUp 0.6s ease forwards;
  }

  .project-card:nth-child(1) { animation-delay: 0.1s; }
  .project-card:nth-child(2) { animation-delay: 0.2s; }
  .project-card:nth-child(3) { animation-delay: 0.3s; }
  .project-card:nth-child(4) { animation-delay: 0.4s; }
  .project-card:nth-child(5) { animation-delay: 0.5s; }
  .project-card:nth-child(6) { animation-delay: 0.6s; }

  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  overflow: hidden;
  backdrop-filter: blur(30px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: 520px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 0 40px rgba(168, 85, 247, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(168, 85, 247, 0.03) 0%, 
      rgba(6, 182, 212, 0.03) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, 
      var(--primary-500), 
      var(--accent-500), 
      var(--primary-600)
    );
    border-radius: 27px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.15),
      0 0 60px rgba(168, 85, 247, 0.2);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }

    .project-glow {
      opacity: 1;
      transform: scale(1.1);
    }

    .floating-icon {
      transform: translateY(-5px) rotate(10deg);
    }
  }

  .project-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, 
      rgba(168, 85, 247, 0.1) 0%, 
      transparent 70%
    );
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 0;
    pointer-events: none;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, 
    var(--bg-secondary), 
    var(--bg-tertiary),
    var(--primary-100)
  );
  border-radius: 20px 20px 0 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(168, 85, 247, 0.1), 
      rgba(6, 182, 212, 0.1)
    );
    z-index: 1;
  }

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.9) saturate(1.1);
  }

  &:hover img,
  &:hover video {
    transform: scale(1.15) rotate(1deg);
    filter: brightness(1.1) saturate(1.2);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(168, 85, 247, 0.2),
      rgba(6, 182, 212, 0.2)
    );
    opacity: 0.3;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    z-index: 2;
    backdrop-filter: blur(5px);
  }

  &:hover .overlay {
    opacity: 1;
    background: linear-gradient(
      135deg,
      rgba(168, 85, 247, 0.9),
      rgba(6, 182, 212, 0.9)
    );
    backdrop-filter: blur(10px);
  }

  .tech-preview {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    z-index: 3;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }

  &:hover .tech-preview {
    opacity: 1;
    transform: translateY(0);
  }

  .tech-icon {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--primary-600);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .project-status {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 255, 136, 0.9);
    color: white;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
    z-index: 3;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  &:hover .project-status {
    opacity: 1;
    transform: translateX(0);
  }
`;

const DevOpsIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    #1e3a8a 0%, 
    #3730a3 50%, 
    #059669 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(255, 255, 255, 0.05) 20px,
      rgba(255, 255, 255, 0.05) 40px
    );
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .devops-icon {
    font-size: 5rem;
    color: white;
    z-index: 2;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background: var(--bg-card);
  border-radius: 0 0 25px 25px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--primary-300), 
      transparent
    );
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectActionButton = styled(motion.button)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
  
  svg {
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background: var(--bg-tertiary);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::after {
    content: '';
    flex-grow: 1;
    height: 2px;
    background: linear-gradient(90deg, 
      var(--primary-400), 
      transparent
    );
    border-radius: 1px;
    opacity: 0.3;
  }

  .floating-icon {
    font-size: 1.2rem;
    color: var(--primary-500);
    transition: all 0.3s ease;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled(motion.span)`
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, 
    var(--bg-secondary), 
    rgba(168, 85, 247, 0.05)
  );
  color: var(--primary-500);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(168, 85, 247, 0.2), 
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(168, 85, 247, 0.2);
    border-color: var(--primary-400);

    &::before {
      left: 100%;
    }
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 15px;
  text-decoration: none;
  border: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  font-size: 1.1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      var(--primary-500), 
      var(--accent-500)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: all 0.4s ease;
    transform: translate(-50%, -50%);
  }

  &:hover {
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

    &::after {
      width: 100px;
      height: 100px;
    }

    svg {
      transform: scale(1.1);
      z-index: 1;
      position: relative;
    }
  }

  svg {
    transition: transform 0.3s ease;
    z-index: 1;
    position: relative;
  }
`;

const OverlayButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-600);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 1rem;
  }

  &:hover {
    background: white;
    border-color: var(--primary-500);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
    color: var(--primary-700);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const Modal = styled(motion.div)`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(255, 0, 0, 0.8) !important;
  backdrop-filter: blur(10px);
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 999999 !important;
  padding: 1rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Scroll personnalisé pour le contenu */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-500);
    border-radius: 3px;
    
    &:hover {
      background: var(--primary-600);
    }
  }

  @media (max-width: 768px) {
    max-height: 95vh;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-500);
    color: white;
  }
`;

const ModernProjects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Fonctions pour gérer l'expansion des projets
  const toggleProjectExpansion = (projectId) => {
    console.log('Toggle expansion pour projet:', projectId);
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const isProjectExpanded = (projectId) => {
    return expandedProject === projectId;
  };

  // Fonction pour obtenir l'icône de technologie appropriée
  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('react')) return <SiReact />;
    if (techLower.includes('angular')) return <SiAngular />;
    if (techLower.includes('flutter')) return <SiFlutter />;
    if (techLower.includes('node')) return <FaNodeJs />;
    if (techLower.includes('javascript')) return <SiJavascript />;
    if (techLower.includes('typescript')) return <SiTypescript />;
    if (techLower.includes('mongodb')) return <SiMongodb />;
    if (techLower.includes('postgresql')) return <SiPostgresql />;
    if (techLower.includes('next')) return <SiNextdotjs />;
    if (techLower.includes('mobile')) return <FaMobile />;
    if (techLower.includes('database') || techLower.includes('db')) return <FaDatabase />;
    
    // Icône par défaut
    return <FaCode />;
  };

  // Données des projets avec traductions
  const projects = [
    {
      id: 1,
      title: t('projects.data.easybank.title'),
      description: t('projects.data.easybank.description'),
      longDescription: t('projects.data.easybank.longDescription'),
      image: require("../../Assets/Projects/easybank.png"),
      type: "web",
      category: "fintech",
      technologies: ["Next.js", "Nest", "TailwindCSS", "shadcn/ui", "typeORM", "socket.io", "PostgreSQL", "AI"],
      github: "https://github.com/achrefmej",
      demo: "https://easybank.tn/",
      status: "completed",
      impact: t('projects.data.easybank.impact'),
      role: t('projects.data.easybank.role')
    },
    {
      id: 2,
      title: t('projects.data.notecontrol.title'),
      description: t('projects.data.notecontrol.description'),
      longDescription: t('projects.data.notecontrol.longDescription'),
      image: require("../../Assets/Projects/notecontrol.png"),
      type: "innovation",
      category: "productivity",
      technologies: ["React Native", "Node.js", "Express", "Cloud Sync", "OCR", "AI", "Firebase"],
      github: "https://github.com/achrefmej",
      demo: "https://note-control.onrender.com/",
      status: "completed",
      impact: t('projects.data.notecontrol.impact'),
      role: t('projects.data.notecontrol.role')
    },
    {
      id: 3,
      title: t('projects.data.chatcount.title'),
      description: t('projects.data.chatcount.description'),
      longDescription: t('projects.data.chatcount.longDescription'),
      image: appvoloh1,
      type: "ai",
      category: "ai",
      technologies: ["Angular", "Node.js", "Python", "MongoDB", "NLP", "Next.js"],
      github: "https://github.com/achrefmej",
      demo: "https://binomial.fr/",
      status: "completed"
    },
    {
      id: 4,
      title: t('projects.data.volobikes.title'),
      description: t('projects.data.volobikes.description'),
      longDescription: t('projects.data.volobikes.longDescription'),
      image: appvolo,
      type: "startup",
      category: "mobility",
      technologies: ["Angular", "Ionic", "Node.js", "Redis", "Socket.IO", "Mapbox", "PostgreSQL"],
      github: "https://github.com/achrefmej",
      demo: "#",
      status: "completed"
    },
    {
      id: 6,
      title: t('projects.data.dashboardbim.title'),
      description: t('projects.data.dashboardbim.description'),
      longDescription: t('projects.data.dashboardbim.longDescription'),
      image: appvolo_1,
      type: "web",
      category: "analytics",
      technologies: ["Angular", "Node.js", "MongoDB", "AWS", "D3.js"],
      github: "https://github.com/achrefmej",
      demo: "#",
      status: "completed"
    },
    {
      id: 5,
      title: t('projects.data.chaoscontrol.title'),
      description: t('projects.data.chaoscontrol.description'),
      longDescription: t('projects.data.chaoscontrol.longDescription'),
      image: meta,
      type: "innovation",
      category: "collaboration",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Unity", "Photon", "Blender", "Microsoft Azure", "solidity", "ipfs", "web3.js", "TailwindCSS", "Express"],
      github: "https://github.com/achrefmej",
      demo: "#",
      status: "completed",
      impact: t('projects.data.chaoscontrol.impact'),
      role: t('projects.data.chaoscontrol.role')
    },
    {
      id: 7,
      title: t('projects.data.frippyapp.title'),
      description: t('projects.data.frippyapp.description'),
      longDescription: t('projects.data.frippyapp.longDescription'),
      image: ios,
      type: "mobile",
      category: "ecommerce",
      technologies: ["Node.js", "Kotlin", "MongoDB", "Socket.io", "Swift"],
      github: "https://github.com/achrefmej",
      demo: "#",
      status: "completed"
    },
    {
      id: 8,
      title: t('projects.data.devopsautomation.title'),
      description: t('projects.data.devopsautomation.description'),
      longDescription: t('projects.data.devopsautomation.longDescription'),
      image: "DEVOPS_ICON",
      type: "devops",
      category: "automation",
      technologies: ["GitHub", "Docker", "SonarQube", "Jenkins", "Angular", "Spring Boot"],
      github: "https://github.com/achrefmej",
      demo: "#",
      status: "completed"
    },
    {
      id: 9,
      title: t('projects.data.snitapp.title'),
      description: t('projects.data.snitapp.description'),
      longDescription: t('projects.data.snitapp.longDescription'),
      image: VICTORIOUS,
      type: "web",
      category: "government",
      technologies: ["CodeIgniter", "PHP", "Express.js", "React", "Node.js", "MySQL"],
      github: "https://github.com/achrefmej",
      demo: "#",
      status: "completed"
    }
  ];

  const filters = [
    { key: 'all', label: t('projects.filters.all'), icon: FaFilter },
    { key: 'fintech', label: 'Fintech', icon: FaDatabase },
    { key: 'productivity', label: t('projects.filters.productivity', 'Productivité'), icon: FaCode },
    { key: 'ai', label: t('projects.filters.ai'), icon: FaPlay },
    { key: 'mobility', label: t('projects.filters.mobility', 'Mobilité'), icon: FaMobile },
    { key: 'collaboration', label: t('projects.filters.collaboration', 'Collaboration'), icon: FaReact },
    { key: 'ecommerce', label: 'E-commerce', icon: FaNodeJs },
    { key: 'automation', label: t('projects.filters.automation', 'Automation'), icon: FaDocker }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <ProjectsSection ref={ref} id="projects">
      <ModernParticles particleCount={30} />
      
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeader variants={itemVariants}>
            <SectionTitle>
              {t('projects.title').split(' ')[0]} <span style={{ color: 'var(--primary-500)' }}>{t('projects.title').split(' ')[1]}</span>
            </SectionTitle>
            <SectionSubtitle>
              {t('projects.subtitle')}
            </SectionSubtitle>
          </SectionHeader>

          <FilterContainer variants={itemVariants}>
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <FilterButton
                  key={filter.key}
                  active={activeFilter === filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Icon />
                  {filter.label}
                </FilterButton>
              );
            })}
          </FilterContainer>

          <AnimatePresence mode="wait">
            <ProjectsGrid
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  className="project-card"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -15,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  layout
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="project-glow"></div>
                  
                  <ProjectImage>
                    {project.image === "DEVOPS_ICON" ? (
                      <DevOpsIconContainer>
                        <div className="devops-icon">
                          <FaDocker />
                        </div>
                      </DevOpsIconContainer>
                    ) : project.image.endsWith('.gif') ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <img src={project.image} alt={project.title} />
                    )}
                    
                    {/* Status Badge */}
                    <div className="project-status">
                      {project.status === 'completed' ? 
                        `✅ ${t('common.completed', 'Terminé')}` : 
                        `🚧 ${t('common.inProgress', 'En cours')}`
                      }
                    </div>

                    {/* Tech Preview Icons */}
                    <div className="tech-preview">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <div key={techIndex} className="tech-icon">
                          {getTechIcon(tech)}
                        </div>
                      ))}
                    </div>

                    <div className="overlay">
                      <OverlayButton
                        onClick={() => {
                          console.log('Clic sur projet:', project.title);
                          toggleProjectExpansion(project.id);
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaPlay />
                        {t('projects.viewDetails', 'Voir les détails')}
                      </OverlayButton>
                      <OverlayButton
                        onClick={() => window.open(project.demo, '_blank')}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                        {t('projects.liveDemo', 'Demo Live')}
                      </OverlayButton>
                    </div>
                  </ProjectImage>

                  <ProjectContent>
                    <div>
                      <ProjectTitle>
                        <span className="floating-icon">
                          {project.category === 'mobile' ? <FaMobile /> : 
                           project.category === 'web' ? <FaCode /> : 
                           <FaDatabase />}
                        </span>
                        {project.title}
                      </ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                    </div>

                    <div>
                      <ProjectTech>
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <TechTag
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </TechTag>
                        ))}
                        {project.technologies.length > 4 && (
                          <TechTag
                            whileHover={{ 
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                          >
                            +{project.technologies.length - 4}
                          </TechTag>
                        )}
                      </ProjectTech>

               

                      <ProjectActions>
                        <ActionButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            y: -3,
                            rotate: 10,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ 
                            scale: 0.9,
                            rotate: -5
                          }}
                        >
                          <FaGithub />
                        </ActionButton>
                        <ActionButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            y: -3,
                            rotate: -10,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ 
                            scale: 0.9,
                            rotate: 5
                          }}
                        >
                          <FaExternalLinkAlt />
                        </ActionButton>
                      </ProjectActions>
                    </div>
                  </ProjectContent>

                  {/* Contenu expansible */}
                  <AnimatePresence>
                    {isProjectExpanded(project.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ 
                          overflow: 'hidden',
                          background: 'var(--bg-secondary)',
                          borderTop: '1px solid var(--border-color)'
                        }}
                      >
                        <div style={{ padding: '2rem' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                              <h4 style={{ 
                                color: 'var(--text-primary)', 
                                fontSize: '1.2rem', 
                                marginBottom: '1rem',
                                fontWeight: 600
                              }}>
                                Description détaillée
                              </h4>
                              <p style={{ 
                                color: 'var(--text-secondary)', 
                                lineHeight: 1.6,
                                marginBottom: '1.5rem'
                              }}>
                                {project.detailedDescription || project.description}
                              </p>
                              
                              {project.features && (
                                <div>
                                  <h4 style={{ 
                                    color: 'var(--text-primary)', 
                                    fontSize: '1.2rem', 
                                    marginBottom: '1rem',
                                    fontWeight: 600
                                  }}>
                                    Fonctionnalités principales
                                  </h4>
                                  <ul style={{ 
                                    listStyle: 'none', 
                                    padding: 0
                                  }}>
                                    {project.features.map((feature, idx) => (
                                      <li key={idx} style={{
                                        color: 'var(--text-secondary)',
                                        marginBottom: '0.5rem',
                                        paddingLeft: '1.5rem',
                                        position: 'relative'
                                      }}>
                                        <span style={{
                                          position: 'absolute',
                                          left: 0,
                                          color: '#667eea',
                                          fontWeight: 'bold'
                                        }}>✓</span>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div>
                              <h4 style={{ 
                                color: 'var(--text-primary)', 
                                fontSize: '1.2rem', 
                                marginBottom: '1rem',
                                fontWeight: 600
                              }}>
                                Technologies utilisées
                              </h4>
                              <div style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '0.5rem', 
                                marginBottom: '1.5rem'
                              }}>
                                {project.technologies.map((tech, idx) => (
                                  <span key={idx} style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                  }}>
                                    {tech}
                                  </span>
                                ))}
                              </div>

                       
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </AnimatePresence>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default ModernProjects;
