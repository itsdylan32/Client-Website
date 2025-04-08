import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-100 text-gray-800 py-20 flex justify-center items-center"
    >
      <div className="centered-form max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Skills & Experience</h2>

        {/* Tech Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm font-medium mb-12">
          {[
            'JavaScript',
            'React',
            'Node.js',
            'Tailwind CSS',
            'HTML/CSS',
            'C# (Unity)',
            'C++ (Flex/Bison)',
            'Git & GitHub',
            'PostgreSQL',
            'Firebase',
          ].map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Professional / Military Experience */}
        <div className="text-left max-w-2xl mx-auto text-sm space-y-4">
          <h3 className="text-lg font-semibold">Professional Strengths</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>F-16 Aircraft Mechanic (USAF):</strong> Diagnosed and
              maintained mission-critical systems with zero tolerance for error.
            </li>
            <li>
              <strong>Team Lead & Supervisor:</strong> Managed crews in high-pressure
              environments, ensuring safety, performance, and clear communication.
            </li>
            <li>
              <strong>USAF National Honor Guard:</strong> Executed ceremonial
              missions for the President and senior leaders — requiring elite
              attention to detail, precision, and trust.
            </li>
            <li>
              <strong>Mission-Oriented Problem Solving:</strong> Proven ability to
              stay composed, solve problems, and lead under pressure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
// Skills.jsx