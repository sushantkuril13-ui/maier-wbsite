import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasTGR02() {
  const slides = getSubsectionSlides('nitrogen-gas-monitoring-system', 'tgr-02');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'TGR-02' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="tgr-02"
    >
      <article>
        <h1>TGR-02 - Tank-Top Dual Gas Regulator (2 Cylinders)</h1>

        <section>
          <h2>Overview</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>TGR-02</td>
              </tr>
              <tr>
                <td><strong>No. of Cylinders</strong></td>
                <td>2</td>
              </tr>
              <tr>
                <td><strong>No. of Stages</strong></td>
                <td>2</td>
              </tr>
              <tr>
                <td><strong>No. of Gauges</strong></td>
                <td>3</td>
              </tr>
              <tr>
                <td><strong>Mounting Type</strong></td>
                <td>Tank Top</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            Tank-top mounted dual gas regulator specifically designed for systems with 2 high-pressure cylinders.
            Features 3 pressure gauges for monitoring at key points. Ideal for installations where space is constrained
            and top-mounting of regulators directly on the storage tank is preferred. Provides reliable positive pressure
            maintenance with dual-sphere configuration for redundancy and safety.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Gas regulator maintains positive pressure in the connected tank and automatically allows additional gas
            flow from high-pressure cylinders when pressure drops below set point. The dual-stage regulation system
            improves flow stability and efficiency. Tank-top mounting configuration reduces installation space requirements
            while maintaining ease of access and maintenance. The regulator connects directly to high-pressure cylinders
            and distributes gas to the tank at controlled, safe pressure levels.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Tank-Top mounting for space-efficient installations</li>
            <li>Dual high-pressure cylinder support (2 cylinders)</li>
            <li>2-stage regulation for improved efficiency</li>
            <li>3 pressure gauges for essential pressure monitoring</li>
            <li>Automatic pressure maintenance from 0.05 to 0.50 kg/cm²</li>
            <li>Redundant safety features via dual-sphere configuration</li>
            <li>Safety valves at high-pressure (H.P.) and low-pressure (L.P.) stages</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Pressure Range:</strong> 0.05 to 0.50 kg/cm² (adjustable)</li>
            <li><strong>Regulation Type:</strong> Double-stage</li>
            <li><strong>Number of Gauges:</strong> 3 pressure gauges</li>
            <li><strong>Gauge Locations:</strong> High-pressure and low-pressure monitoring points</li>
            <li><strong>Inlet Pressure:</strong> From high-pressure gas cylinders</li>
            <li><strong>Mounting Style:</strong> Direct tank-top installation</li>
            <li><strong>Safety Protection:</strong> High-pressure and low-pressure safety valves</li>
            <li><strong>Cylinder Configuration:</strong> Dual-sphere setup with 2 cylinders</li>
          </ul>
        </section>

        <section>
          <h2>Advantages</h2>
          <ul>
            <li><strong>Space Efficiency:</strong> Top-mounted design minimizes floor space usage</li>
            <li><strong>Easy Access:</strong> Convenient positioning for monitoring and maintenance</li>
            <li><strong>Redundancy:</strong> Dual cylinder configuration provides backup supply</li>
            <li><strong>Reliability:</strong> Proven design for industrial nitrogen gas systems</li>
            <li><strong>Safety:</strong> Dual safety valves protect system integrity</li>
          </ul>
        </section>

        <section>
          <h2>More Nitrogen Gas Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/nitrogen-gas-monitoring-system/${item.slug}`}
                className={`subsection-chip ${item.slug === 'tgr-02' ? 'active' : ''}`}
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
