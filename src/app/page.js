import React from "react";
import Image from "next/image";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      <body>
        <div id="section1" className="text-white h-screen">
          <div className="container mx-auto flex items-center justify-center h-full">
            <HeroSection />
          </div>
        </div>
        <div id="section2" className="bg-white text-black h-screen">
          <div className="container mx-auto flex items-center justify-center h-full">
            <About />
          </div>
        </div>
        <div id="section3" className="bg-black text-white h-screen">
          <div className="container mx-auto flex items-center justify-center h-full">
            <Experience />
          </div>
        </div>
        <div id="section4" className="bg-white text-black sm:h-screen">
          <div className="container mx-auto flex items-center justify-center h-full">
            <Projects />
          </div>
        </div>
      </body>
    </div>
  );
}
