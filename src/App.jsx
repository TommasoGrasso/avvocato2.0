import './styles/global.css';
import { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Marquee       from './components/Marquee';
import PracticeAreas from './components/PracticeAreas';
import About         from './components/About';
import Values        from './components/Values';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import CookieBanner  from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  useScrollReveal();

  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <PracticeAreas />
        <About />
        <Values />
        <Testimonials />
        <Contact onOpenPrivacy={() => setShowPrivacy(true)} />
      </main>
      <Footer onOpenPrivacy={() => setShowPrivacy(true)} />
      <CookieBanner onOpenPrivacy={() => setShowPrivacy(true)} />
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </>
  );
}
