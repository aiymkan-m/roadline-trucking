import { useState } from 'react';
import { Truck, Menu, X, Phone } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToQuote = (e) => {
    e.preventDefault();
    closeMobileMenu();
    const section = document.getElementById('quote');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-info">
            <span>24/7 Dispatch Center</span>
            <span className="divider">|</span>
            <a href="tel:7735550100" className="phone-link">
              <Phone size={14} /> (773) 555-0100
            </a>
          </div>
          <div className="top-bar-location">Chicago, IL &bull; Nationwide Coverage</div>
        </div>
      </div>

      <div className="main-nav-wrapper">
        <div className="container main-nav">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <Truck size={28} />
            </div>
            <div className="logo-text">
              <span className="brand-name">RoadLine</span>
              <span className="brand-tag">TRUCKING</span>
            </div>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#services" onClick={closeMobileMenu}>Services</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#fleet" onClick={closeMobileMenu}>Fleet</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            <a href="#quote" className="btn btn-quote-mobile" onClick={scrollToQuote}>
              Get a Quote
            </a>
          </nav>

          <a href="#quote" className="btn btn-primary btn-quote-desktop" onClick={scrollToQuote}>
            Get a Quote
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}
