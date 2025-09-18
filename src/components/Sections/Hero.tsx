import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { colors, typography, spacing, breakpoints } from '../../theme';

const HeroContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e6f4ff 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['4xl']};
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const HeroHeadline = styled(motion.h1)`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['6xl']};
  line-height: ${typography.lineHeight.tight};
  color: ${colors.textPrimary};
  margin: 0;
  
  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['4xl']};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

const HeroSubheadline = styled(motion.p)`
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

const HeroStats = styled(motion.div)`
  display: flex;
  gap: ${spacing.xl};
  margin: ${spacing.lg} 0;
  
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: ${spacing.md};
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

const StatValue = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.blue};
`;

const StatLabel = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${spacing.lg};
  margin-top: ${spacing.lg};
  
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  padding: ${spacing.md} ${spacing.xl};
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

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  padding: ${spacing.md} ${spacing.xl};
  border-radius: 12px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  
  &:hover {
    background: ${colors.blue};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(4, 165, 250, 0.3);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FloatingCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing.xl};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.lg};
`;


const CardTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.lg};
  color: ${colors.textPrimary};
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm};
  background: ${colors.blueLight};
  border-radius: 8px;
  border-left: 4px solid ${colors.blue};
`;

const StepText = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  color: ${colors.textPrimary};
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

const FloatingShape = styled(motion.div)<{ $size: number; $color: string; $top: string; $left: string }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.color};
  border-radius: 50%;
  top: ${props => props.$top};
  left: ${props => props.$left};
  opacity: 0.1;
`;

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  const handlePrimaryClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryClick = () => {
    const element = document.getElementById('ai-readiness');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <BackgroundElements>
        <FloatingShape
          $size={200}
          $color={colors.blue}
          $top="10%"
          $left="10%"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <FloatingShape
          $size={150}
          $color={colors.gray}
          $top="60%"
          $left="80%"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <FloatingShape
          $size={100}
          $color={colors.blue}
          $top="30%"
          $left="70%"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </BackgroundElements>

      <HeroContent>
        <HeroText>
          <HeroHeadline
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Your New AI Employees
          </HeroHeadline>
          
          <HeroSubheadline
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Always-on, Cost-effective, and Built for Your Business
          </HeroSubheadline>

          <HeroSubheadline
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: typography.fontSize.lg, color: colors.textSecondary }}
          >
            We build bespoke AI agents — digital employees trained to run your repeatable processes, 
            reduce operational costs, and free your team to focus on growth. Deployment without IT headaches. 
            Results in weeks.
          </HeroSubheadline>

          <HeroStats
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StatItem>
              <StatValue>30%</StatValue>
              <StatLabel>Faster Processing</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>70%</StatValue>
              <StatLabel>Automated Inquiries</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>25%</StatValue>
              <StatLabel>Cost Reduction</StatLabel>
            </StatItem>
          </HeroStats>

          <HeroButtons
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrimaryClick}
            >
              Book a Free Consultation
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSecondaryClick}
            >
              Take AI Readiness Quiz
            </SecondaryButton>
          </HeroButtons>
        </HeroText>

        <HeroVisual>
          <FloatingCard
            initial={{ y: 50, opacity: 0, rotateY: -15 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              rotateY: 0,
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              rotateZ: (mousePosition.x - window.innerWidth / 2) * 0.01
            }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.15)'
            }}
          >
            <CardHeader>
              <img src="/logo-no-text.webp" alt="Keen Agents Logo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <CardTitle>AI Agent Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <ProcessStep>
                <StepText>✓ Processing customer inquiries</StepText>
              </ProcessStep>
              <ProcessStep>
                <StepText>✓ Validating order data</StepText>
              </ProcessStep>
              <ProcessStep>
                <StepText>✓ Updating CRM records</StepText>
              </ProcessStep>
              <ProcessStep>
                <StepText>✓ Generating reports</StepText>
              </ProcessStep>
            </CardContent>
          </FloatingCard>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
