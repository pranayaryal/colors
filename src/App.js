import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Cards from './components/Cards';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Cards />
      <GetStarted />
      <Footer />
    </div>

  );
}

export default App;
