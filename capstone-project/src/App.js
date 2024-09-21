import './App.css';
import { Header } from './component/Header'
import { HeroSection } from './component/Hero-section';
import { Highlights } from './component/Highlights';
import { Testimonial } from './component/Testimonial';
import { AboutUs } from './component/About-us';
import { Footer } from './component/Footer';

function App() {
    return (
      <>
        <Header />
        <main>
        <HeroSection />
        <Highlights />
        <Testimonial />
        <AboutUs />
        </main>
        <Footer />
      </>
    );
}

export default App;
