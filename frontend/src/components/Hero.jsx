import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  return (
    <section
  id="hero"
  className="relative bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex justify-center items-center h-screen pt-20"
>


      {/* Toggle Button in Top-Right */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="centered-form">
        <h1 className="text-5xl font-extrabold mb-4">Hey, I'm Dylan 👋</h1>
        <p className="text-lg mb-8">
          Full-stack developer with a passion for building elegant, scalable web apps.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
  href="#about"
  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
>
  Get Started
</a>

<a
  href="/resume.pdf"
  download
  className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 dark:border-gray-400 dark:hover:bg-gray-100 dark:hover:text-indigo-700 transition"
>
  Download Resume
</a>

        </div>

        <div className="mt-12 animate-bounce text-2xl">
          <a href="#about">
            <FaChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
