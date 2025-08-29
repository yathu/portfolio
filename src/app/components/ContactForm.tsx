'use client'
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    // TODO: Integrate invisible captcha and backend submission here
    setTimeout(() => {
      setSubmitting(false);
      setFormStatus({ success: true, message: 'Message sent successfully (demo)!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <form className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
          value={form.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          value={form.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      {/* Invisible Captcha Placeholder */}
      <div style={{ display: 'none' }} id="captcha-placeholder">
        {/* Integrate invisible captcha here (e.g., Google reCAPTCHA v2/v3) */}
      </div>
      <button
        type="submit"
        className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
        disabled={submitting}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      {formStatus && <p className={`text-center mt-2 ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>{formStatus.message}</p>}
    </form>
  );
};

export default ContactForm; 