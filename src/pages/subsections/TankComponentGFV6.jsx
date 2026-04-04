import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV6() {
  const slides = getSubsectionSlides('tank-components', 'gfv-6');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-6' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-6"
    >
      <article>
        <h1>GFV-6</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The GFV-6 represents the premium large-capacity offering in the GFV tank valve series, engineered for extreme-duty applications 
            where maximum flow capacity and reliability are paramount. With 1/2" thread size and industrial-grade construction, the GFV-6 delivers 
            unrivaled performance for massive transformer installations, emergency response systems, and specialized OEM applications requiring 
            the highest level of performance and durability.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>GFV-6 (Premium Large-Capacity)</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>1/2"</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Carbon Steel / Stainless Steel (industrial grade)</td>
              </tr>
              <tr>
                <td><strong>Maximum Pressure</strong></td>
                <td>50 bar (extreme-duty capability)</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C (extreme environment tested)</td>
              </tr>
              <tr>
                <td><strong>Gas Compatibility</strong></td>
                <td>SF6, Nitrogen, Dry Air, CF3I, specialty gases</td>
              </tr>
              <tr>
                <td><strong>Flow Capacity</strong></td>
                <td>Maximum throughput; industrial-scale operations</td>
              </tr>
              <tr>
                <td><strong>Available in</strong></td>
                <td>NPT, BSP, ISO; custom specifications available</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>1/2" Ultra-Large Thread:</strong> Peak capacity for industrial applications</li>
            <li><strong>Industrial-Grade Materials:</strong> Carbon Steel or Stainless Steel construction</li>
            <li><strong>Extreme-Duty Rating:</strong> 50 bar operating pressure; tested in harshest conditions</li>
            <li><strong>Maximum Flow Capacity:</strong> Serves largest transformer installations</li>
            <li><strong>Specialty Gas Compatible:</strong> SF6, CF3I, and advanced dielectrics</li>
            <li><strong>Multiple Thread Standards:</strong> NPT, BSP, ISO compatibility</li>
            <li><strong>Extended Service Life:</strong> 200,000+ cycle capability with scheduled maintenance</li>
            <li><strong>Emergency Response Certified:</strong> Used in critical infrastructure systems</li>
          </ul>
        </section>

        <section>
          <h2>Application & Use Cases</h2>
          <ul>
            <li>Massive utility transformer gas supply systems (500+ MVA)</li>
            <li>Emergency rapid depressurization and evacuation systems</li>
            <li>Specialized OEM equipment with extreme performance requirements</li>
            <li>Multi-stage high-volume nitrogen purging operations</li>
            <li>Critical infrastructure transformers with redundancy requirements</li>
            <li>Specialty gas applications (SF6 conversion, recovery systems)</li>
            <li>Industrial-scale equipment testing and commissioning</li>
          </ul>
        </section>

        <section>
          <h2>Industrial Installation & Commissioning</h2>
          <ol>
            <li>Verify mounting boss rated for 50 bar operating pressure</li>
            <li>Prepare connection with 5–6 PTFE thread seal tape layers for extreme pressure</li>
            <li>Thread by hand, then use calibrated torque wrench (25–30 Nm)</li>
            <li>Perform pressure test at 1.5× operating pressure before service</li>
            <li>Verify immediate plunger response with carefully controlled deflation</li>
            <li>Document baseline flow rates for performance trending</li>
            <li>Install pressure monitoring gauge on outlet for system protection</li>
          </ol>
        </section>

        <section>
          <h2>Professional Maintenance & Support</h2>
          <ul>
            <li>Inspect twice weekly during active high-pressure operations</li>
            <li>Monitor response time trending over time; contact service if degradation observed</li>
            <li>Replace seals every 6–12 months depending on duty cycle; premium kits available</li>
            <li>Annual professional servicing recommended for critical applications</li>
            <li>24/7 technical support available for emergency operations</li>
            <li>Spare valve assemblies recommended for mission-critical systems</li>
            <li>Operating life: 200,000+ cycles with professional maintenance program</li>
          </ul>
        </section>

        <section>
          <h2>Ordering & Procurement</h2>
          <ul>
            <li>Thread standard: NPT, BSP, ISO (specify preferred)</li>
            <li>Material: Carbon Steel (standard) or Stainless Steel (corrosion-prone environments)</li>
            <li>Pressure rating: 50 bar (standard) or verify custom requirements</li>
            <li>Gas type: Specify standard or specialty gas supply requirements</li>
            <li>Sealing materials: Premium Viton or custom seals for specialty gases</li>
            <li>Lead time and volume discounts for utility/OEM orders</li>
            <li>Professional commissioning and training services available</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-6' ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for tank components.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
