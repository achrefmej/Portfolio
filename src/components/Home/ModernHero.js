import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ModernParticles from '../ui/ModernParticles';
import ModernType from '../ui/ModernType';
import CVDownloader from '../ui/CVDownloader';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaArrowDown,
  FaPlay,
  FaDownload
} from 'react-icons/fa';
import avatarImage from '../../Assets/avatar_ach.png';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, 
    var(--bg-primary) 0%, 
    var(--bg-secondary) 30%,
    var(--bg-tertiary) 70%,
    var(--bg-primary) 100%
  );
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  z-index: 3;
`;

const Greeting = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const WaveEmoji = styled(motion.span)`
  display: inline-block;
  font-size: 1.5em;
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 1rem 0;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-500) 50%, var(--accent-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SubTitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.6;
  margin: 2rem 0;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(168, 85, 247, 0.4);
    color: white;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--primary-500);
  text-decoration: none;
  border: 2px solid var(--primary-500);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-500);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--bg-card);
  color: var(--text-secondary);
  border-radius: 12px;
  font-size: 1.2rem;
  text-decoration: none;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-500);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProfileImage = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-500), var(--accent-cyan));
  padding: 4px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background: var(--bg-primary);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.3), transparent);
    animation: rotate 3s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  cursor: pointer;

  svg {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

const ModernHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <HeroSection ref={ref}>
      <ModernParticles particleCount={30} />
      
      <HeroContent>
        <HeroGrid>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TextContent>
              <Greeting variants={itemVariants}>
                {t('home.greeting')}
                <WaveEmoji
                  variants={waveVariants}
                  animate="wave"
                >
                  👋
                </WaveEmoji>
              </Greeting>

              <MainTitle variants={itemVariants}>
                {t('home.name')}
              </MainTitle>

              <ModernType />

              <SubTitle variants={itemVariants}>
                {t('home.description')}
              </SubTitle>

              <CTAButtons variants={itemVariants}>
                <PrimaryButton
                  as="button"
                  onClick={() => navigate('/project')}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  <FaPlay />
                  {t('home.cta.projects')}
                </PrimaryButton>
                
                <CVDownloader />
              </CTAButtons>

              <SocialLinks variants={itemVariants}>
                <SocialLink
                  href="https://github.com/achrefmej"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </SocialLink>
                
                <SocialLink
                  href="https://linkedin.com/in/achref-mejri-8a9253179"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </SocialLink>
                
                <SocialLink
                  href="mailto:mejri.achref.working@gmail.com"
                  whileHover={{ y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                </SocialLink>
              </SocialLinks>
            </TextContent>
          </motion.div>

          <ImageContainer>
            <ProfileImage
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <img src={avatarImage} alt="Achref Mejri" />
            </ProfileImage>

            {/* Éléments flottants décoratifs */}
            <FloatingElements>
              <FloatingCard
                style={{ top: '10%', right: '10%' }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                  🚀 React Expert
                </div>
              </FloatingCard>

              <FloatingCard
                style={{ bottom: '20%', left: '5%' }}
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                  💡 Innovation
                </div>
              </FloatingCard>

              <FloatingCard
                style={{ top: '50%', right: '5%' }}
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                  ⚡ Performance
                </div>
              </FloatingCard>
            </FloatingElements>
          </ImageContainer>
        </HeroGrid>
      </HeroContent>

      <ScrollIndicator
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
        whileHover={{ y: -5 }}
      >
        <span>Découvrir plus</span>
        <FaArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default ModernHero;