import { BrandMarquee } from '@/components/BrandMarquee';
import { Hero } from '../components/Hero';
import { HeroVideo } from '@/components/HeroVideo';
import { Problem } from '@/components/Problem';
import { Benefits } from '@/components/Benefits';
import { OurProcess } from '@/components/OurProcess';

export default function Home() {
  return (
    <>
     <Hero></Hero>
     <BrandMarquee></BrandMarquee>
     <Problem></Problem>
     <HeroVideo></HeroVideo>
    <Benefits></Benefits>
    <OurProcess></OurProcess>
    </>
  );
}
