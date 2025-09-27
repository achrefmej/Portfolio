import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const TypeContainer = styled.div`
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 600;
  color: var(--primary-500);
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const TypedWrapper = styled.div`
  .typed-cursor {
    font-size: 1.2em;
    color: var(--accent-cyan);
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const ModernType = () => {
  const { t } = useTranslation();
  const titles = t('home.titles', { returnObjects: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <TypeContainer>
        <TypedWrapper>
          <ReactTyped
            strings={titles}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1000}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </TypedWrapper>
      </TypeContainer>
    </motion.div>
  );
};

export default ModernType;