import React from 'react';
import { Container } from '@chakra-ui/react';
import { Switch, Route } from 'react-router';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import BlogsPage from './pages/blogs/blogs.component';
import ProjectsPage from './pages/projects/projects.component';

function App() {
  return (
    <Container maxW="container.xl" pt={5}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/projects" component={ProjectsPage} />

        <Route path="/resume">
          <h1>Resume page</h1>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
