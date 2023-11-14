import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="hero h-screen text-white">
      <Nav />
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <p className="text-7xl pb-10 w-1/2 text-center">
          Reliable and Durable Machine Tools
        </p>
        <button className="bg-blue-500 px-4 py-2 rounded-xl">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
