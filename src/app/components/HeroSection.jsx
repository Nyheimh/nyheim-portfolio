/* eslint-disable react/no-unescaped-entities */
import React from "react";
import nyheim from "../../img/heem.png";
import binaryworld from "../../img/binary-world.jpg";
import Image from "next/image";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen opacity-25">
        <Image
          src={binaryworld}
          alt="world map"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen"></div>
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile ">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1 class="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins sm:pl-16 pl-[2rem]">
              Hi, I'm {""}
              <span className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">
                Nyheim
              </span>
            </h1>
            <p class="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins sm:pl-16 pl-[2rem]">
              Full Stack Software Engineer
            </p>{" "}
            <p class="sm:text-[16px] text-[14px] text-taupe uppercase tracking-wider font-semibold font-poppins sm:pl-16 pl-[2rem]">
              👨🏾‍💻 Coding ideas into reality 👨🏾‍💻
            </p>{" "}
          </div>
          <div
            className={`w-screen flex flex-col items-start justify-center ${style["w-full"]}`}
          >
            <Image
              class={`absolute object-cover`}
              src={nyheim}
              alt="nyheim"
              style={{
                height: "unset",
                left: "unset",
                top: "unset",
                right: "unset",
                width: "100%",
                bottom: 0,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
