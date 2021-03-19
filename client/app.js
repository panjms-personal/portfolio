import React, { useEffect, useState, useRef } from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Intro from './components/Intro';
import Technology from './components/Technology';
import Project from './components/Projects';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Technology />
      <Project />
      <Footer />
    </>
  );
};

export default App;
