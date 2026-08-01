
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Now } from './components/Now';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SelectedWork />
        <About />
        <Now />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
