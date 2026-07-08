import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Flange Pressure Relief Valves';

const flangeSpecData = [
  {
    parameter: 'Model "P Ø"',
    1: 'P-25',
    125: 'P-32',
    15: 'P-38',
    175: 'P-40',
    2: 'P-50 / P-2'
  },
  {
    parameter: 'Passage Area (Appx.) (mm²)',
    1: '500',
    125: '800',
    15: '1000',
    175: '1500',
    2: '2000'
  },
  {
    parameter: 'Number of Holes',
    1: '2',
    125: '2',
    15: '2',
    175: '3',
    2: '4'
  },
  {
    parameter: 'Mounting Hole Diameter',
    1: '8',
    125: '8',
    15: '10',
    175: '10',
    2: '12'
  },
  {
    parameter: 'Total Length (±) 20% (Suit to Assembly)',
    1: '55',
    125: '65',
    15: '80',
    175: '90',
    2: '100'
  }
];

const nomenclatureTable = [
  {
    nomenclature: 'Basic Nomenclature',
    model: 'FMP-Ø'
  },
  {
    nomenclature: 'With Stainless Steel Pull Ring',
    model: 'FMP-ØR'
  },
  {
    nomenclature: 'With Cap (Rain Guard)',
    model: 'FMP-ØC'
  },
  {
    nomenclature: 'With Cap and Stainless-Steel Pull Ring',
    model: 'FMP-ØCR'
  }
];

const modelExamples = [
  'CP-50 / CNP-2',
  'PIP-38',
  'PIP-32',
  'PIP-25S',
  'NAP-25S',
  'CUSTOM MADE',
  'PAP-25P'
];

export default function PressureReliefFlange() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'flange');
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
      activeSubsectionSlug="flange"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            Flange Pressure Relief Valves are mounted directly on holes provided on tank flanges. These PRV are designed for reliable pressure relief in hermetically sealed transformers and similar industrial tanks with non-corrosive liquids.
          </p>
        </section>

        <section>
          <h2>Models</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>P-25</th>
                <th>P-32</th>
                <th>P-38</th>
                <th>P-40</th>
                <th>P-50 / P-2</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Port Diameter (Ø)</td><td>1"</td><td>1.25"</td><td>1.5"</td><td>1.75"</td><td>2"</td></tr>
              <tr><td>Model (P Ø)</td><td>P-25</td><td>P-32</td><td>P-38</td><td>P-40</td><td>P-50 / P-2</td></tr>
              <tr><td>Passage Area (Approx.) (mm²)</td><td>500</td><td>800</td><td>1000</td><td>1500</td><td>2000</td></tr>
              <tr><td>Number of Mounting Holes</td><td>2</td><td>2</td><td>2</td><td>3</td><td>4</td></tr>
              <tr><td>Mounting Hole Diameter (mm)</td><td>8</td><td>8</td><td>10</td><td>10</td><td>12</td></tr>
              <tr><td>Overall Length (±20%) (mm)</td><td>55</td><td>65</td><td>80</td><td>90</td><td>100</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Available Variants</h2>
          <p>Plain / With Stainless Steel Pull Ring / With Rain Guard Cap / With Rain Guard Cap & Stainless Steel Pull Ring</p>
        </section>

        <section>
          <h2>More Pressure Relief Valve Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/pressure-relief-valves/${item.slug}`}
                className={`subsection-chip ${item.slug === 'flange' ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>

          <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for this product.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>

      </article>
    </ProductPageLayout>
  );
}
