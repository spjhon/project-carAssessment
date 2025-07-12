import { BrandMarquee } from '@/components/BrandMarquee';
import { Hero } from '../components/Hero';
import { HeroVideo } from '@/components/HeroVideo';
import { Benefits } from '@/components/Benefits';
import { OurProcess } from '@/components/OurProcess';
import { InfraestructureBanner } from '@/components/InfraestructureBanner';
import { Pricing } from '@/components/Pricing';
import { CallToAction } from '@/components/CallToAction';
import { FAQ } from '../components/FaQ';
import { Footer } from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
     <Hero></Hero>
     <HeroVideo></HeroVideo>
     <Benefits></Benefits>
     <InfraestructureBanner></InfraestructureBanner>
     <OurProcess></OurProcess>
     <Pricing></Pricing>
     <BrandMarquee></BrandMarquee>
     <CallToAction></CallToAction>
     <FAQ></FAQ>
     <ContactUs></ContactUs>
     <Footer></Footer>
    </>
  );
}
