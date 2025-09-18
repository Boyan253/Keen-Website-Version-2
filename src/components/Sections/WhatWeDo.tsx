import React from 'react';
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
  max-width: 1280px;
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

const PositioningStatement = styled(motion.div)`
  background: ${colors.gradientSubtle};
  border-radius: 20px;
  padding: ${spacing['3xl']};
  margin-bottom: ${spacing['4xl']};
  text-align: center;
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

const PositioningText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.xl};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textPrimary};
  margin: 0;
  position: relative;
  z-index: 2;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing.xl};
  margin-bottom: ${spacing['4xl']};
`;

const FeatureCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 16px;
  padding: ${spacing['2xl']};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.borderLight};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: ${colors.blue};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.gradient};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing.lg};
`;

const FeatureTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.xl};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.md} 0;
`;

const FeatureDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
`;

const ValueProps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.lg};
  margin-top: ${spacing['4xl']};
`;

const ValueProp = styled(motion.div)`
  text-align: center;
  padding: ${spacing.lg};
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing.lg};
  position: relative;
  overflow: hidden;
`;

const ValueTitle = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.sm} 0;
`;

const ValueDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
`;

const CTA = styled(motion.div)`
  text-align: center;
  margin-top: ${spacing['4xl']};
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

const WhatWeDo: React.FC = () => {
  const features = [
    {
      title: "AI Employees, Not Bots",
      description: "Task-specific agents that perform roles (customer support, order processing, claims triage, data entry) with SLA-level reliability.",
      icon: "🤖"
    },
    {
      title: "Measurable ROI",
      description: "Typical outcomes include faster processing times, fewer errors, and lower operational spend with clear metrics and reporting.",
      icon: "📊"
    },
    {
      title: "No IT Disruption",
      description: "Integrates with existing systems via APIs, connectors, or secure middleware. No rip-and-replace required.",
      icon: "🔗"
    },
    {
      title: "Human-in-the-loop",
      description: "Safe escalation paths and supervised decisioning for high-risk cases. Your team stays in control.",
      icon: "👥"
    }
  ];

  const valueProps = [
    {
      title: "Process Automation",
      description: "Reduce manual processing, enforce business rules, and eliminate repetitive errors.",
      icon: "⚡"
    },
    {
      title: "Customer Experience",
      description: "Faster responses, contextual answers, and consistent service 24/7.",
      icon: "💬"
    },
    {
      title: "Operational Resilience",
      description: "Scale instantly without hiring; maintain performance during peak demand.",
      icon: "🚀"
    }
  ];

  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="what-we-do">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Do
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We don't sell software — we deliver business outcomes through custom AI agents
          </SectionSubtitle>
        </SectionHeader>

        <PositioningStatement
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PositioningText>
            Keen Agents doesn't sell software — we deliver business outcomes. We sell the service of 
            designing, training, and operating custom AI agents that behave like high-performing employees. 
            These are not general-purpose chatbots; they are purpose-built automation agents trained on 
            your data and processes.
          </PositioningText>
        </PositioningStatement>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                <img src="/logo-no-text.webp" alt="Keen Agents Logo" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <ValueProps>
          {valueProps.map((prop, index) => (
            <ValueProp
              key={prop.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>
                <span style={{ fontSize: '32px' }}>{prop.icon}</span>
              </ValueIcon>
              <ValueTitle>{prop.title}</ValueTitle>
              <ValueDescription>{prop.description}</ValueDescription>
            </ValueProp>
          ))}
        </ValueProps>

        <CTA
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
          >
            See How It Works
          </CTAButton>
        </CTA>
      </Container>
    </Section>
  );
};

export default WhatWeDo;
