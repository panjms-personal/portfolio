import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Intro from './components/Intro';
import Technology from './components/Technology';
import Routes from './routes';

ReactDOM.render(
  <Router>
    <NavBar />
    <About />
    <Intro />
    <Technology />
    <Routes />
  </Router>,
  document.getElementById('app')
);
