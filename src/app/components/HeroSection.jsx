// components/HeroSection.js
import styles from "./HeroSection.module.css"; // Import the CSS module
import React from "react";
import nyheim from "../../img/nyheim.png";
import binaryworld from "../../img/binary-world.jpg";
import Image from "next/image";
import "./Navbar.css";
// import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-2/3 opacity-25">
        <Image
          src={binaryworld}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        {/* <Image
          src={binaryworld}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        /> */}
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Nyheim
              </span>
            </h1>
            <p className="mt-2 text-eerieBlack">
              Software Engineer <br className="sm:block hidden" />
              Frontend, Backend, Mobile
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          >
            <Image
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[90vh] md:h-[70vh] xl:h-[90vh]"
              src={nyheim}
              alt="nyheim"
              width={800} // Adjust the width as needed
              // height={500}
            />
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default HeroSection;
