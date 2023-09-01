import Image from 'next/image'
import About from './components/About'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>Hello World</h1>

<Hero />
<About />
    </main>
  )
}
