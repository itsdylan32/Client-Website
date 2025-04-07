import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex items-center justify-center h-screen pt-20"
    >
      <div className="w-full flex justify-center text-center px-6">
        <div className="max-w-md">
          <h1 className="text-5xl font-extrabold mb-4">Hey, I'm Dylan 👋</h1>
          <p className="text-lg mb-8">
            Full-stack developer with a passion for building elegant, scalable web apps.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>

          <div className="mt-12 animate-bounce text-2xl">
            <a href="#about">
              <FaChevronDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
