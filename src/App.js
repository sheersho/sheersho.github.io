import React from 'react';
import { Container } from '@chakra-ui/react';

import './App.css';
import Header from './components/header/header.component';
import ProfileCard from './components/profile-card/profile-card.component';
import Socials from './components/socials/socials.component';

function App() {
  return (
    <Container maxW="container.lg" pt={5}>
      <Header />
      <ProfileCard />
      <Socials />
    </Container>
  );
}

export default App;
