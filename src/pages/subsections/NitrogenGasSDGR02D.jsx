import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasSDGR02D() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'SDGR-02D' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="sdgr-02d"
    >
      <article>
        <h1>SDGR-02D - Direct Single Cylinder Mounting</h1>

        <section>
          <h2>Overview</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>SDGR-02D</td>
              </tr>
              <tr>
                <td><strong>No. of Cylinders</strong></td>
                <td>1</td>
              </tr>
              <tr>
                <td><strong>No. of Stages</strong></td>
                <td>2</td>
              </tr>
              <tr>
                <td><strong>No. of Gauges</strong></td>
                <td>2</td>
              </tr>
              <tr>
                <td><strong>Mounting Type</strong></td>
                <td>Direct Single Cylinder Mounting</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            Direct Single Cylinder Mounting variant of SDGR-02. Streamlined design for single-cylinder installations
            where space is limited or direct mounting to the cylinder is preferred. Maintains all the efficiency benefits
            of the standard model in a more compact configuration.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Gas regulator maintains positive pressure in the connected tank and automatically allows additional gas
            flow from high-pressure cylinder when pressure drops below set point. Double-stage regulation improves
            flow stability and efficiency. The system includes safety valves at high-pressure (H.P.) and low-pressure
            (L.P.) stages to prevent unwanted pressure buildup.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Direct mounting directly to single high-pressure cylinder</li>
            <li>Streamlined design for space-constrained installations</li>
            <li>2-stage regulation for improved efficiency</li>
            <li>2 pressure gauges for inlet and outlet monitoring</li>
            <li>Automatic pressure maintenance from 0.05 to 0.50 kg/cm²</li>
            <li>Safety valves protect against overpressure</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Pressure Range:</strong> 0.05 to 0.50 kg/cm² (adjustable)</li>
            <li><strong>Regulation Type:</strong> Double-stage</li>
            <li><strong>Gauge Type:</strong> Pressure gauges for real-time monitoring</li>
            <li><strong>Cylinder Configuration:</strong> Single cylinder direct mount</li>
            <li><strong>Safety Protection:</strong> High-pressure and low-pressure safety valves</li>
          </ul>
        </section>

        <section>
          <h2>More Nitrogen Gas Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/nitrogen-gas-monitoring-system/${item.slug}`}
                className={`subsection-chip ${item.slug === 'sdgr-02d' ? 'active' : ''}`}
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
