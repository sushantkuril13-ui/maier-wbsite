import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasSDGR02() {
  const slides = getSubsectionSlides('nitrogen-gas-monitoring-system', 'sdgr-02');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'SDGR-02' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="sdgr-02"
    >
      <article>
        <h1>SDGR-02</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The SDGR-02 is a dual-stage pressure regulation system engineered for maintaining constant inert gas or dry nitrogen atmosphere in sealed transformer tanks. Featuring cabinet mounting flexibility and support for single or double cylinders, the SDGR-02 combines reliable two-stage regulation with integrated safety protection to prevent atmospheric air and moisture contamination during transformer storage, transportation, or commissioning phases. The dual-gauge system provides real-time visibility into both inlet and outlet pressures.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>SDGR-02</td>
              </tr>
              <tr>
                <td><strong>Cylinder Capacity</strong></td>
                <td>Single Cylinder or Double Cylinder</td>
              </tr>
              <tr>
                <td><strong>Regulation Stages</strong></td>
                <td>2-stage regulation</td>
              </tr>
              <tr>
                <td><strong>Pressure Gauge Count</strong></td>
                <td>2 gauges</td>
              </tr>
              <tr>
                <td><strong>Mounting Configuration</strong></td>
                <td>Cabinet Mounting</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Model supports Single cylinder or Double cylinders.</li>
            <li>This Model comes with 2 pressure Gauges for detailed Input and Output.</li>
            <li>Improved stability via dual-stage design.</li>
            <li>Flexible installation on equipment frame or vehicle.</li>
            <li>Each channel outlet pressure adjustable separately.</li>
            <li>Safety valves protect against overpressure.</li>
            <li>Superior pressure stability and flow control compared to single-stage alternatives.</li>
          </ul>
        </section>

        <section>
          <h2>More Nitrogen Gas Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/nitrogen-gas-monitoring-system/${item.slug}`}
                className={`subsection-chip ${item.slug === 'sdgr-02' ? 'active' : ''}`}
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
