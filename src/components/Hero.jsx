import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Premier Logistics & Freight Partner
          </div>
          <h1 className="hero-title">
            Reliable Freight. <br />
            <span className="text-highlight">Delivered On Time.</span>
          </h1>
          <p className="hero-subtitle">
            Safe, dependable and efficient freight transportation across the United States.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('quote')}
              className="btn btn-hero-primary"
            >
              Get a Quote <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn btn-hero-secondary"
            >
              Our Services
            </button>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <ShieldCheck className="highlight-icon" size={20} />
              <span>Fully Insured & FMCSA Licensed</span>
            </div>
            <div className="highlight-item">
              <Clock className="highlight-icon" size={20} />
              <span>24/7 Dispatch</span>
            </div>
            <div className="highlight-item">
              <MapPin className="highlight-icon" size={20} />
              <span>48 States Covered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 600 400" className="hero-svg">
            {/* Sky glow and sun */}
            <circle cx="470" cy="120" r="70" fill="#f97316" opacity="0.25" />
            <circle cx="470" cy="120" r="42" fill="#f97316" opacity="0.55" />

            {/* Distant hills */}
            <path d="M0 250 Q120 190 240 240 T480 225 T600 235 V400 H0 Z" fill="#0b2a4a" />

            {/* Highway in perspective */}
            <path d="M250 250 L350 250 L600 400 L0 400 Z" fill="#1e293b" />
            <g className="road-lines">
              <rect x="297" y="262" width="6" height="14" fill="#fbbf24" />
              <rect x="296" y="292" width="8" height="20" fill="#fbbf24" />
              <rect x="294" y="332" width="12" height="28" fill="#fbbf24" />
              <rect x="292" y="378" width="16" height="22" fill="#fbbf24" />
            </g>

            {/* Truck */}
            <g className="hero-truck" transform="translate(120 200)">
              {/* Trailer */}
              <rect x="0" y="20" width="230" height="95" rx="6" fill="#f8fafc" />
              <rect x="0" y="95" width="230" height="8" fill="#d9381e" />
              <text x="115" y="70" textAnchor="middle" fontSize="26" fontWeight="800" fill="#003366" fontFamily="Inter, sans-serif">
                ROADLINE
              </text>
              {/* Cab */}
              <path d="M238 45 H300 L335 80 V115 H238 Z" fill="#d9381e" />
              <path d="M250 55 H295 L320 82 H250 Z" fill="#bae6fd" />
              <rect x="228" y="105" width="110" height="10" fill="#7f1d1d" />
              {/* Wheels */}
              <g fill="#0f172a" stroke="#94a3b8" strokeWidth="4">
                <circle cx="40" cy="122" r="16" />
                <circle cx="80" cy="122" r="16" />
                <circle cx="270" cy="122" r="16" />
                <circle cx="315" cy="122" r="16" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
