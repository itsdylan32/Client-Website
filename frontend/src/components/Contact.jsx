import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("yourFormID"); // Replace with your actual Formspree ID

  if (state.succeeded) {
    return (
      <section className="h-screen bg-white text-gray-800 flex justify-center items-center text-center">
        <div className="px-6">
          <h2 className="text-4xl font-bold mb-4">Thank you!</h2>
          <p className="text-lg">I'll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            className="w-full px-3 py-1 border rounded h-30 resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
