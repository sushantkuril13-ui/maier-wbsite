import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentBrassCap() {
  const slides = getSubsectionSlides('tank-components', 'brass-cap');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'Brass Cap Options' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="brass-cap"
    >
      <article>
        <h1>Brass Cap Options</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Brass Cap is an optional protective and functional component available for all GFV tank valve models (GFV-1 through GFV-6). 
            This precision-engineered accessory provides multiple benefits: enhanced sealing force with minimal tightening effort, protection from dirt 
            and contamination ingress, ergonomic hand-tightening operation, and professional appearance. The brass cap maintains hermetic integrity when 
            the valve is not in active use, extending valve service life and ensuring consistent long-term performance.
          </p>
        </section>

        <section>
          <h2>Purpose & Function</h2>
          <p>
            Located on the plunger end of all GFV models, the brass cap serves dual functions: (1) provides mechanical sealing force that maintains 
            gas-tight integrity when the valve is not actively supplying/exhausting gas, and (2) acts as a protective barrier excluding dirt, dust, 
            oil aerosol, and other contaminants that could accumulate in the valve mouth and degrade performance over time. The cap is hand-tightened 
            without tools, requiring only moderate finger pressure to achieve full sealing.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (corrosion-resistant, high-quality alloy)</td>
              </tr>
              <tr>
                <td><strong>Finish Options</strong></td>
                <td>Natural Brass or Nickel-Plated</td>
              </tr>
              <tr>
                <td><strong>Sealing Interface</strong></td>
                <td>Precision O-ring (Nitrile standard, Viton available)</td>
              </tr>
              <tr>
                <td><strong>Thread Type</strong></td>
                <td>Hand-tightening design; no tools required</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C</td>
              </tr>
              <tr>
                <td><strong>Storage Temperature</strong></td>
                <td>-50°C to +80°C (cap only)</td>
              </tr>
              <tr>
                <td><strong>Torque Requirement</strong></td>
                <td>5–10 N·m (hand-tightening; no wrench needed)</td>
              </tr>
              <tr>
                <td><strong>Sealing Pressure Rating</strong></td>
                <td>0–50 bar (maintains seal across all operating pressures)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features & Benefits</h2>
          <ul>
            <li><strong>Maximum Sealing Force:</strong> Highly efficient O-ring design provides robust sealing with minimum tightening effort</li>
            <li><strong>Dirt & Contamination Protection:</strong> Excludes particles, dust, oil aerosol that could impair valve core efficiency</li>
            <li><strong>Easy Hand-Tightening Operation:</strong> Ergonomic design requires only finger-tightened operation; no wrench needed</li>
            <li><strong>Durable Brass Construction:</strong> Corrosion-resistant alloy ensures multi-year service life</li>
            <li><strong>Professional Appearance:</strong> Available in natural or nickel-plated finishes enhancing equipment aesthetics</li>
            <li><strong>Universal Compatibility:</strong> Fits all GFV series models (GFV-1 through GFV-6)</li>
            <li><strong>Replaceable O-Ring Seals:</strong> Field-serviceable design allows seal replacement without valve replacement</li>
            <li><strong>Minimal Maintenance:</strong> Periodically clean with soft cloth; verify O-ring condition annually</li>
          </ul>
        </section>

        <section>
          <h2>Available Finish Options</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Finish Type</th>
                <th>Description</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Natural Brass</strong></td>
                <td>Classic brass golden color; standard option</td>
                <td>Indoor installations, standard duty, cost-effective</td>
              </tr>
              <tr>
                <td><strong>Nickel-Plated</strong></td>
                <td>Silvery finish with enhanced corrosion protection</td>
                <td>Outdoor installations, marine environments, elevated corrosion risk</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Usage Instructions</h2>
          <ol>
            <li>After completing inflation/deflation operation, allow any residual gas to escape</li>
            <li>Inspect the brass cap for dirt or debris on external surfaces</li>
            <li>Thread the cap onto the plunger end by hand</li>
            <li>Tighten firmly with finger pressure only (typically 5–10 N·m equivalent)</li>
            <li>Do not use tools (wrench, pliers) as over-tightening can damage O-ring</li>
            <li>Verify visual seal: there should be no gas hissing when cap is properly tightened</li>
            <li>Store the cap-sealed valve in dry location to prevent O-ring degradation</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance & Care</h2>
          <ul>
            <li>Periodically clean cap exterior with dry cloth to remove dust/residue</li>
            <li>Inspect O-ring condition annually; replace if visible cracking or hardening observed</li>
            <li>If cap becomes difficult to tighten/loosen, clean threads with soft brush</li>
            <li>Store spare O-rings (field kits) for rapid replacement if needed</li>
            <li>Do not apply lubricants to cap threads; use dry PTFE or silicone if needed</li>
            <li>Replace entire cap if threads become stripped; return to Maier service center</li>
          </ul>
        </section>

        <section>
          <h2>Ordering & Customization</h2>
          <p>
            Brass caps are available as original equipment on GFV orders or purchased separately as replacement/upgrade components.
          </p>
          <ul>
            <li>Specify finish: Natural Brass (standard) or Nickel-Plated</li>
            <li>Specify O-ring material: Nitrile (standard) or Viton for synthetic fluids</li>
            <li>Available in bulk quantities with volume discounts</li>
            <li>Field-service replacement kits available (cap + O-ring assembly)</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When ordering tank components, you have two options:
          </p>
          <ul>
            <li><strong>With Brass Cap:</strong> Recommended for general use and outdoor installations</li>
            <li><strong>Without Brass Cap:</strong> Suitable for space-constrained applications or when cap protection is not required</li>
          </ul>
        </section>

        <section>
          <h2>Application Recommendations</h2>
          <ul>
            <li>
              <strong>Indoor Transformers:</strong> Brass cap optional depending on maintenance preferences
            </li>
            <li>
              <strong>Outdoor Transformers:</strong> Brass cap strongly recommended for protection against environmental
              contamination
            </li>
            <li>
              <strong>High-Vibration Environments:</strong> Brass cap helps prevent accidental opening and loss of
              pressure
            </li>
            <li>
              <strong>Hermetically Sealed Tanks:</strong> Brass cap essential to maintain seal integrity
            </li>
          </ul>
        </section>

        <section>
          <h2>Compatibility</h2>
          <p>
            Brass Cap options are available for all tank component models:
          </p>
          <ul>
            <li>GFV-1 with / without Brass Cap</li>
            <li>GFV-2 with / without Brass Cap</li>
            <li>GFV-3 with / without Brass Cap</li>
            <li>GFV-4 with / without Brass Cap</li>
            <li>GFV-5 with / without Brass Cap</li>
            <li>GFV-6 with / without Brass Cap</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'brass-cap' ? 'active' : ''}`}
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
