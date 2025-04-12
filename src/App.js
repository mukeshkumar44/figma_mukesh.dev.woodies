import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Passions from './components/Passions';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
     <Header />
      <Hero />
      <Passions />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
