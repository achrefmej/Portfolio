import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaEnvelope,
  FaHeart
} from 'react-icons/fa';

const MobileFooterContainer = styled.footer`
  background: var(--bg-card);
  border-top: 1px solid var(--border-color);
  padding: 2rem 1.5rem 1rem;
  margin-top: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-size: 1.25rem;
  text-decoration: none;

  &:active {
    transform: scale(0.9);
    background: var(--primary-500);
    color: white;
    border-color: var(--primary-500);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);

  .heart {
    color: #e74c3c;
    display: inline-block;
    margin: 0 0.25rem;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;

const MadeWith = styled.div`
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const MobileFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <MobileFooterContainer>
      <SocialLinks>
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
          href="https://twitter.com/achrefmej"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="mailto:achref.mejri@example.com"
          whileTap={{ scale: 0.9 }}
        >
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>

      <Copyright>
        © {currentYear} {t('footer.copyright')}
        <span className="heart">
          <FaHeart />
        </span>
      </Copyright>

      <MadeWith>
        {t('footer.madeWith')} React & Framer Motion
      </MadeWith>
    </MobileFooterContainer>
  );
};

export default MobileFooter;
