import { Award, Truck, MapPin, Clock } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const stats = [
    { id: 'years', icon: <Award size={30} />, value: '10+', label: 'Years Experience' },
    { id: 'trucks', icon: <Truck size={30} />, value: '50+', label: 'Trucks' },
    { id: 'states', icon: <MapPin size={30} />, value: '48', label: 'States Covered' },
    { id: 'on-time', icon: <Clock size={30} />, value: '99%', label: 'On-Time Delivery' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
