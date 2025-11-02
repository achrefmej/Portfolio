import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { 
  FaUser,
  FaGraduationCap, 
  FaBriefcase, 
  FaCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript,
  SiMongodb, 
  SiAngular,
  SiFlutter,
  SiNextdotjs
} from 'react-icons/si';
import avatarImage from '../../Assets/avatar_ach.png';
import MobileTypewriter from '../ui/MobileTypewriter';

const MobileAboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 1.5rem 2rem;
  background: var(--bg-primary);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const TypewriterWrapper = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;

const ProfileSection = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-500);
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ProfileRole = styled.p`
  font-size: 1rem;
  color: var(--primary-500);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProfileBio = styled.p`
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.7;
  text-align: left;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;

  .icon {
    font-size: 2rem;
    color: var(--primary-500);
    margin-bottom: 0.75rem;
  }

  .number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    display: block;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-weight: 500;
  }
`;

const SkillsSection = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
`;

const SectionHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: var(--primary-500);
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const SkillTag = styled(motion.div)`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 0.65rem 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  svg {
    font-size: 1.1rem;
    color: var(--primary-500);
  }

  &:active {
    transform: scale(0.95);
    background: var(--primary-500);
    color: white;
  }
`;

const ExperienceSection = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-left: 2px solid var(--border-color);

  &:last-child {
    padding-bottom: 0;
    border-left-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary-500);
    border: 2px solid var(--bg-card);
  }
`;

const TimelineContent = styled.div`
  .title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .company {
    font-size: 0.9rem;
    color: var(--primary-500);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .date {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .description {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const TestimonialsSection = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
`;

const TestimonialCard = styled.div`
  background: var(--bg-primary);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  .quote-icon {
    font-size: 1.5rem;
    color: var(--primary-500);
    opacity: 0.3;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
    font-style: italic;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-500);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
    }

    .info {
      .name {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .position {
        font-size: 0.8rem;
        color: var(--text-muted);
      }
    }
  }
`;

const MobileAbout = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skills = {
    frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
    ],
    mobile: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'React Native', icon: <FaReact /> },
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <FaDatabase /> },
    ]
  };

  return (
    <MobileAboutSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionHeader variants={itemVariants}>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <TypewriterWrapper>
            <MobileTypewriter 
              texts={t('about.titles', { returnObjects: true })}
              fontSize="1.3rem"
            />
          </TypewriterWrapper>
          <SectionSubtitle>{t('about.subtitle')}</SectionSubtitle>
        </SectionHeader>

        <ProfileSection variants={itemVariants}>
          <ProfileImage>
            <img src={avatarImage} alt={t('about.name')} />
          </ProfileImage>
          <ProfileName>{t('about.name')}</ProfileName>
          <ProfileRole>{t('about.role')}</ProfileRole>
          <ProfileBio>{t('about.bio')}</ProfileBio>
        </ProfileSection>

        <StatsGrid>
          <StatCard variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <div className="icon"><FaBriefcase /></div>
            <span className="number">5+</span>
            <span className="label">{t('about.stats.experience')}</span>
          </StatCard>
          <StatCard variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <div className="icon"><FaCode /></div>
            <span className="number">50+</span>
            <span className="label">{t('about.stats.projects')}</span>
          </StatCard>
          <StatCard variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <div className="icon"><FaUser /></div>
            <span className="number">30+</span>
            <span className="label">{t('about.stats.clients')}</span>
          </StatCard>
          <StatCard variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <div className="icon"><FaStar /></div>
            <span className="number">100%</span>
            <span className="label">{t('about.stats.satisfaction')}</span>
          </StatCard>
        </StatsGrid>

        <SkillsSection variants={itemVariants}>
          <SectionHeading>
            <FaCode />
            {t('about.skills.title')}
          </SectionHeading>
          <SkillsGrid>
            {[...skills.frontend, ...skills.backend, ...skills.mobile, ...skills.database].map((skill, index) => (
              <SkillTag
                key={index}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </SkillTag>
            ))}
          </SkillsGrid>
        </SkillsSection>

        <ExperienceSection variants={itemVariants}>
          <SectionHeading>
            <FaBriefcase />
            {t('about.experience.title')}
          </SectionHeading>
          
          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('about.experience.data.chatcount.title')}</div>
              <div className="company">{t('about.experience.data.chatcount.company')}</div>
              <div className="date">{t('about.experience.data.chatcount.period')}</div>
              <div className="description">{t('about.experience.data.chatcount.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('about.experience.data.easybank.title')}</div>
              <div className="company">{t('about.experience.data.easybank.company')}</div>
              <div className="date">{t('about.experience.data.easybank.period')}</div>
              <div className="description">{t('about.experience.data.easybank.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('about.experience.data.volo.title')}</div>
              <div className="company">{t('about.experience.data.volo.company')}</div>
              <div className="date">{t('about.experience.data.volo.period')}</div>
              <div className="description">{t('about.experience.data.volo.description')}</div>
            </TimelineContent>
          </TimelineItem>
        </ExperienceSection>

        <ExperienceSection variants={itemVariants}>
          <SectionHeading>
            <FaGraduationCap />
            {t('about.education.title')}
          </SectionHeading>
          
          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('about.experience.data.esprit.title')}</div>
              <div className="company">{t('about.experience.data.esprit.company')}</div>
              <div className="date">{t('about.experience.data.esprit.period')}</div>
              <div className="description">{t('about.experience.data.esprit.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('about.experience.data.fst.title')}</div>
              <div className="company">{t('about.experience.data.fst.company')}</div>
              <div className="date">{t('about.experience.data.fst.period')}</div>
              <div className="description">{t('about.experience.data.fst.description')}</div>
            </TimelineContent>
          </TimelineItem>
        </ExperienceSection>
      </motion.div>
    </MobileAboutSection>
  );
};

export default MobileAbout;
