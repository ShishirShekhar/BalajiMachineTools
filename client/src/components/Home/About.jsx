const About = () => {
  return (
    <div className="px-10 py-10" id="about">
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
            <h2 className="text-2xl font-semibold">Teams</h2>
            <p className="text-justify">
              Sach Khand Machine Tools is innovating better technology
              industrial machines and winning clients trust with the support of
              100 strong-willed and industry knowledge possessing experts. We
              are proud and happy to have with us all hardworking technicians,
              engineers, designers, quality inspectors, logistic personnel,
              sales agents and more to support our growth and industrial
              operations. It is their dedication to work better on every project
              that we receive only praises and no complaints from customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
