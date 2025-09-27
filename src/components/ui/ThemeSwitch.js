import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import styled from 'styled-components';

const SwitchContainer = styled(motion.div)`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${props => props.isDark ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 3px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`;

const SwitchHandle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${props => props.isDark ? '#764ba2' : '#f5576c'};
`;

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <SwitchContainer
      isDark={isDarkMode}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <SwitchHandle
        isDark={isDarkMode}
        layout
        transition={spring}
        animate={{
          x: isDarkMode ? 0 : 30
        }}
      >
        {isDarkMode ? <BsMoon /> : <BsSun />}
      </SwitchHandle>
    </SwitchContainer>
  );
};

export default ThemeSwitch;