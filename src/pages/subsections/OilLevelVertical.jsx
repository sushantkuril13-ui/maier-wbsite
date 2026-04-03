import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Vertical Oil Level Indicator';

const threadMountingData = [
  {
    mountingThread: 'G-1" (1-BSP)',
    brass: 'BB-80*L',
    aluminium: 'AB-80L'
  },
  {
    mountingThread: 'G-1½" (1.5-BSP)',
    brass: 'BB-120*L',
    aluminium: 'N/A'
  },
  {
    mountingThread: 'G-2" (2-BSP)',
    brass: 'BB-240*L',
    aluminium: 'N/A'
  }
];

export default function OilLevelVertical() {
  const slides = getSubsectionSlides('oil-level-indicator', 'vertical');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Oil Level Indicator', to: '/products/oil-level-indicator' },
    { label: subsectionTitle }
  ];

  return (
    <ProductPageLayout
      activeCategory="Oil Level Indicator"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="oil-level-indicator"
      activeSubsectionSlug="vertical"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Application</h2>
          <p>
            Oil level gauges are designed for general industrial use for level monitoring of hermetically sealed
            transformer tanks and similar vessels. These vertical oil level indicators provide clear visibility and
            reliable long-term operation in sealed environments.
          </p>
        </section>

        <section>
          <h2>Key Features & Benefits</h2>
          <ul>
            <li><strong>Vertical Orientation:</strong> Optimized for clear visibility when mounted on tank sidewalls</li>
            <li><strong>Precision Float System:</strong> Nitrophyl buoyant float with calibrated density for transformer oil</li>
            <li><strong>UV-Protected Window:</strong> Polycarbonate construction rated for long-term outdoor exposure</li>
            <li><strong>Refractive Optics:</strong> Magnification effect enables clear viewing from distance</li>
            <li><strong>Leak-Proof Seals:</strong> O-ring design ensures hermetic seal under all pressure conditions</li>
            <li><strong>Wide Temperature Range:</strong> Reliable operation from -40°C to +120°C liquid temperature</li>
            <li><strong>Corrosion Resistant:</strong> Brass or aluminium body with stainless-steel internal components</li>
            <li><strong>Simple Installation:</strong> Threaded or flange mounting; no calibration required</li>
            <li><strong>Minimal Maintenance:</strong> No moving external parts; sealed float chamber</li>
            <li><strong>Field Serviceable:</strong> Replacement seals and window kits available</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C (liquid medium)</td>
              </tr>
              <tr>
                <td><strong>Storage Temperature</strong></td>
                <td>-50°C to +70°C (dry condition)</td>
              </tr>
              <tr>
                <td><strong>Float Material</strong></td>
                <td>Nitrophyl synthetic elastomer (density optimized for mineral oil)</td>
              </tr>
              <tr>
                <td><strong>Window Material</strong></td>
                <td>UV-stabilized polycarbonate (scratch-resistant coating available)</td>
              </tr>
              <tr>
                <td><strong>Standard Seals</strong></td>
                <td>Nitrile rubber (NBR) O-rings</td>
              </tr>
              <tr>
                <td><strong>Alternative Seals</strong></td>
                <td>Viton (FKM), EPDM available for synthetic/ester fluids</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (BB series) or Aluminium alloy (AB series)</td>
              </tr>
              <tr>
                <td><strong>Maximum Operating Pressure</strong></td>
                <td>Typically 0–10 bar (varies by mounting configuration; specify requirements)</td>
              </tr>
              <tr>
                <td><strong>Mounting Orientation</strong></td>
                <td>Vertical (side-by-side viewing); 90° flange mount available</td>
              </tr>
              <tr>
                <td><strong>Visible Level Range</strong></td>
                <td>Dependent on tank geometry; typically 500–1000 mm viewing height</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Available Models & Mounting Options</h2>

          <h3>Thread Mounting (Vertical Mount)</h3>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Mounting Thread</th>
                <th>Brass Model</th>
                <th>Aluminium Model</th>
                <th>Typical Tank Size</th>
              </tr>
            </thead>
            <tbody>
              {threadMountingData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.mountingThread}</td>
                  <td>{row.brass}</td>
                  <td>{row.aluminium}</td>
                  <td>{idx === 0 ? 'Small–Medium' : idx === 1 ? 'Medium–Large' : 'Large–Extra-Large'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Flange Mounting (Horizontal/90° Configuration)</h3>
          <ul>
            <li><strong>Model P-250*L</strong> - Aluminium body with standard flange</li>
            <li><strong>Model BG-1FCL</strong> - Brass body with customizable flange pattern</li>
            <li><strong>Model BG-1FL</strong> - Alternative flange configuration for specific tank designs</li>
          </ul>
        </section>

        <section>
          <h2>How It Works</h2>
          <p>
            The vertical oil level indicator employs a simple float mechanism enclosed within a protected cylindrical chamber. 
            As oil level rises, the buoyant nitrophyl float rises with it, creating a vertical scale indication visible through 
            the polycarbonate window. The refractive properties of the window and chamber geometry create a magnification effect, 
            enabling accurate level observation from several meters distance. Internal O-ring seals maintain a hermetic seal 
            between the tank pressure and the float chamber, ensuring no oil leakage or contamination. The float remains absolutely 
            calibrated once installed—no re-zeroing or adjustment is ever required.
          </p>
        </section>
        <section>
          <h2>Installation Instructions</h2>
          <h3>Threaded Mount Installation:</h3>
          <ol>
            <li>Locate the vertical threaded boss on the transformer tank (typically 1", 1½", or 2" BSP)</li>
            <li>Clean the threaded port to remove any debris, rust, or old sealant</li>
            <li>Wrap the threaded end of the OLI with 3–4 layers of PTFE thread seal tape</li>
            <li>Screw the indicator in by hand until hand-tight</li>
            <li>Using a wrench on the hex body, tighten with moderate force (typically 15–25 Nm)</li>
            <li>Ensure the indicator is oriented vertically with the window facing the observation point</li>
            <li>Fill the tank with oil, observing the float rise as level increases</li>
            <li>Verify the float position corresponds to the actual tank level before commissioning</li>
          </ol>

          <h3>Flange Mount Installation:</h3>
          <ol>
            <li>Confirm that the mating flange surface on the tank is clean and properly machined</li>
            <li>Place the gasket on the tank flange, aligning with bolt holes</li>
            <li>Position the OLI assembly and insert bolts loosely</li>
            <li>Tighten bolts in a star pattern to ensure even gasket compression</li>
            <li>Final torque: 20–40 Nm depending on flange size (refer to engineering drawing for exact value)</li>
            <li>Confirm the float chamber is vertical or at the design angle</li>
            <li>Fill the tank gradually and verify float operation</li>
          </ol>
        </section>

        <section>
          <h2>Operational Monitoring</h2>
          <ul>
            <li><strong>Daily:</strong> Visual inspection of the window for clarity and float position verification</li>
            <li><strong>Weekly:</strong> Manual level check against tank documentation; confirm OLI and measured levels correspond</li>
            <li><strong>Monthly:</strong> Inspect window for external debris or contamination; clean with soft cloth if needed</li>
            <li><strong>Quarterly:</strong> Check OLI body for external corrosion or seal deterioration</li>
            <li><strong>Annually:</strong> Verify that the indicators on multiple OLIs on the same tank show consistent level readings</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance & Service</h2>
          <ul>
            <li><strong>Window Cleaning:</strong> Use a soft, non-abrasive cloth; avoid harsh solvents or squeegees</li>
            <li><strong>Seal Replacement:</strong> If light oil seepage appears around the flange, replace O-rings using field-service kits</li>
            <li><strong>Float Inspection:</strong> If the float becomes sluggish or stuck, the indicator may require internal cleaning (contact Maier)</li>
            <li><strong>Diaphragm Service:</strong> If the seal fails completely (heavy oil leak), contact Maier for replacement or overhaul</li>
            <li><strong>Spare Parts Stock:</strong> Maintain replacement O-ring kits and polycarbonate window assemblies for critical units</li>
            <li><strong>End-of-Life:</strong> When the unit reaches end of service (typically after 15–20 years of continuous operation), schedule replacement</li>
          </ul>
        </section>

        <section>
          <h2>Fluid Compatibility</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Fluid Type</th>
                <th>Seal Material</th>
                <th>Float Material</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mineral Oil (IEC 60296)</td>
                <td>Nitrile (NBR) — Standard</td>
                <td>Nitrophyl</td>
                <td>Proven compatibility; standard configuration</td>
              </tr>
              <tr>
                <td>Synthetic Oil (PAO, PAG)</td>
                <td>Viton (FKM)</td>
                <td>Synthetic elastic</td>
                <td>Requires alternate seal material; specify at order</td>
              </tr>
              <tr>
                <td>Ester Oil (HETG, HEES)</td>
                <td>Viton (FKM)</td>
                <td>Fluorocarbon</td>
                <td>Special configuration required; consult Maier for availability</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>When ordering, specify:</p>
          <ul>
            <li><strong>Model Code:</strong> BB-80*L (brass 1" thread), AB-80L (aluminium 1" thread), etc.</li>
            <li><strong>Mounting Type:</strong> Threaded vertical, flange horizontal, or custom configuration</li>
            <li><strong>Thread Type (if threaded):</strong> BSP (standard), NPT, or metric</li>
            <li><strong>Fluid Type:</strong> Mineral oil, synthetic, or ester-based</li>
            <li><strong>Operating Pressure:</strong> Specify max tank pressure for seal selection</li>
            <li><strong>Seal Material:</strong> Nitrile (standard) or Viton (for synthetic/ester fluids)</li>
            <li><strong>Special Requirements:</strong> High-temperature, outdoor-rated, coloured fluid, etc.</li>
          </ul>
        </section>

        <section>
          <h2>Troubleshooting Guide</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Symptom</th>
                <th>Likely Cause</th>
                <th>Corrective Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oil leaks from threaded connection</td>
                <td>Loose fitting; degraded O-ring</td>
                <td>Tighten using wrench; if still leaking, replace O-ring kit</td>
              </tr>
              <tr>
                <td>Float stuck at top or bottom</td>
                <td>Contamination in float chamber; degraded float</td>
                <td>Contact Maier service; indicator requires internal cleaning</td>
              </tr>
              <tr>
                <td>Window cloudy or discoloured</td>
                <td>Polycarbonate degradation; internal contamination</td>
                <td>Clean externally first; if persists, replace window assembly</td>
              </tr>
              <tr>
                <td>Level reading inconsistent with tank level</td>
                <td>OLI not vertical; float displaced; another OLI giving different reading</td>
                <td>Verify OLI mounting angle; check for physical damage; recalibrate if multiple units present</td>
              </tr>
              <tr>
                <td>Float doesn't move when oil is added</td>
                <td>Float disconnected; chamber pressure imbalance</td>
                <td>Turn off tank pressure; contact Maier service for inspection</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Related Products</h2>
          <ul>
            <li><Link to="/products/oil-level-indicator/threaded">Threaded Oil Level Indicator</Link> - Compact vertical design</li>
            <li><Link to="/products/oil-level-indicator/prismatic">Prismatic Oil Level Indicator</Link> - Enhanced magnification</li>
            <li><Link to="/products/oil-level-indicator/tubular">Tubular Oil Level Indicator</Link> - Alternative gauge type</li>
            <li><Link to="/products/pressure-relief-valves-with-oil-level-indicator">PRV with Oil Level Indicator</Link> - Combined protection & monitoring</li>
          </ul>
        </section>

        <section>
          <h2>Downloads & Documentation</h2>
          <ul>
            <li><a href={section.catalogueLink || '/downloads/Oil Level Indicator Catalogue.pdf'} target="_blank" rel="noopener noreferrer">Complete OLI Product Catalogue</a></li>
            <li><a href="/downloads/OLI Installation Guide.pdf" target="_blank" rel="noopener noreferrer">Installation & Commissioning Guide</a></li>
            <li><a href="/downloads/OLI Maintenance Manual.pdf" target="_blank" rel="noopener noreferrer">Maintenance & Service Manual</a></li>
            <li><a href="/downloads/O-Ring Kits & Spare Parts.pdf" target="_blank" rel="noopener noreferrer">Spare Parts & Field Service Kits</a></li>
          </ul>
        </section>

        <section>
          <h2>Technical Support</h2>
          <p>
            Maier's technical team is available for consultation on OLI selection, installation, and maintenance. 
            For specialized applications, custom mounting configurations, or emergency field support, contact our technical sales department.
          </p>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/oil-level-indicator/${item.slug}`}
                className={`subsection-chip ${item.slug === 'vertical' ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </ProductPageLayout>
  );
}
