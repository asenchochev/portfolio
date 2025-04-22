import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m Asen Chochev — a passionate web developer from Bulgaria with a strong focus on building modern, user-friendly, and scalable web applications. I specialize in working with the MERN and MEAN stacks, and I also actively develop using Node.js and Firebase for real-time and serverless applications.

        My journey into web development started with a curiosity for how things work behind the screen. That curiosity quickly turned into a deep passion for creating interactive web solutions, mastering both frontend and backend technologies along the way.

        I constantly strive to improve my skills and keep up with the latest technologies. Whether I’m working on a dynamic single-page application, integrating APIs, building RESTful services, or setting up cloud-based architectures with Firebase, I aim to write clean and maintainable code that brings real value.

        Outside of coding, I enjoy learning about tech innovation, collaborating with like-minded creators, and taking on challenges that push my boundaries.

        Let’s build something great together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
