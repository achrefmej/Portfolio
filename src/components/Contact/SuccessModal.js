import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  margin: auto;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem auto;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-secondary);
    color: var(--text-primary);
    transform: rotate(90deg);
  }
`;

const SuccessIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem auto;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(135deg, #10b981, #059669);
    border-radius: 50%;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Title = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Message = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ActionButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(199, 112, 240, 0.3);
  }
`;

const Particles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--primary-500);
    border-radius: 50%;
    opacity: 0.6;
  }
  
  &::before {
    top: 20%;
    left: 20%;
    animation: float 3s ease-in-out infinite;
  }
  
  &::after {
    bottom: 20%;
    right: 20%;
    animation: float 3s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const SuccessModal = ({ isOpen, onClose, formData }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      y: 50,
      rotateX: -15 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -30,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        duration: 0.8,
        bounce: 0.6
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <ModalContent
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <Particles />
            
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTimes />
            </CloseButton>

            <SuccessIcon
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaCheckCircle />
            </SuccessIcon>

            <Title
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Message envoyé !
            </Title>

            <Message
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Merci <strong>{formData?.name}</strong> ! Votre message a été envoyé avec succès. 
              Je vous répondrai dans les plus brefs délais à l'adresse <strong>{formData?.email}</strong>.
            </Message>

            <ActionButton
              variants={textVariants}
              initial="hidden"
              animate="visible"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Parfait !
            </ActionButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
