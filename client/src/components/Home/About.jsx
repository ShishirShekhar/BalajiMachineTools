const About = () => {
  return (
    <div className="px-10 py-10">
      <h1 className="text-4xl font-semibold py-10 text-center">About Us</h1>
      <div className="flex justify-between items-center">
        <img
          src="https://image3.jdomni.in/banner/29092021/2D/2D/9B/25E2078FE03DBDFD813944DD36_1632910558314.png?output-format=webp"
          alt="machine tools"
          className="w-1/2 rounded-xl"
        />
        <div className="px-10 py-10 flex flex-col">
          <div className="py-2">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-justify">
              Easing production work in agriculture, metal, and other industries
              is how we are supporting the growth of companies. We are Sach
              Khand Machine Tools, widely respected manufacturer of industrial
              machines. Formed many decades back in 1970, our company is
              revolutionizing the industry by introducing supreme functionality
              machines such as Semi Gear Head Lathe Machine, Lathe Machine,
              Extra Heavy Duty Lathe Machine, Hydraulic Planer Machine, Plate
              Bending Machine, Hydraulic Angle Cutter Machine, Heavy Duty Radial
              Drill Machine, etc. We support companies stay ahead in industrial
              competition by providing them advanced machines for faster and
              qualitative production. Our array of industrial machines is best
              admired for noiseless operation, low maintenance, less energy
              consumption and flawless functionality. It is in complete
              compliance with industrial norms that we design and develop
              industrial machines and promise buyers for quality perfection in
              our range.
            </p>
          </div>

          <div className="py-2">
            <h2 className="text-2xl font-semibold">Infrastructure</h2>
            <p className="text-justify">
              Achieving highest standards in industrial machines is possible
              only when a company maintains its production unit in line with the
              cutting-edge technology. In order to supply simply the best
              industrial machines, we have built our advanced and robust
              production unit, in complete accordance to the industrial norms.
              With basic available resources, we are producing advanced
              machines. We have special quality inspection and R&D departments
              to maintain efficiency and quality of our machines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
