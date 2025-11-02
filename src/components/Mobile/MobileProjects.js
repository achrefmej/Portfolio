import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaReact,
  FaFilter
} from 'react-icons/fa';

// Import des images de projets
import appvoloh1 from "../../Assets/Projects/appvoloh1.gif";
import appvolo from "../../Assets/Projects/appvolo.gif";
import appvolo_1 from "../../Assets/Projects/appvolo_1.gif";
import meta from "../../Assets/Projects/gif1.gif";
import VICTORIOUS from "../../Assets/Projects/demo1.gif";
import easybank from "../../Assets/Projects/easybank.png";
import notecontrol from "../../Assets/Projects/notecontrol.png";
import ios from "../../Assets/Projects/ios.png";
import DEVOPS_ICON from "../../Assets/Projects/leaf.png";

const MobileProjectsSection = styled.section`
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

const FilterContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0 0.5rem 1rem;
  margin-bottom: 1.5rem;
  
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.55rem 1rem;
  background: ${props => props.active ? 'var(--primary-500)' : 'var(--bg-card)'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary-500)' : 'var(--border-color)'};
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: 0 0 auto;
  box-shadow: ${props => props.active ? '0 6px 18px rgba(99, 102, 241, 0.18)' : 'none'};
  transition: transform 0.12s ease, background 0.12s ease, box-shadow 0.12s ease;

  &:active {
    transform: scale(0.96);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: var(--bg-secondary);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  &:active {
    img {
      transform: scale(1.1);
    }
    
    .overlay {
      opacity: 1;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-500);
  color: white;
  border-radius: 50%;
  font-size: 1.25rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
  
  &:active {
    transform: scale(0.9);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(168, 85, 247, 0.1);
  color: var(--primary-500);
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  padding: 0.4rem 0.75rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    font-size: 0.9rem;
  }
`;

const ProjectStats = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid var(--border-color);

  .stat {
    text-align: center;
    
    .value {
      display: block;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--primary-500);
      margin-bottom: 0.25rem;
    }
    
    .label {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  
  .icon {
    font-size: 3rem;
    color: var(--text-muted);
    opacity: 0.5;
    margin-bottom: 1rem;
  }
  
  .message {
    font-size: 1rem;
    color: var(--text-secondary);
  }
`;

const MobileProjects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: t('projects.data.easybank.title'),
      description: t('projects.data.easybank.description'),
      longDescription: t('projects.data.easybank.longDescription'),
      image: easybank,
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
      image: notecontrol,
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
      image: DEVOPS_ICON,
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

  // Build filter options from project types (keeps order: All first)
  const types = ['All', ...Array.from(new Set(projects.map(p => p.type))).filter(Boolean)];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.type === filter);

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
    <MobileProjectsSection>
      <SectionHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <SectionSubtitle>{t('projects.subtitle')}</SectionSubtitle>
      </SectionHeader>

      <FilterContainer>
        {types.map((type) => {
          const label = type === 'All' ? t('projects.filters.all') || 'All' : (type.length <= 2 ? type.toUpperCase() : type.charAt(0).toUpperCase() + type.slice(1));
          return (
            <FilterButton
              key={type}
              active={filter === type}
              onClick={() => setFilter(type)}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter />
              {label}
            </FilterButton>
          );
        })}
      </FilterContainer>

      <AnimatePresence mode="wait">
        <ProjectsGrid
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                layout
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <div className="overlay">
                    <ProjectLinks>
                      <IconLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </IconLink>
                      <IconLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </IconLink>
                    </ProjectLinks>
                  </div>
                </ProjectImage>

                <ProjectContent>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TechStack>
                    {(project.technologies || project.tech || []).map((tech, index) => (
                      <TechTag key={index}>
                        <FaCode />
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>

                  <ProjectStats>
                    <div className="stat">
                      <span className="value">⭐ {project.stars || '-'}</span>
                      <span className="label">Stars</span>
                    </div>
                    <div className="stat">
                      <span className="value">🔱 {project.forks || '-'}</span>
                      <span className="label">Forks</span>
                    </div>
                    <div className="stat">
                      <span className="value">✨ Active</span>
                      <span className="label">Status</span>
                    </div>
                  </ProjectStats>
                </ProjectContent>
              </ProjectCard>
            ))
          ) : (
            <EmptyState>
              <div className="icon">📁</div>
              <div className="message">{t('projects.noProjects')}</div>
            </EmptyState>
          )}
        </ProjectsGrid>
      </AnimatePresence>
    </MobileProjectsSection>
  );
};

export default MobileProjects;
