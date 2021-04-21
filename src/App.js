import React from 'react';
import { Container } from '@chakra-ui/react';
import { Switch, Route } from 'react-router';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <Container maxW="container.lg" pt={5}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/blogs">
          <h1>Blogs page</h1>
        </Route>

        <Route path="/projects">
          <h1>Projects page</h1>
        </Route>

        <Route path="/resume">
          <h1>Resume page</h1>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
