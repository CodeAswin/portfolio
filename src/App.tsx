import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Modal from './components/Modal';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Works />
      <Reviews />
      <Pricing />
      <Modal />
    </div>
  );
}

export default App;