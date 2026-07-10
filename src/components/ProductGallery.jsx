import React, { useState } from 'react';
import '../styles/components/ProductGallery.css';
import products from '../data/products.json';

// Keep filters in the specific order provided by the user.
const orderedFilters = [
  'Pressure Relief Valves',
  'Oil Level Indicator',
  'Nitrogen Gas Monitoring System',
  'Pressure Relief Valves with Oil Level Indicator',
  'Low/High Pressure Alarm System',
  'Tank Components',
  'Solenoid Interlock Device',
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
      <h2 className="product-gallery-title">Transformer Accessories at a Glance</h2>
      
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
            <a href={p.link} target="_blank" rel="noopener noreferrer">
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
