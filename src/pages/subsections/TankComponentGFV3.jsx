import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV3() {
  const slides = getSubsectionSlides('tank-components', 'gfv-3');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-3' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-3"
    >
      <article>
        <h1>GFV-3</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The GFV-3 is a medium-capacity tank valve engineered for transformer applications requiring reliable fast-response inflation, deflation, 
            and gauging operations. Featuring proven valve-core technology with precision engineering, the GFV-3 supports standard pressure range operations 
            with excellent throughput capacity, making it ideal for medium to large transformers and complex gas supply systems where rapid, repeatable operations are required.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>GFV-3</td>
              </tr>
              <tr>
                <td><strong>Valve Type</strong></td>
                <td>Medium-capacity tank valve</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (corrosion-resistant) or specifications per order</td>
              </tr>
              <tr>
                <td><strong>Operating Pressure Range</strong></td>
                <td>Standard industrial range; consult for specifics</td>
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
                <td>Medium-capacity for standard industrial applications</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Proven Valve-Core Technology:</strong> Precision-engineered design ensures reliable repeated operations</li>
            <li><strong>Medium Throughput Capacity:</strong> Balanced flow rate for standard transformer operations</li>
            <li><strong>Fast Response:</strong> Rapid inflation/deflation for time-efficient servicing</li>
            <li><strong>Reliable Sealing:</strong> Maintains hermetic integrity across operating temperature range</li>
            <li><strong>Compact Design:</strong> Efficient space utilization on transformer tank</li>
            <li><strong>Universal Compatibility:</strong> Works with standard industrial gas service tools</li>
            <li><strong>Repeated Operation Capability:</strong> Field-proven performance over 50,000+ cycles</li>
          </ul>
        </section>

        <section>
          <h2>Core Components & Design</h2>
          <ul>
            <li><strong>Precision Plug:</strong> Single-piece construction enabling full gas flow for efficient operations</li>
            <li><strong>Teflon Sealing Sleeve:</strong> Ultra-low-friction design with self-swiveling action</li>
            <li><strong>Optimized Ferrule:</strong> Scientific design for balanced gas flow and plunger cleaning</li>
            <li><strong>Spring Assembly:</strong> Corrosion-resistant coil spring ensures proper sealing tension</li>
            <li><strong>Plunger Pin:</strong> Dual-seated design for positive mechanical location</li>
          </ul>
        </section>

        <section>
          <h2>Application & Use Cases</h2>
          <ul>
            <li>Inflation and deflation of medium to large transformer tanks</li>
            <li>Pressure monitoring and gauging operations</li>
            <li>SF6 switchgear servicing</li>
            <li>Industrial sealed container maintenance</li>
            <li>Complex gas supply systems requiring multiple valve operations</li>
          </ul>
        </section>

        <section>
          <h2>Installation & Maintenance</h2>
          <ul>
            <li>Mount to transformer tank using appropriate threaded boss</li>
            <li>Apply PTFE thread seal tape for reliable connection</li>
            <li>Attach standard gas service accessories (chuck, deflator, gauge) as needed</li>
            <li>Inspect monthly for external corrosion or damage</li>
            <li>Verify smooth plunger operation with deflation testing</li>
            <li>Replace seals if seepage develops; field kits available</li>
            <li>Operating life: 50,000+ cycles typical</li>
          </ul>
        </section>

        <section>
          <h2>Customization Options</h2>
          <ul>
            <li><strong>Finish:</strong> Natural Brass or Nickel-Plated materials</li>
            <li><strong>Sealing Materials:</strong> Nitrile (standard) or Viton for synthetic fluids</li>
            <li><strong>Pressure Ratings:</strong> 20 bar standard; custom pressures available</li>
            <li><strong>Threading Options:</strong> Specify BSP, NPT, or custom thread specifications</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-3' ? 'active' : ''}`}
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
