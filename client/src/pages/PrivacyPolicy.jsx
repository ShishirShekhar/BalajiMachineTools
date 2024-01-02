import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-5 md:p-10 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-4xl font-semibold mb-5">Privacy Policy</h1>

        <p className="text-lg leading-relaxed">
          At Balaji Machine Tools, we value your privacy. This Privacy Policy
          outlines how we collect, use, and protect your personal information.
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect your name, contact details, and other personally
            identifiable information when you interact with our website.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to improve our services, respond to
            inquiries, and provide updates about our products.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can manage
            your cookie preferences through your browser settings.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
          <p>
            Your personal information is treated with the utmost security to
            prevent unauthorized access.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p>
            Any updates to this Privacy Policy will be posted here. Please check
            back for changes periodically.
          </p>
          <p className="mt-8">
            If you have any questions or concerns, feel free to{" "}
            <a className="underline" href="/contact">
              contact us
            </a>
            .
          </p>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
