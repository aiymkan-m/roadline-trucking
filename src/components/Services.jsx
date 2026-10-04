import { Truck, PackageCheck, Zap, Route, Warehouse, Map } from 'lucide-react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: 'ftl',
      icon: <Truck size={36} />,
      title: 'Full Truckload',
      description:
        'Dedicated trailer capacity for high-volume freight with direct point-to-point transit and no extra stops.',
    },
    {
      id: 'ltl',
      icon: <PackageCheck size={36} />,
      title: 'Less Than Truckload',
      description:
        'Cost-effective shipping for smaller loads. Pay only for the trailer space your freight actually uses.',
    },
    {
      id: 'expedited',
      icon: <Zap size={36} />,
      title: 'Expedited Freight',
      description:
        'Time-critical delivery with team drivers for non-stop transit when your shipment cannot wait.',
    },
    {
      id: 'dedicated',
      icon: <Route size={36} />,
      title: 'Dedicated Routes',
      description:
        'Assigned trucks and drivers running your regular lanes on a consistent, predictable schedule.',
    },
    {
      id: 'warehousing',
      icon: <Warehouse size={36} />,
      title: 'Warehousing & Logistics',
      description:
        'Short-term storage, cross-docking and distribution support to keep your supply chain moving.',
    },
    {
      id: 'nationwide',
      icon: <Map size={36} />,
      title: 'Nationwide Delivery',
      description:
        'Coast-to-coast coverage across all 48 contiguous states with real-time shipment updates.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What We Do</span>
          <h2 className="section-title">Our Transportation Services</h2>
          <p className="section-description">
            Flexible freight solutions built around safety, predictability and efficiency in your supply chain.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
