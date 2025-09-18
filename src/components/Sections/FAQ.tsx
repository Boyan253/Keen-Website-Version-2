import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, breakpoints } from '../../theme';

const Section = styled.section`
  padding: ${spacing['5xl']} 0;
  background: ${colors.backgroundSecondary};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 800px;
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
  margin: 0;
  
  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
  }
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const FAQItem = styled(motion.div)`
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.borderLight};
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const QuestionButton = styled(motion.button)<{ $isOpen: boolean }>`
  width: 100%;
  background: none;
  border: none;
  padding: ${spacing['2xl']};
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.blueLight};
  }
`;

const QuestionText = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textPrimary};
  margin: 0;
  flex: 1;
  padding-right: ${spacing.md};
`;

const ExpandIcon = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 18px;
  font-weight: bold;
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerContent = styled.div`
  padding: 0 ${spacing['2xl']} ${spacing['2xl']};
`;

const AnswerText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
`;

const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${spacing.md} 0 0 0;
`;

const AnswerListItem = styled.li`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin-bottom: ${spacing.sm};
  display: flex;
  align-items: flex-start;
  gap: ${spacing.sm};
  
  &::before {
    content: '•';
    color: ${colors.blue};
    font-weight: ${typography.fontWeight.bold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const CTA = styled(motion.div)`
  text-align: center;
  margin-top: ${spacing['4xl']};
  padding: ${spacing['2xl']};
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

const CTATitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.xl};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.md} 0;
`;

const CTADescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  color: ${colors.textSecondary};
  margin: 0 0 ${spacing.lg} 0;
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

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do you secure our data?",
      answer: "Security is non-negotiable. We employ industry-standard encryption (TLS in transit, AES-256 at rest), role-based access control, audit logs, and tenant isolation for multi-client environments. We can operate within private VPCs, support on-prem deployments, or use cloud-hosted models under strict data governance rules. We provide SOC2 / ISO controls upon request and support data residency requirements."
    },
    {
      question: "Will this change our processes or require retraining staff?",
      answer: "Our approach prioritises minimal disruption. We map current processes and design agents to slot into existing workflows. Where change is required, we provide clear change-management plans, role-based training sessions, and operator runbooks. We recommend a 'train the trainer' model to accelerate adoption."
    },
    {
      question: "Do we need to upgrade our IT infrastructure?",
      answer: "In most cases — no. Our agents integrate via APIs, webhooks, or lightweight connectors. When complex legacy systems require adapters, we build secure middleware. We produce an integration matrix during discovery to estimate effort and provide options for SaaS, hybrid, or on-prem architectures."
    },
    {
      question: "How do you manage errors and edge cases?",
      answer: "We implement human-in-the-loop workflows, clear escalation rules, and confidence thresholds to prevent incorrect automation. Every agent has audit trails and can be placed into monitoring mode where low-confidence decisions are routed to a human reviewer until sufficient confidence is reached."
    },
    {
      question: "What SLAs & support do you offer?",
      answer: "We offer SLAs for uptime, response times for incidents, and scheduled optimization windows. Support tiers are flexible — from knowledge transfer to fully managed operations where Keen Agents runs and optimizes the agent on your behalf.",
      details: [
        "99.9% uptime SLA for production agents",
        "24/7 monitoring and alerting",
        "Regular performance optimization",
        "Dedicated support channels",
        "Quarterly business reviews"
      ]
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation typically takes 4-12 weeks depending on complexity. Our phased approach ensures you see value quickly:",
      details: [
        "Phase 0 (Pre-Qualification): 1 week",
        "Phase 1 (Discovery): 1-2 weeks", 
        "Phase 2 (Prototype): 2-4 weeks",
        "Phase 3 (Pilot): 2-6 weeks",
        "Phase 4 (Scale): Ongoing"
      ]
    },
    {
      question: "What's the typical ROI timeline?",
      answer: "Most clients see positive ROI within 3-6 months. Typical outcomes include 25-40% cost reduction, 30-70% faster processing times, and improved customer satisfaction. We provide detailed ROI projections during the discovery phase based on your specific use case."
    },
    {
      question: "Can we customize the AI agents after deployment?",
      answer: "Absolutely. Our agents are designed to evolve with your business. We provide ongoing optimization, retraining capabilities, and can add new features or processes as your needs change. You maintain full control over your agents' behavior and can request modifications at any time."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="faq">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about working with Keen Agents
          </SectionSubtitle>
        </SectionHeader>

        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <QuestionButton
                $isOpen={openItems.includes(index)}
                onClick={() => toggleItem(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <QuestionText>{faq.question}</QuestionText>
                <ExpandIcon
                  animate={{ rotate: openItems.includes(index) ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </ExpandIcon>
              </QuestionButton>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <AnswerContainer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnswerContent>
                      <AnswerText>{faq.answer}</AnswerText>
                      {faq.details && (
                        <AnswerList>
                          {faq.details.map((detail, detailIndex) => (
                            <AnswerListItem key={detailIndex}>
                              {detail}
                            </AnswerListItem>
                          ))}
                        </AnswerList>
                      )}
                    </AnswerContent>
                  </AnswerContainer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>

        <CTA
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CTATitle>Still have questions?</CTATitle>
          <CTADescription>
            Our team is here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
          >
            Book Free Consultation
          </CTAButton>
        </CTA>
      </Container>
    </Section>
  );
};

export default FAQ;
