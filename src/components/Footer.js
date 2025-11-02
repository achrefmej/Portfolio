import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineHeart,
} from "react-icons/ai";
import { 
  FaLinkedinIn, 
  FaEnvelope, 
  FaArrowUp,
  FaCode,
  FaReact
} from "react-icons/fa";

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    /* extend footer background to fill area reserved for bottom nav */
    padding-bottom: calc(var(--mobile-bottom-nav-height) + var(--mobile-safe-area-bottom) + 1.25rem);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-500), transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const BrandSection = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tech-stack {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: 0.9rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    .heart {
      color: #e74c3c;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  }
`;

const QuickLinks = styled(motion.div)`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover {
          color: var(--primary-500);
          transform: translateX(5px);
        }
      }
    }
  }
`;

const ContactInfo = styled(motion.div)`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
    font-size: 0.9rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    svg {
      color: var(--primary-500);
      font-size: 1rem;
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  color: var(--text-secondary);
  border-radius: 10px;
  font-size: 1.1rem;
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

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding-top: 1rem;
  }
`;

const ScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4);
  }
`;

function Footer() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/achrefmej",
      icon: AiFillGithub,
      label: "GitHub"
    },
    {
      href: "https://x.com/MejriAchref4?t=hXHuFgDNQBUksmLKAQMEuQ&s=09",
      icon: AiOutlineTwitter,
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/in/achref-mejri-8a9253179/",
      icon: FaLinkedinIn,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/achrefmej?igsh=N3N1OGI4bnNndXd3",
      icon: AiFillInstagram,
      label: "Instagram"
    },
    {
      href: "mailto:mejri.achref.working@gmail.com",
      icon: FaEnvelope,
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#home", key: "home" },
    { href: "#about", key: "about" },
    { href: "#projects", key: "projects" },
    { href: "#contact", key: "contact" },
    { href: "/resume", key: "resume" }
  ];

  return (
    <>
      <FooterContainer>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FooterContent>
              <BrandSection variants={itemVariants}>
                <h3>
                  <FaCode />
                  {t('footer.brand')}
                </h3>
                <p>
                  {t('footer.description')}
                </p>
                <div className="tech-stack">
                  {t('footer.madeWith')} <AiOutlineHeart className="heart" /> {t('footer.and')} <FaReact /> React
                </div>
              </BrandSection>

              <QuickLinks variants={itemVariants}>
                <h4>{t('footer.quickLinks.title')}</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{t(`footer.quickLinks.${link.key}`)}</a>
                    </li>
                  ))}
                </ul>
              </QuickLinks>

              <ContactInfo variants={itemVariants}>
                <h4>{t('footer.contact.title')}</h4>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>mejri.achref.working@gmail.com</span>
                </div>
                <div className="contact-item">
                  <AiFillGithub />
                  <span>{t('footer.contact.location')}</span>
                </div>
                
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
              </ContactInfo>
            </FooterContent>

            <FooterBottom>
              <div>
                © {currentYear} {t('footer.brand')}. {t('footer.copyright')}
              </div>
              <div>
                {t('footer.madeWithPassion')}
              </div>
            </FooterBottom>
          </motion.div>
        </Container>
      </FooterContainer>

      <ScrollToTop
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp />
      </ScrollToTop>
    </>
  );
}

export default Footer;
