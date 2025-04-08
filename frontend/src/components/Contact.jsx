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
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full px-3 py-1 border rounded h-30 resize-none"
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
