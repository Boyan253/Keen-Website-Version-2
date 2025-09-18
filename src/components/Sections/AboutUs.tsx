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

const CompanyStory = styled(motion.div)`
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
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const StoryText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textPrimary};
  margin: 0;
  position: relative;
  z-index: 2;
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${spacing['2xl']};
  margin-bottom: ${spacing['4xl']};
  
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const LeaderCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing['2xl']};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.borderLight};
  text-align: center;
  position: relative;
  overflow: hidden;
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

const LeaderAvatar = styled.div`
  width: 120px;
  height: 120px;
  background: ${colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing.lg};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    animation: shine 3s infinite;
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const LeaderName = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.xl};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.sm} 0;
`;

const LeaderTitle = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  color: ${colors.blue};
  margin: 0 0 ${spacing.lg} 0;
`;

const LeaderBio = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0 0 ${spacing.lg} 0;
`;

const LeaderHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  text-align: left;
`;

const HighlightItem = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  
  &::before {
    content: '•';
    color: ${colors.blue};
    font-weight: ${typography.fontWeight.bold};
  }
`;

const ValuesSection = styled(motion.div)`
  background: ${colors.backgroundSecondary};
  border-radius: 20px;
  padding: ${spacing['3xl']};
  margin-bottom: ${spacing['4xl']};
`;

const ValuesTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing['2xl']} 0;
  text-align: center;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.xl};
`;

const ValueCard = styled(motion.div)`
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
  font-size: 32px;
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

const AboutUs: React.FC = () => {
  const leaders = [
    {
      name: "Petar Denev",
      title: "Executive Sponsor & Strategy",
      avatar: "PD",
      bio: "30+ years leading technology and digital transformation programs across enterprise and mid-market organisations.",
      highlights: [
        "Defined and ran multi-country operations transformations",
        "Led integrations at scale",
        "Strong experience in data governance and change management",
        "Aligns AI programs with business KPIs and stakeholder governance"
      ]
    },
    {
      name: "Vic [Last Name]",
      title: "Chief Technology & Product",
      avatar: "VL",
      bio: "AI systems architect and product leader with experience deploying automation at scale.",
      highlights: [
        "Led ML engineering teams",
        "Productionized NLP and RPA hybrid solutions",
        "Built resilient integration layers",
        "Drives engineering, product strategy, and operational excellence"
      ]
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Outcome-Focused",
      description: "We deliver measurable business results, not just technology experiments."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, not as external vendors."
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Enterprise-grade security and compliance are built into everything we do."
    },
    {
      icon: "📈",
      title: "Continuous Improvement",
      description: "We optimize and evolve your AI agents as your business grows."
    }
  ];

  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="about-us">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Us
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Bridging the gap between AI research and practical business impact
          </SectionSubtitle>
        </SectionHeader>

        <CompanyStory
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <StoryText>
            Keen Agents was founded to bridge the gap between AI research and practical business impact. 
            Our leadership combines decades of enterprise technology, process engineering, and applied AI. 
            We focus on delivering outcomes rather than experiments, helping businesses transform their 
            operations with AI agents that work as true digital employees.
          </StoryText>
        </CompanyStory>

        <LeadershipGrid>
          {leaders.map((leader, index) => (
            <LeaderCard
              key={leader.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <LeaderAvatar>
                <img src="/logo-no-text.webp" alt="Keen Agents Logo" style={{ width: '60px', height: '60px', objectFit: 'contain', zIndex: 2, position: 'relative' }} />
              </LeaderAvatar>
              <LeaderName>{leader.name}</LeaderName>
              <LeaderTitle>{leader.title}</LeaderTitle>
              <LeaderBio>{leader.bio}</LeaderBio>
              <LeaderHighlights>
                {leader.highlights.map((highlight, highlightIndex) => (
                  <HighlightItem key={highlightIndex}>{highlight}</HighlightItem>
                ))}
              </LeaderHighlights>
            </LeaderCard>
          ))}
        </LeadershipGrid>

        <ValuesSection
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ValuesTitle>Our Values</ValuesTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <CTA
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
          >
            Work With Our Team
          </CTAButton>
        </CTA>
      </Container>
    </Section>
  );
};

export default AboutUs;
