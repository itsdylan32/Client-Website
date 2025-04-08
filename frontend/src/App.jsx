import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-[#fdf6e3] text-black dark:bg-[#121212] dark:text-[#fdf6e3] transition-colors duration-20000">
      {/* Dark mode test block */}
      <div className="p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">Dark mode test block </h2>
        <p>Toggle the theme to see this block change dramatically.</p>
      </div>

      {/* App layout */}
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
