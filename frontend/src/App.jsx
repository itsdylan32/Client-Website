import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Dark mode test block */}
      <div  className="p-6 rounded-lg bg-white text-black dark:bg-purple-900 dark:text-yellow-300 shadow-lg">
  <h2 className="text-xl font-bold">Dark mode test block 🌒</h2>
  <p>Toggle the theme to see this block change dramatically.</p>
      </div>

      {/* Main app */}
      <div className="bg-white text-gray-900 dark:bg-black dark:text-white">
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
    </>
  );
}

export default App;
