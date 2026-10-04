import { CheckCircle2, Target } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Moving America Forward</h2>
            <p className="about-text-lead">
              RoadLine Trucking provides safe and reliable freight transportation throughout the United States.
            </p>
            <p className="about-text">
              Headquartered in Chicago, Illinois, our mission is to deliver exceptional logistics performance through modern equipment, cutting-edge telemetry, and dedicated professional drivers who prioritize cargo safety and timely arrival.
            </p>

            <ul className="about-features-list">
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>FMCSA licensed, bonded, and fully insured carrier</span>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>State-of-the-art telematics and temperature monitoring</span>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Experienced, safety-certified professional drivers</span>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Seamless nationwide logistics support around the clock</span>
              </li>
            </ul>
          </div>

          <div className="about-mission-card">
            <div className="mission-icon">
              <Target size={32} />
            </div>
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              To move our customers&apos; freight safely and on schedule, every single time, while treating our
              drivers and partners with respect.
            </p>
            <p className="mission-text">
              From a single pallet to a full 53&apos; trailer, we handle every load as if it were our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
