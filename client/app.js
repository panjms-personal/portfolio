import React, { useEffect, useState, useRef } from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Intro from './components/Intro';
import Technology from './components/Technology';
import Project from './components/Projects';
import Footer from './components/Footer';
import Routes from './routes';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider>
      <NavBar />
      <Intro />
      <About />
      <Technology />
      <Project />
      <Footer />
    </ParallaxProvider>
  );
};

export default App;
