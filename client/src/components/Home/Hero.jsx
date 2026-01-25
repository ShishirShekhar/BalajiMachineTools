import { Button, Section, Stack } from "../ui";

const Hero = () => (
  <Section
    as="header"
    padding="xl"
    className="hero relative -mt-20 flex min-h-screen items-center overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white"
  >
    <Stack align="center" justify="center" gap="6" className="fade-in text-center">
      <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="animate-fadeIn inline-block">Reliable and Durable</span>
        <br />
        <span className="inline-block bg-linear-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
          Machine Tools
        </span>
      </h1>
      <p className="fade-in-up max-w-2xl text-base text-blue-50 sm:text-lg md:text-xl">
        Premium quality machine tools for all your industrial needs
      </p>
      <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
        <Button type="primary" text="Enquire Now" action="link" value="/contact" size="large" />
      </div>
    </Stack>
  </Section>
);

export default Hero;
