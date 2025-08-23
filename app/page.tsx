import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
