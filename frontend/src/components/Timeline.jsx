import React, { useState } from 'react';

const timelineItems = [
  {
    year: '2015 - 2020',
    title: 'US Air Force – F-16 Aircraft Mechanic & Supervisor',
    description:
      'Led maintenance operations on F-16 fighter jets. Managed teams and upheld safety standards under mission-critical pressure.',
  },
  {
    year: '2018 - 2019',
    title: 'USAF National Honor Guard – Presidential Missions',
    description:
      'Performed ceremonial honors at the White House and Arlington with precision and professionalism under elite selection.',
  },
  {
    year: '2021 - Present',
    title: 'B.S. Computer Science – University of Maryland',
    description:
      'Focused on software engineering, system design, and full-stack development practices.',
  },
  {
    year: '2023 - Present',
    title: 'Full-Stack Developer',
    description:
      'Building responsive web apps using React, Node.js, Tailwind CSS, and Firebase with a focus on scalability and clean UI.',
  },
];

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTimeline = () => setIsOpen(!isOpen);

  return (
    <section id="timeline" className="bg-white py-20 text-gray-800 flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Career Timeline</h2>

        <button
          onClick={toggleTimeline}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          {isOpen ? 'Hide Timeline' : 'Show Timeline'}
        </button>

        {isOpen && (
          <div className="mt-6 text-left max-w-2xl mx-auto">
            <div className="relative border-l-4 border-indigo-600 pl-6 space-y-10">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-3.5 top-1 w-7 h-7 bg-indigo-600 rounded-full border-4 border-white" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500 mb-1 block">{item.year}</span>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
