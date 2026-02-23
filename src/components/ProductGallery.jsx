import React, { useState } from 'react';
import '../styles/components/ProductGallery.css';
import products from '../data/products.json';

// Keep filters in the specific order provided by the user.
const orderedFilters = [
  'Gas Monitoring System (Automat)',
  'Low/High Pressure Alarm System',
  'Oil Level Indicator',
  'Pressure Relief Valve',
  'PRV with Liquid Level Indicator',
  'Solenoid Interlock Device',
  'Tank Valve',
  'Tubular Oil Level Gauge',
  'Threaded Pressure Relief Valve',
];

// Build final filters list: include only categories that exist in products.json, keep order, prepend 'All'
const productFiltersSet = new Set(products.map(p => p.filter));
const filters = ['All', ...orderedFilters.filter(f => productFiltersSet.has(f))];

export default function ProductGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.filter === activeFilter);

  return (
    <section id="products" className="product-gallery-section container">
      <h2 className="product-gallery-title">Transformer accessories at a glance</h2>
      
      <ul className="product-gallery-filter">
        {filters.map((f) => (
          <li 
            key={f} 
            className={activeFilter === f ? 'active' : ''} 
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </li>
        ))}
      </ul>
      
      <div className="product-gallery-grid">
        {filteredProducts.map((p, i) => (
          <div className="product-gallery-item" key={i}>
            <a href={p.link}>
              <img
                src={encodeURI(p.img)}
                alt={p.title}
                onError={(e) => { e.target.onerror = null; e.target.src = encodeURI('/images/Product Images/OLI.png'); }}
              />
              <h5>{p.title}</h5>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
