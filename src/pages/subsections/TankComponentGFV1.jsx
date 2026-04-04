import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV1() {
  const slides = getSubsectionSlides('tank-components', 'gfv-1');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-1' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-1"
    >
      <article>
        <h1>GFV-1 Miniature Tank Valve</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The GFV-1 is a specialized miniature tank valve engineered for gas inflation, deflation, and pressure gauging of sealed transformer tanks 
            and specialized equipment. Featuring an elongated design (33mm) with 1/8" threading, it's specifically optimized for applications requiring 
            compact installation depth, particularly SF6 switchgears and sealed gas compartments. The valve-core design with precision sealing components 
            ensures rapid gas exchange while maintaining hermetic integrity.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>GFV-1</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>1/8" (both NPT and BSP available)</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (corrosion-resistant)</td>
              </tr>
              <tr>
                <td><strong>Overall Length</strong></td>
                <td>33 mm (elongated design for deep mounting)</td>
              </tr>
              <tr>
                <td><strong>Sealing Components</strong></td>
                <td>Teflon sleeve, nitrile gaskets, stainless steel spring</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C</td>
              </tr>
              <tr>
                <td><strong>Maximum Pressure (Standard)</strong></td>
                <td>20 bar (consult for higher pressures)</td>
              </tr>
              <tr>
                <td><strong>Gas Compatibility</strong></td>
                <td>SF6, Nitrogen, Dry Air, Transformer Oil vapor (standard)</td>
              </tr>
              <tr>
                <td><strong>Flow Rate</strong></td>
                <td>High-flow design; rapid inflation/deflation capability</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Elongated Design (33mm):</strong> Specifically engineered for equipment requiring deep mounting access</li>
            <li><strong>Compact 1/8" Thread:</strong> Minimizes penetration into tank while maintaining seal integrity</li>
            <li><strong>Brass Construction:</strong> Superior corrosion resistance for long service life</li>
            <li><strong>Dual Thread Standards:</strong> Available in both NPT and BSP for universal compatibility</li>
            <li><strong>Rapid Gas Exchange:</strong> Valve-core design with precision sealing enables fast inflation/deflation</li>
            <li><strong>SF6 Optimized:</strong> Designed specifically for SF6 switchgears and sealed gas compartments</li>
            <li><strong>Multi-Functional:</strong> Supports inflation, deflation, and pressure gauging with standard accessories</li>\n            <li><strong>Field-Proven Reliability:</strong> Decades of performance in demanding transformer applications</li>
          </ul>
        </section>

        <section>
          <h2>Key Components & Design Details</h2>
          <ul>
            <li>
              <strong>Plug & Body:</strong> Single-piece valve body construction permits full flow of gas for rapid inflation/deflation cycles
            </li>
            <li>
              <strong>Teflon Sleeve:</strong> Ultra-low-friction self-swiveling gasket that rotates during tightening, maintaining perfect sealing alignment 
              without sticking or binding
            </li>
            <li>
              <strong>Ferrule & Plunger Washer:</strong> Precision-engineered design optimizes gas flow while cleaning the plunger washer on each valve 
              operation, preventing contamination buildup
            </li>
            <li>
              <strong>Spring Assembly:</strong> Corrosion-resistant stainless steel (or brass) coil spring provides exact tension for reliable sealing 
              across full temperature range
            </li>
            <li>
              <strong>Plunger Pin:</strong> Dual-seating design (top and bottom) provides positive mechanical location for standardized inflation/deflation 
              and pressure gauging accessories
            </li>
            <li>
              <strong>Brass Valve Cap:</strong> Engineered for maximum sealing force with minimal tightening effort; prevents dirt particle ingress 
              that could impair valve performance
            </li>
          </ul>
        </section>

        <section>
          <h2>Application & Gas Compatibility</h2>
          <p>
            The GFV-1 is optimized for transformer accessory applications requiring compact gas service valves. Primary uses include:
            SF6 switchgear inflation/deflation, sealed transformer compartment servicing, nitrogen charging systems, 
            pressure monitoring, and specialized gas equipment maintenance. The valve is designed to work with standard industrial gas service 
            accessories (pneumatic chucks, deflators, multi-tool gauges, regulators). Gas compatibility includes SF6, dry nitrogen, dry air, 
            and transformer oil-saturated atmospheres.
          </p>
        </section>

        <section>
          <h2>Available Configurations</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Option Description</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Standard GFV-1</strong></td>
                <td>1/8" NPT thread, natural brass finish, with brass cap</td>
                <td>General transformer and switchgear applications (North America)</td>
              </tr>
              <tr>
                <td><strong>GFV-1B</strong></td>
                <td>1/8" BSP thread, works with rubber or aluminum washers</td>
                <td>Metric-standard transformers and EU/UK equipment</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Customization & Finish Options</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Option Type</th>
                <th>Available Finishes</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Finish</strong></td>
                <td>Natural Brass, Nickel-Plated</td>
                <td>Nickel plating adds corrosion resistance for marine/harsh environments</td>
              </tr>
              <tr>
                <td><strong>Valve Cap</strong></td>
                <td>With Cap (std), Without Cap (custom)</td>
                <td>Cap protects against dirt ingress; can be custom ordered without</td>
              </tr>
              <tr>
                <td><strong>Sealing Materials</strong></td>
                <td>Standard Nitrile, Viton (FKM)</td>
                <td>Viton for higher temperature or synthetic fluid compatibility</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Installation Instructions</h2>
          <ol>
            <li>Ensure the mounting boss on transformer tank or switchgear is clean and free of debris</li>
            <li>Apply 3–4 wraps of PTFE thread seal tape to the 1/8" thread end</li>
            <li>Thread the GFV-1 into the mounting boss by hand first, then tighten with appropriate wrench (avoid over-tightening)</li>
            <li>Verify sealing: apply light pressure with a soap/water solution to check for micro-leaks</li>
            <li>Attach appropriate gas service accessories (chuck, deflator, or gauge) as needed for operation</li>
            <li>Always replace the brass cap when valve is not in use</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance & Service</h2>
          <ul>
            <li>Inspect the valve monthly for external corrosion or damage</li>
            <li>Verify smooth plunger operation by testing with deflation accessory</li>
            <li>Keep the brass cap clean and in place when valve is not in use</li>\n            <li>If seepage develops around the threaded connection, apply additional PTFE tape and re-tighten carefully</li>
            <li>Field-service O-ring kits available for seal replacement; contact Maier for custom service</li>
            <li>Operating life: 50,000+ inflation/deflation cycles typical</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When ordering GFV-1 valves, specify:
          </p>
          <ul>
            <li>Thread standard (NPT vs. BSP)</li>
            <li>Finish preference (Natural Brass or Nickel-Plated)</li>
            <li>Quantity and delivery requirements</li>
            <li>Any special gas compatibility or pressure requirements</li>
            <li>Optional sealing material (standard Nitrile or Viton)</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-1' ? 'active' : ''}`}
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
