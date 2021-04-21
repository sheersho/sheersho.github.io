import React from 'react';
import { Container } from '@chakra-ui/react';

import './App.css';
import Header from './components/header/header.component';
import ProfileCard from './components/profile-card/profile-card.component';
import Socials from './components/socials/socials.component';
import Skills from './components/skills/skills.component';

function App() {
  return (
    <Container maxW="container.lg" pt={5}>
      <Header />
      <ProfileCard />
      <Socials />
      <Skills />
    </Container>
  );
}

export default App;
