import { useClient } from "react";


import Image from 'next/image'
import Navbar from './components/Navbar'
import About from './components/About'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
{/* <Navbar /> */}
    <body>
  <div id="section1" class="text-white h-screen">
    <div class="container mx-auto flex items-center justify-center h-full">
<HeroSection />
    </div>
  </div>
  <div id="section2" class="bg-white text-black h-screen">
    <div class="container mx-auto flex items-center justify-center h-full">
<About />
    </div>
  </div>
  <div id="section4" class="bg-black text-white h-screen">
    <div class="container mx-auto flex items-center justify-center h-full">
<Experience />
    </div>
  <div id="section3" class="bg-white text-black h-screen">
    <div class="container mx-auto flex items-center justify-center h-full">
<Projects />
    </div>
  </div>
  </div>
</body>

{/* <Contact /> */}
    {/* // </div> */}
    </main>
  )
}
