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
        <h1>TGR</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The TGR is specially designed for precise nitrogen pressure regulation in transformers and sealed tanks. Featuring Single or Double cylinders, a 3-stage regulation system, and 2 gauges, it ensures accurate monitoring and stable low-pressure control. Its robust cabinet-mounted design offers safe installation and easy maintenance. The system provides precise control even at very low pressures, enhancing transformer insulation and operational reliability. Additionally, the integrated 3-way valve enables efficient gas purging at higher pressure for conservators without air cells. This helps prevent moisture contamination, oxidation, and pressure fluctuations, ensuring extended transformer life and improved performance.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>TGR</td>
              </tr>
              <tr>
                <td><strong>Cylinder Capacity</strong></td>
                <td>Single Cylinder or Double Cylinder</td>
              </tr>
              <tr>
                <td><strong>Regulation Stages</strong></td>
                <td>3-stage regulation</td>
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
            <li>Integrated 3-way valve for gas purging applications.</li>
            <li>Model supports Single cylinder or Double cylinders.</li>
            <li>Designed for industrial and power distribution applications.</li>
            <li>Enhances transformer safety, reliability, and service life.</li>
            <li>This Model comes with 2 pressure Gauges for detailed Input and Output.</li>
            <li>Safety valves protect against overpressure.</li>
            <li>Ensures moisture-free transformer operation.</li>
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
