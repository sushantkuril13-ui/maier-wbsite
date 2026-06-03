import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasDGR05() {
  const slides = getSubsectionSlides('nitrogen-gas-monitoring-system', 'dgr-05');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'DGR-05' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="dgr-05"
    >
      <article>
        <h1>DGR-05 - 2 Stage Double Body with 5 Gauges</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Nitrogen Gas Monitoring System Model DGR-05 is designed for efficient pressure regulation and monitoring in hermetically sealed transformers. Equipped with 1 or 2 cylinders, a 2-stage regulation system, and 5 precision gauges, it ensures accurate nitrogen pressure control for enhanced transformer safety and performance. The Cabinet-mounted design offers compact installation, durability, and easy maintenance. This system helps prevent moisture ingress, oxidation, and pressure fluctuations inside the transformer tank, thereby improving insulation efficiency, extending transformer life, and ensuring reliable operation under varying environmental and load conditions. Ideal for industrial and power distribution transformer applications.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>DGR-05 (2 Stage Double Body)</td>
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
                <td>5 gauges</td>
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
            <li>This Model comes with 5 pressure Gauges for detailed Input and Output.</li>
            <li>Improved stability via dual-stage design.</li>
            <li>Flexible installation on equipment frame or vehicle.</li>
            <li>Each channel outlet pressure adjustable separately.</li>
            <li>Integrated Safety System, High Pressure and Low Pressure Safety Valves are provided to prevent backflow of the regulated gas.</li>
            <li>A middle valve is provided so that whenever needed a isolation of transformer tank and main tank.</li>
            <li>Safety valves protect against overpressure.</li>
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
