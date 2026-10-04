import { Clock, Award, Truck, Headphones, Map, Shield } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 'on-time',
      icon: <Clock size={28} />,
      title: 'On-Time Delivery',
      description: 'A proven 99% on-time record, backed by careful route planning and live tracking.',
    },
    {
      id: 'drivers',
      icon: <Award size={28} />,
      title: 'Experienced Drivers',
      description: 'CDL-certified professionals with thousands of accident-free miles behind them.',
    },
    {
      id: 'fleet',
      icon: <Truck size={28} />,
      title: 'Modern Fleet',
      description: 'Late-model tractors and trailers maintained on a strict preventive schedule.',
    },
    {
      id: 'dispatch',
      icon: <Headphones size={28} />,
      title: '24/7 Dispatch',
      description: 'A real person answers the phone day or night to update you on your load.',
    },
    {
      id: 'coverage',
      icon: <Map size={28} />,
      title: 'Nationwide Coverage',
      description: 'Service across all 48 contiguous states, from local lanes to cross-country runs.',
    },
    {
      id: 'safety',
      icon: <Shield size={28} />,
      title: 'Safety First',
      description: 'Regular inspections, full insurance and strict FMCSA compliance on every trip.',
    },
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The RoadLine Advantage</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">
            Shippers choose RoadLine Trucking for our commitment to performance, safety and transparency.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="why-us-card">
              <div className="why-us-icon">{reason.icon}</div>
              <h3 className="why-us-card-title">{reason.title}</h3>
              <p className="why-us-card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
