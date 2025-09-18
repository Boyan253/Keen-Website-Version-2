import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import WhatWeDo from './components/Sections/WhatWeDo';
import HowWeDoIt from './components/Sections/HowWeDoIt';
import SuccessStories from './components/Sections/SuccessStories';
import AboutUs from './components/Sections/AboutUs';
import FAQ from './components/Sections/FAQ';
import AIReadinessQuestionnaire from './components/Sections/AIReadinessQuestionnaire';
import Contact from './components/Sections/Contact';
import { colors } from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background};
`;

const MainContent = styled.main`
  padding-top: 80px; /* Account for fixed header */
`;

const HomePage = () => (
  <>
    <Hero />
    <WhatWeDo />
    <HowWeDoIt />
    <SuccessStories />
    <AboutUs />
    <FAQ />
    <AIReadinessQuestionnaire />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;
