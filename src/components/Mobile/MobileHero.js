import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import MobileTypewriter from '../ui/MobileTypewriter';
import CVDownloader from '../ui/CVDownloader';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaDownload,
  FaArrowRight
} from 'react-icons/fa';
import avatarImage from '../../Assets/avatar_ach.png';

const MobileHeroSection = styled.section`
  min-height: calc(100vh - var(--mobile-top-nav-height, 65px) - var(--mobile-bottom-nav-height, 70px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, 
    var(--bg-primary) 0%, 
    var(--bg-secondary) 50%,
    var(--bg-primary) 100%
  );
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ProfileImageContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-500), var(--accent-cyan));
    animation: rotate 3s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: var(--bg-primary);
  border: 4px solid var(--bg-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const WaveEmoji = styled(motion.span)`
  display: inline-block;
  font-size: 1.5em;
`;

const MainTitle = styled(motion.h1)`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 1rem 0;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-500) 50%, var(--accent-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TypeWriterContainer = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  font-size: 1.1rem;
  color: var(--primary-500);
  font-weight: 600;
`;

const SubTitle = styled(motion.p)`
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 1.5rem 0 2rem;
  padding: 0 1rem;
  max-width: 400px;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 320px;
  margin: 2rem auto;
`;

const PrimaryButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:active {
    transform: scale(0.98);
  }
`;

const SecondaryButton = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--primary-500);
  border: 2px solid var(--primary-500);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:active {
    background: var(--primary-500);
    color: white;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
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
  font-size: 1.3rem;
  text-decoration: none;
  border: 1px solid var(--border-color);

  &:active {
    background: var(--primary-500);
    color: white;
    transform: scale(0.95);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 2rem auto 0;
`;

const StatCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;

  .number {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--primary-500);
    display: block;
    margin-bottom: 0.25rem;
  }

  .label {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
  }
`;

const MobileHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const waveAnimation = {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }
  };

  return (
    <MobileHeroSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        <ProfileImageContainer
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
        >
          <ProfileImage>
            <img src={avatarImage} alt={t('hero.name')} />
          </ProfileImage>
        </ProfileImageContainer>

        <Greeting variants={itemVariants}>
          <span>{t('home.greeting')}</span>
          <WaveEmoji animate={waveAnimation}>👋</WaveEmoji>
        </Greeting>

        <MainTitle variants={itemVariants}>
          {t('home.name')}
        </MainTitle>

        <MobileTypewriter />

        <SubTitle variants={itemVariants}>
          {t('home.description')}
        </SubTitle>

        <CTAButtons variants={itemVariants}>
          <PrimaryButton
            onClick={() => navigate('/project')}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('home.cta.projects')}</span>
            <FaArrowRight />
          </PrimaryButton>

          <SecondaryButton as="div">
            <CVDownloader isMobile={true} />
          </SecondaryButton>
        </CTAButtons>

        <SocialLinks variants={itemVariants}>
          <SocialLink
            href="https://github.com/achrefmej"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/achref-mejri"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:achref.mejri@example.com"
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>

        <Stats>
          <StatCard variants={itemVariants}>
            <span className="number">5+</span>
            <span className="label">{t('hero.stats.experience')}</span>
          </StatCard>
          <StatCard variants={itemVariants}>
            <span className="number">50+</span>
            <span className="label">{t('hero.stats.projects')}</span>
          </StatCard>
          <StatCard variants={itemVariants}>
            <span className="number">30+</span>
            <span className="label">{t('hero.stats.clients')}</span>
          </StatCard>
        </Stats>
      </motion.div>
    </MobileHeroSection>
  );
};

export default MobileHero;
