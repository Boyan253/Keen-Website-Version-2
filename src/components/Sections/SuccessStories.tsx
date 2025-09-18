import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${spacing.xl};
  margin-bottom: ${spacing['4xl']};
  
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing['2xl']};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.borderLight};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.15);
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

const QuoteIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${colors.blueLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing.lg};
  font-size: 24px;
  color: ${colors.blue};
`;

const Quote = styled.blockquote`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.lg} 0;
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: ${colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.white};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.base};
  color: ${colors.textPrimary};
`;

const AuthorTitle = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textSecondary};
`;

const CaseStudySection = styled.div`
  margin-top: ${spacing['4xl']};
`;

const CaseStudyTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing['2xl']};
  flex-wrap: wrap;
`;

const TabButton = styled(motion.button)<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? colors.blue : colors.backgroundSecondary};
  color: ${props => props.$isActive ? colors.white : colors.textPrimary};
  border: none;
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 25px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$isActive ? colors.blueDark : colors.grayLight};
  }
`;

const CaseStudyContent = styled.div`
  background: ${colors.backgroundSecondary};
  border-radius: 20px;
  padding: ${spacing['3xl']};
  position: relative;
  overflow: hidden;
`;

const CaseStudyHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['2xl']};
  margin-bottom: ${spacing['2xl']};
  
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const CaseStudyTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.textPrimary};
  margin: 0;
`;

const CaseStudyDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${spacing.lg};
`;

const MetricCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 12px;
  padding: ${spacing.lg};
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const MetricValue = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.blue};
  margin-bottom: ${spacing.xs};
`;

const MetricLabel = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const CaseStudyDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['2xl']};
  margin-top: ${spacing['2xl']};
  
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const DetailTitle = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textPrimary};
  margin: 0;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

const DetailItem = styled.li`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  
  &::before {
    content: '✓';
    color: ${colors.blue};
    font-weight: ${typography.fontWeight.bold};
  }
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

const SuccessStories: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const testimonials = [
    {
      quote: "Keen Agents transformed how we operate — their agents are reliable and require minimal oversight.",
      author: "Sarah Johnson",
      title: "Customer Service Director",
      company: "Unimaster",
      avatar: "SJ"
    },
    {
      quote: "Fast ROI, no IT drama, measurable impact. Exactly what we needed for our operations.",
      author: "Michael Chen",
      title: "Operations Director",
      company: "Reno",
      avatar: "MC"
    }
  ];

  const caseStudies = [
    {
      title: "Unimaster",
      description: "Customer service automation that reduced response times and improved satisfaction",
      background: "Unimaster struggled with high volumes of routine customer inquiries that overwhelmed the support desk during peak hours.",
      approach: "Deployed a customer-service AI agent trained on Unimaster's historical tickets, internal KB, and ERP product catalog. Implemented phased rollout with human fallback.",
      results: "70% of inquiries automated within 8 weeks; average response time reduced by 85%; customer satisfaction rose by 12 points on NPS-like surveys.",
      metrics: [
        { value: "70%", label: "Inquiries Automated" },
        { value: "85%", label: "Faster Response" },
        { value: "+12", label: "NPS Improvement" }
      ],
      features: [
        "Historical ticket analysis",
        "Knowledge base integration",
        "ERP product catalog access",
        "Human escalation paths",
        "Real-time monitoring"
      ],
      outcomes: [
        "Reduced support team workload",
        "Improved customer satisfaction",
        "24/7 availability",
        "Consistent response quality",
        "Scalable during peak periods"
      ]
    },
    {
      title: "Reno",
      description: "Order processing automation that streamlined operations and reduced costs",
      background: "Reno faced slow back-office processing that created order fulfillment delays and increased administrative costs.",
      approach: "Built an order-processing agent that validated incoming orders, enriched records, and routed exceptions to human reviewers.",
      results: "30% reduction in order processing time; a 25% drop in administrative cost in the first 3 months; error rate fell by 40%.",
      metrics: [
        { value: "30%", label: "Faster Processing" },
        { value: "25%", label: "Cost Reduction" },
        { value: "40%", label: "Fewer Errors" }
      ],
      features: [
        "Order validation rules",
        "Data enrichment algorithms",
        "Exception routing logic",
        "Integration with existing systems",
        "Performance monitoring"
      ],
      outcomes: [
        "Faster order fulfillment",
        "Reduced manual errors",
        "Lower operational costs",
        "Improved data quality",
        "Better customer experience"
      ]
    }
  ];

  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="success-stories">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Stories
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real results from real businesses using our AI agents
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <QuoteIcon>💬</QuoteIcon>
              <Quote>"{testimonial.quote}"</Quote>
              <Author>
                <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}, {testimonial.company}</AuthorTitle>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialGrid>

        <CaseStudySection>
          <CaseStudyTabs>
            {caseStudies.map((study, index) => (
              <TabButton
                key={index}
                $isActive={activeCaseStudy === index}
                onClick={() => setActiveCaseStudy(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {study.title}
              </TabButton>
            ))}
          </CaseStudyTabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCaseStudy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CaseStudyContent>
                <CaseStudyHeader>
                  <CaseStudyInfo>
                    <CaseStudyTitle>{caseStudies[activeCaseStudy].title}</CaseStudyTitle>
                    <CaseStudyDescription>{caseStudies[activeCaseStudy].description}</CaseStudyDescription>
                  </CaseStudyInfo>
                  <MetricsGrid>
                    {caseStudies[activeCaseStudy].metrics.map((metric, index) => (
                      <MetricCard
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <MetricValue>{metric.value}</MetricValue>
                        <MetricLabel>{metric.label}</MetricLabel>
                      </MetricCard>
                    ))}
                  </MetricsGrid>
                </CaseStudyHeader>

                <CaseStudyDetails>
                  <DetailSection>
                    <DetailTitle>Background</DetailTitle>
                    <p style={{ 
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.regular,
                      fontSize: typography.fontSize.base,
                      lineHeight: typography.lineHeight.relaxed,
                      color: colors.textSecondary,
                      margin: 0
                    }}>
                      {caseStudies[activeCaseStudy].background}
                    </p>
                  </DetailSection>
                  <DetailSection>
                    <DetailTitle>Approach</DetailTitle>
                    <p style={{ 
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.regular,
                      fontSize: typography.fontSize.base,
                      lineHeight: typography.lineHeight.relaxed,
                      color: colors.textSecondary,
                      margin: 0
                    }}>
                      {caseStudies[activeCaseStudy].approach}
                    </p>
                  </DetailSection>
                </CaseStudyDetails>

                <DetailSection style={{ marginTop: spacing['2xl'] }}>
                  <DetailTitle>Key Features</DetailTitle>
                  <DetailList>
                    {caseStudies[activeCaseStudy].features.map((feature, index) => (
                      <DetailItem key={index}>{feature}</DetailItem>
                    ))}
                  </DetailList>
                </DetailSection>

                <DetailSection style={{ marginTop: spacing.lg }}>
                  <DetailTitle>Business Outcomes</DetailTitle>
                  <DetailList>
                    {caseStudies[activeCaseStudy].outcomes.map((outcome, index) => (
                      <DetailItem key={index}>{outcome}</DetailItem>
                    ))}
                  </DetailList>
                </DetailSection>
              </CaseStudyContent>
            </motion.div>
          </AnimatePresence>
        </CaseStudySection>

        <CTA
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
          >
            Start Your Success Story
          </CTAButton>
        </CTA>
      </Container>
    </Section>
  );
};

export default SuccessStories;
