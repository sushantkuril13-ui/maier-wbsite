import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Pressure Relief Valves with Switches - DP-1';

export default function PressureReliefDP1() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'with-switches');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: 'With Switches', to: '/products/pressure-relief-valves/with-switches' },
    { label: 'DP-1' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valves"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves"
      activeSubsectionSlug="with-switches"
      activeSubsubsectionSlug="dp-1"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Overview</h2>
          <p>
            The DP-1 is a compact pressure relief valve designed for smaller transformer applications with a 1" inlet/outlet port.
            It features integrated electrical limit switches and visual indicators for monitoring valve actuation.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>1" (25mm) port size for efficient pressure relief</li>
            <li>Four M08/10mm mounting holes with 85mm PCD</li>
            <li>Heavy-duty spring mechanism with stainless-steel diaphragm</li>
            <li>Integrated electrical contact system (N.O. and N.C. available)</li>
            <li>Visual indicator for quick operational status verification</li>
            <li>Suitable for repeated operation and long service life</li>
            <li>Available with various electrical and sealing options</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>DP-1</td>
              </tr>
              <tr>
                <td><strong>Port Size</strong></td>
                <td>1" (25mm)</td>
              </tr>
              <tr>
                <td><strong>Number of Mounting Holes</strong></td>
                <td>4</td>
              </tr>
              <tr>
                <td><strong>Bolt Size / Hole Size</strong></td>
                <td>M08 / 10mm Ø</td>
              </tr>
              <tr>
                <td><strong>Pitch Circle Diameter (P.C.D)</strong></td>
                <td>85mm</td>
              </tr>
              <tr>
                <td><strong>Sealing Material</strong></td>
                <td>Nitrile Rubber Gasket</td>
              </tr>
              <tr>
                <td><strong>Limit Switch Protection</strong></td>
                <td>IP-67</td>
              </tr>
              <tr>
                <td><strong>Cable Gland</strong></td>
                <td>3/4" 16 T.P.I. (B.S.C.) PVC</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Available Models & Features</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Model Designation</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard</td>
                <td>DP-1Ø</td>
                <td>Without Electrical Contact & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Monitoring</td>
                <td>DP-1ØEF1</td>
                <td>With Electrical Contact (1 N.O. & 1 N.C.) & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Dual Contacts</td>
                <td>DP-1ØEF2</td>
                <td>With Electrical Contacts (2 N.O. & 2 N.C.) & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Shroud</td>
                <td>DP-1ØEF#S</td>
                <td>With Shroud / Oil Collection Cap</td>
              </tr>
              <tr>
                <td>With Socket Connection</td>
                <td>DP-1ØEF#P</td>
                <td>With Plug and Socket Type Limit Switch Connection</td>
              </tr>
              <tr>
                <td>Complete Assembly</td>
                <td>DP-1ØEF#SPC</td>
                <td>With Shroud, Socket Connection & Cable</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Working Principle</h2>
          <p>
            The DP-1 operates on a proven diaphragm mechanism. Under normal conditions, the stainless-steel diaphragm remains sealed by a heavy-duty spring and O-ring seat. When internal pressure exceeds the preset safety threshold due to temperature change, fluid expansion, or related conditions, the diaphragm lifts and opens the relief port, allowing excess pressure to escape. This lift simultaneously actuates the electrical limit switch and visual indicator mechanism. The valve automatically resets once pressure returns below the set value, ensuring reliable protection for repeated operations.
          </p>
        </section>

        <section>
          <h2>Installation Guidelines</h2>
          <ul>
            <li>Mount the DP-1 on the transformer or tank wall at the appropriate location</li>
            <li>Ensure mounting bolts are properly tightened to create a leak-free seal</li>
            <li>Verify that the relief port faces downward or is directed toward an appropriate collection point</li>
            <li>If electrical contacts are used, connect the limit switch to the monitoring system following IP-67 specifications</li>
            <li>Use the provided PVC cable gland for secure electrical connection</li>
            <li>Periodically inspect for signs of oil seepage or corrosion</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance</h2>
          <p>
            Perform annual inspections to verify proper valve operation. Clean the visible indicator mechanism with a soft cloth. If the valve exhibits sluggish response or fails to reset, consult Maier's technical support for servicing. Always use the specified O-ring material based on the transformer fluid type (mineral, synthetic, or ester-based).
          </p>
        </section>

        <section>
          <h2>Related Models</h2>
          <ul>
            <li><Link to="/products/pressure-relief-valves/with-switches/dp-3">DP-3 (3" Port)</Link> - For medium transformers</li>
            <li><Link to="/products/pressure-relief-valves/with-switches/dp-6">DP-6 (6" Port)</Link> - For large transformers</li>
            <li><Link to="/products/pressure-relief-valves/threaded/small-size">Threaded Small Size</Link> - Alternative for smaller applications</li>
          </ul>
        </section>

        <section>
          <h2>Downloads</h2>
          <ul>
            <li><a href="/downloads/DP1 Datasheet.pdf" target="_blank" rel="noopener noreferrer">DP-1 Datasheet</a></li>
            <li><a href="/downloads/PRV Catalogue.pdf" target="_blank" rel="noopener noreferrer">Complete PRV Catalogue</a></li>
            <li><a href="/downloads/Installation Guide.pdf" target="_blank" rel="noopener noreferrer">Installation Guide</a></li>
          </ul>
        </section>

        <section>
          <h2>Contact & Ordering</h2>
          <p>
            For technical specifications, custom configurations, or bulk ordering of DP-1 models, please contact Maier's sales team.
            We provide comprehensive support for all pressure relief valve applications.
          </p>
        </section>
      </article>
    </ProductPageLayout>
  );
}
