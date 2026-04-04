import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV5() {
  const slides = getSubsectionSlides('tank-components', 'gfv-5');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-5' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-5"
    >
      <article>
        <h1>GFV-5</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The GFV-5 is a precision high-capacity tank valve designed for demanding large industrial and utility transformer applications. 
            With expanded bore design and advanced sealing technology, the GFV-5 provides maximum flow capacity while maintaining hermetic integrity 
            even under extreme pressure conditions. Ideal for critical infrastructure transformers where reliability and performance cannot be compromised.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>GFV-5</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>3/8"</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass or Carbon Steel (high-pressure capable)</td>
              </tr>
              <tr>
                <td><strong>Maximum Pressure</strong></td>
                <td>30 bar (higher operating capability)</td>
              </tr>
              <tr>
                <td><strong>Gas Compatibility</strong></td>
                <td>SF6, Nitrogen, Dry Air, all standard transformer gases</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C</td>
              </tr>
              <tr>
                <td><strong>Flow Capacity</strong></td>
                <td>Extra-large; highest throughput in GFV series</td>
              </tr>
              <tr>
                <td><strong>Available in</strong></td>
                <td>NPT and BSP; custom specifications available</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>3/8" Thread Size:</strong> Maximum capacity in standard GFV series</li>
            <li><strong>Advanced Sealing Technology:</strong> High-pressure rated, 30 bar capability</li>
            <li><strong>Expanded Bore Design:</strong> Optimized flow path for maximum throughput</li>
            <li><strong>Premium Material Options:</strong> Brass or Carbon Steel for extreme duty</li>
            <li><strong>Critical Infrastructure Rated:</strong> Proven in utility and industrial settings</li>
            <li><strong>Dual Thread Standards:</strong> Universal compatibility (NPT & BSP)</li>
            <li><strong>Extended Service Life:</strong> 100,000+ cycle capability with maintenance</li>
          </ul>
        </section>

        <section>
          <h2>Application & Use Cases</h2>
          <ul>
            <li>Large utility transformer gas supply systems</li>
            <li>High-pressure industrial equipment servicing</li>
            <li>Mission-critical infrastructure transformers</li>
            <li>Large-scale nitrogen purging operations</li>
            <li>Emergency rapid depressurization systems</li>
            <li>Dual/triple cylinder high-volume supply</li>
          </ul>
        </section>

        <section>
          <h2>Installation & Maintenance</h2>
          <ul>
            <li>Select robust threaded boss rated for high pressure</li>
            <li>Carefully apply 4–5 PTFE thread seal tape layers for high-pressure seal</li>
            <li>Thread with hand first, then use appropriate wrench (20–25 Nm high-pressure)</li>
            <li>Inspect weekly during high-pressure operations</li>
            <li>Verify plunger response with controlled deflation testing</li>
            <li>Replace seals annually for high-duty applications; field kits available</li>
            <li>Operating life: 100,000+ cycles with regular maintenance</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <ul>
            <li>Thread standard: NPT or BSP</li>
            <li>Material: Brass (standard) or Carbon Steel (high-pressure)</li>
            <li>Pressure rating: 30 bar (standard) or custom higher</li>
            <li>Sealing material: Nitrile, Viton, or custom seals</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-5' ? 'active' : ''}`}
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
