import React from 'react';
import '../styles/components/ProductSidebar.css';

export const productCategories = [
  {
    title: 'Gas Monitoring System (Automat)',
    icon: 'images/icon-gas-monitoring-system.png',
    link: '/gas-monitoring-system',
  },
  {
    title: 'Low/High Pressure Alarm System',
    icon: 'images/icon-low-high-pressure.png',
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
    icon: 'images/icon-prv-eith-level-indicator.png',
    link: '/prv-with-liquid-level-indicator',
  },
  {
    title: 'Solenoid Interlock Device',
    icon: 'images/icon-solenooid-interlock-device.png',
    link: '/solenoid-interlock-device',
  },
  {
    title: 'Tank Valve',
    icon: 'images/Icon-armaturen-kesselbau.png',
    link: '/tank-valve',
  },
  {
    title: 'Tubular Oil Level Gauge',
    icon: 'images/icon-tubular-oil-level-gauge.png',
    link: '/tubular-oil-level-gauge',
  },
  {
    title: 'Threaded Pressure Relief Valve',
    icon: 'images/icon-threaded-prv.png',
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
