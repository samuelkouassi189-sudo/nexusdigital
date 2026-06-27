import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Collection from './components/Collection';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useLenis();
  return (
    <div className="bg-black text-white antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Collection />
        <Gallery />
        <Videos />
        <WhyUs />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
