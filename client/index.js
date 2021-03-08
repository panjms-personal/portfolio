import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './routes';

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes />
  </Router>,
  document.getElementById('app')
);
