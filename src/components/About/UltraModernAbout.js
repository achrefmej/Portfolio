import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import ModernParticles from '../ui/ModernParticles';
import { 
  FaUser,
  FaGraduationCap, 
  FaBriefcase, 
  FaCode,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaDocker,
  FaAws,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiAngular,
  SiFlutter,
  SiSpringboot,
  SiSymfony,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiNextdotjs
} from 'react-icons/si';
import avatarImage from '../../Assets/avatar_ach.png';

const AboutContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, 
    var(--bg-primary) 0%, 
    var(--bg-secondary) 30%,
    var(--bg-tertiary) 70%,
    var(--bg-primary) 100%
  );
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 2;
  position: relative;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const HeroText = styled.div`
  z-index: 2;

  .greeting {
    font-size: 1.2rem;
    color: var(--text-accent);
    margin-bottom: 1rem;
    font-weight: 500;
    opacity: 0.9;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    line-height: 1.1;
    
    .gradient-text {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
    font-weight: 400;
  }

  .description {
    font-size: 1.1rem;
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    max-width: 500px;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  position: relative;
  background: var(--gradient-primary);
  padding: 4px;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.3),
    0 0 80px rgba(168, 85, 247, 0.3);

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }

  .image-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: var(--bg-card);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .fallback {
      font-size: 6rem;
      font-weight: bold;
      color: var(--text-accent);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(from 0deg, transparent, var(--text-accent), transparent);
      animation: rotate 3s linear infinite;
      z-index: -1;
    }
  }

  &:hover .image-inner img {
    transform: scale(1.1);
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    border-color: var(--text-accent);

    &::before {
      left: 100%;
    }
  }

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-accent);
    display: block;
    margin-bottom: 0.5rem;
  }

  .label {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(168, 85, 247, 0.4);
    color: white;

    &::before {
      left: 100%;
    }
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-card);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--text-accent);
    color: var(--text-accent);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  
  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient-primary);
    transform: translateX(-50%);
    border-radius: 10px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding-left: 4rem;
  }
`;

const TimelineContent = styled(motion.div)`
  flex: 1;
  max-width: 45%;
  padding: 2rem;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  margin: 0 2rem;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 0 0 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-color: var(--text-accent);
  }

  h3 {
    color: var(--text-accent);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  h4 {
    color: var(--text-primary);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .period {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    top: 30px;
  }

  ${props => props.isEven ? `
    &::before {
      right: -10px;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent var(--bg-card);
    }
    @media (max-width: 768px) {
      &::before {
        left: -10px;
        right: auto;
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--bg-card) transparent transparent;
      }
    }
  ` : `
    &::before {
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent var(--bg-card) transparent transparent;
    }
  `}
`;

const TimelineIcon = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);

  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.05), transparent);
    transition: left 0.7s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-color: var(--text-accent);

    &::before {
      left: 100%;
    }
  }

  h3 {
    color: var(--text-primary);
    font-size: 1.4rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;

    .icon {
      color: var(--text-accent);
      font-size: 1.6rem;
    }
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background: var(--bg-secondary);
  border-radius: 15px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--text-accent)20, transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: var(--text-accent);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);

    &::before {
      left: 100%;
    }

    .icon {
      transform: scale(1.1);
    }
  }

  .icon {
    font-size: 2.5rem;
    color: var(--text-accent);
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  .name {
    font-size: 0.9rem;
    color: var(--text-primary);
    text-align: center;
    font-weight: 500;
  }
`;

const ContactSection = styled.section`
  background: var(--bg-secondary);
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 4rem auto 0;
`;

const ContactCard = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  padding: 3rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
    border-color: var(--text-accent);

    &::before {
      left: 100%;
    }
  }

  .icon {
    font-size: 3rem;
    color: var(--text-accent);
    margin-bottom: 1.5rem;
  }

  h3 {
    color: var(--text-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: var(--text-muted);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-accent);
    text-decoration: none;
    font-weight: 600;
    padding: 1rem 2rem;
    border: 2px solid var(--text-accent);
    border-radius: 50px;
    transition: all 0.3s ease;

    &:hover {
      background: var(--text-accent);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  .floating-shape {
    position: absolute;
    background: var(--gradient-primary);
    border-radius: 50%;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    &:nth-child(2) {
      width: 120px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }

    &:nth-child(3) {
      width: 60px;
      height: 60px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

function UltraModernAbout() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const experienceData = [
    {
      title: t('about.experience.data.chatcount.title'),
      company: t('about.experience.data.chatcount.company'),
      period: t('about.experience.data.chatcount.period'),
      location: t('about.experience.data.chatcount.location'),
      description: t('about.experience.data.chatcount.description'),
      icon: <FaBriefcase />
    },
    {
      title: t('about.experience.data.easybank.title'),
      company: t('about.experience.data.easybank.company'),
      period: t('about.experience.data.easybank.period'),
      location: t('about.experience.data.easybank.location'),
      description: t('about.experience.data.easybank.description'),
      icon: <FaCode />
    },
    {
      title: t('about.experience.data.volo.title'),
      company: t('about.experience.data.volo.company'),
      period: t('about.experience.data.volo.period'),
      location: t('about.experience.data.volo.location'),
      description: t('about.experience.data.volo.description'),
      icon: <FaMobile />
    },
    {
      title: t('about.experience.data.viribus.title'),
      company: t('about.experience.data.viribus.company'),
      period: t('about.experience.data.viribus.period'),
      location: t('about.experience.data.viribus.location'),
      description: t('about.experience.data.viribus.description'),
      icon: <FaDatabase />
    },
    {
      title: t('about.experience.data.esprit.title'),
      company: t('about.experience.data.esprit.company'),
      period: t('about.experience.data.esprit.period'),
      location: t('about.experience.data.esprit.location'),
      description: t('about.experience.data.esprit.description'),
      icon: <FaGraduationCap />
    },
    {
      title: t('about.experience.data.fst.title'),
      company: t('about.experience.data.fst.company'),
      period: t('about.experience.data.fst.period'),
      location: t('about.experience.data.fst.location'),
      description: t('about.experience.data.fst.description'),
      icon: <FaGraduationCap />
    }
  ];

  const skillCategories = [
    {
      title: t('about.skills.frontend'),
      icon: <FaCode className="icon" />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <FaCode /> }
      ]
    },
    {
      title: t('about.skills.backend'),
      icon: <FaDatabase className="icon" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "NestJS", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "GraphQL", icon: <FaCode /> },
        { name: "REST APIs", icon: <FaCode /> }
      ]
    },
    {
      title: t('about.skills.database'),
      icon: <FaDatabase className="icon" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Redis", icon: <SiRedis /> }
      ]
    },
    {
      title: t('about.skills.mobile'),
      icon: <FaMobile className="icon" />,
      skills: [
        { name: "Ionic", icon: <FaMobile /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Socket.IO", icon: <FaCode /> },
        { name: "WebSockets", icon: <FaCode /> }
      ]
    },
    {
      title: t('about.skills.devops'),
      icon: <FaCloud className="icon" />,
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "CI/CD", icon: <FaCode /> },
        { name: "GitHub Actions", icon: <FaCode /> },
        { name: "Jenkins", icon: <FaCode /> }
      ]
    },
    {
      title: t('about.skills.ai'),
      icon: <FaBriefcase className="icon" />,
      skills: [
        { name: "NLP", icon: <FaCode /> },
        { name: "Chatbots", icon: <FaCode /> },
        { name: "Data Analytics", icon: <FaDatabase /> },
        { name: "Real-time Dashboard", icon: <FaCode /> }
      ]
    }
  ];

  return (
    <AboutContainer ref={containerRef}>
      <ModernParticles />
      <FloatingElements>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </FloatingElements>

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroGrid>
            <HeroText>
              <motion.div
                className="greeting"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('about.greeting')}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="gradient-text">{t('about.name')}</span>
              </motion.h1>
              
              <motion.div
                className="subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t('about.professionalTitle')}
              </motion.div>
              
              <motion.p
                className="description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {t('about.description')}
              </motion.p>

              <CTAButtons>
                <PrimaryButton
                  href="#contact"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  {t('about.cta.contact')}
                </PrimaryButton>
                
                <SecondaryButton
                  href="tel:+21650556323"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  +216 50 55 63 23
                </SecondaryButton>
              </CTAButtons>

              <StatsGrid>
                <StatCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="number">3+</span>
                  <span className="label">{t('about.experience.years')}</span>
                </StatCard>
                
                <StatCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="number">20+</span>
                  <span className="label">{t('about.experience.projects')}</span>
                </StatCard>
                
                <StatCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="number">15.18</span>
                  <span className="label">Moyenne ESPRIT/20</span>
                </StatCard>
              </StatsGrid>
            </HeroText>

            <ProfileImageContainer
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <ProfileImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="image-inner">
                  <img 
                    src={avatarImage} 
                    alt="Achref Mejri"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="fallback" style={{ display: 'none' }}>
                    AM
                  </div>
                </div>
              </ProfileImage>
            </ProfileImageContainer>
          </HeroGrid>
        </HeroContent>
      </HeroSection>

      {/* Experience Timeline */}
      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('about.experience.title').split(' ')[0]} <span className="gradient-text">{t('about.experience.title').split(' ').slice(1).join(' ')}</span>
        </SectionTitle>

        <TimelineContainer>
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineIcon
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </TimelineIcon>
              
              <TimelineContent 
                isEven={index % 2 === 1}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <div className="period">
                  <FaCalendarAlt />
                  {item.period}
                  <FaMapMarkerAlt />
                  {item.location}
                </div>
                <p>{item.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('about.skills.title').split(' ')[0]} <span className="gradient-text">{t('about.skills.title').split(' ').slice(1).join(' ')}</span>
        </SectionTitle>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>
                {category.icon}
                {category.title}
              </h3>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.1) + (skillIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="icon">{skill.icon}</div>
                    <div className="name">{skill.name}</div>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Section>

      {/* Contact Section */}
      <ContactSection id="contact">
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('contact.title').split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{t('contact.title').split(' ').slice(-1)[0]}</span>
        </SectionTitle>

        <ContactGrid>
          <ContactCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>{t('contact.info.email')}</h3>
            <p>{t('about.contact.email.description')}</p>
            <a href="mailto:mejri.achref.working@gmail.com">
              mejri.achref.working@gmail.com <FaArrowRight />
            </a>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>{t('about.contact.linkedin.description')}</p>
            <a href="https://linkedin.com/in/achref-mejri-8a9253179" target="_blank" rel="noopener noreferrer">
               linkedin.com <FaArrowRight />
            </a>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>{t('about.contact.github.description')}</p>
            <a href="https://github.com/achrefmej" target="_blank" rel="noopener noreferrer">
              github.com/achrefmej <FaArrowRight />
            </a>
          </ContactCard>
        </ContactGrid>
      </ContactSection>
    </AboutContainer>
  );
}

export default UltraModernAbout;