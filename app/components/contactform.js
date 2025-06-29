'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.message.trim()) newErrors.message = 'This field is required.';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Please specify a time.';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#f9f6ef] px-4 py-10 font-serif flex flex-col md:flex-row items-start justify-center gap-10">
      
      {/* Left Info Column */}
      <div className="w-full md:w-1/2 max-w-md text-[#72614D]">
        <h2 className="text-3xl font-thin mb-4">Dr. Serena Blake, PsyD</h2>
        <p className="text-lg mb-2">Clinical Psychologist</p>
        <address className="not-italic mb-6 leading-relaxed text-lg">
          1287 Maplewood Drive<br />
          Los Angeles, CA 90026<br />
        </address>

        <h3 className="text-2xl font-thin mb-3">Contact</h3>
        <ul className="text-base mb-6 leading-relaxed">
          <li>(323) 555-0192</li>
          <li><a href="mailto:serena@blakepsychology.com" className="underline text-[#305240]">serena@blakepsychology.com</a></li>
        </ul>

        <h3 className="text-2xl font-thin mb-3">Office Hours</h3>
        <ul className="text-base leading-relaxed">
          <li>In-Person: Tue & Thu, 10 AM – 6 PM</li>
          <li>Virtual (Zoom): Mon, Wed & Fri, 1 PM – 5 PM</li>
        </ul>
      </div>

      {/* Right Form Column */}
      <div className="w-full md:w-1/2 max-w-md bg-white border border-[#c8c0b2] rounded-lg p-6 shadow-md">
        <h2 className="text-2xl text-center text-[#72614D] mb-2">Get In Touch</h2>
        <p className="text-center text-sm text-[#72614D] mb-6">
          Simply fill out the fields below. We'll be in touch soon—usually within one business day.
          This form is secure, private, and completely free.
        </p>

        {submitted && (
          <p className="text-green-700 text-sm text-center mb-4">
            Thank you! We'll get back to you shortly.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-[#72614D]">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border border-[#c8c0b2] p-3 rounded bg-white focus:outline-none"
              value={formData.name}
              aria-invalid={!!errors.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone (e.g., (555) 123-4567)"
              className="w-full border border-[#c8c0b2] p-3 rounded bg-white focus:outline-none"
              value={formData.phone}
              aria-invalid={!!errors.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-[#c8c0b2] p-3 rounded bg-white focus:outline-none"
              value={formData.email}
              aria-invalid={!!errors.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              placeholder="What brings you here?"
              rows={4}
              className="w-full border border-[#c8c0b2] p-3 rounded bg-white focus:outline-none"
              value={formData.message}
              aria-invalid={!!errors.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Preferred time to reach you (e.g., weekday mornings)"
              className="w-full border border-[#c8c0b2] p-3 rounded bg-white focus:outline-none"
              value={formData.preferredTime}
              aria-invalid={!!errors.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            />
            <p className="text-xs text-[#888] mt-1">
              Let us know when you're typically available for a call or consultation
            </p>
            {errors.preferredTime && (
              <p className="text-red-600 text-xs mt-1">{errors.preferredTime}</p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agree"
              checked={formData.agree}
              aria-invalid={!!errors.agree}
              onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
              className="mt-1 cursor-pointer"
            />
            <label htmlFor="agree">
              I agree to be contacted <span className="text-red-600">*</span>
            </label>
          </div>
          {errors.agree && <p className="text-red-600 text-xs">{errors.agree}</p>}

          <button
            type="submit"
            className="w-full bg-[#305240] text-white py-3 rounded hover:bg-[#203d30] transition-colors"
          >
            Submit
          </button>

          <p className="text-xs text-center mt-3 text-[#888]">
            © By submitting this form, you consent to be contacted by Dr. Serena Blake.
          </p>
        </form>
      </div>

    </section>
  );
};

export default ContactForm;
