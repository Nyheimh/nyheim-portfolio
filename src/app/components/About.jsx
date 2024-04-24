import React from "react";
import {
  FaEnvelope,
  FaFile,
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="text-center">
      <h2 className="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins sm:pl-16 pl-[2rem] text-center">
        Overview
      </h2>

      <p
        className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-black
  first-letter:mr-3 first-letter:float-left
  "
      >
        Full-stack software engineer with over two years of experience in React,
        Ruby on Rails, TypeScript, Next.js, React Native, & GoLang. I excel in
        problem-solving, thrive on innovation, and have a strong foundation in
        business communications and analysis. My recent role at connectRN
        involved crafting high-performing, scalable code, translating design
        concepts into functional software, and seamlessly integrating
        third-party libraries. I am passionate about continuous learning,
        especially in frontend, backend, and mobile development. I am drawn to
        impactful projects in areas like healthcare, education, and social
        justice. Additionally, I prioritize diversity, equity, and inclusion
        (DEI) and seek like-minded companies to collaborate with. I am eager to
        connect with recruiters and fellow engineers who share my vision and
        enthusiasm.
      </p>

      <div className="mt-4">
        <a
          href="https://github.com/nyheimh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl mx-2 inline-block" />
        </a>
        <a
          href="https://www.linkedin.com/in/nyheimhunter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl mx-2 inline-block" />
        </a>
        <a
          href="mailto:nyheimhunter@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-4xl mx-2 inline-block" />
        </a>
        <a
          href="https://docs.google.com/document/d/1yuk1rhSaNBAsRx9ZwtPCUvCWK_6rpABqwdMATsidK5Y/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFile className="text-4xl mx-2 inline-block" />
        </a>
      </div>
    </div>
  );
};

export default About;
