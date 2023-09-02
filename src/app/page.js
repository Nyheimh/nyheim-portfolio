import Image from 'next/image'
import Navbar from './components/Navbar'
import About from './components/About'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* // <div> */}

<Navbar />
<HeroSection />
<About />
<Projects />
    {/* // </div> */}
    </main>
  )
}
