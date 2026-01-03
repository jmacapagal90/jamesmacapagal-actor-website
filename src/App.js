import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Reels from './components/Reels';
import Contact from './components/Contact';

function App() {

    return (
        <div>
            <Navbar/>
            <Reels/>
            <Hero/>
            <Contact/>
            <Resume/>
        </div>
  );
}

export default App;
