import './App.css';
import { Header } from './component/Header'
import { HeroSection } from './component/Hero-section';
import { Highlights } from './component/Highlights';
import { Testimonial } from './component/Testimonial';


function App() {

  
  return (
    <>
    <Header />
    <main>
    <HeroSection />
    <Highlights />
    <Testimonial />
    </main>

    </>
  );
}

export default App;
