import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves-with-oil-level-indicator');

export default function PrvWithOilLevel() {
  const subsectionTitle = 'Pressure Relief Valve with Liquid Level Indicator';
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: subsectionTitle }
  ];

  const slides = section.slides || [];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valve with Oil Level Indicator"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves-with-oil-level-indicator"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Pressure Relief Valve with Liquid Level Indicator (PRV-LLI) combines two critical safety functions in a single, 
            compact assembly: active pressure relief and continuous oil-level monitoring. This integrated device is designed for 
            hermetically sealed transformers where space is limited and dual protection is essential. The combination eliminates 
            the need for separate mounting bosses while providing redundant safety monitoring from a single installation point.
          </p>
          <p>
            Each unit is individually tested for pressure relief operation and level indication accuracy. The PRV-LLI is engineered 
            for extended service life in demanding transformer applications with minimal maintenance.
          </p>
        </section>

        <section>
          <h2>Key Features & Benefits</h2>
          <ul>
            <li><strong>Dual-Function Design:</strong> Pressure relief and level indication in single compact unit</li>
            <li><strong>Positive Resealing PRV:</strong> Automatic reset mechanism; reliable for repeated operation</li>
            <li><strong>Two-Colour Visual Indicator:</strong> Blue = Oil level OK; Red = Refill required</li>
            <li><strong>Robust Float Mechanism:</strong> Nitroscopic float with precision-engineered linkage</li>
            <li><strong>Multiple Mounting Options:</strong> Available in threaded (ALXD) and flange (ALXF) configurations</li>
            <li><strong>Extended Temperature Range:</strong> Operates reliably from -40°C to +105°C liquid temperature</li>
            <li><strong>Chemical Resistant:</strong> Compatible with mineral oil, synthetic, and ester-based fluids</li>
            <li><strong>Outdoor/UV Resistant:</strong> Polycarbonate window rated for long-term outdoor exposure</li>
            <li><strong>Serviceability:</strong> Field-replaceable gaskets, seals, and float kits available</li>
            <li><strong>Optional Viton Seals:</strong> High-temperature or aggressive-fluid applications</li>
          </ul>
        </section>

        <section>
          <h2>Available Models & Variants</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Model Code</th>
                <th>Mounting Type</th>
                <th>Connection Standard</th>
                <th>Typical Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ALXD</strong></td>
                <td>Threaded Mount</td>
                <td>BSP or NPT (specify)</td>
                <td>Retrofit installations; compact transformer tanks; adaptable integration</td>
              </tr>
              <tr>
                <td><strong>ALXF</strong></td>
                <td>Flange Mount</td>
                <td>Customizable bolt pattern</td>
                <td>OEM installations; large sealed transformers; robust static sealing</td>
              </tr>
              <tr>
                <td><strong>ALXD-HT</strong></td>
                <td>Threaded Mount</td>
                <td>BSP or NPT (specify)</td>
                <td>High-temperature applications; synthetic/ester fluids</td>
              </tr>
              <tr>
                <td><strong>ALXF-HT</strong></td>
                <td>Flange Mount</td>
                <td>Customizable bolt pattern</td>
                <td>High-temperature; large sealed systems with demanding requirements</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Pressure Relief Range</strong></td>
                <td>20 to 70 kPa (0.20 to 0.70 kg/cm²) — custom setpoints available</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +105°C (liquid medium)</td>
              </tr>
              <tr>
                <td><strong>Storage Temperature</strong></td>
                <td>-50°C to +70°C (dry condition)</td>
              </tr>
              <tr>
                <td><strong>Float Type</strong></td>
                <td>Nitroscopic synthetic material with precision-engineered linkage</td>
              </tr>
              <tr>
                <td><strong>Visual Indicator Window</strong></td>
                <td>UV-stable polycarbonate (scratch-resistant); resistant to mineral and synthetic oils</td>
              </tr>
              <tr>
                <td><strong>Indicator Colours</strong></td>
                <td>Blue = Normal operating level; Red = Refill level threshold</td>
              </tr>
              <tr>
                <td><strong>Standard Seals (ALXD/ALXF)</strong></td>
                <td>Nitrile rubber (NBR) O-rings and gaskets</td>
              </tr>
              <tr>
                <td><strong>High-Temperature Seals (ALXD-HT/ALXF-HT)</strong></td>
                <td>Viton (FKM) elastomers for extended thermal performance</td>
              </tr>
              <tr>
                <td><strong>Body Material</strong></td>
                <td>Brass (ALXD) or aluminium alloy (ALXF) with stainless-steel internal wetted parts</td>
              </tr>
              <tr>
                <td><strong>Diaphragm</strong></td>
                <td>Stainless steel (316-grade) for superior corrosion resistance</td>
              </tr>
              <tr>
                <td><strong>Reset Mechanism</strong></td>
                <td>Automatic positive resealing upon pressure normalization</td>
              </tr>
              <tr>
                <td><strong>Connection Options (ALXD)</strong></td>
                <td>BSP (British Standard Pipe) or NPT (National Pipe Thread) — specify at order</td>
              </tr>
              <tr>
                <td><strong>Flange Standards (ALXF)</strong></td>
                <td>ISO 1219, SAE, or custom bolt patterns available</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>PRV Mechanism – How It Works</h2>
          <p>
            The integrated PRV employs a diaphragm-based relief system. A precision-calibrated spring holds a stainless-steel 
            diaphragm against its seat via an O-ring seal. When internal pressure exceeds the manufacturer-set threshold (typically 
            0.35 bar for sealed transformers), the diaphragm lifts, opening a relief port. Oil is directed away safely while the 
            mechanical lift is transmitted to an internal linkage connected to the visual indicator. Once pressure normalizes, the 
            spring reseats the diaphragm automatically, restoring the seal. This design enables hundreds of pressure-relief cycles 
            without degradation.
          </p>
        </section>

        <section>
          <h2>Level Indication – How It Works</h2>
          <p>
            The level indicator employs a float mechanism housed in a protected chamber integrated with the main body. As oil level 
            changes, the float rises or falls, mechanically actuating a colour-change indicator visible through the polycarbonate window. 
            The two-colour system simplifies operator interpretation: blue indicates adequate oil level for normal transformer operation, 
            while red indicates that the oil level has dropped below the critical threshold and refilling is required. The indicator 
            is invisible from the exterior when oil level is inadequate, providing unmistakable visual feedback.
          </p>
        </section>

        <section>
          <h2>Installation Instructions</h2>
          <h3>Threaded Mount (ALXD):</h3>
          <ol>
            <li>Locate the correct threaded boss on the transformer tank (typically on the tank wall or top plate)</li>
            <li>Clean the threaded port thoroughly to remove any debris or old sealant</li>
            <li>Wrap the ALXD threaded end with 3–4 layers of PTFE thread seal tape or approved plumber's sealant</li>
            <li>Screw the valve in by hand until hand-tight</li>
            <li>Using two wrenches (one on the body, one on the fitting), tighten slowly to a moderate torque (15–25 Nm for typical sizes)</li>
            <li>Position the indicator window for easy inspection from the control room or access point</li>
            <li>After mounting, pressurise the tank gradually and check for leaks around the threaded seal</li>
            <li>Verify the indicator shows blue (OK) colour once oil level reaches normal operating height</li>
          </ol>

          <h3>Flange Mount (ALXF):</h3>
          <ol>
            <li>Prepare the mating flange surface on the transformer tank; ensure it is clean and flat</li>
            <li>Place the gasket on the tank flange, aligned with bolt holes</li>
            <li>Position the ALXF unit and insert bolts loosely</li>
            <li>Tighten bolts progressively in a star pattern (diagonally opposite bolts) to approximately equal tension</li>
            <li>Final torque: 20–40 Nm depending on flange size (specify exact value for your flange specification)</li>
            <li>Orient the indicator window downward at approximately 45° to avoid direct rain exposure on outdoor units</li>
            <li>After installation, slowly pressurise the tank and inspect the flange joint for leaks</li>
            <li>Confirm the indicator displays blue once oil circulation reaches the design level</li>
          </ol>
        </section>

        <section>
          <h2>Operational Monitoring</h2>
          <ul>
            <li><strong>Daily:</strong> Visual inspection of the indicator window colour from the control room; confirm blue (OK) indication</li>
            <li><strong>Weekly:</strong> Physical inspection of the PRV body for external oil seepage or discolouration</li>
            <li><strong>Monthly:</strong> Check the transformer oil level against the unit's level indication; verify consistency</li>
            <li><strong>Quarterly:</strong> Perform a gentle test of the PRV by manually raising the tank pressure slightly (if safe procedures permit) to confirm the relief port responds</li>
            <li><strong>Annually:</strong> Professional inspection and documentation of any PRV actuations during the year</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance & Service</h2>
          <ul>
            <li><strong>Routine Cleaning:</strong> Wipe the polycarbonate window with a soft, lint-free cloth; avoid abrasive cleaners</li>
            <li><strong>Seal Replacement:</strong> If leakage is detected, replace O-rings and gaskets using field-service kits (available from Maier)</li>
            <li><strong>Float Inspection:</strong> If the indicator becomes sluggish, the float mechanism may require cleaning or replacement</li>
            <li><strong>PRV Servicing:</strong> If the valve chatters, exhibits reduced setpoint accuracy, or fails to reseal, contact Maier for professional overhaul</li>
            <li><strong>Spare Parts Strategy:</strong> Maintain a stock of replacement gasket kits and float assemblies for rapid field repairs on critical units</li>
            <li><strong>End-of-Life:</strong> When the unit reaches end of service life (typically after 15–20 years or 10,000+ cycles), schedule replacement with Maier's technical team</li>
          </ul>
        </section>

        <section>
          <h2>Fluid Compatibility</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Fluid Type</th>
                <th>Seal Material</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mineral Oil (IEC 60296)</td>
                <td>Nitrile (NBR) — Standard</td>
                <td>Standard configuration; proven compatibility</td>
              </tr>
              <tr>
                <td>Synthetic Oil (PAO, PAG)</td>
                <td>Viton (FKM) or Nitrile</td>
                <td>Consult Maier; may require extended-range seals</td>
              </tr>
              <tr>
                <td>Ester Oil (HETG, HEES)</td>
                <td>Viton (FKM) — High-Temperature Variant</td>
                <td>Special sealing kit required; specify ALXD-HT or ALXF-HT</td>
              </tr>
              <tr>
                <td>Biodegradable Oil</td>
                <td>Viton (FKM)</td>
                <td>Requires compatibility verification; contact technical support</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            To order the PRV with Liquid Level Indicator, provide the following specifications:
          </p>
          <ul>
            <li><strong>Model Code:</strong> ALXD (threaded) or ALXF (flange); add "-HT" suffix for high-temperature applications</li>
            <li><strong>Thread Type (ALXD only):</strong> BSP or NPT connection standard</li>
            <li><strong>Flange Specifications (ALXF only):</strong> Bolt pattern, hole diameter, and bolt circle diameter (PCD)</li>
            <li><strong>Pressure Relief Setpoint:</strong> Default 20–70 kPa; specify custom setpoint if different</li>
            <li><strong>Seal Material:</strong> Standard (Nitrile) or high-temperature (Viton)</li>
            <li><strong>Transformer Fluid Type:</strong> Mineral oil, synthetic, ester-based (to confirm compatibility)</li>
            <li><strong>Operating Environment:</strong> Indoor/outdoor; temperature extremes; special coatings if required</li>
            <li><strong>Quantity:</strong> Number of units required</li>
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
                <td>Oil leaks from threaded seal</td>
                <td>Loose connection; degraded gasket</td>
                <td>Tighten using two wrenches; replace O-ring if still leaking</td>
              </tr>
              <tr>
                <td>Indicator stuck in red position</td>
                <td>Float mechanism jammed; insufficient oil level</td>
                <td>Check actual tank oil level first; if level is adequate, replace float kit</td>
              </tr>
              <tr>
                <td>Oil dripping from relief port</td>
                <td>PRV not reseating properly; debris on diaphragm</td>
                <td>Contact Maier service; valve may need internal cleaning or replacement</td>
              </tr>
              <tr>
                <td>Indicator window cloudy/discoloured</td>
                <td>Polycarbonate degradation or internal contamination</td>
                <td>Clean with approved solvent; if persists, replace window assembly</td>
              </tr>
              <tr>
                <td>No pressure relief despite high tank pressure</td>
                <td>Spring weakened; diaphragm degraded</td>
                <td>Shut down transformer immediately; contact service for emergency replacement</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Related Products</h2>
          <ul>
            <li><Link to="/products/pressure-relief-valves/with-switches">Pressure Relief Valves with Electrical Switches</Link> - For remote monitoring</li>
            <li><Link to="/products/pressure-relief-valves/threaded">Threaded Pressure Relief Valves</Link> - Pressure relief only</li>
            <li><Link to="/products/oil-level-indicator">Oil Level Indicator</Link> - Standalone level monitoring</li>
          </ul>
        </section>

        <section>
          <h2>Downloads & Documentation</h2>
          <ul>
            <li>
              <a href="/downloads/PRV WITH LIQUID LEVEL INDICATOR Catalogue.pdf" target="_blank" rel="noopener noreferrer">
                Complete Product Catalogue (PRV-LLI)
              </a>
            </li>
            <li>
              <a href="/downloads/PRV-LLI Installation Guide.pdf" target="_blank" rel="noopener noreferrer">
                Detailed Installation & Commissioning Guide
              </a>
            </li>
            <li>
              <a href="/downloads/PRV-LLI Maintenance Manual.pdf" target="_blank" rel="noopener noreferrer">
                Maintenance & Service Manual
              </a>
            </li>
            <li>
              <a href="/downloads/Gasket Kits & Spare Parts.pdf" target="_blank" rel="noopener noreferrer">
                Spare Parts & Field-Service Kits
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Support & Consultation</h2>
          <p>
            Maier's technical engineering team is available to support all phases of PRV-LLI selection, installation, commissioning, 
            and maintenance. We provide pressure-setpoint customization, special flange configurations, high-temperature sealing options, 
            and comprehensive warranty support. For urgent technical issues or field failures, contact our 24/7 emergency support line.
          </p>
        </section>
      </article>
    </ProductPageLayout>
  );
}
