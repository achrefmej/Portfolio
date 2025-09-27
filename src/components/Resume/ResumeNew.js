import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ModernParticles from "../ui/ModernParticles";
import CVDownloader from "../ui/CVDownloader";
import { 
  FaUser,
  FaBriefcase, 
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTrophy,
  FaFileDownload,
  FaCalendarAlt,
  FaLanguage,
  FaCertificate
} from 'react-icons/fa';

const ResumeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    var(--bg-primary) 0%, 
    var(--bg-secondary) 50%, 
    var(--bg-primary) 100%);
  color: var(--text-primary);
  position: relative;
  overflow-x: hidden;
  padding: 2rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const HeaderSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  margin-bottom: 3rem;
`;

const ProfileHeader = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  opacity: 0.9;
`;

function ResumeNew() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { t } = useTranslation();

  return (
    <ResumeContainer ref={containerRef}>
      <ModernParticles />
      
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ProfileHeader>
            <Name>{t('resumeDetail.name')}</Name>
            <Title>{t('resumeDetail.title')}</Title>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem', 
              marginBottom: '2rem' 
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.5rem', 
                fontSize: '0.95rem', 
                color: 'var(--text-secondary)' 
              }}>
                <FaPhone style={{ color: '#6366f1', fontSize: '1rem' }} />
                <span>+216 50 55 63 23</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.5rem', 
                fontSize: '0.95rem', 
                color: 'var(--text-secondary)' 
              }}>
                <FaEnvelope style={{ color: '#6366f1', fontSize: '1rem' }} />
                <span>mejri.achref.working@gmail.com</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.5rem', 
                fontSize: '0.95rem', 
                color: 'var(--text-secondary)' 
              }}>
                <FaGlobe style={{ color: '#6366f1', fontSize: '1rem' }} />
                <span>mejriachref.com</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.5rem', 
                fontSize: '0.95rem', 
                color: 'var(--text-secondary)' 
              }}>
                <FaMapMarkerAlt style={{ color: '#6366f1', fontSize: '1rem' }} />
                <span>Ariana, Tunis — 2081, Tunisie</span>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem', 
              marginBottom: '2rem', 
              flexWrap: 'wrap' 
            }}>
              <a 
                href="https://linkedin.com/in/achref-mejri" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.75rem 1.5rem', 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  border: '1px solid rgba(99, 102, 241, 0.2)', 
                  borderRadius: '25px', 
                  color: 'var(--text-primary)', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  fontSize: '0.9rem' 
                }}
              >
                <FaLinkedin style={{ fontSize: '1.1rem' }} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/achrefmej" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.75rem 1.5rem', 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  border: '1px solid rgba(99, 102, 241, 0.2)', 
                  borderRadius: '25px', 
                  color: 'var(--text-primary)', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  fontSize: '0.9rem' 
                }}
              >
                <FaGithub style={{ fontSize: '1.1rem' }} />
                GitHub
              </a>
              <a 
                href="https://collabratec.ieee.org/AchrefMejri837870" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.75rem 1.5rem', 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  border: '1px solid rgba(99, 102, 241, 0.2)', 
                  borderRadius: '25px', 
                  color: 'var(--text-primary)', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  fontSize: '0.9rem' 
                }}
              >
                <FaTrophy style={{ fontSize: '1.1rem' }} />
                IEEE
              </a>
            </div>
            
            <CVDownloader />
          </ProfileHeader>
        </motion.div>
      </HeaderSection>

      {/* Profile Section */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 4rem auto', 
        padding: '0 2rem', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <FaUser style={{ color: '#6366f1', fontSize: '1.5rem' }} />
          {t('resumeDetail.profileTitle')}
          <div style={{
            flex: 1,
            height: '2px',
            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), transparent)',
            marginLeft: '1rem'
          }} />
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-secondary)',
            textAlign: 'justify',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '2rem'
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: t('resumeDetail.description') }} />
          <br/><br/>
          <div dangerouslySetInnerHTML={{ __html: t('resumeDetail.intro').replace(/\\n/g, '<br/>') }} />
        </motion.div>
      </div>

      {/* Experience Section */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 4rem auto', 
        padding: '0 2rem', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <FaBriefcase style={{ color: '#6366f1', fontSize: '1.5rem' }} />
          {t('resumeDetail.experience.title')}
          <div style={{
            flex: 1,
            height: '2px',
            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), transparent)',
            marginLeft: '1rem'
          }} />
        </motion.h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              title: t('resumeDetail.experience.chatcount.title'),
              company: t('resumeDetail.experience.chatcount.company'),
              period: t('resumeDetail.experience.chatcount.period'),
              location: t('resumeDetail.experience.chatcount.location'),
              description: t('resumeDetail.experience.chatcount.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.easybank.title'),
              company: t('resumeDetail.experience.easybank.company'),
              period: t('resumeDetail.experience.easybank.period'),
              location: t('resumeDetail.experience.easybank.location'),
              description: t('resumeDetail.experience.easybank.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.volobikes.title'),
              company: t('resumeDetail.experience.volobikes.company'),
              period: t('resumeDetail.experience.volobikes.period'),
              location: t('resumeDetail.experience.volobikes.location'),
              description: t('resumeDetail.experience.volobikes.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.viribus.title'),
              company: t('resumeDetail.experience.viribus.company'),
              period: t('resumeDetail.experience.viribus.period'),
              location: t('resumeDetail.experience.viribus.location'),
              description: t('resumeDetail.experience.viribus.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.globalenr.title'),
              company: t('resumeDetail.experience.globalenr.company'),
              period: t('resumeDetail.experience.globalenr.period'),
              location: t('resumeDetail.experience.globalenr.location'),
              description: t('resumeDetail.experience.globalenr.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.esprit.title'),
              company: t('resumeDetail.experience.esprit.company'),
              period: t('resumeDetail.experience.esprit.period'),
              location: t('resumeDetail.experience.esprit.location'),
              description: t('resumeDetail.experience.esprit.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.northevents.title'),
              company: t('resumeDetail.experience.northevents.company'),
              period: t('resumeDetail.experience.northevents.period'),
              location: t('resumeDetail.experience.northevents.location'),
              description: t('resumeDetail.experience.northevents.description', { returnObjects: true })
            },
            {
              title: t('resumeDetail.experience.snit.title'),
              company: t('resumeDetail.experience.snit.company'),
              period: t('resumeDetail.experience.snit.period'),
              location: t('resumeDetail.experience.snit.location'),
              description: t('resumeDetail.experience.snit.description', { returnObjects: true })
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                borderLeft: '4px solid #6366f1'
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}>
                  {exp.title}
                </h4>
                <h5 style={{
                  color: '#6366f1',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {exp.company}
                </h5>
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    <FaCalendarAlt style={{ color: '#6366f1', fontSize: '0.85rem' }} />
                    {exp.period}
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    <FaMapMarkerAlt style={{ color: '#6366f1', fontSize: '0.85rem' }} />
                    {exp.location}
                  </span>
                </div>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.description.map((desc, i) => (
                  <li key={i} style={{
                    position: 'relative',
                    paddingLeft: '2rem',
                    marginBottom: '0.75rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#6366f1',
                      fontSize: '0.8rem'
                    }}>▶</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Formation Section */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 4rem auto', 
        padding: '0 2rem', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <FaGraduationCap style={{ color: '#6366f1', fontSize: '1.5rem' }} />
          {t('resumeDetail.education.title')}
          <div style={{
            flex: 1,
            height: '2px',
            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), transparent)',
            marginLeft: '1rem'
          }} />
        </motion.h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              title: t('resumeDetail.education.master.title'),
              school: t('resumeDetail.education.master.school'),
              period: t('resumeDetail.education.master.period'),
              location: t('resumeDetail.education.master.location'),
              details: t('resumeDetail.education.master.details', { returnObjects: true })
            },
            {
              title: t('resumeDetail.education.bachelor.title'),
              school: t('resumeDetail.education.bachelor.school'),
              period: t('resumeDetail.education.bachelor.period'),
              location: t('resumeDetail.education.bachelor.location'),
              details: t('resumeDetail.education.bachelor.details', { returnObjects: true })
            },
            {
              title: t('resumeDetail.education.highschool.title'),
              school: t('resumeDetail.education.highschool.school'),
              period: t('resumeDetail.education.highschool.period'),
              location: t('resumeDetail.education.highschool.location'),
              details: t('resumeDetail.education.highschool.details', { returnObjects: true })
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem'
              }}
            >
              <h4 style={{
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                {edu.title}
              </h4>
              <h5 style={{
                color: '#6366f1',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                {edu.school}
              </h5>
              <div style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}>
                  <FaCalendarAlt style={{ color: '#6366f1', fontSize: '0.85rem' }} />
                  {edu.period}
                </span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}>
                  <FaMapMarkerAlt style={{ color: '#6366f1', fontSize: '0.85rem' }} />
                  {edu.location}
                </span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {edu.details.map((detail, i) => (
                  <li key={i} style={{
                    position: 'relative',
                    paddingLeft: '2rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#6366f1',
                      fontSize: '0.8rem'
                    }}>▶</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 4rem auto', 
        padding: '0 2rem', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <FaCode style={{ color: '#6366f1', fontSize: '1.5rem' }} />
          {t('resumeDetail.skills.title')}
          <div style={{
            flex: 1,
            height: '2px',
            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), transparent)',
            marginLeft: '1rem'
          }} />
        </motion.h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              category: t('resumeDetail.skills.frontend.title'),
              skills: t('resumeDetail.skills.frontend.skills', { returnObjects: true }),
              icon: "🎨"
            },
            {
              category: t('resumeDetail.skills.backend.title'),
              skills: t('resumeDetail.skills.backend.skills', { returnObjects: true }),
              icon: "⚙️"
            },
            {
              category: t('resumeDetail.skills.database.title'),
              skills: t('resumeDetail.skills.database.skills', { returnObjects: true }),
              icon: "☁️"
            },
            {
              category: t('resumeDetail.skills.tools.title'),
              skills: t('resumeDetail.skills.tools.skills', { returnObjects: true }),
              icon: "🛠️"
            }
          ].map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem'
              }}
            >
              <h4 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{skillGroup.icon}</span>
                {skillGroup.category}
              </h4>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {skillGroup.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '25px',
                      padding: '0.5rem 1rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ResumeContainer>
  );
}

export default ResumeNew;
