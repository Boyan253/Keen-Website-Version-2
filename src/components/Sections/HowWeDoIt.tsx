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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: ${colors.gradient};
  transform: translateX(-50%);
  
  @media (max-width: ${breakpoints.md}) {
    left: 30px;
  }
`;

const PhaseContainer = styled(motion.div)`
  position: relative;
  margin-bottom: ${spacing['3xl']};
  display: flex;
  align-items: center;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  @media (max-width: ${breakpoints.md}) {
    flex-direction: row !important;
    margin-left: 60px;
  }
`;

const PhaseContent = styled(motion.div)<{ $isEven: boolean }>`
  flex: 1;
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing['2xl']};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.borderLight};
  position: relative;
  margin: ${props => props.$isEven ? `0 ${spacing['2xl']} 0 0` : `0 0 0 ${spacing['2xl']}`};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: ${breakpoints.md}) {
    margin: 0 0 0 ${spacing.lg} !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$isEven ? 'right' : 'left'}: -20px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-${props => props.$isEven ? 'left' : 'right'}-color: ${colors.white};
    
    @media (max-width: ${breakpoints.md}) {
      left: -20px !important;
      right: auto !important;
      border-right-color: ${colors.white} !important;
      border-left-color: transparent !important;
    }
  }
`;

const PhaseNumber = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: ${colors.blue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.xl};
  color: ${colors.white};
  z-index: 2;
  box-shadow: 0 4px 20px rgba(4, 165, 250, 0.3);
  
  @media (max-width: ${breakpoints.md}) {
    left: 30px;
    transform: translateX(-50%);
  }
`;

const PhaseTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.xl};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

const PhaseSubtitle = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  color: ${colors.blue};
  margin: 0 0 ${spacing.md} 0;
`;

const PhaseDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0 0 ${spacing.lg} 0;
`;

const PhaseDetails = styled(motion.div)`
  margin-top: ${spacing.lg};
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors.borderLight};
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

const DetailLabel = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textPrimary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const DetailValue = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  color: ${colors.textSecondary};
`;

const ExpandButton = styled(motion.button)`
  background: ${colors.blueLight};
  color: ${colors.blue};
  border: none;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 8px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  
  &:hover {
    background: ${colors.blue};
    color: ${colors.white};
  }
`;

const RolesSection = styled(motion.div)`
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing['2xl']};
  margin-top: ${spacing['4xl']};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

const RolesTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.xl};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.lg} 0;
  text-align: center;
`;

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.lg};
`;

const RoleCard = styled.div`
  background: ${colors.backgroundSecondary};
  border-radius: 12px;
  padding: ${spacing.lg};
  text-align: center;
`;

const RoleTitle = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.base};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.sm} 0;
`;

const RoleDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
`;

const HowWeDoIt: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const phases = [
    {
      number: 0,
      title: "Pre-Qualification",
      subtitle: "Rapid Assessment",
      description: "Quickly identify high-impact opportunities and establish feasibility for AI implementation.",
      details: {
        objective: "Rapidly identify high-impact opportunities and establish feasibility",
        deliverables: "AI Readiness scorecard, prioritized use-case list, executive brief",
        timing: "1 week"
      },
      icon: "🔍"
    },
    {
      number: 1,
      title: "Discovery & Process Mapping",
      subtitle: "Deep Understanding",
      description: "We interview stakeholders, run shadowing sessions, and map the end-to-end process.",
      details: {
        objective: "Deeply understand workflows, data sources, decision points, and KPIs",
        deliverables: "Process maps, success metrics, data inventory, integration matrix",
        timing: "1–2 weeks"
      },
      icon: "🗺️"
    },
    {
      number: 2,
      title: "Agent Design & Prototype",
      subtitle: "Build & Test",
      description: "Build a narrow-scope prototype agent (MVP) that automates a clearly scoped task.",
      details: {
        objective: "Build a narrow-scope prototype agent (MVP) that automates a clearly scoped task",
        deliverables: "Prototype agent, test cases, sandbox connector(s)",
        timing: "2–4 weeks"
      },
      icon: "⚙️"
    },
    {
      number: 3,
      title: "Integration & Pilot",
      subtitle: "Live Testing",
      description: "Deploy the agent into a controlled pilot with live data and monitored SLAs.",
      details: {
        objective: "Deploy the agent into a controlled pilot with live data and monitored SLAs",
        deliverables: "Pilot deployment, monitoring dashboard, pilot report with ROI analysis",
        timing: "2–6 weeks depending on scope"
      },
      icon: "🚀"
    },
    {
      number: 4,
      title: "Scale & Operate",
      subtitle: "Full Production",
      description: "Roll the agent into production, document runbooks, and hand over operations.",
      details: {
        objective: "Roll the agent into production, document runbooks, and hand over operations",
        deliverables: "Production rollout, training materials, performance SLA, continuous optimization plan",
        timing: "Ongoing"
      },
      icon: "📈"
    }
  ];

  const roles = [
    {
      title: "Client",
      description: "Provide access to subject-matter experts, approve process maps, and participate in pilot acceptance"
    },
    {
      title: "Sales / BA",
      description: "Sales contact or business analyst to triage leads and run discovery"
    },
    {
      title: "Keen Agents",
      description: "Project manager, data engineer, ML engineer, integration engineer, and domain specialist"
    },
    {
      title: "Third-party vendors",
      description: "ERP, CRM providers for connector support (optional)"
    }
  ];

  const togglePhase = (phaseNumber: number) => {
    setExpandedPhase(expandedPhase === phaseNumber ? null : phaseNumber);
  };

  return (
    <Section id="how-we-do-it">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How We Do It
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A five-phase, low-friction program engineered for speed and safety
          </SectionSubtitle>
        </SectionHeader>

        <TimelineContainer>
          <TimelineLine />
          
          {phases.map((phase, index) => (
            <PhaseContainer
              key={phase.number}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PhaseNumber>{phase.number}</PhaseNumber>
              
              <PhaseContent
                $isEven={index % 2 === 1}
                onClick={() => togglePhase(phase.number)}
                whileHover={{ scale: 1.02 }}
              >
                <PhaseTitle>
                  <span>{phase.icon}</span>
                  {phase.title}
                </PhaseTitle>
                <PhaseSubtitle>{phase.subtitle}</PhaseSubtitle>
                <PhaseDescription>{phase.description}</PhaseDescription>
                
                <ExpandButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedPhase === phase.number ? 'Show Less' : 'Learn More'}
                  <motion.span
                    animate={{ rotate: expandedPhase === phase.number ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </ExpandButton>

                <AnimatePresence>
                  {expandedPhase === phase.number && (
                    <PhaseDetails
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DetailGrid>
                        <DetailItem>
                          <DetailLabel>Objective</DetailLabel>
                          <DetailValue>{phase.details.objective}</DetailValue>
                        </DetailItem>
                        <DetailItem>
                          <DetailLabel>Deliverables</DetailLabel>
                          <DetailValue>{phase.details.deliverables}</DetailValue>
                        </DetailItem>
                        <DetailItem>
                          <DetailLabel>Timing</DetailLabel>
                          <DetailValue>{phase.details.timing}</DetailValue>
                        </DetailItem>
                      </DetailGrid>
                    </PhaseDetails>
                  )}
                </AnimatePresence>
              </PhaseContent>
            </PhaseContainer>
          ))}
        </TimelineContainer>

        <RolesSection
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <RolesTitle>Who Does What</RolesTitle>
          <RolesGrid>
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <RoleCard>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleDescription>{role.description}</RoleDescription>
                </RoleCard>
              </motion.div>
            ))}
          </RolesGrid>
        </RolesSection>
      </Container>
    </Section>
  );
};

export default HowWeDoIt;
