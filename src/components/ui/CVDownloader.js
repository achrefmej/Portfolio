import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { HiOutlineDownload, HiChevronDown } from "react-icons/hi";

const CVDownloaderContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4);
  }

  .download-icon {
    font-size: 1.1rem;
  }

  .chevron {
    font-size: 1rem;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  overflow: hidden;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const DropdownItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(168, 85, 247, 0.1);
    color: var(--primary-500);
    transform: translateX(5px);
  }

  .flag {
    font-size: 1.2rem;
  }

  .language {
    flex: 1;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
`;

function CVDownloader({ className = "", isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const cvOptions = [
    {
      lang: 'fr',
      label: 'Français',
      flag: '🇫🇷',
      file: require("../../Assets/cv_2025_mejri_fr.pdf"),
      fileName: "CV_Achref_Mejri_2025_FR.pdf"
    },
    {
      lang: 'en',
      label: 'English',
      flag: '🇺🇸',
      file: require("../../Assets/cv_2025_mejri_ang.pdf"),
      fileName: "CV_Achref_Mejri_2025_EN.pdf"
    }
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 }
    })
  };

  const handleDownload = (option) => {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = option.file;
    link.download = option.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <CVDownloaderContainer className={className}>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        whileHover={{ y: isMobile ? 0 : -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        <HiOutlineDownload className="download-icon" />
        <span className={isMobile ? "" : "hide-mobile"}>{t('nav.downloadCV')}</span>
        <HiChevronDown className="chevron" />
      </DropdownButton>

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <DropdownMenu
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {cvOptions.map((option, index) => (
                <DropdownItem
                  key={option.lang}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDownload(option);
                  }}
                  href="#"
                >
                  <span className="flag">{option.flag}</span>
                  <span className="language">{option.label}</span>
                  <HiOutlineDownload style={{ fontSize: '1rem', opacity: 0.7 }} />
                </DropdownItem>
              ))}
            </DropdownMenu>
          </>
        )}
      </AnimatePresence>
    </CVDownloaderContainer>
  );
}

export default CVDownloader;