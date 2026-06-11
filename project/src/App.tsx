import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress, GradientOrbs, ParticlesBackground } from './components/ui';
import {
  Navbar,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Certifications,
  Contact,
  Footer,
} from './components/sections';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <GradientOrbs />
        <ParticlesBackground />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
