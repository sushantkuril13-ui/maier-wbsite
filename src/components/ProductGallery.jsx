import React, { useState } from 'react';
import '../styles/components/ProductGallery.css';

const filters = [
  'All',
  'Radiator Valves',
  'Protection Devices',
  'Oil Level Indicators',
  'Dehydrating Breathers',
  'Pressure Relief Devices',
  'Tank Components',
  'Tap Changers',
];

const products = [
  { title: 'Radiator Valve Type A', img: '/images/radiator-valve-42560-type-a-3.png', link: '/welding-neck-flange', filter: 'Radiator Valves' },
  { title: 'Radiator Valve Type B', img: '/images/radiator-valve-42560-type-b-3.png', link: '/wafer-type-flange', filter: 'Radiator Valves' },
  { title: 'Radiator Valve Type A OR', img: '/images/radiator-valve-42560-type-a-or-2.png', link: '/welding-neck-flange', filter: 'Radiator Valves' },
  { title: 'Radiator Valve Type B OR', img: '/images/radiator-valve-42560-type-b-or.png', link: '/wafer-type-flange', filter: 'Radiator Valves' },
  { title: 'Radiator Valve B 76 / 80 / 100 OR', img: '/images/radiator-valve-aluminium-2.png', link: '/aluminium-radiator-valves', filter: 'Radiator Valves' },
  { title: 'Radiator Valve N1610', img: '/images/radiator-valve-N-1610.png', link: '/radiator-valve-n1610', filter: 'Radiator Valves' },
  { title: 'Buchholz Relay MBP', img: '/images/MBP-buchholz-relais.png', link: '/buchholz-relay-mbp', filter: 'Protection Devices' },
  { title: 'Protection Relay MCHD', img: '/images/MCHD-transformer-protection-relay-front.png', link: '/transformer-protection-relay-mchd', filter: 'Protection Devices' },
  { title: 'Bimetal Thermometer MBT', img: '/images/MBT-bimetall-thermometer.png', link: '/bimetal-thermometer-mbt', filter: 'Protection Devices' },
  { title: 'Dehydrating Breather Type L', img: '/images/luftentfeuchter-Typ-L.png', link: '/dehydrating-breather-type-l', filter: 'Dehydrating Breathers' },
  { title: 'Dehydrating Breather Type A / B / C', img: '/images/luftentfeuchter-DIN-42567-a.png', link: '/dehydrating-breather-type-a-b-c', filter: 'Dehydrating Breathers' },
  { title: 'Oil level indicator 3 01', img: '/images/oil-level-indicator-g1-3-01-min-max.marking.png', link: '/oil-level-indicator-3-01', filter: 'Oil Level Indicators' },
  { title: 'Oil level indicator 1 225', img: '/images/vertical-magnetic-oil-level-indicator.png', link: '/magnetic-oil-level-indicator', filter: 'Oil Level Indicators' },
  { title: 'Filling nozzle DIN 42253', img: '/images/entluefter-und-fuellstutzen-din-42553.png', link: '/de-aerator-and-filling-nozzle', filter: 'Tank Components' },
  { title: 'Locking Pieces DIN 42558', img: '/images/oelablass-und-entluefter-din-42558.png', link: '/tank-components', filter: 'Tank Components' },
  { title: 'Oil drain device Type C2', img: '/images/42551-A-neue-version-2.png', link: '/oil-drain-device-42551', filter: 'Tank Components' },
  { title: 'Thermometer pocket Typ A1', img: '/images/thermometertasche-din-42554.png', link: '/thermometerpocket-42554', filter: 'Tank Components' },
  { title: 'Transformer wheels DIN 42561', img: '/images/transformatoren-rollen-din-42561.png', link: '/transformer-wheels-42561', filter: 'Tank Components' },
  { title: 'Pressure relief device PRD', img: '/images/Druckentlastungsventil-prd-1-zoll-5.png', link: '/pressure-relief-device-prd', filter: 'Pressure Relief Devices' },
  { title: 'Pressure relief device MPRV', img: '/images/Druckentlastungsventil-mprv.png', link: '/pressure-relief-device-mprv', filter: 'Pressure Relief Devices' },
  { title: 'Oil level indicator DIN 42552 B', img: '/images/oelstandsanzeiger-din-42552.png', link: '/oil-level-indicators', filter: 'Oil Level Indicators' },
  { title: 'Oil level indicator MOLC', img: '/images/magnetic-oil-level-indicator.png', link: '/oil-level-indicator-42569', filter: 'Oil Level Indicators' },
  { title: 'Tap Changer Type MHR', img: '/images/Tap-changer-MHR.png', link: '/tap-changers', filter: 'Tap Changers' },
  { title: 'Tap Changer Type MHM', img: '/images/Tap-changer-MHM.png', link: '/tap-changers', filter: 'Tap Changers' },
  { title: 'Tap Changer Type MHZ', img: '/images/Tap-changer-MHZ.png', link: '/tap-changers', filter: 'Tap Changers' },
  { title: 'Tap Changer Type MHF II', img: '/images/Tap-changer-MHF-II.png', link: '/tap-changers', filter: 'Tap Changers' },
  { title: 'Tap Changer Type MHF III', img: '/images/Tap-changer-MHF-III.png', link: '/tap-changers', filter: 'Tap Changers' },
  { title: 'Tap Changer Type MHF IV', img: '/images/Tap-changer-MHF-IV.png', link: '/tap-changers', filter: 'Tap Changers' },
  { title: 'Protection Relay MHPR', img: '/images/hermetic-protection-relay-MHPR.png', link: '/hermetic-protection-relay-mhpr', filter: 'Protection Devices' },
  { title: 'Dehydrating Breather 0.15 kg', img: '/images/luftentfeuchter-015-kg.png', link: '/dehydrating-breathers', filter: 'Dehydrating Breathers' },
];

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
              <img src={p.img} alt={p.title} />
              <h5>{p.title}</h5>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
