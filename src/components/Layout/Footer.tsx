import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../theme';

const FooterContainer = styled.footer`
  background: ${colors.backgroundDark};
  color: ${colors.textWhite};
  padding: ${spacing['4xl']} 0 ${spacing.xl};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${spacing.xl};
  margin-bottom: ${spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing.lg};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const FooterTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textWhite};
  margin-bottom: ${spacing.sm};
`;

const FooterText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  color: ${colors.grayMedium};
  line-height: ${typography.lineHeight.relaxed};
`;

const FooterLink = styled(motion.a)`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  color: ${colors.grayMedium};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: ${colors.blue};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${colors.gray};
  padding-top: ${spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.sm};
  color: ${colors.grayMedium};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing.md};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: ${colors.gray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textWhite};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background: ${colors.blue};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md }}>
                <img src="/logo-no-text.webp" alt="Keen Agents Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                <span style={{
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.semiBold,
                  fontSize: typography.fontSize.lg,
                  color: colors.textWhite,
                  textTransform: 'lowercase'
                }}>
                  keen agents
                </span>
              </div>
              <FooterText>
                We build custom AI agents that integrate into your existing business processes 
                to deliver measurable improvements in cost, throughput, and customer experience.
              </FooterText>
            </motion.div>
          </FooterSection>

          <FooterSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FooterTitle>Services</FooterTitle>
              <FooterLink href="#what-we-do">AI Agent Development</FooterLink>
              <FooterLink href="#how-we-do-it">Process Automation</FooterLink>
              <FooterLink href="#success-stories">Integration Services</FooterLink>
              <FooterLink href="#contact">Consultation</FooterLink>
            </motion.div>
          </FooterSection>

          <FooterSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="#about-us">About Us</FooterLink>
              <FooterLink href="#success-stories">Case Studies</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </motion.div>
          </FooterSection>

          <FooterSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FooterTitle>Connect</FooterTitle>
              <FooterText>Ready to transform your business with AI?</FooterText>
              <motion.button
                style={{
                  background: colors.blue,
                  color: colors.white,
                  border: 'none',
                  padding: `${spacing.sm} ${spacing.lg}`,
                  borderRadius: '8px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.semiBold,
                  fontSize: typography.fontSize.base,
                  cursor: 'pointer',
                  alignSelf: 'flex-start'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Copyright>
              © 2024 Keen Agents. All rights reserved.
            </Copyright>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <SocialLinks>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
