import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
    // Changer la direction du document pour l'arabe
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
  };

  return (
    <LanguageSwitcherContainer>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        <LanguageIcon>
          <FaGlobe />
        </LanguageIcon>
        <CurrentLanguage>
          <Flag>{currentLanguage.flag}</Flag>
          <LanguageCode>{currentLanguage.code.toUpperCase()}</LanguageCode>
        </CurrentLanguage>
        <ChevronIcon $isOpen={isOpen}>
          <FaChevronDown />
        </ChevronIcon>
      </LanguageButton>

      {isOpen && (
        <LanguageDropdown>
          {languages.map((language) => (
            <LanguageOption
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              $active={language.code === i18n.language}
            >
              <Flag>{language.flag}</Flag>
              <LanguageName>{language.name}</LanguageName>
              <LanguageCode>{language.code.toUpperCase()}</LanguageCode>
            </LanguageOption>
          ))}
        </LanguageDropdown>
      )}
    </LanguageSwitcherContainer>
  );
};

const LanguageSwitcherContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`;

const LanguageIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  opacity: 0.8;
`;

const CurrentLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Flag = styled.span`
  font-size: 16px;
`;

const LanguageCode = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  margin-left: auto;
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 1000;
  overflow: hidden;
`;

const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$active ? 'rgba(123, 97, 255, 0.1)' : 'transparent'};
  color: ${props => props.$active ? '#7b61ff' : '#333'};

  &:hover {
    background: rgba(123, 97, 255, 0.1);
    color: #7b61ff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

const LanguageName = styled.span`
  font-size: 14px;
  font-weight: 500;
  flex: 1;
`;

export default LanguageSwitcher;