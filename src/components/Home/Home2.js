import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter, 
  AiFillInstagram,
} from "react-icons/ai";
import { 
  FaLinkedinIn, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaMobile,
  FaCloud,
  FaRocket 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiDocker,
  SiKubernetes
} from "react-icons/si";
import myImg from "../../Assets/avatar_achx.png";

// Styled Components
const AboutSection = styled.section`
  padding: 6rem 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const AboutContent = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    
    .highlight {
      color: var(--primary-500);
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .highlight-text {
    color: var(--primary-500);
    font-weight: 600;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;

  .image-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--primary-500), var(--accent-cyan));
    padding: 4px;
    max-width: 350px;

    img {
      width: 100%;
      height: auto;
      border-radius: 16px;
      background: var(--bg-primary);
    }
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const StatCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: var(--bg-card-hover);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-500);
    display: block;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.15);
    border-color: var(--primary-500);
  }

  .skill-icon {
    font-size: 2rem;
    color: var(--primary-500);
  }

  .skill-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`;

const SocialSection = styled(motion.div)`
  text-align: center;
  padding: 3rem 0;
  background: var(--bg-tertiary);
  border-radius: 20px;
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    
    .highlight {
      color: var(--primary-500);
      font-weight: 600;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--bg-card);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-500);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
  }
`;

function Home2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

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

  const stats = [
    { number: "3+", label: t('home2.stats.experience') },
    { number: "50+", label: t('home2.stats.projects') },
    { number: "20+", label: t('home2.stats.technologies') },
    { number: "100%", label: t('home2.stats.clients') },
  ];

  const skills = [
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Mobile", icon: FaMobile },
    { name: "Cloud", icon: FaCloud },
    { name: "Docker", icon: SiDocker },
    { name: "DevOps", icon: FaRocket },
  ];

  const socialLinks = [
    {
      href: "https://github.com/achrefmej",
      icon: AiFillGithub,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/achref-mejri-8a9253179/",
      icon: FaLinkedinIn,
      label: "LinkedIn"
    },
    {
      href: "https://x.com/MejriAchref4?t=hXHuFgDNQBUksmLKAQMEuQ&s=09",
      icon: AiOutlineTwitter,
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/achrefmej?igsh=N3N1OGI4bnNndXd3",
      icon: AiFillInstagram,
      label: "Instagram"
    },
  ];

  return (
    <AboutSection ref={ref} id="about">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle variants={itemVariants}>
            {t('home2.title')} <span className="highlight">{t('home2.highlight')}</span>
          </SectionTitle>

          <ContentGrid>
            <AboutContent variants={itemVariants}>
              <h3>
                <span className="highlight">{t('about.professionalTitle')}</span>
              </h3>
              <p>
                {t('home2.description')}
              </p>
              <p>
                {t('home2.projects.title')} 
                <span className="highlight-text">{t('home2.projects.chatcount')}</span>, 
                <span className="highlight-text"> {t('home2.projects.easybank')}</span>, et 
                <span className="highlight-text"> {t('home2.projects.volo')}</span>.
              </p>
              <p>
                {t('home2.projects.description')}
              </p>
            </AboutContent>

            <ImageContainer variants={itemVariants}>
              <Tilt
                className="image-wrapper"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                gyroscope={true}
              >
                <img src={myImg} alt="Achref Mejri" />
              </Tilt>
            </ImageContainer>
          </ContentGrid>

          {/* Statistiques */}
          <StatsGrid variants={itemVariants}>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </StatCard>
            ))}
          </StatsGrid>

          {/* Compétences techniques */}
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '600', 
              textAlign: 'center', 
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>
              {t('home2.skills.title')}
            </h3>
            <SkillsGrid>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <SkillCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </SkillCard>
                );
              })}
            </SkillsGrid>
          </motion.div>

          {/* Section sociale */}
          <SocialSection variants={itemVariants}>
            <h3>{t('home2.social.title')}</h3>
            <p>
              <span dangerouslySetInnerHTML={{
                __html: t('home2.social.description').replace(
                  t('home2.social.highlight'),
                  `<span class="highlight">${t('home2.social.highlight')}</span>`
                )
              }} />
            </p>
            <SocialLinks>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <SocialLink
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon />
                  </SocialLink>
                );
              })}
            </SocialLinks>
          </SocialSection>
        </motion.div>
      </Container>
    </AboutSection>
  );
}

export default Home2;
