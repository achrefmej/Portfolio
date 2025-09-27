import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "./ui/ThemeSwitch";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import CVDownloader from "./ui/CVDownloader";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDownload } from "react-icons/hi";
import logo from "../Assets/logo.png";

// Styled Components
const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  backdrop-filter: blur(20px);
  background: ${props => props.scrolled 
    ? 'rgba(10, 10, 15, 0.95)' 
    : 'rgba(10, 10, 15, 0.8)'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.25rem;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(168, 85, 247, 0.3),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 8px 32px rgba(168, 85, 247, 0.2);
    transform: translateY(-2px);
  }

  .logo-container {
    position: relative;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(
        from 0deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      animation: rotate 4s linear infinite;
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      position: relative;
      z-index: 1;
      filter: brightness(1.1);
    }

    .logo-initial {
      position: relative;
      z-index: 1;
      font-size: 1.8rem;
      font-weight: 900;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      background: linear-gradient(135deg, #fff, #f0f0f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    
    .name {
      font-size: 1.1rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 0.5px;
    }
    
    .title {
      font-size: 0.7rem;
      color: var(--text-secondary);
      font-weight: 500;
      opacity: 0.8;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.4rem 0.8rem;
    
    .logo-container {
      width: 40px;
      height: 40px;
      
      img {
        width: 28px;
        height: 28px;
      }
      
      .logo-initial {
        font-size: 1.6rem;
      }
    }
    
    .logo-text {
      .name {
        font-size: 1rem;
      }
      
      .title {
        font-size: 0.65rem;
      }
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &.active {
    color: var(--primary-500);
    background: rgba(168, 85, 247, 0.1);
  }

  &:hover {
    color: var(--primary-500);
    background: rgba(168, 85, 247, 0.05);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const MobileNavLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &.active {
    color: var(--primary-500);
    background: rgba(168, 85, 247, 0.1);
  }

  &:hover {
    color: var(--primary-500);
    background: rgba(168, 85, 247, 0.05);
    transform: translateX(10px);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const DownloadButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4);
    color: white;
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home'), icon: AiOutlineHome },
    { path: '/about', label: t('nav.about'), icon: AiOutlineUser },
    { path: '/project', label: t('nav.projects'), icon: AiOutlineFundProjectionScreen },
    { path: '/resume', label: t('nav.resume'), icon: CgFileDocument },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <>
      <NavbarContainer
        variants={navVariants}
        initial="hidden"
        animate="visible"
        scrolled={isScrolled}
      >
        <NavContent>
          <Logo
            as={Link}
            to="/"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { type: "spring", damping: 15, stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="logo-container">
           <div className="logo-initial">A</div>
            </div>
            <div className="logo-text">
              <div className="name">{t('navbar.name')}</div>
              <div className="title">{t('navbar.title')}</div>
            </div>
          </Logo>

          <NavLinks>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Icon />
                  {item.label}
                </NavLink>
              );
            })}
          </NavLinks>

          <RightSection>
            <LanguageSwitcher />
            <ThemeSwitch />
            <CVDownloader />
            
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </MobileMenuButton>
          </RightSection>
        </NavContent>
      </NavbarContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <MobileNavLink
                  key={item.path}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  variants={linkVariants}
                  custom={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon />
                  {item.label}
                </MobileNavLink>
              );
            })}
            
            <CVDownloader isMobile={true} />
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
