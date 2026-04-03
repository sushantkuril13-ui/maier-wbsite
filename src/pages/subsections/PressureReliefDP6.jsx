import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Pressure Relief Valves with Switches - DP-6';

export default function PressureReliefDP6() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'with-switches');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: 'With Switches', to: '/products/pressure-relief-valves/with-switches' },
    { label: 'DP-6' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valves"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves"
      activeSubsectionSlug="with-switches"
      activeSubsubsectionSlug="dp-6"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Overview</h2>
          <p>
            The DP-6 is a heavy-duty pressure relief valve engineered for large power transformers, featuring a 6" inlet/outlet port.
            Built for demanding industrial applications, it delivers superior relief capacity while maintaining precise pressure control through advanced 
            electrical monitoring and visual indication systems.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>6" (150mm) port size for high-volume pressure relief</li>
            <li>Six M12/14mm mounting holes with 235mm PCD for maximum stability</li>
            <li>Extra-heavy-duty spring mechanism with reinforced stainless-steel diaphragm</li>
            <li>Dual-redundancy electrical contact system (N.O. and N.C. configurations)</li>
            <li>Robust visual indicator for high-visibility operational status</li>
            <li>Engineered for the largest transformer installations</li>
            <li>Full suite of options: shroud, socket connections, integrated cabling</li>
            <li>Superior reliability in outdoor and harsh environments</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>DP-6</td>
              </tr>
              <tr>
                <td><strong>Port Size</strong></td>
                <td>6" (150mm)</td>
              </tr>
              <tr>
                <td><strong>Number of Mounting Holes</strong></td>
                <td>6</td>
              </tr>
              <tr>
                <td><strong>Bolt Size / Hole Size</strong></td>
                <td>M12 / 14mm Ø</td>
              </tr>
              <tr>
                <td><strong>Pitch Circle Diameter (P.C.D)</strong></td>
                <td>235mm</td>
              </tr>
              <tr>
                <td><strong>Sealing Material</strong></td>
                <td>Nitrile Rubber Gasket (other materials available)</td>
              </tr>
              <tr>
                <td><strong>Limit Switch Protection</strong></td>
                <td>IP-67 (connector-rated)</td>
              </tr>
              <tr>
                <td><strong>Cable Gland</strong></td>
                <td>3/4" 16 T.P.I. (B.S.C.) PVC</td>
              </tr>
              <tr>
                <td><strong>Relief Capacity</strong></td>
                <td>Maximum flow rate in PRV line</td>
              </tr>
              <tr>
                <td><strong>Weight (approx.)</strong></td>
                <td>Substantially heavier than DP-1/DP-3</td>
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
                <td>DP-6Ø</td>
                <td>Without Electrical Contact & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Monitoring</td>
                <td>DP-6ØEF1</td>
                <td>With Electrical Contact (1 N.O. & 1 N.C.) & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Dual Contacts</td>
                <td>DP-6ØEF2</td>
                <td>With Electrical Contacts (2 N.O. & 2 N.C.) & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Shroud</td>
                <td>DP-6ØEF#S</td>
                <td>With Shroud / Oil Collection Cap</td>
              </tr>
              <tr>
                <td>With Socket Connection</td>
                <td>DP-6ØEF#P</td>
                <td>With Plug and Socket Type Limit Switch Connection</td>
              </tr>
              <tr>
                <td>Complete Assembly</td>
                <td>DP-6ØEF#SPC</td>
                <td>With Shroud, Socket Connection & Pre-assembled Cable</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Working Principle</h2>
          <p>
            The DP-6 employs a time-proven diaphragm relief system designed for extreme duty. A precision-machined stainless-steel diaphragm is 
            maintained against its seat by a calibrated heavy-duty spring and dual O-ring seals. When internal pressure exceeds the factory-set pressure 
            rating (typically 1.5 to 3.5 bar for transformer applications), the diaphragm lifts away from its seat, opening a large relief port. This 
            mechanical action activates dual electrical limit switches and a high-visibility mechanical indicator. The system automatically resets when 
            pressure normalizes. The DP-6's six-bolt design distributes load evenly, ensuring superior longevity in high-cycle operations.
          </p>
        </section>

        <section>
          <h2>Installation Requirements</h2>
          <ul>
            <li>Verify transformer tank wall thickness is adequate for six mounting points</li>
            <li>Use a torque wrench to tighten all six bolts to specification in a progressive star pattern</li>
            <li>Ensure proper gasket seating—replace gasket if previously used</li>
            <li>Install with relief port facing downward or directed into collection/piping system</li>
            <li>Connect all electrical contacts with shielded cable for EMI protection</li>
            <li>Use industrial-grade cable glands rated for the operating environment</li>
            <li>Implement dual-channel alarm monitoring for critical transformers</li>
            <li>Plan for easy access for future maintenance and testing</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance</h2>
          <ul>
            <li>Inspect the valve bi-annually for external corrosion or physical damage</li>
            <li>Test electrical contacts quarterly via automated monitoring systems</li>
            <li>Verify mechanical indicator movement through gentle inspection (do not force)</li>
            <li>Check for oil weeping at gasket interface—contact service if detected</li>
            <li>Replace the nylon bushing if connector becomes loose (spare kits available)</li>
            <li>For service overhauls, contact Maier for authorized service centers</li>
            <li>Maintain records of all pressure relief valve actuations for trend analysis</li>
          </ul>
        </section>

        <section>
          <h2>Applications</h2>
          <ul>
            <li>Large generator step-up and step-down transformers (200+ MVA)</li>
            <li>High-voltage utility transformers with critical uptime requirements</li>
            <li>Transformers with on-load tap changers in demanding duty cycles</li>
            <li>Network transformers serving metropolitan areas</li>
            <li>Industrial furnace transformers and arc furnace supply transformers</li>
            <li>Outdoor installations requiring extreme weather and UV resistance</li>
          </ul>
        </section>

        <section>
          <h2>Design Certifications</h2>
          <ul>
            <li>IEC 60296 compliant for use with mineral insulating oils</li>
            <li>IP-67 rated electrical housing for outdoor installations</li>
            <li>Tested for pressure cycles up to 100,000 operations</li>
            <li>Suitable for use with synthetic and ester-based dielectric fluids (consult for details)</li>
          </ul>
        </section>

        <section>
          <h2>Related Models</h2>
          <ul>
            <li><Link to="/products/pressure-relief-valves/with-switches/dp-1">DP-1 (1" Port)</Link> - For smaller transformers</li>
            <li><Link to="/products/pressure-relief-valves/with-switches/dp-3">DP-3 (3" Port)</Link> - For medium-sized transformers</li>
            <li><Link to="/products/pressure-relief-valves/threaded">Threaded PRV Series</Link> - Alternative inlet/outlet types</li>
            <li><Link to="/products/pressure-relief-valves-with-oil-level-indicator">PRV with Oil Level Indicator</Link> - Combined functionality</li>
          </ul>
        </section>

        <section>
          <h2>Downloads & Documentation</h2>
          <ul>
            <li><a href="/downloads/DP6 Datasheet.pdf" target="_blank" rel="noopener noreferrer">DP-6 Detailed Datasheet</a></li>
            <li><a href="/downloads/PRV Catalogue.pdf" target="_blank" rel="noopener noreferrer">Complete PRV Product Catalogue</a></li>
            <li><a href="/downloads/Installation Guide.pdf" target="_blank" rel="noopener noreferrer">Professional Installation Guide</a></li>
            <li><a href="/downloads/Electrical Wiring.pdf" target="_blank" rel="noopener noreferrer">Electrical Connection Diagrams</a></li>
            <li><a href="/downloads/Maintenance Manual.pdf" target="_blank" rel="noopener noreferrer">Preventive Maintenance Manual</a></li>
          </ul>
        </section>

        <section>
          <h2>Technical Support</h2>
          <p>
            Maier provides comprehensive technical support for DP-6 installations worldwide. For pressure calibration requirements, specialized 
            sealing materials, custom mounting configurations, or bulk procurement, contact our sales and engineering teams. We maintain authorized service 
            centers in major regions for rapid response to service needs.
          </p>
        </section>
      </article>
    </ProductPageLayout>
  );
}
