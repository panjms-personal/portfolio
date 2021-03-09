import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Intro from './components/Intro';
import Technology from './components/Technology';
import Project from './components/Projects';
import Routes from './routes';

ReactDOM.render(
  <Router>
    <NavBar />
    <Intro />
    <About />
    <Technology />
    <Project />
    <Routes />
  </Router>,
  document.getElementById('app')
);
