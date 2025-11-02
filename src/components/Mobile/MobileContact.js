import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';

const MobileContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 1.5rem 2rem;
  background: var(--bg-primary);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ContactInfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactInfoCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    color: white;
    border-radius: 12px;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .content {
    flex: 1;

    .label {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }

    .value {
      font-size: 0.95rem;
      color: var(--text-primary);
      font-weight: 600;
      word-break: break-word;
    }
  }

  &:active {
    transform: scale(0.98);
    background: var(--bg-secondary);
  }
`;

const FormContainer = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--primary-500);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  svg {
    font-size: 1.25rem;
  }
`;

const SocialSection = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.9);
    background: var(--primary-500);
    color: white;
    border-color: var(--primary-500);
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const MobileContact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t('contact.errors.validationFailed'));
      return;
    }

    setIsSubmitting(true);

    try {
      // Simuler l'envoi d'email - Remplacer avec votre configuration EmailJS
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(t('contact.success'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <MobileContactSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionHeader variants={itemVariants}>
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <SectionSubtitle>{t('contact.subtitle')}</SectionSubtitle>
        </SectionHeader>

        <ContactInfoGrid>
          <ContactInfoCard
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            as="a"
            href={`mailto:${t('footer.contact.email') || 'achref.mejri@example.com'}`}
          >
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="content">
              <div className="label">{t('contact.email.label')}</div>
              <div className="value">{t('footer.contact.email') || 'achref.mejri@example.com'}</div>
            </div>
          </ContactInfoCard>

          <ContactInfoCard
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            as="a"
            href={`tel:${t('footer.contact.phone') || '+216 12 345 678'}`}
          >
            <div className="icon">
              <FaPhone />
            </div>
            <div className="content">
              <div className="label">{t('contact.phone.label')}</div>
              <div className="value">{t('footer.contact.phone') || '+216 12 345 678'}</div>
            </div>
          </ContactInfoCard>

          <ContactInfoCard variants={itemVariants} whileTap={{ scale: 0.98 }}>
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="content">
              <div className="label">{t('contact.location')}</div>
                <div className="value">{t('footer.contact.location') || 'Tunis, Tunisia'}</div>
            </div>
          </ContactInfoCard>
        </ContactInfoGrid>

        <FormContainer variants={itemVariants}>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">
                <FaUser />
                {t('contact.form.name')}
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.namePlaceholder')}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                <FaEnvelope />
                {t('contact.form.email')}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.emailPlaceholder')}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">
                <FaComment />
                {t('contact.form.message')}
              </Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.messagePlaceholder')}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.div>
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  {t('contact.form.submit')}
                </>
              )}
            </SubmitButton>
          </form>
        </FormContainer>

        <SocialSection>
          <h3>{t('contact.social.title')}</h3>
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
          </SocialLinks>
        </SocialSection>
      </motion.div>
    </MobileContactSection>
  );
};

export default MobileContact;
