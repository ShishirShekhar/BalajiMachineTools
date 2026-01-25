import { Section, Stack } from "../components/ui";

const PrivacyPolicy = () => {
  return (
    <Section
      className="bg-linear-to-b from-blue-500 via-blue-500 to-blue-600 text-white"
      padding="xl"
      maxWidth="max-w-4xl"
    >
      <Stack gap="6" align="start" className="text-left">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-lg leading-relaxed">
          At Balaji Machine Tools, we value your privacy. This Privacy Policy outlines how we
          collect, use, and protect your personal information.
        </p>

        <Stack gap="4" className="w-full rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect your name, contact details, and other personally identifiable information
            when you interact with our website.
          </p>
        </Stack>

        <Stack gap="4" className="w-full rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p className="leading-relaxed">
            Your information is used to improve our services, respond to inquiries, and provide
            updates about our products.
          </p>
        </Stack>

        <Stack gap="4" className="w-full rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="leading-relaxed">
            We use cookies to enhance your browsing experience. You can manage your cookie
            preferences through your browser settings.
          </p>
        </Stack>

        <Stack gap="4" className="w-full rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p className="leading-relaxed">
            Your personal information is treated with the utmost security to prevent unauthorized
            access.
          </p>
        </Stack>

        <Stack gap="4" className="w-full rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p className="leading-relaxed">
            Any updates to this Privacy Policy will be posted here. Please check back for changes
            periodically.
          </p>
        </Stack>

        <p className="text-lg">
          If you have any questions or concerns, feel free to{" "}
          <a className="underline" href="/contact">
            contact us
          </a>
          .
        </p>
      </Stack>
    </Section>
  );
};

export default PrivacyPolicy;
