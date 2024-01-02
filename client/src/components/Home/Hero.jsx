import ActionButton from "../ActionButton";

const Hero = () => {
  return (
    <div className="hero h-screen text-white">
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <p className="text-6xl sm:text-7xl pb-10 px-4 sm:w-1/2 text-center">
          Reliable and Durable Machine Tools
        </p>
        <div>
          <ActionButton
            type="primary"
            text="Enquire Now"
            action="link"
            value="/products"
            size="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
