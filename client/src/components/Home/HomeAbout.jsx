import { Card, Grid, Section, Stack } from "../ui";

const HomeAbout = () => {
  return (
    <Section id="about" padding="xl" className="u-bg-page">
      <Stack align="center" gap="3" className="fade-in-up text-center">
        <h1 className="u-text-primary-gradient u-section-title">About Us</h1>
        <div className="u-divider-primary" />
      </Stack>

      <Grid cols={{ base: 1, md: 2 }} gap="8" className="mx-auto mt-10 max-w-6xl sm:mt-12">
        {[
          {
            title: "Our History",
            icon: "🏭",
            body: "Balaji Machine Tools, established in 1969, is dedicated to serving various industrial segments. Our R&D Department, equipped with experienced specialists, constantly contributes innovative solutions. Adhering to industry standards, we offer a wide range of products, making us a leading company in the industry.",
          },
          {
            title: "Our Mission",
            icon: "🎯",
            body: "Our mission is to provide reliable and durable machine tools that cater to the diverse needs of different industrial sectors. We focus on innovation, quality, and consistent performance to exceed customer expectations.",
          },
        ].map((card) => (
          <Card key={card.title} className="shadow-lg">
            <Stack gap="4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-400 text-xl font-bold text-white">
                  {card.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">{card.title}</h2>
              </div>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">{card.body}</p>
            </Stack>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default HomeAbout;
