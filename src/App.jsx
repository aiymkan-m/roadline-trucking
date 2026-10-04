import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Fleet />
        <Stats />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
