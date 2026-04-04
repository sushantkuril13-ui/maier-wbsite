import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Threaded Pressure Relief Valves - Small Size';

export default function PressureReliefSmallSize() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'threaded');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: 'Threaded', to: '/products/pressure-relief-valves/threaded' },
    { label: 'Small Size' }
  ];

  const smallSizeSpecs = [
    {
      threadNomenclature: '2',
      british: '1/4"',
      metric: 'M12',
      oldModel: 'TS-04',
      passageArea: '30',
      afB: '18',
      afN: '16',
      afM: '18',
      totalLength: '40'
    },
    {
      threadNomenclature: '3',
      british: '3/8"',
      metric: 'M16',
      oldModel: 'TS-03',
      passageArea: '70',
      afB: '22',
      afN: '18',
      afM: '24',
      totalLength: '45'
    },
    {
      threadNomenclature: '4',
      british: '1/2"',
      metric: 'M20',
      oldModel: 'TS-04',
      passageArea: '125',
      afB: '30',
      afN: '24',
      afM: '30',
      totalLength: '55'
    }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valves"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves"
      activeSubsectionSlug="threaded"
      activeSubsubsectionSlug="small-size"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Overview</h2>
          <p>
            Our small-size threaded pressure relief valves are compact, direct-mounting units designed for applications requiring 
            minimal space. With threaded connections in 1/4", 3/8", and 1/2" sizes, these valves provide reliable pressure containment 
            for compact transformer tanks, small pressure vessels, and auxiliary equipment. Each unit is tested individually for 
            operational reliability and long service life.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Compact threaded design—direct mounting without flanges</li>
            <li>Available in three sizes: 1/4" (M12), 3/8" (M16), 1/2" (M20)</li>
            <li>Stainless-steel diaphragm with precision seating</li>
            <li>Dependable spring mechanism for repeatable operation</li>
            <li>Multiple configuration options: plain, with visual indicator, with pull ring, or with rain guard cap</li>
            <li>Suitable for both mineral and synthetic transformer oils</li>
            <li>Available in B.S.P. (British), N.P.T. (American), and metric thread standards</li>
          </ul>
        </section>

        <section>
          <h2>Thread Standards & Specifications</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Size Nomenclature</th>
                <th>British (B/N)</th>
                <th>Metric</th>
                <th>Legacy Model</th>
                <th>Passage Area (mm²)</th>
              </tr>
            </thead>
            <tbody>
              {smallSizeSpecs.map((spec, idx) => (
                <tr key={idx}>
                  <td><strong>{spec.threadNomenclature}</strong></td>
                  <td>{spec.british}</td>
                  <td>{spec.metric}</td>
                  <td>{spec.oldModel}</td>
                  <td>{spec.passageArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Dimensional Data - Small Size Series</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Size 2 (1/4")</th>
                <th>Size 3 (3/8")</th>
                <th>Size 4 (1/2")</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Body A/F (B.S.P. Thread)</strong></td>
                <td>18 mm</td>
                <td>22 mm</td>
                <td>30 mm</td>
              </tr>
              <tr>
                <td><strong>Body A/F (N.P.T. Thread)</strong></td>
                <td>16 mm</td>
                <td>18 mm</td>
                <td>24 mm</td>
              </tr>
              <tr>
                <td><strong>Body A/F (Metric Thread)</strong></td>
                <td>18 mm</td>
                <td>24 mm</td>
                <td>30 mm</td>
              </tr>
              <tr>
                <td><strong>Total Length (±10 mm)</strong></td>
                <td>40 mm</td>
                <td>45 mm</td>
                <td>55 mm</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Available Models & Configurations</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Model Designation</th>
                <th>Description</th>
                <th>Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plain</td>
                <td>BTØ</td>
                <td>Standard valve without extras</td>
                <td>Basic pressure relief</td>
              </tr>
              <tr>
                <td>With Pull Ring</td>
                <td>BTØR</td>
                <td>Stainless-steel pull ring for manual testing</td>
                <td>Field test capability</td>
              </tr>
              <tr>
                <td>With Cap</td>
                <td>BTØC</td>
                <td>Rain guard cap for outdoor protection</td>
                <td>Outdoor installations</td>
              </tr>
              <tr>
                <td>With Cap & Pull Ring</td>
                <td>BTØCR</td>
                <td>Combined rain guard and pull ring</td>
                <td>Outdoor with test access</td>
              </tr>
              <tr>
                <td>With Riveted Cap</td>
                <td>BTØCS</td>
                <td>Permanently affixed rain guard</td>
                <td>Sealed outdoor units</td>
              </tr>
              <tr>
                <td>With Visual Indicator</td>
                <td>BTØF</td>
                <td>Flag-type indicator for actuation visibility</td>
                <td>Monitoring applications</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Working Principle</h2>
          <p>
            The small-size threaded PRV operates on a simple yet effective diaphragm principle. A stainless-steel diaphragm 
            is maintained against its threaded port by a calibrated spring and precision O-ring seal. When internal pressure 
            exceeds the set point, the diaphragm lifts, opening the relief path and allowing excess pressure to escape. The 
            valve automatically reseals when pressure normalizes. Optional visual indicators (flag) pop out when the valve opens, 
            providing instant confirmation of actuation. The compact threaded design allows direct installation into threaded 
            tappings on transformer tanks without additional flanging.
          </p>
        </section>

        <section>
          <h2>Installation Guidelines</h2>
          <ul>
            <li>Identify the appropriate threaded tapping on the tank or component</li>
            <li>Use two wrenches—one on the body, one on the fitting—to avoid twisting internal components</li>
            <li>Apply thread sealant (PTFE tape) to the threaded end only</li>
            <li>Tighten with moderate force until the valve seats properly (typically 15-25 Nm for small sizes)</li>
            <li>For units with pull rings, ensure the ring is positioned for safe manual access</li>
            <li>For rain-guard capped versions, orient the cap downward for optimal water shedding</li>
            <li>Leave adequate clearance around the valve for inspection and maintenance</li>
            <li>If visual-indicator versions are used, position them for easy viewing</li>
          </ul>
        </section>

        <section>
          <h2>Pressure Rating</h2>
          <p>
            Small-size threaded PRVs are typically preset to 1.5–3.5 bar depending on transformer type and application. 
            Custom pressure ratings are available upon request. Always specify the required pressure rating when ordering to ensure 
            proper protection for your specific equipment.
          </p>
        </section>

        <section>
          <h2>Maintenance</h2>
          <ul>
            <li>Inspect the valve visually each service interval for oil seeping or corrosion</li>
            <li>For units with pull rings, test functionality gently—do not force if resistance is felt</li>
            <li>For units with visual indicators, verify that the flag is in the reset position</li>
            <li>Apply a light coat of rust preventative oil to the exterior if exposed to outdoor elements</li>
            <li>If the valve leaks or fails to reseat, contact Maier for valve replacement or servicing</li>
            <li>Keep a record of any pressure relief occurrences for trend analysis</li>
          </ul>
        </section>

        <section>
          <h2>Material Compatibility</h2>
          <ul>
            <li><strong>Mineral Oil:</strong> Nitrile rubber seals (standard)</li>
            <li><strong>Synthetic Oil:</strong> Consult for FKM or EPDM seals</li>
            <li><strong>Ester Oil:</strong> Special sealing material required; specify at order time</li>
            <li><strong>Body:</strong> Brass or ductile iron (specify requirements)</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When ordering small-size threaded PRVs, specify: size (1/4", 3/8", or 1/2"), thread type (B.S.P., N.P.T., or metric), 
            configuration (plain, with cap, with pull ring, with indicator), required pressure setting (bar), and fluid type. 
            Maier provides technical support for all specification details.
          </p>
        </section>

        <section>
          <h2>Related Products</h2>
          <ul>
            <li><Link to="/products/pressure-relief-valves/threaded/medium-size">Medium Size Threaded PRV</Link> - Larger capacities</li>
            <li><Link to="/products/pressure-relief-valves/with-switches">PRV with Electrical Switches</Link> - Monitored systems</li>
            <li><Link to="/products/pressure-relief-valves/flange">Flange PRV Series</Link> - Flanged connections</li>
          </ul>
        </section>

        <section>
          <h2>Downloads</h2>
          <ul>
            <li><a href="/downloads/Small Size Threaded PRV Datasheet.pdf" target="_blank" rel="noopener noreferrer">Detailed Datasheet</a></li>
            <li><a href="/downloads/PRV Catalogue.pdf" target="_blank" rel="noopener noreferrer">Complete PRV Catalogue</a></li>
            <li><a href="/downloads/Thread Standards.pdf" target="_blank" rel="noopener noreferrer">Thread Compatibility Guide</a></li>
            <li><a href="/downloads/Installation Notes.pdf" target="_blank" rel="noopener noreferrer">Installation Reference</a></li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For technical questions, pressure calibration details, custom configurations, or bulk orders of small-size threaded PRVs, 
            contact Maier's sales team. We supply OEMs and end-users worldwide with reliable pressure relief solutions.
          </p>
        </section>
      </article>
    </ProductPageLayout>
  );
}
