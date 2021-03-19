import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';
import NavBar from './components/NavBar';
import About from './components/About';
import Intro from './components/Intro';
import Technology from './components/Technology';
import Project from './components/Projects';
import Footer from './components/Footer';
import Routes from './routes';

ReactDOM.render(
  // <Router>
  <App />,
  // </Router>,
  document.getElementById('app')
);
