import React, { useState } from 'react';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const projects = [
    { name: 'Rocket Navigation Game', description: 'A 2D rocket game built with Unity and C# where players navigate through space to a target.' },
    { name: 'Marble Balance Game', description: 'A physics-based marble game using Unity and C#, controlled with a balance board.' },
    { name: 'Compiler Project', description: 'A C++ compiler built with Flex and Bison, supporting arithmetic, logic, functions, and nested control structures.' },
    { name: 'Portfolio Website', description: 'This site! A React + Tailwind responsive developer portfolio deployed via GitHub.' },
  ];

  return (
    <section
      id="projects"
      className="h-screen bg-white text-gray-800 flex justify-center items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <button
          onClick={toggleDropdown}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          {isOpen ? 'Hide Projects' : 'Show Projects'}
        </button>

        {isOpen && (
          <ul className="mt-6 text-left space-y-4 max-w-2xl mx-auto">
            {projects.map((project, index) => (
              <li key={index} className="p-4 border rounded shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold text-indigo-700">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Projects;
