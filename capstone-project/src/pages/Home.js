import { HeroSection } from '../component/Hero-section';
import { Highlights } from '../component/Highlights';
import { Testimonial } from '../component/Testimonial';
import { AboutUs } from '../component/About-us';



export function Home() {
    return (
      <>
        <main>
        <HeroSection />
        <Highlights />
        <Testimonial />
        <AboutUs/>
        </main>
      </>
    );
}