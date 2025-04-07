import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-white text-gray-800 flex justify-center items-center text-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 border rounded h-32 resize-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
