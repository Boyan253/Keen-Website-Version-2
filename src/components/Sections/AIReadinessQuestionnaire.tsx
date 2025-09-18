import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, breakpoints } from '../../theme';

const Section = styled.section`
  padding: ${spacing['5xl']} 0;
  background: ${colors.gradientSubtle};
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

const QuestionnaireCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 20px;
  padding: ${spacing['3xl']};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${colors.borderLight};
  border-radius: 4px;
  margin-bottom: ${spacing['2xl']};
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${colors.gradient};
  border-radius: 4px;
`;

const QuestionContainer = styled(motion.div)`
  margin-bottom: ${spacing['2xl']};
`;

const QuestionNumber = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.sm};
  color: ${colors.blue};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  margin-bottom: ${spacing.sm};
`;

const QuestionText = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.xl};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.lg} 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const OptionButton = styled(motion.button)<{ $isSelected: boolean }>`
  background: ${props => props.$isSelected ? colors.blueLight : colors.backgroundSecondary};
  color: ${props => props.$isSelected ? colors.blue : colors.textPrimary};
  border: 2px solid ${props => props.$isSelected ? colors.blue : colors.borderLight};
  padding: ${spacing.lg};
  border-radius: 12px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${props => props.$isSelected ? colors.blueLight : colors.grayLight};
    border-color: ${colors.blue};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(4, 165, 250, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing['2xl']};
`;

const NavButton = styled(motion.button)<{ $disabled?: boolean }>`
  background: ${props => props.$disabled ? colors.grayLight : colors.blue};
  color: ${props => props.$disabled ? colors.textLight : colors.white};
  border: none;
  padding: ${spacing.md} ${spacing.lg};
  border-radius: 8px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.base};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  
  &:hover:not(:disabled) {
    background: ${colors.blueDark};
    transform: translateY(-2px);
  }
`;

const ResultsContainer = styled(motion.div)`
  text-align: center;
  padding: ${spacing['2xl']} 0;
`;

const ScoreCircle = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing.lg};
  position: relative;
  overflow: hidden;
`;


const ScoreText = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['3xl']};
  color: ${colors.white};
  z-index: 2;
`;

const ScoreLabel = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.sm};
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${typography.letterSpacing.wide};
  margin-bottom: ${spacing.lg};
`;

const ResultsTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing.md} 0;
`;

const ResultsDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0 0 ${spacing['2xl']} 0;
`;

const NextStepsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
`;

const NextStepItem = styled.li`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.base};
  color: ${colors.textSecondary};
  margin-bottom: ${spacing.sm};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  
  &::before {
    content: '✓';
    color: ${colors.blue};
    font-weight: ${typography.fontWeight.bold};
  }
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
  margin-top: ${spacing['2xl']};
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

const EmailForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  margin-top: ${spacing['2xl']};
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const EmailInput = styled.input`
  padding: ${spacing.md};
  border: 2px solid ${colors.borderLight};
  border-radius: 8px;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.base};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  padding: ${spacing.md};
  border-radius: 8px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.base};
  cursor: pointer;
  
  &:hover {
    background: ${colors.blueDark};
  }
`;

const AIReadinessQuestionnaire: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const questions = [
    {
      text: "Do you have digital records of the process you want to automate (tickets, orders, emails)?",
      options: ["Yes", "Partial", "No"]
    },
    {
      text: "Is there a measurable KPI you want to improve (time, cost, error rate)?",
      options: ["Yes", "No"]
    },
    {
      text: "Can you provide a subject-matter expert to support discovery?",
      options: ["Yes", "No"]
    },
    {
      text: "Do you have APIs, CSV exports, or a data-access layer to integrate with?",
      options: ["Yes", "Partial", "No"]
    },
    {
      text: "Are there regulatory or data residency constraints we should be aware of?",
      options: ["Yes", "No"]
    },
    {
      text: "Do you have peak periods where additional capacity is needed?",
      options: ["Yes", "No"]
    },
    {
      text: "Are you prepared to run a 4–8 week pilot with test metrics and acceptance criteria?",
      options: ["Yes", "No"]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const yesAnswers = answers.filter(answer => answer === 0).length;
    const partialAnswers = answers.filter(answer => answer === 1).length;
    return yesAnswers + (partialAnswers * 0.5);
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 5) return { level: "High", color: colors.blue, description: "Ready for immediate pilot and fast-track onboarding" };
    if (score >= 3) return { level: "Medium", color: colors.warning, description: "Ready for discovery with some data preparation" };
    return { level: "Low", color: colors.error, description: "Pre-qualification engagement recommended" };
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    // Here you would typically send the email to your backend
  };

  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = calculateScore();
  const readiness = getReadinessLevel(score);

  if (showResults) {
    return (
      <Section id="ai-readiness">
        <Container>
          <QuestionnaireCard
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResultsContainer>
              <ScoreCircle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src="/logo-no-text.webp" alt="Keen Agents Logo" style={{ position: 'absolute', top: '20px', width: '40px', height: '40px', objectFit: 'contain', zIndex: 2 }} />
                <ScoreText>{score.toFixed(1)}</ScoreText>
              </ScoreCircle>
              <ScoreLabel>AI Readiness Score</ScoreLabel>
              <ResultsTitle>{readiness.level} Readiness</ResultsTitle>
              <ResultsDescription>{readiness.description}</ResultsDescription>
              
              <NextStepsList>
                <NextStepItem>Detailed readiness assessment</NextStepItem>
                <NextStepItem>Custom implementation roadmap</NextStepItem>
                <NextStepItem>ROI projections for your use case</NextStepItem>
                <NextStepItem>Next steps consultation</NextStepItem>
              </NextStepsList>

              {!emailSubmitted ? (
                <EmailForm onSubmit={handleEmailSubmit}>
                  <EmailInput
                    type="email"
                    placeholder="Enter your email to receive detailed results"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Detailed Results
                  </SubmitButton>
                </EmailForm>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p style={{ 
                    fontFamily: typography.fontFamily.primary,
                    color: colors.blue,
                    fontWeight: typography.fontWeight.medium,
                    margin: 0
                  }}>
                    ✓ Results sent to {email}
                  </p>
                </motion.div>
              )}

              <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCTAClick}
              >
                Book Free Consultation
              </CTAButton>
            </ResultsContainer>
          </QuestionnaireCard>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="ai-readiness">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            AI Readiness Assessment
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Take our 7-question diagnostic to see how ready your business is for AI automation
          </SectionSubtitle>
        </SectionHeader>

        <QuestionnaireCard
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProgressBar>
            <ProgressFill
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </ProgressBar>

          <AnimatePresence mode="wait">
            <QuestionContainer
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionNumber>Question {currentQuestion + 1} of {questions.length}</QuestionNumber>
              <QuestionText>{questions[currentQuestion].text}</QuestionText>
              <OptionsContainer>
                {questions[currentQuestion].options.map((option, index) => (
                  <OptionButton
                    key={index}
                    $isSelected={answers[currentQuestion] === index}
                    onClick={() => handleAnswer(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </OptionButton>
                ))}
              </OptionsContainer>
            </QuestionContainer>
          </AnimatePresence>

          <NavigationContainer>
            <NavButton
              $disabled={currentQuestion === 0}
              onClick={handlePrevious}
              whileHover={{ scale: currentQuestion > 0 ? 1.05 : 1 }}
              whileTap={{ scale: currentQuestion > 0 ? 0.95 : 1 }}
            >
              Previous
            </NavButton>
            <NavButton
              $disabled={answers[currentQuestion] === undefined}
              onClick={handleNext}
              whileHover={{ scale: answers[currentQuestion] !== undefined ? 1.05 : 1 }}
              whileTap={{ scale: answers[currentQuestion] !== undefined ? 0.95 : 1 }}
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            </NavButton>
          </NavigationContainer>
        </QuestionnaireCard>
      </Container>
    </Section>
  );
};

export default AIReadinessQuestionnaire;
