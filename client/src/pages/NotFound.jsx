import { FaHome, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Section, Stack } from "../components/ui";
import { useMetadata } from "../lib/hooks";

const NotFound = () => {
  useMetadata({
    title: "Page Not Found",
    description: "The page you're looking for could not be found",
    url: "https://balijimachinetools.com/404",
  });

  return (
    <Section
      className="u-bg-page flex min-h-screen items-center text-center"
      padding="xl"
      maxWidth="max-w-2xl"
    >
      <Stack align="center" gap="8" className="w-full">
        <div>
          <h1 className="animate-fadeIn u-text-primary-gradient mb-4 text-7xl font-extrabold sm:text-8xl md:text-9xl">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Page Not Found</h2>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Oops! The page you're looking for seems to have wandered off. Let's get you back on
            track.
          </p>
        </div>

        <div>
          <img
            src="https://i.gifer.com/7VE.gif"
            alt="Page Not Found Illustration"
            className="mx-auto max-w-xs opacity-80"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/">
            <button className="u-btn-primary flex transform items-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <FaHome className="text-xl" />
              Back to Home
            </button>
          </Link>
          <Link to="/products">
            <button className="flex transform items-center gap-2 rounded-lg border-2 border-blue-500 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white">
              <FaSearch className="text-xl" />
              Browse Products
            </button>
          </Link>
        </div>
      </Stack>
    </Section>
  );
};

export default NotFound;
