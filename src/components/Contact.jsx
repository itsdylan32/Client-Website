import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-white text-gray-800 flex justify-center items-center text-center"
    >
      <div className="centered-form max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>
        <form
          action="https://formspree.io/f/xdkepyqb"
          method="POST"
          className="space-y-4 w-full max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded text-center"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded text-center"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows="4"
            className="w-full px-4 py-2 border rounded text-center resize-none"
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
