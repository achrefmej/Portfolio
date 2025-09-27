import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import CVDownloader from '../ui/CVDownloader';
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
  FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiAngular,
  SiFlutter,
  SiSpringboot,
  SiSymfony,
  SiMysql
} from 'react-icons/si';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.isDark ? '#0a0a0a' : '#ffffff'};
  color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
  padding: 2rem 0;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${props => props.theme.isDark 
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
  };
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${props => props.theme.isDark 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 4rem;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: ${props => props.theme.isDark 
      ? 'linear-gradient(135deg, #667eea, #764ba2)'
      : 'linear-gradient(135deg, #4facfe, #00f2fe)'
    };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: ${props => props.theme.isDark ? '#a0aec0' : '#718096'};
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.isDark ? '#a0aec0' : '#718096'};
    margin-bottom: 2rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem 1rem;
  background: ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.8)'
  };
  border-radius: 15px;
  border: 1px solid ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  .number {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    display: block;
  }

  .label {
    color: ${props => props.theme.isDark ? '#a0aec0' : '#718096'};
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
  
  span {
    background: ${props => props.theme.isDark 
      ? 'linear-gradient(135deg, #667eea, #764ba2)'
      : 'linear-gradient(135deg, #4facfe, #00f2fe)'
    };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    width: 2px;
    background: ${props => props.theme.isDark 
      ? 'linear-gradient(180deg, #667eea, #764ba2)'
      : 'linear-gradient(180deg, #4facfe, #00f2fe)'
    };
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding-left: 3rem;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  max-width: 45%;
  padding: 1.5rem;
  background: ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.8)'
  };
  border-radius: 15px;
  border: 1px solid ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);
  margin: 0 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 0 0 1rem;
  }

  h3 {
    color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .period {
    color: ${props => props.theme.isDark ? '#a0aec0' : '#718096'};
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: ${props => props.theme.isDark ? '#a0aec0' : '#718096'};
    line-height: 1.6;
  }
`;

const TimelineIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.isDark 
    ? 'linear-gradient(135deg, #667eea, #764ba2)'
    : 'linear-gradient(135deg, #4facfe, #00f2fe)'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: absolute;
    left: -10px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.8)'
  };
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.isDark ? '#1a202c' : '#f7fafc'};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
  }

  .icon {
    font-size: 2rem;
    color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    margin-bottom: 0.5rem;
  }

  .name {
    font-size: 0.9rem;
    color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
    text-align: center;
  }
`;

const ContactSection = styled.section`
  background: ${props => props.theme.isDark 
    ? 'linear-gradient(135deg, #1a1a2e10 0%, #16213e05 100%)'
    : 'linear-gradient(135deg, #f8fafc10 0%, #e2e8f005 100%)'
  };
  padding: 5rem 2rem;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 3rem auto 0;
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.8)'
  };
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.isDark 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }

  .icon {
    font-size: 2.5rem;
    color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.isDark ? '#a0aec0' : '#718096'};
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border: 2px solid ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
    border-radius: 25px;
    display: inline-block;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      background: ${props => props.theme.isDark ? '#667eea' : '#4facfe'};
      color: white;
    }
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.isDark 
    ? 'linear-gradient(135deg, #667eea, #764ba2)'
    : 'linear-gradient(135deg, #4facfe, #00f2fe)'
  };
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    color: white;
  }
`;

function SimpleAbout() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const experienceData = [
    {
      title: "Ingénieur Full Stack Senior",
      company: "Société Innovante",
      period: "2023 - Présent",
      location: "Tunis, Tunisie",
      description: "Développement d'applications web modernes avec React, Node.js et des technologies cloud. Encadrement d'équipes et architecture de solutions scalables.",
      icon: <FaBriefcase />
    },
    {
      title: "Développeur Full Stack",
      company: "StartUp Tech",
      period: "2021 - 2023",
      location: "Remote",
      description: "Création d'applications mobiles et web avec Flutter, React Native et backend Node.js/Python. Intégration d'APIs et optimisation des performances.",
      icon: <FaCode />
    },
    {
      title: "Master en Génie Logiciel",
      company: "ESPRIT",
      period: "2019 - 2021",
      location: "Tunis, Tunisie",
      description: "Spécialisation en développement d'applications mobiles et intelligence artificielle. Projet de fin d'études sur l'optimisation des algorithmes ML.",
      icon: <FaGraduationCap />
    },
    {
      title: "Licence en Informatique",
      company: "FST",
      period: "2016 - 2019",
      location: "Tunis, Tunisie",
      description: "Formation fondamentale en informatique avec focus sur la programmation, les structures de données et le développement web.",
      icon: <FaGraduationCap />
    }
  ];

  const skillCategories = [
    {
      title: t('about.skills.frontend'),
      icon: <FaCode />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> }
      ]
    },
    {
      title: t('about.skills.backend'),
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Symfony", icon: <SiSymfony /> }
      ]
    },
    {
      title: t('about.skills.mobile'),
      icon: <FaMobile />,
      skills: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "React Native", icon: <FaReact /> }
      ]
    },
    {
      title: t('about.skills.devops'),
      icon: <FaCloud />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> }
      ]
    }
  ];

  return (
    <AboutContainer theme={theme}>
      {/* Hero Section */}
      <HeroSection theme={theme}>
        <HeroContent>
          <ProfileImageContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileImage theme={theme}>
              AM
            </ProfileImage>
          </ProfileImageContainer>
          
          <HeroText theme={theme}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('about.name')}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('about.professionalTitle')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('about.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CVDownloader />
            </motion.div>

            <StatsContainer>
              <StatCard
                theme={theme}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="number">4+</span>
                <span className="label">{t('about.experience.years')}</span>
              </StatCard>
              
              <StatCard
                theme={theme}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="number">50+</span>
                <span className="label">{t('about.experience.projects')}</span>
              </StatCard>
              
              <StatCard
                theme={theme}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="number">15+</span>
                <span className="label">Technologies</span>
              </StatCard>
            </StatsContainer>
          </HeroText>
        </HeroContent>
      </HeroSection>

      {/* Experience Timeline */}
      <Section>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('about.experience.title').split(' ')[0]} <span>{t('about.experience.title').split(' ').slice(1).join(' ')}</span>
        </SectionTitle>

        <TimelineContainer theme={theme}>
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineIcon theme={theme}>
                {item.icon}
              </TimelineIcon>
              
              <TimelineContent theme={theme}>
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
          theme={theme}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('about.skills.title').split(' ')[0]} <span>{t('about.skills.title').split(' ').slice(1).join(' ')}</span>
        </SectionTitle>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              theme={theme}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>
                {category.icon}
                {category.title}
              </h3>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    theme={theme}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
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
      <ContactSection theme={theme}>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('contact.title').split(' ').slice(0, -1).join(' ')} <span>{t('contact.title').split(' ').slice(-1)[0]}</span>
        </SectionTitle>

        <ContactGrid>
          <ContactCard
            theme={theme}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>{t('contact.info.email')}</h3>
            <p>{t('about.contact.email.description')}</p>
            <a href="mailto:mejri.achref.working@gmail.com">
              {t('about.contact.email.action')}
            </a>
          </ContactCard>

          <ContactCard
            theme={theme}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>{t('about.contact.linkedin.description')}</p>
            <a href="https://linkedin.com/in/achref-mejri" target="_blank" rel="noopener noreferrer">
              {t('about.contact.linkedin.action')}
            </a>
          </ContactCard>

          <ContactCard
            theme={theme}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>{t('about.contact.github.description')}</p>
            <a href="https://github.com/achrefmej" target="_blank" rel="noopener noreferrer">
              {t('about.contact.github.action')}
            </a>
          </ContactCard>
        </ContactGrid>
      </ContactSection>
    </AboutContainer>
  );
}

export default SimpleAbout;