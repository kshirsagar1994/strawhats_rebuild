import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Statistics from '@/components/sections/Statistics';
import Testimonials from '@/components/sections/Testimonials';
import Industries from '@/components/sections/Industries';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import { AuroraBackground } from '@/components/magicui/AuroraBackground';

export default function Home() {
  return (
    <AuroraBackground>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Technologies />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Industries />
      <FAQ />
      <Contact />
    </AuroraBackground>
  );
}
