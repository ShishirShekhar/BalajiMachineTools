import React from "react";

const About = () => {
  return (
    <div className="p-5 md:p-10 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-4xl font-semibold mb-5">
          About Balaji Machine Tools
        </h1>

        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://i.gifer.com/Dj7u.gif"
            alt="About Us"
            className="w-full h-64 object-cover object-center"
          />
        </div>

        <p className="text-lg leading-relaxed">
          Balaji Machine Tools, established in 1969, stands as a pioneering
          force in the industry, addressing the diverse needs of various
          industrial segments. Our prowess lies in the highly experienced and
          full-fledged Research and Development Department. With a dedicated
          team of research specialists, we consistently contribute innovative
          ways to manufacture cutting-edge products.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to provide cutting-edge machine tools that meet the
          highest standards of quality and innovation. We aim to contribute to
          the success and efficiency of our clients' operations.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          We envision being a globally recognized leader in the machine tools
          industry, known for our commitment to excellence, customer
          satisfaction, and technological advancements.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-8">
          <li>Quality First</li>
          <li>Customer-Centric Approach</li>
          <li>Innovation and Continuous Improvement</li>
          <li>Integrity and Transparency</li>
          {/* Add more values as needed */}
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Team</h2>
        <p className="text-lg leading-relaxed">
          Meet our dedicated team of professionals who bring expertise, passion,
          and innovation to every aspect of our operations.
        </p>
        {/* You can include team member profiles, roles, and photos here. */}

        {/* Add more sections with creative styling */}
      </div>
    </div>
  );
};

export default About;
