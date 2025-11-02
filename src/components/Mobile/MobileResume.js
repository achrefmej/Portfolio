import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CVDownloader from '../ui/CVDownloader';
import { 
  FaUser,
  FaBriefcase, 
  FaGraduationCap,
  FaCode,
  FaAward,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaLanguage,
  FaCertificate
} from 'react-icons/fa';

const MobileResumeSection = styled.section`
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
  margin-bottom: 1.5rem;
`;

const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ProfileCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProfileName = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ProfileTitle = styled.p`
  font-size: 1.1rem;
  color: var(--primary-500);
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-secondary);

  svg {
    color: var(--primary-500);
    font-size: 1.1rem;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;

    &:active {
      color: var(--primary-500);
    }
  }
`;

const ResumeSection = styled(motion.div)`
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
    font-size: 1.4rem;
  }
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
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
  }
`;

const TimelineContent = styled.div`
  .title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .subtitle {
    font-size: 0.95rem;
    color: var(--primary-500);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .period {
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

  ul {
    margin: 0.5rem 0 0 1rem;
    padding: 0;
    
    li {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillCategory = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem;

  .category-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary-500);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.1rem;
    }
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .skill-item {
      font-size: 0.85rem;
      color: var(--text-secondary);
      padding: 0.4rem 0.75rem;
      background: var(--bg-card);
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }
  }
`;

const ProfileSection = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;

  .profile-content {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-secondary);
    text-align: justify;
    
    p {
      margin-bottom: 1rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const LanguageCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;

  .language-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .language-level {
    font-size: 0.85rem;
    color: var(--primary-500);
    font-weight: 500;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: var(--bg-card);
    border-radius: 3px;
    margin-top: 0.75rem;
    overflow: hidden;

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-500), var(--primary-600));
      border-radius: 3px;
      transition: width 1s ease;
    }
  }
`;

const CertificateItem = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  .cert-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: var(--primary-500);
    }
  }

  .cert-issuer {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
  }

  .cert-date {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
`;

const MobileResume = () => {
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

  return (
    <MobileResumeSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionHeader variants={itemVariants}>
          <SectionTitle>{t('resume.title')}</SectionTitle>
          <SectionSubtitle>{t('resume.subtitle')}</SectionSubtitle>
        </SectionHeader>

        <DownloadButtonContainer>
          <CVDownloader isMobile={true} />
        </DownloadButtonContainer>

        <ProfileCard variants={itemVariants}>
          <ProfileName>{t('resumeDetail.name')}</ProfileName>
          <ProfileTitle>{t('resumeDetail.title')}</ProfileTitle>

          <ContactInfo>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:achref.mejri@example.com">achref.mejri@example.com</a>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <a href="tel:+21612345678">+216 12 345 678</a>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Tunis, Tunisia</span>
            </ContactItem>
            <ContactItem>
              <FaLinkedin />
              <a href="https://linkedin.com/in/achref-mejri" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </ContactItem>
            <ContactItem>
              <FaGithub />
              <a href="https://github.com/achrefmej" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </ContactItem>
          </ContactInfo>
        </ProfileCard>

        <ProfileSection variants={itemVariants}>
          <SectionHeading>
            <FaUser />
            {t('resumeDetail.profileTitle')}
          </SectionHeading>
          <div className="profile-content">
            <div dangerouslySetInnerHTML={{ __html: t('resumeDetail.description') }} />
            <br/>
            <div dangerouslySetInnerHTML={{ __html: t('resumeDetail.intro').replace(/\\n/g, '<br/>') }} />
          </div>
        </ProfileSection>

        <ResumeSection variants={itemVariants}>
          <SectionHeading>
            <FaBriefcase />
            {t('resumeDetail.experience.title')}
          </SectionHeading>
          
          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.chatcount.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.chatcount.company')}</div>
              <div className="period">{t('resumeDetail.experience.chatcount.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.chatcount.description', { returnObjects: true })) ? t('resumeDetail.experience.chatcount.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.chatcount.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.easybank.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.easybank.company')}</div>
              <div className="period">{t('resumeDetail.experience.easybank.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.easybank.description', { returnObjects: true })) ? t('resumeDetail.experience.easybank.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.easybank.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.volobikes.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.volobikes.company')}</div>
              <div className="period">{t('resumeDetail.experience.volobikes.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.volobikes.description', { returnObjects: true })) ? t('resumeDetail.experience.volobikes.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.volobikes.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.viribus.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.viribus.company')}</div>
              <div className="period">{t('resumeDetail.experience.viribus.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.viribus.description', { returnObjects: true })) ? t('resumeDetail.experience.viribus.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.viribus.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.globalenr.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.globalenr.company')}</div>
              <div className="period">{t('resumeDetail.experience.globalenr.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.globalenr.description', { returnObjects: true })) ? t('resumeDetail.experience.globalenr.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.globalenr.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.esprit.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.esprit.company')}</div>
              <div className="period">{t('resumeDetail.experience.esprit.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.esprit.description', { returnObjects: true })) ? t('resumeDetail.experience.esprit.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.esprit.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.northevents.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.northevents.company')}</div>
              <div className="period">{t('resumeDetail.experience.northevents.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.northevents.description', { returnObjects: true })) ? t('resumeDetail.experience.northevents.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.northevents.description')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.experience.snit.title')}</div>
              <div className="subtitle">{t('resumeDetail.experience.snit.company')}</div>
              <div className="period">{t('resumeDetail.experience.snit.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.experience.snit.description', { returnObjects: true })) ? t('resumeDetail.experience.snit.description', { returnObjects: true }).join(' ') : t('resumeDetail.experience.snit.description')}</div>
            </TimelineContent>
          </TimelineItem>
        </ResumeSection>

        <ResumeSection variants={itemVariants}>
          <SectionHeading>
            <FaGraduationCap />
            {t('resumeDetail.education.title')}
          </SectionHeading>
          
          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.education.master.title')}</div>
              <div className="subtitle">{t('resumeDetail.education.master.school')}</div>
              <div className="period">{t('resumeDetail.education.master.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.education.master.details', { returnObjects: true })) ? t('resumeDetail.education.master.details', { returnObjects: true }).join(' ') : t('resumeDetail.education.master.details')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.education.bachelor.title')}</div>
              <div className="subtitle">{t('resumeDetail.education.bachelor.school')}</div>
              <div className="period">{t('resumeDetail.education.bachelor.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.education.bachelor.details', { returnObjects: true })) ? t('resumeDetail.education.bachelor.details', { returnObjects: true }).join(' ') : t('resumeDetail.education.bachelor.details')}</div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <div className="title">{t('resumeDetail.education.highschool.title')}</div>
              <div className="subtitle">{t('resumeDetail.education.highschool.school')}</div>
              <div className="period">{t('resumeDetail.education.highschool.period')}</div>
              <div className="description">{Array.isArray(t('resumeDetail.education.highschool.details', { returnObjects: true })) ? t('resumeDetail.education.highschool.details', { returnObjects: true }).join(' ') : t('resumeDetail.education.highschool.details')}</div>
            </TimelineContent>
          </TimelineItem>
        </ResumeSection>

        <ResumeSection variants={itemVariants}>
          <SectionHeading>
            <FaCode />
            {t('resumeDetail.skills.title')}
          </SectionHeading>
          
          <SkillsGrid>
            <SkillCategory>
              <div className="category-title">
                <FaCode />
                {t('resumeDetail.skills.frontend.title')}
              </div>
              <div className="skills-list">
                {t('resumeDetail.skills.frontend.skills', { returnObjects: true }).map((skill, index) => (
                  <div key={index} className="skill-item">{skill}</div>
                ))}
              </div>
            </SkillCategory>

            <SkillCategory>
              <div className="category-title">
                <FaCode />
                {t('resumeDetail.skills.backend.title')}
              </div>
              <div className="skills-list">
                {t('resumeDetail.skills.backend.skills', { returnObjects: true }).map((skill, index) => (
                  <div key={index} className="skill-item">{skill}</div>
                ))}
              </div>
            </SkillCategory>

            <SkillCategory>
              <div className="category-title">
                <FaCode />
                {t('resumeDetail.skills.database.title')}
              </div>
              <div className="skills-list">
                {t('resumeDetail.skills.database.skills', { returnObjects: true }).map((skill, index) => (
                  <div key={index} className="skill-item">{skill}</div>
                ))}
              </div>
            </SkillCategory>

            <SkillCategory>
              <div className="category-title">
                <FaCode />
                {t('resumeDetail.skills.tools.title')}
              </div>
              <div className="skills-list">
                {t('resumeDetail.skills.tools.skills', { returnObjects: true }).map((skill, index) => (
                  <div key={index} className="skill-item">{skill}</div>
                ))}
              </div>
            </SkillCategory>
          </SkillsGrid>
        </ResumeSection>

    

      </motion.div>
    </MobileResumeSection>
  );
};

export default MobileResume;
