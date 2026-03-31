import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasDGR05() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'DGR-05' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="dgr-05"
    >
      <article>
        <h1>DGR-05 - Advanced Dual Gas Regulator with 5 Gauges</h1>

        <section>
          <h2>Overview</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>DGR-05</td>
              </tr>
              <tr>
                <td><strong>No. of Cylinders</strong></td>
                <td>1 or 2</td>
              </tr>
              <tr>
                <td><strong>No. of Stages</strong></td>
                <td>2</td>
              </tr>
              <tr>
                <td><strong>No. of Gauges</strong></td>
                <td>5</td>
              </tr>
              <tr>
                <td><strong>Mounting Type</strong></td>
                <td>Box Mounting</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            Advanced Dual Gas Regulator featuring 5 pressure gauges. Allows individual cylinder pressure visualization
            and more granular system monitoring. Ideal for complex installations or laboratory environments where
            detailed pressure data is required. Box mounting configuration suitable for both single and dual cylinder
            setups.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Gas regulator maintains positive pressure in the connected tank and automatically allows additional gas
            flow from high-pressure cylinder when pressure drops below set point. Double-stage regulation improves
            flow stability and efficiency. The system includes safety valves at high-pressure (H.P.) and low-pressure
            (L.P.) stages to prevent unwanted pressure buildup. Five gauges provide comprehensive pressure monitoring
            at multiple points in the system.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Box Mounting configuration for flexible installation</li>
            <li>Supports 1 or 2 high-pressure cylinders</li>
            <li>2-stage regulation for improved efficiency</li>
            <li>5 pressure gauges for detailed system monitoring</li>
            <li>Individual cylinder pressure visualization capability</li>
            <li>Automatic pressure maintenance from 0.05 to 0.50 kg/cm²</li>
            <li>Safety valves protect against overpressure</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Pressure Range:</strong> 0.05 to 0.50 kg/cm² (adjustable)</li>
            <li><strong>Regulation Type:</strong> Double-stage</li>
            <li><strong>Gauge Type:</strong> 5 pressure gauges for comprehensive monitoring</li>
            <li><strong>Monitoring capability:</strong> Individual cylinder pressure visualization</li>
            <li><strong>Inlet Pressure:</strong> From standard high-pressure gas cylinders</li>
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
                className={`subsection-chip ${item.slug === 'dgr-05' ? 'active' : ''}`}
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
