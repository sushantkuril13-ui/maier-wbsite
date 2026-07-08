import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Threaded Pressure Relief Valves';

const smallSizeTableData = [
  {
    parameter: 'Thread Nomenclature (Ø)',
    col2: '2',
    col3: '3',
    col4: '4'
  },
  {
    parameter: 'Size of Mounting Thread',
    col2: '',
    col3: '',
    col4: ''
  },
  {
    parameter: 'British (B/N)',
    col2: '1/4"',
    col3: '3/8"',
    col4: '1/2"'
  },
  {
    parameter: 'Metric',
    col2: 'M12',
    col3: 'M16',
    col4: 'M20'
  },
  {
    parameter: 'Old Model',
    col2: 'TS-04',
    col3: 'TS-03',
    col4: 'TS-04'
  },
  {
    parameter: 'Passage Area (Appx.) (mm²)',
    col2: '30',
    col3: '70',
    col4: '125'
  },
  {
    parameter: 'Body (A/F) in mm "B" (B.S.P. Thread)',
    col2: '18',
    col3: '22',
    col4: '30'
  },
  {
    parameter: 'Body (A/F) in mm "N" (N.P.T. Thread)',
    col2: '16',
    col3: '18',
    col4: '24'
  },
  {
    parameter: 'Body (A/F) in mm "M" (Metric Thread)',
    col2: '18',
    col3: '24',
    col4: '30'
  },
  {
    parameter: 'Total Length (±) 10 mm',
    col2: '40',
    col3: '45',
    col4: '55'
  }
];

const smallSizeModelTable = [
  {
    nomenclature: 'Plain',
    model: 'BTØ',
    col14bsp: 'BB2',
    col38bsp: ''
  },
  {
    nomenclature: 'With Stainless Steel Pull Ring',
    model: 'BTØR',
    col14bsp: 'BN2R',
    col38bsp: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard)',
    model: 'BTØC',
    col14bsp: 'BB2P',
    col38bsp: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard) and Pull Ring',
    model: 'BTØCR',
    col14bsp: '',
    col38bsp: 'BB3SR'
  },
  {
    nomenclature: 'With Cap (Rain Guard) Riveted / Screwed',
    model: 'BTØCS',
    col14bsp: 'BB2SS',
    col38bsp: ''
  },
  {
    nomenclature: 'With Visual Indicator (Flag)',
    model: 'BTØF',
    col14bsp: '',
    col38bsp: 'BB3F'
  }
];

const mediumSizeTableData = [
  {
    parameter: 'Thread Nomenclature (Ø)',
    col4: '4',
    col6: '6',
    col8: '8',
    col10: '10'
  },
  {
    parameter: 'Size of Mounting Thread',
    col4: '',
    col6: '',
    col8: '',
    col10: ''
  },
  {
    parameter: 'British (B/N)',
    col4: '1/2"',
    col6: '3/4"',
    col8: '1"',
    col10: '1¼"'
  },
  {
    parameter: 'Metric',
    col4: 'NA',
    col6: 'M26',
    col8: 'M36',
    col10: 'M42'
  },
  {
    parameter: 'Old Model',
    col4: 'T-05',
    col6: 'T-06',
    col8: 'G-1',
    col10: 'G1.25'
  },
  {
    parameter: 'Passage Area (Appx.) (mm²)',
    col4: '125',
    col6: '250',
    col8: '400',
    col10: '800'
  },
  {
    parameter: 'Body (A/F) in mm "B" (B.S.P. Thread)',
    col4: '30',
    col6: '36',
    col8: '40',
    col10: '46'
  },
  {
    parameter: 'Body (A/F) in mm "N" (N.P.T. Thread)',
    col4: '24',
    col6: '30',
    col8: '36',
    col10: '40'
  },
  {
    parameter: 'Body (A/F) in mm "M" (Metric Thread)',
    col4: '30',
    col6: '36',
    col8: '45',
    col10: '56'
  },
  {
    parameter: 'Total Length (±) 10 mm',
    col4: '55',
    col6: '55',
    col8: '55',
    col10: '70'
  }
];

const mediumSizeModelTable = [
  {
    nomenclature: 'Plain',
    model: '#TØ',
    col12: '',
    col34: '',
    col1: 'SB8'
  },
  {
    nomenclature: 'With Stainless Steel Pull Ring',
    model: '#TØR',
    col12: '',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard)',
    model: '#TØC',
    col12: '',
    col34: '',
    col1: 'BB8P / AB8P'
  },
  {
    nomenclature: 'With Cap (Rain Guard) and Pull Ring',
    model: '#TØCR',
    col12: '',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard) Riveted / Screwed',
    model: '#TØCS',
    col12: 'SB4SS',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Visual Indicator (Flag)',
    model: '#TØF',
    col12: '',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Oil Collection Bend',
    model: '#TØO',
    col12: '',
    col34: 'BB6O',
    col1: ''
  }
];

export default function PressureReliefThreaded() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'threaded');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: subsectionTitle }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valves"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves"
      activeSubsectionSlug="threaded"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Pressure Relief Valve (PRV) is a protective safety device designed for use in transformers,
            pressure tanks, and pressurized pipelines in both indoor and outdoor environments. Unlike conventional
            explosion vents, which are intended for one-time operation, the PRV is engineered for repeated use,
            ensuring continuous and reliable protection against excessive pressure build-up. Its compact design,
            high reliability, and robust construction make it especially suitable for On-Load Tap Changers (OLTCs),
            transformers, and other equipment or tanks containing non-corrosive liquids.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Spring Safety Valve completely made of Brass /Aluminium, compact, highly reliable and particularly useful for use in transformer & tanks containing non corrosive liquid even in extreme outdoor condition</li>
            <li>Reliable Operating Pressure from 20 to 100 KPa. (0.20 to 1.00 kg/cm sq.)</li>
            <li>Positive Resealing Pressure.</li>
            <li>Operating Temperature: 0 to 100° C (of tank liquid).</li>
            <li>Sealing is with Nitrile/Viton Rubber Gasket.</li>
            <li>Valve Resetting Automatic. Suitable for repeated use.</li>
            <li>Protective Rain Guard Cap directs the Oil Spillage downwards.</li>
            <li>Flat Mounting Gasket can be provided if required.</li>
            <li>Depending upon nature of Tank Fluid we can supply with Viton Gaskets and “O” Ring.</li>
            <li>PRV at different Cracking Pressure (higher/lower) can be supplied as per your request.</li>
          </ul>
        </section>

        <section>
          <h2>Option 1</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Options / Variants</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Material</td><td>Aluminium, Brass, Stainless Steel</td></tr>
              <tr><td>Finish</td><td>Natural, Painted, Nickel Plated</td></tr>
              <tr><td>Thread Type</td><td>BSP, NPT, Metric</td></tr>
              <tr><td>Thread Size</td><td>1/4", 3/8", 1/2", 3/4", 1", 1.5", 2"</td></tr>
              <tr><td>Model</td><td>1. Plain<br />2. With Pull Ring<br />3. With SS Cap and Screw<br />4. With SS Cap and Rivet<br />5. With Pull Ring and Plastic Cap<br />6. With Pull Ring and SS Cap<br />7. With Flag Indicator</td></tr>
            </tbody>
          </table>
        </section>
      </article>
    </ProductPageLayout>
  );
}
