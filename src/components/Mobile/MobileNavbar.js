import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "../ui/ThemeSwitch";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import CVDownloader from "../ui/CVDownloader";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram,
  FaMoon,
  FaSun 
} from "react-icons/fa";
import logo from "../../Assets/logo.png";

// ===== TOP NAVBAR (Minimale) =====
const TopNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.75rem 1rem;
  backdrop-filter: blur(20px);
  background: ${props => props.scrolled 
    ? 'rgba(10, 10, 15, 0.95)' 
    : 'rgba(10, 10, 15, 0.85)'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${props => props.scrolled 
    ? '0 4px 30px rgba(0, 0, 0, 0.3)' 
    : '0 2px 20px rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
`;

const TopNavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  
  &:active {
    transform: scale(0.98);
  }

  .logo-container {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    box-shadow: 0 3px 12px rgba(168, 85, 247, 0.4);

    img {
      width: 24px;
      height: 24px;
      border-radius: 6px;
    }

    .logo-initial {
      font-size: 1.4rem;
      font-weight: 900;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    
    .name {
      font-size: 0.95rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .title {
      font-size: 0.6rem;
      color: var(--text-secondary);
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`;

const TopRightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 10001;
  pointer-events: auto;
`;

const MenuButton = styled.button`
  background: rgba(168, 85, 247, 0.2);
  border: 2px solid rgba(168, 85, 247, 0.5);
  color: var(--primary-500);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  pointer-events: auto;
  position: relative;
  z-index: 10000;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    background: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    background: rgba(168, 85, 247, 0.4);
  }
`;

// Small toggle for bottom nav
const BottomMenuToggle = styled.button`
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168,85,247,0.25);
  color: var(--primary-500);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.2s ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`;

// ===== BOTTOM NAVIGATION BAR =====
const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.5rem 0.75rem 0.75rem;
  backdrop-filter: blur(20px);
  background: rgba(10, 10, 15, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.3);
`;

const BottomNavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  gap: 0.25rem;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  text-decoration: none;
  position: relative;
  flex: 1;
  min-width: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:active {
    transform: scale(0.95);
  }
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  .icon {
    font-size: 1.4rem;
    color: ${props => props.$active ? 'var(--primary-500)' : 'var(--text-secondary)'};
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .label {
    font-size: 0.65rem;
    font-weight: 600;
    color: ${props => props.$active ? 'var(--primary-500)' : 'var(--text-secondary)'};
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  ${props => props.$active && `
    background: rgba(168, 85, 247, 0.15);
    border: 1px solid rgba(168, 85, 247, 0.3);
    
    .icon {
      transform: translateY(-2px);
      filter: drop-shadow(0 4px 8px rgba(168, 85, 247, 0.4));
    }
  `}

  &:active {
    transform: scale(0.95);
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-500), var(--primary-600));
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 8px rgba(168, 85, 247, 0.6);
`;

// ===== FULL SCREEN MENU =====
const FullScreenMenu = styled.div`
  position: fixed;
  inset: 0; /* shorthand for top:0; right:0; bottom:0; left:0; */
  min-height: 100vh;
  width: 100%;
  z-index: ${props => props.$isOpen ? 1100 : -1};
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 70px;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  
  /* Smooth transitions */
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: ${props => props.$isOpen 
    ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, visibility 0s'
    : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, visibility 0s 0.3s'};
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  will-change: ${props => props.$isOpen ? 'transform, opacity' : 'auto'};
`;

// Motion wrapper for the fullscreen menu - only the container is animated
const MotionFullScreen = motion(FullScreenMenu);

const menuVariants = {
  closed: { opacity: 0, x: '100%' },
  open: { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } },
};

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  z-index: 10;
`;

const CloseButton = styled.button`
  background: rgba(168, 85, 247, 0.2);
  border: 2px solid rgba(168, 85, 247, 0.5);
  color: var(--primary-500);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  pointer-events: auto;
  z-index: 10002;
  position: relative;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
    background: rgba(168, 85, 247, 0.4);
  }
`;

const MenuContent = styled.div`
  flex: 1;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  pointer-events: auto;
  position: relative;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.98);
    background: rgba(168, 85, 247, 0.15);
  }

  .icon-wrapper {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, var(--primary-500), var(--primary-600))' 
      : 'rgba(255, 255, 255, 0.05)'};
    color: ${props => props.$active ? 'white' : 'var(--text-secondary)'};
    font-size: 1.3rem;
    transition: all 0.3s ease;
  }

  .link-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .link-title {
      font-size: 1rem;
      font-weight: 600;
      color: ${props => props.$active ? 'var(--primary-500)' : 'var(--text-primary)'};
    }

    .link-description {
      font-size: 0.8rem;
      color: var(--text-secondary);
      opacity: 0.8;
    }
  }

  ${props => props.$active && `
    background: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.2);
  `}
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SettingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  cursor: pointer;
  pointer-events: auto;

  .setting-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  cursor: pointer;
  pointer-events: auto;
  touch-action: manipulation;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.3);
    color: var(--primary-500);
  }
`;

const QuickActionButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  border: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }

  svg {
    font-size: 1.2rem;
  }
`;

// ===== COMPONENT =====
const MobileNavbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    // Use a body class to control scrolling to avoid leftover inline styles
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const navItems = [
    { path: "/", icon: AiOutlineHome, label: t("nav.home") || "Home" },
    { path: "/about", icon: AiOutlineUser, label: t("nav.about") || "About" },
    { path: "/project", icon: AiOutlineFundProjectionScreen, label: t("nav.projects") || "Projects" },
    { path: "/resume", icon: CgFileDocument, label: t("nav.resume") || "Resume" },
    { path: "/contact", icon: AiOutlineMail, label: t("nav.contact") || "Contact" },
  ];

  const menuLinks = [
    { 
      path: "/", 
      icon: AiOutlineHome, 
      title: t("nav.home") || "Accueil",
      description: t('menu.links.home.description') || "Découvrez mon profil"
    },
    { 
      path: "/about", 
      icon: AiOutlineUser, 
      title: t("nav.about") || "À Propos",
      description: t('menu.links.about.description') || "Parcours & compétences"
    },
    { 
      path: "/project", 
      icon: AiOutlineFundProjectionScreen, 
      title: t("nav.projects") || "Projets",
      description: t('menu.links.projects.description') || "Mes réalisations"
    },
    { 
      path: "/resume", 
      icon: CgFileDocument, 
      title: t("nav.resume") || "CV",
      description: t('menu.links.resume.description') || "Télécharger mon CV"
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <TopNavbar scrolled={scrolled}>
        <TopNavContent>
          <Logo as={Link} to="/">
            <div className="logo-container">
              <span className="logo-initial">A</span>
            </div>
            <div className="logo-text">
              <span className="name">Achref</span>
              <span className="title">{t("nav.developer") || "Developer"}</span>
            </div>
          </Logo>

          <TopRightActions>
            <MenuButton
              type="button"
              aria-label={menuOpen ? t('common.close') : t('common.open')}
              onClick={() => setMenuOpen(prev => !prev)}
              onKeyDown={(e) => { if (e.key === 'Enter') setMenuOpen(prev => !prev); }}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </MenuButton>
          </TopRightActions>
        </TopNavContent>
      </TopNavbar>

      {/* Bottom Navigation */}
      <BottomNav>
        <BottomNavContent>
       
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
                <NavItem
                key={item.path}
                to={item.path}
                $active={isActive}
                onClick={() => setMenuOpen(false)}
              >
                {isActive && <ActiveIndicator />}
                <item.icon className="icon" />
                <span className="label">{item.label}</span>
              </NavItem>
            );
          })}
        </BottomNavContent>
      </BottomNav>

      {/* Full Screen Menu */}
      <MotionFullScreen
        $isOpen={menuOpen}
        variants={menuVariants}
        initial="closed"
        animate={menuOpen ? 'open' : 'closed'}
        role="dialog"
        aria-modal="true"
      >
            <MenuHeader>
                <Logo>
                  <div className="logo-container">
                    <span className="logo-initial">A</span>
                  </div>
                  <div className="logo-text">
                    <span className="name">{t('menu.title') || 'Menu'}</span>
                    <span className="title">{t('menu.navigation') || 'Navigation'}</span>
                  </div>
                </Logo>
              <CloseButton
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setMenuOpen(false)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Escape') setMenuOpen(false); }}
              >
                <AiOutlineClose />
              </CloseButton>
            </MenuHeader>

            <MenuContent>
              {/* Navigation Links */}
              <MenuSection>
                <SectionTitle>{t("menu.navigation") || "NAVIGATION"}</SectionTitle>
                {menuLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <MenuLink
                      key={link.path}
                      to={link.path}
                      $active={isActive}
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="icon-wrapper">
                        <link.icon />
                      </div>
                      <div className="link-content">
                        <div className="link-title">{link.title}</div>
                        <div className="link-description">{link.description}</div>
                      </div>
                    </MenuLink>
                  );
                })}
              </MenuSection>

              {/* Settings */}
              <MenuSection>
                <SectionTitle>{t("menu.settings") || "PARAMÈTRES"}</SectionTitle>
                <SettingsGrid>
                  <SettingCard>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                      <ThemeSwitch />
                      <div className="setting-label">
                        {theme === 'dark' ? t('theme.dark') : t('theme.light')}
                      </div>
                    </div>
                  </SettingCard>
                  <SettingCard>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                      <LanguageSwitcher />
                      <div className="setting-label">{t('language.select') || 'Langue'}</div>
                    </div>
                  </SettingCard>
                </SettingsGrid>
              </MenuSection>

              {/* Download CV */}
              <MenuSection>
                <SectionTitle>{t("menu.download") || "TÉLÉCHARGER CV"}</SectionTitle>
                <div style={{ width: '100%' }}>
                  <CVDownloader isMobile={true} />
                </div>
              </MenuSection>

              {/* Contact Link */}
              <MenuSection>
                <MenuLink
                  to="/contact"
                  $active={location.pathname === '/contact'}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="icon-wrapper">
                    <AiOutlineMail />
                  </div>
                  <div className="link-content">
                    <div className="link-title">{t("nav.contact") || "Contact"}</div>
                    <div className="link-description">{t('menu.contact.description') || 'Envoyez-moi un message'}</div>
                  </div>
                </MenuLink>
              </MenuSection>

              {/* Social Links */}
              <MenuSection>
                <SectionTitle>{t("menu.social") || "RÉSEAUX SOCIAUX"}</SectionTitle>
                <SocialGrid>
                  <SocialButton
                    href="https://github.com/achrefmej"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </SocialButton>
                  <SocialButton
                    href="https://www.linkedin.com/in/achref-mejri-53061425b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </SocialButton>
                  <SocialButton
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </SocialButton>
                </SocialGrid>
              </MenuSection>
            </MenuContent>
          </MotionFullScreen>
    </>
  );
};

export default MobileNavbar;
