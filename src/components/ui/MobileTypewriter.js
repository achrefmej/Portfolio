import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const TypeContainer = styled(motion.div)`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-500);
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
`;

const TypedText = styled(motion.span)`
  display: inline-block;
`;

const Cursor = styled(motion.span)`
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: var(--accent-cyan);
  margin-left: 4px;
  vertical-align: middle;
`;

const MobileTypewriter = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);

  // Récupérer les titres depuis les traductions
  const titles = t('home.titles', { returnObjects: true });

  useEffect(() => {
    // Si titles n'est pas un tableau, utiliser des valeurs par défaut
    const textsArray = Array.isArray(titles) ? titles : [
      'Développeur Full Stack',
      'Expert React & Node.js',
      'Architecte Solutions'
    ];

    const currentText = textsArray[currentIndex];
    
    const ticker = setInterval(() => {
      if (!isDeleting) {
        // Écriture
        if (text !== currentText) {
          setText(currentText.substring(0, text.length + 1));
          setDelta(150 - Math.random() * 100);
        } else {
          // Attendre avant de supprimer
          setDelta(2000);
          setIsDeleting(true);
        }
      } else {
        // Suppression
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textsArray.length);
          setDelta(500);
        } else {
          setText(currentText.substring(0, text.length - 1));
          setDelta(100);
        }
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, currentIndex, delta, titles]);

  return (
    <TypeContainer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <TypedText
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {text}
      </TypedText>
      <Cursor
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </TypeContainer>
  );
};

export default MobileTypewriter;
