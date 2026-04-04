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
          <h2>Application</h2>
          <p>
            Flange Pressure Relief Valves are mounted directly on holes provided on tank flanges. These PRV are
            designed for reliable pressure relief in hermetically sealed transformers and similar industrial tanks
            with non-corrosive liquids.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <p>
            Spring Safety Valve specially designed for flange mounting, compact, highly reliable and particularly
            useful for use in transformer & tanks containing non-corrosive liquid even in extreme outdoor condition.
            Reliable Operating Pressure from 20 to 100 KPa (0.20 to 1.00 kg/cm sq.) Positive Resealing Pressure.
            Operating Temperature: 0 to 100°C (of tank liquid). Sealing is with Nitrile Rubber Gasket. Valve Resetting
            Automatic. Suitable for repeated use. Protective Rain Guard Cap directs the Oil Spillage downwards.
            Depending upon nature of Tank Fluid we can supply with Viton Gaskets and "O" Ring. PRV at different Cracking
            Pressure (higher/lower) can be supplied as per your request.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>1"</th>
                <th>1.25"</th>
                <th>1.5"</th>
                <th>1.75"</th>
                <th>2"</th>
              </tr>
            </thead>
            <tbody>
              {flangeSpecData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.parameter}</strong></td>
                  <td>{row[1]}</td>
                  <td>{row[125]}</td>
                  <td>{row[15]}</td>
                  <td>{row[175]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Details Nomenclature</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Details Nomenclature</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              {nomenclatureTable.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.nomenclature}</td>
                  <td><strong>{row.model}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Model Code Legend</h2>
          <ul>
            <li><strong>F</strong> - Finish (N - Natural, C – Cr Plated, P - Painted)</li>
            <li><strong>M</strong> - Material of the body (A - Aluminium, B - Brass, I - Mild Steel / Cast Iron, S - Stainless Steel)</li>
            <li><strong>P</strong> - Port designation (flange version)</li>
            <li><strong>Ø</strong> - Port Diameter (mm)</li>
            <li><strong>C</strong> - Cap (Rain Guard) (P - Plastic, S - Stainless Steel)</li>
            <li><strong>R</strong> - Stainless Steel Pull Ring</li>
          </ul>
        </section>

        <section>
          <h2>Available Models</h2>
          <ul>
            {modelExamples.map((model, idx) => (
              <li key={idx}>{model}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Note</h2>
          <p>
            All models have option of availability in Natural Finish / Nickel Plated. Custom made variants are also
            available upon request.
          </p>
        </section>

        <section>
          <h2>More in this Section</h2>
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
          <p>Download catalogue and datasheet documents for this subsection.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
