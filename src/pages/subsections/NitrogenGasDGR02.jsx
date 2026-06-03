import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasDGR02() {
  const slides = getSubsectionSlides('nitrogen-gas-monitoring-system', 'dgr-02');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'DGR-02' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="dgr-02"
    >
      <article>
        <h1>DGR-02 - 2 Stage Double Body</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The DGR-02 (Dual Gas Regulator) is a specialized two-stage pressure regulation system designed for applications requiring simultaneous monitoring and control of two independent gas supply sources. Box-mounted architecture supports both single and dual-cylinder configurations, making it ideal for complex transformer systems, backup gas supply systems, or installations where equipment redundancy or multi-gas supply is critical. Dual pressure gauges provide independent monitoring of each supply line.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>DGR-02 (2 Stage Double Body)</td>
              </tr>
              <tr>
                <td><strong>Cylinder Capacity</strong></td>
                <td>Single or Double Cylinder</td>
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
                <td>Cabinet Mounting (dual-unit system)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Model supports Single cylinder or Double cylinders.</li>
            <li>This Model comes with 2 pressure Gauges for Input and Output.</li>
            <li>Improved stability via dual-stage design.</li>
            <li>Flexible installation on equipment frame or vehicle.</li>
            <li>Each channel outlet pressure adjustable separately.</li>
            <li>Integrated Safety System, High Pressure and Low Pressure Safety Valves are provided to prevent backflow of the regulated gas.</li>
          </ul>
        </section>

        <section>
          <h2>Available Model</h2>
          <ul>
            <li>With Only Active Part</li>
            <li>Cabinet Mounting with Active part and single cylinder housing</li>
            <li>Cabinet Mounting with Active part and double cylinder housing</li>
          </ul>
        </section>

        <section>
          <h2>More Nitrogen Gas Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/nitrogen-gas-monitoring-system/${item.slug}`}
                className={`subsection-chip ${item.slug === 'dgr-02' ? 'active' : ''}`}
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
