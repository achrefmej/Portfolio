import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { emailjsConfig, isEmailJSConfigured } from '../../config/emailjs';
import SuccessModal from './SuccessModal';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    background: var(--bg-card-hover);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    color: white;
    border-radius: 12px;
    font-size: 1.2rem;
  }

  .content {
    flex: 1;

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    p {
      color: var(--text-secondary);
      margin: 0;
    }
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(20px);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
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
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
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

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loading {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--bg-card);
  color: var(--text-secondary);
  border-radius: 12px;
  font-size: 1.2rem;
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

const ModernContact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Initialiser EmailJS
  useEffect(() => {
    if (isEmailJSConfigured()) {
      emailjs.init(emailjsConfig.publicKey);
      console.log('📧 EmailJS initialisé avec succès!');
    } else {
      console.warn('⚠️ EmailJS non configuré - utilisation du mode fallback');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validation des champs
      if (!formData.name || !formData.email || !formData.message) {
        toast.error('Veuillez remplir tous les champs obligatoires.');
        setIsLoading(false);
        return;
      }

      // Vérifier si EmailJS est configuré
      console.log('Configuration EmailJS:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKey: emailjsConfig.publicKey ? 'Configuré' : 'Manquant',
        isConfigured: isEmailJSConfigured()
      });

      if (!isEmailJSConfigured()) {
        // Fallback vers mailto si EmailJS n'est pas configuré
        console.log('EmailJS non configuré, utilisation de mailto...');
        const mailtoLink = `mailto:mejri.achref.working@gmail.com?subject=${encodeURIComponent(
          formData.subject || `Nouveau message de ${formData.name}`
        )}&body=${encodeURIComponent(
          `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        window.location.href = mailtoLink;
        toast.success('Votre client email s\'ouvre. Envoyez le message depuis votre application email.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsLoading(false);
        return;
      }

      // Envoi via EmailJS
      console.log('Envoi via EmailJS avec les paramètres:');
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `Nouveau message de ${formData.name}`,
        message: formData.message,
        to_name: 'Achref Mejri',
        to_email: 'mejri.achref.working@gmail.com'
      };
      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );
      
      console.log('Résultat EmailJS:', result);

      // Afficher la modal de succès au lieu du toast
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement.');
    } finally {
      setIsLoading(false);
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: t('contact.info.email'),
      content: "mejri.achref.working@gmail.com"
    },
    {
      icon: FaPhone,
      title: t('contact.info.phone'),
      content: "+216 50 556 323"
    },
    {
      icon: FaMapMarkerAlt,
      title: t('contact.info.location'),
      content: "Tunis, Tunisia"
    }
  ];

  const socialLinks = [
    {
      href: "https://github.com/achrefmej",
      icon: FaGithub,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/achref-mejri-8a9253179/",
      icon: FaLinkedin,
      label: "LinkedIn"
    },
    {
      href: "https://x.com/MejriAchref4",
      icon: FaTwitter,
      label: "Twitter"
    }
  ];

  return (
    <ContactSection ref={ref} id="contact">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle variants={itemVariants}>
            {t('contact.title')}
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            {t('contact.subtitle')}
            <br />
            <span style={{ 
              fontSize: '0.9rem', 
              color: 'var(--primary-500)', 
              fontWeight: '600' 
            }}>
              📧 {t('contact.form.emailConfigured')}
            </span>
          </SectionSubtitle>

          <ContactGrid>
            <ContactInfo variants={itemVariants}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <InfoCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                  >
                    <div className="icon">
                      <Icon />
                    </div>
                    <div className="content">
                      <h4>{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </InfoCard>
                );
              })}

              <SocialLinks variants={itemVariants}>
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

            <ContactForm 
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              <FormGroup>
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isLoading}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {isLoading ? (
                  <div className="loading" />
                ) : (
                  <FaPaperPlane />
                )}
                {isLoading ? t('contact.form.sending') : t('contact.form.send')}
              </SubmitButton>

              <div style={{ 
                textAlign: 'center', 
                margin: '1rem 0', 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)' 
              }}>
                {t('contact.form.orContact')}
              </div>

              <SubmitButton
                type="button"
                onClick={() => window.location.href = 'mailto:mejri.achref.working@gmail.com?subject=Contact depuis votre portfolio'}
                style={{ 
                  background: 'var(--bg-secondary)', 
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)'
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <FaEnvelope />
                mejri.achref.working@gmail.com
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </Container>

      {/* Modal de succès */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        formData={formData}
      />
    </ContactSection>
  );
};

export default ModernContact;