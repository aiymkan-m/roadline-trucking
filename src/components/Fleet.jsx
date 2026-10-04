import { Package, Snowflake, Layers, Truck } from 'lucide-react';
import './Fleet.css';

export default function Fleet() {
  const fleetItems = [
    {
      id: 'dry-van',
      icon: <Package size={32} />,
      title: 'Dry Van',
      tag: "53' Trailer",
      description:
        'Enclosed trailers that protect general freight such as packaged goods, electronics and retail products.',
    },
    {
      id: 'reefer',
      icon: <Snowflake size={32} />,
      title: 'Reefer',
      tag: 'Temp Controlled',
      description:
        'Refrigerated trailers with temperature monitoring for food, beverages and pharmaceuticals.',
    },
    {
      id: 'flatbed',
      icon: <Layers size={32} />,
      title: 'Flatbed',
      tag: 'Open Deck',
      description:
        'Open trailers for oversized loads like steel, lumber, machinery and construction materials.',
    },
    {
      id: 'box-truck',
      icon: <Truck size={32} />,
      title: 'Box Truck',
      tag: "26' Straight",
      description:
        'Smaller trucks for local and regional deliveries, final-mile service and tight city routes.',
    },
  ];

  return (
    <section id="fleet" className="fleet-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Equipment</span>
          <h2 className="section-title">Our Fleet</h2>
          <p className="section-description">
            The right equipment for every load, maintained to the highest standards.
          </p>
        </div>

        <div className="fleet-grid">
          {fleetItems.map((item) => (
            <div key={item.id} className="fleet-card">
              <div className="fleet-card-header">
                <div className="fleet-icon">{item.icon}</div>
                <span className="fleet-card-tag">{item.tag}</span>
              </div>
              <h3 className="fleet-card-title">{item.title}</h3>
              <p className="fleet-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
