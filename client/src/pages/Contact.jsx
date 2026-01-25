import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Button, Section } from "../components/ui";

const Contact = () => {
  const WHATSAPP_NUMBER = "+918437680240";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSuccess("");
      const text = `Hi, I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
        text
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setSuccess("Opening WhatsApp to send your message.");
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Section
      className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50"
      padding="xl"
      maxWidth="max-w-7xl"
    >
      <h1 className="u-text-primary-gradient u-section-title mb-3 text-center sm:mb-4">
        Get In Touch
        <div className="u-divider-primary mx-auto mt-3 w-24" />
      </h1>
      <p className="mb-8 px-2 text-center text-sm text-gray-600 sm:mb-12 sm:text-base md:text-lg">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:rounded-2xl sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-6 sm:text-2xl">
              Contact Information
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="group flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-full bg-blue-100 p-2 transition-colors group-hover:bg-blue-500 group-hover:text-white sm:p-3">
                  <FaMapMarkerAlt className="text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">Address</p>
                  <p className="text-sm text-gray-600 sm:text-base">
                    G.T Road, Batala
                    <br />
                    143505, Punjab, India
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-full bg-green-100 p-2 transition-colors group-hover:bg-green-500 group-hover:text-white sm:p-3">
                  <FaPhone className="text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">Phone</p>
                  <a
                    href="tel:+918437680240"
                    className="block text-sm text-blue-600 hover:text-blue-700 sm:text-base"
                  >
                    +91 8437680240
                  </a>
                  <a
                    href="tel:+919814415150"
                    className="block text-sm text-blue-600 hover:text-blue-700 sm:text-base"
                  >
                    +91 9814415150
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-full bg-red-100 p-2 transition-colors group-hover:bg-red-500 group-hover:text-white sm:p-3">
                  <FaEnvelope className="text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">Email</p>
                  <a
                    href="mailto:salesbalajimachines@gmail.com"
                    className="text-sm break-all text-blue-600 hover:text-blue-700 sm:text-base"
                  >
                    salesbalajimachines@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4 sm:mt-8 sm:pt-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-800 sm:mb-4 sm:text-base">
                Quick Actions
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <Button
                  type="primary"
                  text="Call Us Now"
                  action="call"
                  value={8437680240}
                  size="medium"
                />
                <Button
                  type="secondary"
                  text="WhatsApp Us"
                  action="whatsapp"
                  value="Hello, I visited Balaji Machine Tools website and would like to inquire about your products."
                  size="medium"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl sm:h-80 sm:rounded-2xl">
            <iframe
              title="Balaji Machine Tools Location on OpenStreetMap"
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.17,31.81,75.23,31.83&layer=mapnik&marker=31.8180,75.1992"
              allowFullScreen={true}
              loading="lazy"
              className="h-full w-full"
              aria-label="OpenStreetMap location of Balaji Machine Tools"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:rounded-2xl sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-6 sm:text-2xl">
            Send us a Message
          </h2>
          <div className="mb-4 flex flex-col items-start gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs text-gray-600 sm:mb-6 sm:flex-row sm:items-center sm:gap-3 sm:rounded-xl sm:text-sm">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
              1d
            </span>
            <div>
              <p className="font-semibold text-gray-800">Response time: within one business day</p>
              <p className="text-gray-600">If urgent, call or WhatsApp us directly.</p>
            </div>
          </div>

          {success && (
            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 sm:rounded-xl">
              {success}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 pb-28 sm:space-y-5 md:pb-0">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-lg border-2 px-3 py-3 transition-all focus:ring-2 focus:outline-none sm:px-4 sm:py-4 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                placeholder="Enter your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              <p className="mt-1 text-xs text-gray-500">Tell us who we should address.</p>
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-lg border-2 px-3 py-3 transition-all focus:ring-2 focus:outline-none sm:px-4 sm:py-4 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                placeholder="your.email@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <p className="mt-1 text-xs text-gray-500">
                We'll send confirmation and follow-ups here.
              </p>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full rounded-lg border-2 px-3 py-3 transition-all focus:ring-2 focus:outline-none sm:px-4 sm:py-4 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                placeholder="e.g. +91 84376 80240"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              <p className="mt-1 text-xs text-gray-500">
                Include country code so we can reach you.
              </p>
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full resize-none rounded-lg border-2 px-3 py-3 transition-all focus:ring-2 focus:outline-none sm:px-4 sm:py-4 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                placeholder="Tell us about your requirements..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                <span>Share machine type, capacity, and budget if known.</span>
                <span>{formData.message.length}/500</span>
              </div>
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="u-btn-primary w-full transform rounded-lg py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
