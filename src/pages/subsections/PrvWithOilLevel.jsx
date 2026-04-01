import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves-with-oil-level-indicator');
const subsectionTitle = 'Pressure Relief Valve with Oil Level Indicator';

const prvOliModels = [
  {
    mounting: 'Threaded',
    model: 'ALXD'
  },
  {
    mounting: 'Flange',
    model: 'ALXF'
  }
];

export default function PrvWithOilLevel() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valve with Oil Level Indicator', to: '/products/pressure-relief-valves-with-oil-level-indicator' },
    { label: subsectionTitle }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valve with Oil Level Indicator"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves-with-oil-level-indicator"
      activeSubsectionSlug="main"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Application</h2>
          <p>
            The XD series tubular oil level gauge is a specialized product designed for hermetically sealed
            transformers, combining two essential functions in a single assembly:
          </p>
          <ol>
            <li>Pressure Relief Valve at the top with effective diameter of 1"</li>
            <li>Oil Level Indicator where Blue indicates sufficient oil and Red indicates need for refill</li>
          </ol>
          <p>
            This integrated design provides comprehensive tank monitoring and pressure management in a compact
            installation footprint.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Reliable operating pressure from 20 to 70 kPa (0.20 to 0.70 kg/cm²).</li>
            <li>Spring Safety Valve is compact, highly reliable and particularly useful for use in transformer & tanks containing non-corrosive liquid even in extreme outdoor condition.</li>
            <li>Compact and rugged design reduces installation complexity.</li>
            <li>Must be mounted vertically for proper operation.</li>
            <li>Positive resealing pressure ensures consistent performance.</li>
            <li>Operating temperature: -40°C to 105°C (of tank liquid).</li>
            <li>Normally sealed with Nitrile Rubber "O" Ring; Viton available upon request.</li>
            <li>Valve resets automatically for repeated operation.</li>
            <li>Suitable for repeated use over extended equipment lifetime.</li>
            <li>Float compatible with Transformer Oil.</li>
            <li>UV Protected Polycarbonate clear window for outdoor durability.</li>
            <li>Each assembly acts as a conservator reducing need for additional components.</li>
          </ul>
        </section>

        <section>
          <h2>Working Principle</h2>
          <p>
            <strong>Pressure Relief Function:</strong> The release port is sealed by a stainless-steel diaphragm
            resting on an O-ring. A heavy-duty spring keeps the port closed under normal conditions. When pressure
            exceeds the preset limit due to temperature changes or vapor formation, the diaphragm lifts and relieves
            excessive pressure, automatically resetting when pressure normalizes.
          </p>
          <p>
            <strong>Level Indicator Function:</strong> The integrated level gauge uses a float mechanism to show oil
            level. Blue color indicates sufficient oil level, while red color indicates that the transformer requires
            oil refilling. The clear UV-protected window provides visibility from a distance.
          </p>
        </section>

        <section>
          <h2>Available Models</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>PRV Mounting Type</th>
                <th>Model Code</th>
              </tr>
            </thead>
            <tbody>
              {prvOliModels.map((model, idx) => (
                <tr key={idx}>
                  <td>{model.mounting}</td>
                  <td><strong>{model.model}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Model Information</h2>

          <h3>ALXD - Threaded Model</h3>
          <p>
            The ALXD variant features threaded mounting and is designed for direct installation into leak-proof
            threaded bosses on transformer tanks. This configuration provides a quick-installation option for
            retrofit applications or new transformer builds.
          </p>
          <ul>
            <li>Threaded connection simplifies installation</li>
            <li>Suitable for existing transformer tank bosses</li>
            <li>Requires Teflon tape or sealing liquid for leak prevention</li>
          </ul>

          <h3>ALXF - Flange Model</h3>
          <p>
            The ALXF variant features flange mounting and is designed for direct installation on tank flanges through
            bolt holes. This configuration provides superior sealing and is preferred for new transformer designs or
            high-vibration environments.
          </p>
          <ul>
            <li>Flange connection provides robust sealing</li>
            <li>Bolt-hole mounting accepts standard fasteners</li>
            <li>Ideal for applications requiring high mechanical reliability</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>PRV Pressure Range:</strong> 20 to 70 kPa (0.20 to 0.70 kg/cm²)</li>
            <li><strong>Temperature Range:</strong> -40°C to +105°C (Tank liquid)</li>
            <li><strong>Float Type:</strong> Transformer oil compatible nitrophyl float</li>
            <li><strong>Sealing:</strong> Nitrile rubber O-ring standard; Viton available on request</li>
            <li><strong>Window Material:</strong> UV-protected polycarbonate</li>
            <li><strong>Level Indication:</strong> Blue (sufficient) / Red (refill required)</li>
            <li><strong>Effective PRV Diameter:</strong> 1"</li>
            <li><strong>Reset Type:</strong> Automatic positive resealing</li>
          </ul>
        </section>

        <section>
          <h2>Installation Guide</h2>
          <ol>
            <li>Mount the unit vertically on the transformer tank top or conservator.</li>
            <li>
              For ALXD: Use leak-proof threaded boss with matching thread; apply Teflon tape or sealing liquid before
              tightening.
            </li>
            <li>For ALXF: Align flange holes with tank mounting holes; secure with appropriate bolts and washers.</li>
            <li>Ensure gasket is properly seated for leak-free assembly.</li>
            <li>Verify level indicator window is clean and unobstructed for visibility.</li>
            <li>Check all connections periodically, especially after transformer initial fill or oil top-up.</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance</h2>
          <ul>
            <li>Periodically check the level indicator for clarity and accuracy.</li>
            <li>Inspect gaskets and seals for signs of wear or oil leakage.</li>
            <li>In case of persistent pressure rise, inspect for internal valve blockage.</li>
            <li>Replace gaskets and O-rings if leakage occurs.</li>
            <li>Clean the window gently with soft cloth to maintain visibility.</li>
          </ul>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for this product.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
