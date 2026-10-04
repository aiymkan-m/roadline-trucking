import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Information</h2>
          <p className="section-description">
            Have questions about our lanes, terminal facilities, or freight solutions? Reach out to our logistics team anytime.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={26} />
            </div>
            <h3 className="contact-card-title">Corporate Headquarters</h3>
            <p className="contact-card-text">
              RoadLine Trucking<br />
              Chicago, IL
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={26} />
            </div>
            <h3 className="contact-card-title">Phone Number</h3>
            <p className="contact-card-text">
              <a href="tel:7735550100">(773) 555-0100</a>
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={26} />
            </div>
            <h3 className="contact-card-title">Email Address</h3>
            <p className="contact-card-text">
              <a href="mailto:dispatch@roadlinetrucking.com">dispatch@roadlinetrucking.com</a>
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Clock size={26} />
            </div>
            <h3 className="contact-card-title">Operating Hours</h3>
            <p className="contact-card-text">
              24/7 Dispatch Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
