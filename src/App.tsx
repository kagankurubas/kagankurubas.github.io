import React from 'react';
import { useRouter } from './hooks/useRouter';
import { usePageMetadata, type PageMetadataConfig } from './hooks/usePageMetadata';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { EngineeringRange } from './components/EngineeringRange';
import { About } from './components/About';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { Experiments } from './components/Experiments';
import { BeyondEngineering } from './components/BeyondEngineering';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HabittoCaseStudy } from './pages/HabittoCaseStudy';
import { TodoistCaseStudy } from './pages/TodoistCaseStudy';
import { BookShelfCaseStudy } from './pages/BookShelfCaseStudy';
import { NotFoundPage } from './pages/NotFoundPage';

const homepageMetadata: PageMetadataConfig = {
  title: 'Kağan Kurubaş — Computer Engineer | Product, AI & Game Development',
  description: 'Computer engineer building products, AI/backend systems, and interactive experiences across Flutter, Python, Unity, and C#.',
  canonical: 'https://kagankurubas.github.io/',
  robots: 'index, follow',
  ogType: 'website',
  ogTitle: 'Kağan Kurubaş — Computer Engineer | Product, AI & Game Development',
  ogDescription: 'Computer engineer building products, AI/backend systems, and interactive experiences across Flutter, Python, Unity, and C#.',
  ogUrl: 'https://kagankurubas.github.io/',
  ogImage: 'https://kagankurubas.github.io/og/home.png',
  ogImageAlt: 'Kağan Kurubaş — Computer Engineer & Game Developer Portfolio',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kağan Kurubaş — Computer Engineer | Product, AI & Game Development',
  twitterDescription: 'Computer engineer building products, AI/backend systems, and interactive experiences across Flutter, Python, Unity, and C#.',
  twitterImage: 'https://kagankurubas.github.io/og/home.png',
  twitterImageAlt: 'Kağan Kurubaş — Computer Engineer & Game Developer Portfolio',
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://kagankurubas.github.io/#person',
        'name': 'Nuri Kağan Kurubaş',
        'alternateName': 'Kağan Kurubaş',
        'jobTitle': 'Computer Engineer & Game Developer',
        'url': 'https://kagankurubas.github.io/',
        'sameAs': [
          'https://github.com/kagankurubas',
          'https://linkedin.com/in/nuri-ka%C4%9Fan-kurubas-b512b7217/'
        ],
        'knowsAbout': [
          'Flutter',
          'Dart',
          'Python',
          'Unity',
          'C#',
          'Unreal Engine 5',
          'C++',
          'Model Context Protocol',
          'Systems Engineering'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kagankurubas.github.io/#website',
        'url': 'https://kagankurubas.github.io/',
        'name': 'Kağan Kurubaş Portfolio',
        'publisher': {
          '@id': 'https://kagankurubas.github.io/#person'
        }
      }
    ]
  }
};

const HomePageView: React.FC<{ onNavigate: (path: string, hash?: string) => void }> = ({ onNavigate }) => {
  usePageMetadata(homepageMetadata);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SelectedWork onNavigate={onNavigate} />
        <div className="section-divider-rhythm" aria-hidden="true">
          <span className="section-divider-node"></span>
        </div>
        <EngineeringRange onNavigate={onNavigate} />
        <div className="section-divider-rhythm" aria-hidden="true">
          <span className="section-divider-node"></span>
        </div>
        <CurrentlyBuilding />
        <Experiments />
        <div className="section-divider-rhythm" aria-hidden="true">
          <span className="section-divider-node"></span>
        </div>
        <About />
        <BeyondEngineering />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const { currentPath, navigate } = useRouter();

  // Canonical route resolution
  if (currentPath === '/projects/habitto') {
    return <HabittoCaseStudy onNavigate={navigate} />;
  }

  if (currentPath === '/projects/todoist') {
    return <TodoistCaseStudy onNavigate={navigate} />;
  }

  if (currentPath === '/projects/bookshelf') {
    return <BookShelfCaseStudy onNavigate={navigate} />;
  }

  if (currentPath === '/') {
    return <HomePageView onNavigate={navigate} />;
  }

  // Unrecognized route fallback
  return <NotFoundPage onNavigate={navigate} />;
}

export default App;
