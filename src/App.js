import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Reels from './components/Reels';
import Contact from './components/Contact';
import HeadshotGallery from './components/HeadshotGallery';

function App() {

    return (
        <div className="site-shell">
            <Navbar/>
            <Hero/>
            <Reels/>
            <HeadshotGallery/>
            <Resume/>
            <Contact/>
        </div>
  );
}

export default App;
