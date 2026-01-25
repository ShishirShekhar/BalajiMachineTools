import { FaAward, FaCheckCircle, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import { Card, Grid, Section, Stack } from "../components/ui";
import { useMetadata } from "../lib/hooks";

const About = () => {
  useMetadata({
    title: "About Us",
    description:
      "Learn about Balaji Machine Tools - 55+ years of excellence in industrial machinery and engineering solutions",
    url: "https://balijimachinetools.com/about",
  });

  const stats = [
    { label: "Years of Excellence", value: "55+", icon: <FaAward /> },
    { label: "Happy Clients", value: "1000+", icon: <FaUsers /> },
    { label: "Products", value: "50+", icon: <FaLightbulb /> },
    { label: "Industry Experience", value: "Expert", icon: <FaHandshake /> },
  ];

  const values = [
    {
      title: "Quality First",
      description: "Uncompromising commitment to excellence in every product",
    },
    {
      title: "Customer-Centric",
      description: "Your success drives our innovation and service",
    },
    {
      title: "Innovation",
      description: "Continuously improving through R&D and modern technology",
    },
    {
      title: "Integrity",
      description: "Transparent business practices and honest communication",
    },
  ];

  return (
    <div className="u-bg-page min-h-screen">
      <Section className="u-bg-primary-gradient text-white">
        <Stack align="center" gap="4" className="text-center">
          <h1 className="animate-fadeIn text-3xl font-bold sm:text-4xl md:text-6xl">
            About Balaji Machine Tools
          </h1>
          <p className="max-w-3xl text-lg text-blue-100 sm:text-xl md:text-2xl">
            Crafting Excellence Since 1969
          </p>
        </Stack>
      </Section>

      <Section className="-mt-10 sm:-mt-14 md:-mt-16" padding="md" maxWidth="max-w-6xl">
        <Grid cols={{ base: 2, md: 4 }} gap="4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Stack align="center" gap="2">
                <div className="text-3xl text-blue-500 sm:text-4xl">{stat.icon}</div>
                <p className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-600 sm:text-sm md:text-base">{stat.label}</p>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section maxWidth="max-w-6xl" padding="lg">
        <Grid cols={{ base: 1, md: 2 }} gap="8" className="items-center">
          <Stack gap="4">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Balaji Machine Tools, established in{" "}
              <span className="font-semibold text-blue-600">1969</span>, stands as a pioneering
              force in the industry, addressing the diverse needs of various industrial segments.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our prowess lies in the highly experienced and full-fledged Research and Development
              Department. With a dedicated team of research specialists, we consistently contribute
              innovative ways to manufacture cutting-edge products.
            </p>
          </Stack>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://i.gifer.com/Dj7u.gif"
              alt="Manufacturing Excellence"
              className="h-80 w-full object-cover"
            />
          </div>
        </Grid>
      </Section>

      <Section className="bg-linear-to-br from-blue-50 to-white" maxWidth="max-w-6xl" padding="lg">
        <Grid cols={{ base: 1, md: 2 }} gap="8">
          <Card className="shadow-lg transition-shadow hover:shadow-xl">
            <Stack gap="4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FaLightbulb className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                To provide cutting-edge machine tools that meet the highest standards of quality and
                innovation. We aim to contribute to the success and efficiency of our clients'
                operations.
              </p>
            </Stack>
          </Card>

          <Card className="shadow-lg transition-shadow hover:shadow-xl">
            <Stack gap="4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FaAward className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                To be a globally recognized leader in the machine tools industry, known for our
                commitment to excellence, customer satisfaction, and technological advancements.
              </p>
            </Stack>
          </Card>
        </Grid>
      </Section>

      <Section maxWidth="max-w-6xl" padding="lg">
        <Stack gap="8">
          <h2 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Our Core Values
          </h2>
          <Grid cols={{ base: 1, md: 2 }} gap="6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-l-4 border-blue-500 shadow-md transition-shadow hover:shadow-lg"
              >
                <Stack direction="row" gap="4" align="start">
                  <FaCheckCircle className="mt-1 shrink-0 text-2xl text-blue-500" />
                  <Stack gap="2">
                    <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>
    </div>
  );
};

export default About;
