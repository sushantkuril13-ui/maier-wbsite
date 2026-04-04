import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Pressure Relief Valves with Switches - DP-3';

export default function PressureReliefDP3() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'with-switches');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: 'With Switches', to: '/products/pressure-relief-valves/with-switches' },
    { label: 'DP-3' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valves"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves"
      activeSubsectionSlug="with-switches"
      activeSubsubsectionSlug="dp-3"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Overview</h2>
          <p>
            The DP-3 is a versatile pressure relief valve designed for medium-sized transformer applications featuring a 3" inlet/outlet port.
            It includes integrated electrical limit switches and sophisticated visual indicators for comprehensive monitoring of valve operations.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>3" (75mm) port size for balanced pressure relief capacity</li>
            <li>Four M10/12mm mounting holes with 125mm PCD</li>
            <li>Heavy-duty spring mechanism with stainless-steel diaphragm</li>
            <li>Advanced electrical contact system with N.O. and N.C. options</li>
            <li>Integrated visual indicator for quick status assessment</li>
            <li>Engineered for repeated, reliable operation</li>
            <li>Multiple configuration options for specialized applications</li>
            <li>Oil collection cap (shroud) option available</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>DP-3</td>
              </tr>
              <tr>
                <td><strong>Port Size</strong></td>
                <td>3" (75mm)</td>
              </tr>
              <tr>
                <td><strong>Number of Mounting Holes</strong></td>
                <td>4</td>
              </tr>
              <tr>
                <td><strong>Bolt Size / Hole Size</strong></td>
                <td>M10 / 12mm Ø</td>
              </tr>
              <tr>
                <td><strong>Pitch Circle Diameter (P.C.D)</strong></td>
                <td>125mm</td>
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
              <tr>
                <td><strong>Relief Capacity</strong></td>
                <td>Higher flow rate than DP-1</td>
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
                <td>DP-3Ø</td>
                <td>Without Electrical Contact & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Monitoring</td>
                <td>DP-3ØEF1</td>
                <td>With Electrical Contact (1 N.O. & 1 N.C.) & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Dual Contacts</td>
                <td>DP-3ØEF2</td>
                <td>With Electrical Contacts (2 N.O. & 2 N.C.) & Visual Indicator</td>
              </tr>
              <tr>
                <td>With Shroud</td>
                <td>DP-3ØEF#S</td>
                <td>With Shroud / Oil Collection Cap</td>
              </tr>
              <tr>
                <td>With Socket Connection</td>
                <td>DP-3ØEF#P</td>
                <td>With Plug and Socket Type Limit Switch Connection</td>
              </tr>
              <tr>
                <td>Complete Assembly</td>
                <td>DP-3ØEF#SPC</td>
                <td>With Shroud, Socket Connection & Cable</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Working Principle</h2>
          <p>
            The DP-3 utilizes a robust diaphragm-based mechanism proven in demanding industrial applications. In normal operating conditions, a stainless-steel diaphragm is held securely against its seat by a calibrated spring and precision O-ring. When internal pressure exceeds the manufacturer-set safety threshold—typically due to thermal expansion, fluid vaporization, or external pressure conditions—the diaphragm flexes upward, opening the relief port. This mechanical lift simultaneously traps and actuates the electrical limit switch and mechanical visual indicator. The valve automatically reseals once pressure drops below the set value, ensuring continuous protection with zero maintenance between operations.
          </p>
        </section>

        <section>
          <h2>Installation Guidelines</h2>
          <ul>
            <li>Select a suitable mounting location on the transformer tank wall</li>
            <li>Ensure proper alignment with mounting bolt holes</li>
            <li>Tighten all four mounting bolts progressively in a cross pattern to ensure uniform pressure</li>
            <li>Verify the relief port is positioned to direct flow safely (typically downward or into a collection system)</li>
            <li>Connect electrical limit switches to the monitoring and alarm systems with proper grounding</li>
            <li>Use cable glands rated for the specified voltage and current requirements</li>
            <li>Apply thread seal tape to electrical connections for enhanced protection</li>
            <li>Label all electrical connections according to standard practices</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance & Inspection</h2>
          <ul>
            <li>Perform visual inspections quarterly for oil residue or external damage</li>
            <li>Test the limit switch functionality annually through the monitoring system</li>
            <li>Verify that the visual indicator moves freely by gentle tapping (do not force)</li>
            <li>If oil seepage is detected, contact technical support—valve may require servicing</li>
            <li>Replace O-rings if they show signs of hardening or physical damage</li>
            <li>Consult Maier for maintenance services and spare parts availability</li>
          </ul>
        </section>

        <section>
          <h2>Applications</h2>
          <ul>
            <li>Medium power transformers (typically 50-200 MVA range)</li>
            <li>On-load tap changers requiring pressure protection</li>
            <li>Network transformers with redundancy requirements</li>
            <li>Remote monitoring applications with automated alarm integration</li>
            <li>Industrial and utility transformer installations</li>
          </ul>
        </section>

        <section>
          <h2>Related Models</h2>
          <ul>
            <li><Link to="/products/pressure-relief-valves/with-switches/dp-1">DP-1 (1" Port)</Link> - For compact applications</li>
            <li><Link to="/products/pressure-relief-valves/with-switches/dp-6">DP-6 (6" Port)</Link> - For large transformers</li>
            <li><Link to="/products/pressure-relief-valves/threaded/medium-size">Threaded Medium Size</Link> - Alternative threaded option</li>
          </ul>
        </section>

        <section>
          <h2>Downloads</h2>
          <ul>
            <li><a href="/downloads/DP3 Datasheet.pdf" target="_blank" rel="noopener noreferrer">DP-3 Datasheet</a></li>
            <li><a href="/downloads/PRV Catalogue.pdf" target="_blank" rel="noopener noreferrer">Complete PRV Catalogue</a></li>
            <li><a href="/downloads/Installation Guide.pdf" target="_blank" rel="noopener noreferrer">Installation Guide</a></li>
            <li><a href="/downloads/Electrical Integration.pdf" target="_blank" rel="noopener noreferrer">Electrical Integration Guide</a></li>
          </ul>
        </section>

        <section>
          <h2>Contact & Support</h2>
          <p>
            For detailed technical specifications, custom pressure ratings, or bulk orders of DP-3 units, please reach out to Maier's technical sales team.
            We provide full support including pressure calibration, custom electrical configurations, and comprehensive warranty coverage.
          </p>
        </section>
      </article>
    </ProductPageLayout>
  );
}
