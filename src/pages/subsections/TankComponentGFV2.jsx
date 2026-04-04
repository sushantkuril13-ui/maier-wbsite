import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV2() {
  const slides = getSubsectionSlides('tank-components', 'gfv-2');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-2' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-2"
    >
      <article>
        <h1>GFV-2</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The GFV-2 is a precision miniature tank valve optimized for 1/4" threaded mounting on transformer tanks and specialized gas equipment. 
            Featuring the same proven valve-core design as the GFV-1 but with larger thread size, the GFV-2 provides higher flow capacity while maintaining 
            compact envelope dimensions. Ideal for larger transformers, tank equipment with higher gas turnover requirements, and applications requiring 
            greater inflation/deflation speed than 1/8" systems offer.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>GFV-2</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>1/4" (both NPT and BSP available)</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (corrosion-resistant)</td>
              </tr>
              <tr>
                <td><strong>Overall Length</strong></td>
                <td>~35 mm</td>
              </tr>
              <tr>
                <td><strong>Maximum Pressure (Standard)</strong></td>
                <td>20 bar</td>
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
                <td><strong>Flow Rate</strong></td>
                <td>Higher flow than GFV-1; rapid inflation/deflation</td>
              </tr>
              <tr>
                <td><strong>Sealing Components</strong></td>
                <td>Teflon sleeve, O-rings, stainless steel spring</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Upgraded 1/4" Thread:</strong> Larger thread size provides increased flow capacity over GFV-1</li>
            <li><strong>Higher Flow Rate:</strong> Supports faster inflation/deflation for larger equipment</li>
            <li><strong>Proven Valve-Core Design:</strong> Same precision sealing as GFV-1; proven track record</li>
            <li><strong>Dual Thread Standards:</strong> Available in both NPT and BSP for global compatibility</li>
            <li><strong>Compact Configuration:</strong> Maintains minimal tank penetration despite larger capacity</li>
            <li><strong>Multi-Functional:</strong> Supports inflation, deflation, and pressure gauging operations</li>
            <li><strong>SF6 Optimized:</strong> Ideal for SF6 switchgear and sealed gas systems</li>
          </ul>
        </section>

        <section>
          <h2>Available Configurations</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Description</th>
                <th>Primary Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GFV-2 (NPT)</strong></td>
                <td>1/4" NPT thread, natural brass, brass cap</td>
                <td>North American equipment and industrial standards</td>
              </tr>
              <tr>
                <td><strong>GFV-2B (BSP)</strong></td>
                <td>1/4" BSP thread, works with rubber/aluminum washers</td>
                <td>European and metric-standard equipment</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Installation & Operation</h2>
          <ul>
            <li>Apply 3–4 PTFE thread seal tape wraps to the threaded end</li>
            <li>Thread into tank boss by hand; tighten with appropriate wrench (16–18 Nm typical)</li>
            <li>Verify seal integrity with soap/water solution</li>
            <li>Attach standard gas service accessories (chuck, deflator, gauge) as needed</li>
            <li>Always replace brass cap when valve not in use</li>
            <li>Operating life: 50,000+ cycles typical</li>
          </ul>
        </section>

        <section>
          <h2>Customization Options</h2>
          <ul>
            <li><strong>Finish:</strong> Natural Brass or Nickel-Plated</li>
            <li><strong>Valve Cap:</strong> With cap (standard) or without cap (custom)</li>
            <li><strong>Sealing Materials:</strong> Nitrile (standard) or Viton (FKM) for synthetic fluids</li>
            <li><strong>Pressure Rating:</strong> 20 bar standard; higher ratings available upon request</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance & Service</h2>
          <ul>
            <li>Inspect valve monthly for corrosion or damage</li>
            <li>Verify smooth plunger operation with deflation testing</li>
            <li>Replace gaskets if seepage develops; field kits available</li>
            <li>If sealing thread loose, apply PTFE tape and re-tighten carefully</li>
            <li>Field-service O-ring kits available for seal replacement</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-2' ? 'active' : ''}`}
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
