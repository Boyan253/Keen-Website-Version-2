import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing, breakpoints } from '../../theme';

const Section = styled.section`
  padding: ${spacing['5xl']} 0;
  background: ${colors.white};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing['4xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['5xl']};
  line-height: ${typography.lineHeight.tight};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.lg} 0;
  
  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.xl};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['3xl']};
  margin-bottom: ${spacing['4xl']};
  
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${spacing['2xl']};
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${spacing['2xl']};
`;

const ContactCard = styled(motion.div)`
  background: ${colors.backgroundSecondary};
  border-radius: 16px;
  padding: ${spacing['2xl']};
  border: 1px solid ${colors.borderLight};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${colors.gradient};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing.lg};
  font-size: 24px;
`;

const ContactTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.sm} 0;
`;

const ContactDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
`;

const ContactForm = styled(motion.form)`
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing['3xl']};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.borderLight};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.gradient};
  }
`;

const FormTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.lg} 0;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.lg};
  margin-bottom: ${spacing.lg};
  
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

const FormLabel = styled.label`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textPrimary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const FormInput = styled.input`
  padding: ${spacing.md};
  border: 2px solid ${colors.borderLight};
  border-radius: 8px;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.base};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.blue};
    box-shadow: 0 0 0 3px rgba(4, 165, 250, 0.1);
  }
  
  &::placeholder {
    color: ${colors.textLight};
  }
`;

const FormTextarea = styled.textarea`
  padding: ${spacing.md};
  border: 2px solid ${colors.borderLight};
  border-radius: 8px;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.base};
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.blue};
    box-shadow: 0 0 0 3px rgba(4, 165, 250, 0.1);
  }
  
  &::placeholder {
    color: ${colors.textLight};
  }
`;

const FormButton = styled(motion.button)`
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  padding: ${spacing.lg} ${spacing['2xl']};
  border-radius: 12px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: ${colors.blueDark};
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(4, 165, 250, 0.4);
  }
  
  &:disabled {
    background: ${colors.grayLight};
    color: ${colors.textLight};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${colors.success};
  color: ${colors.white};
  padding: ${spacing.lg};
  border-radius: 8px;
  text-align: center;
  margin-bottom: ${spacing.lg};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
`;

const ErrorMessage = styled(motion.div)`
  background: ${colors.error};
  color: ${colors.white};
  padding: ${spacing.lg};
  border-radius: 8px;
  text-align: center;
  margin-bottom: ${spacing.lg};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
`;

const CTA = styled(motion.div)`
  text-align: center;
  background: ${colors.gradientSubtle};
  border-radius: 20px;
  padding: ${spacing['3xl']};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(4, 165, 250, 0.05) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const CTATitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.md} 0;
  position: relative;
  z-index: 2;
`;

const CTADescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textSecondary};
  margin: 0 0 ${spacing.lg} 0;
  position: relative;
  z-index: 2;
`;

const CTAButton = styled(motion.button)`
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  padding: ${spacing.lg} ${spacing['2xl']};
  border-radius: 12px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  position: relative;
  z-index: 2;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: ${colors.blueDark};
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(4, 165, 250, 0.4);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our team during business hours"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant answers to your questions"
    },
    {
      icon: "📅",
      title: "Book a Call",
      description: "Schedule a free consultation at your convenience"
    }
  ];

  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get Started Today
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform your business with AI agents? Let's discuss your specific needs.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo>
            {contactInfo.map((info, index) => (
              <ContactCard
                key={info.title}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>{info.icon}</ContactIcon>
                <ContactTitle>{info.title}</ContactTitle>
                <ContactDescription>{info.description}</ContactDescription>
              </ContactCard>
            ))}
          </ContactInfo>

          <ContactForm
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Send us a message</FormTitle>
            
            {submitStatus === 'success' && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ✓ Thanks! We'll be in touch within 48 hours to book your consultation.
              </SuccessMessage>
            )}
            
            {submitStatus === 'error' && (
              <ErrorMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ✗ Something went wrong. Please try again or contact us directly.
              </ErrorMessage>
            )}

            <FormGrid>
              <FormGroup>
                <FormLabel htmlFor="firstName">First Name *</FormLabel>
                <FormInput
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="lastName">Last Name *</FormLabel>
                <FormInput
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                />
              </FormGroup>
            </FormGrid>

            <FormGrid>
              <FormGroup>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="company">Company</FormLabel>
                <FormInput
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                />
              </FormGroup>
            </FormGrid>

            <FormGroup>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your automation needs, current challenges, and what you'd like to achieve with AI agents..."
                required
              />
            </FormGroup>

            <FormButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </FormButton>
          </ContactForm>
        </ContactGrid>

        <CTA
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to get started?</CTATitle>
          <CTADescription>
            Join the growing number of businesses already using AI agents to transform their operations.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('ai-readiness');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Take AI Readiness Assessment
          </CTAButton>
        </CTA>
      </Container>
    </Section>
  );
};

export default Contact;
