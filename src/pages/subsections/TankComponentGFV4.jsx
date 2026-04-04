import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV4() {
  const slides = getSubsectionSlides('tank-components', 'gfv-4');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-4' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-4"
    >
      <article>
        <h1>GFV-4</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The GFV-4 is a large-capacity tank valve engineered for high-throughput gas supply operations on large transformers and industrial equipment. 
            With 1/4" threading and robust brass construction, the GFV-4 delivers enhanced flow capacity and rapid pressure cycling capabilities required 
            for major gas supply, equipment purging, and complex multi-tank operations where speed and reliability are critical.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>GFV-4</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>1/4"</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (corrosion-resistant)</td>
              </tr>
              <tr>
                <td><strong>Maximum Pressure</strong></td>
                <td>20 bar standard</td>
              </tr>
              <tr>
                <td><strong>Gas Compatibility</strong></td>
                <td>SF6, Nitrogen, Dry Air, Transformer Oil vapor</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C</td>
              </tr>
              <tr>
                <td><strong>Flow Capacity</strong></td>
                <td>Large-capacity; rapid operation capability</td>
              </tr>
              <tr>
                <td><strong>Available in</strong></td>
                <td>Both NPT and BSP thread standards</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>1/4" Large Thread:</strong> High-capacity flow for rapid operations</li>
            <li><strong>Robust Brass Construction:</strong> Corrosion-resistant, proven reliability</li>
            <li><strong>Precision Valve-Core Design:</strong> Dual-staged sealing for dependable performance</li>
            <li><strong>Fast Response:</strong> Ideal for time-critical operations</li>
            <li><strong>Dual Thread Standards:</strong> NPT and BSP compatibility</li>
            <li><strong>Field-Proven Track Record:</strong> 50,000+ operation cycles capability</li>
            <li><strong>Multi-Functional:</strong> Inflation, deflation, and gauging operations</li>
          </ul>
        </section>

        <section>
          <h2>Application & Use Cases</h2>
          <ul>
            <li>High-capacity gas supply to large transformers</li>
            <li>Rapid equipment purging and nitrogen replacement</li>
            <li>Complex multi-stage gas supply systems</li>
            <li>Industrial sealed container servicing</li>
            <li>Emergency depressurization operations</li>\n            <li>Dual-cylinder supply system primary valve</li>
          </ul>
        </section>

        <section>
          <h2>Installation & Maintenance</h2>
          <ul>
            <li>Select appropriate threaded boss on transformer tank</li>
            <li>Apply 3–4 PTFE thread seal tape layers</li>
            <li>Thread into boss by hand, then tighten with appropriate wrench (18–20 Nm)</li>
            <li>Inspect monthly for external corrosion or wear</li>
            <li>Verify plunger smooth operation with deflation testing</li>
            <li>Replace seals if seepage develops; field kits available</li>
            <li>Operating life: 50,000+ cycles typical</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <ul>
            <li>Specify thread standard: NPT or BSP</li>
            <li>Finish preference: Natural Brass or Nickel-Plated</li>
            <li>Sealing material: Nitrile (standard) or Viton</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-4' ? 'active' : ''}`}
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
