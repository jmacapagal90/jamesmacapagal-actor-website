import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Reels from './components/Reels';
import Voiceover from './components/Voiceover';
import Contact from './components/Contact';

function App() {

    return (
        <div className="site-shell">
            <Navbar/>
            <Hero/>
            <Reels/>
            <Voiceover/>
            <About/>
            <Resume/>
            <Contact/>
        </div>
  );
}

export default App;
