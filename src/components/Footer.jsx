import { Truck } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="logo-icon">
                <Truck size={24} />
              </div>
              <div className="logo-text">
                <span className="brand-name light">RoadLine</span>
                <span className="brand-tag">TRUCKING</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Reliable, nationwide freight transportation and logistics solutions built on safety, experience, and speed.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#fleet">Fleet</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Full Truckload</a></li>
              <li><a href="#services">Less Than Truckload</a></li>
              <li><a href="#services">Expedited Freight</a></li>
              <li><a href="#services">Dedicated Routes</a></li>
              <li><a href="#services">Warehousing & Logistics</a></li>
              <li><a href="#services">Nationwide Delivery</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Contact Information</h4>
            <ul className="footer-contact-info">
              <li>Chicago, IL</li>
              <li>Phone: (773) 555-0100</li>
              <li>Email: dispatch@roadlinetrucking.com</li>
              <li>24/7 Dispatch Center</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} RoadLine Trucking. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
