import React from 'react';
import '../styles/components/ProductSidebar.css';

const productCategories = [
  {
    title: 'Gas Monitoring System (Automat)',
    icon: '/images/Product Images/Gas Monitoring.png',
    link: '/gas-monitoring-system',
  },
  {
    title: 'Low/High Pressure Alarm System',
    icon: '/images/Product Images/Pressure Alarm.png',
    link: '/low-high-pressure-alarm-system',
  },
  {
    title: 'Oil Level Indicator',
    icon: 'images/Icons-oelstandsanzeiger.png',
    link: '/oil-level-indicators',
  },
  {
    title: 'Pressure Relief Valve',
    icon: 'images/Icons-druckentlastungsventile.png',
    link: '/pressure-relief-valve',
  },
  {
    title: 'PRV with Liquid Level Indicator',
    icon: '/images/Product Images/PRV-LLI.png',
    link: '/prv-with-liquid-level-indicator',
  },
  {
    title: 'Solenoid Interlock Device',
    icon: '/images/Product Images/Solenoid Interlock.png',
    link: '/solenoid-interlock-device',
  },
  {
    title: 'Tank Valve',
    icon: 'images/Icon-armaturen-kesselbau.png',
    link: '/tank-valve',
  },
  {
    title: 'Tubular Oil Level Gauge',
    icon: '/images/Product Images/Tubular Gauge.png',
    link: '/tubular-oil-level-gauge',
  },
  {
    title: 'Threaded Pressure Relief Valve',
    icon: '/images/Product Images/Threaded PRV.png',
    link: '/threaded-pressure-relief-valve',
  },
];

export default function ProductSidebar({ activeCategory }) {
  return (
    <aside className="product-sidebar">
      <div className="sidebar-panel">
        <ul className="sidebar-nav">
          {productCategories.map((cat) => (
            <li 
              key={cat.title} 
              className={`sidebar-nav-item ${activeCategory === cat.title ? 'active' : ''}`}
            >
              <a href={cat.link} className="sidebar-nav-link">
                {cat.icon && <img src={cat.icon} alt={cat.title} className="sidebar-icon" />}
                <span className="sidebar-title">{cat.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
