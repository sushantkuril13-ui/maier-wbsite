import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Threaded Pressure Relief Valves - Medium Size';

export default function PressureReliefMediumSize() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'threaded');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: 'Threaded', to: '/products/pressure-relief-valves/threaded' },
    { label: 'Medium Size' }
  ];

  const mediumSizeSpecs = [
    {
      threadNomenclature: '4',
      british: '1/2"',
      metric: 'N/A',
      oldModel: 'T-05',
      passageArea: '125',
      afB: '30',
      afN: '24',
      afM: '30',
      totalLength: '55'
    },
    {
      threadNomenclature: '6',
      british: '3/4"',
      metric: 'M26',
      oldModel: 'T-06',
      passageArea: '250',
      afB: '36',
      afN: '30',
      afM: '36',
      totalLength: '55'
    },
    {
      threadNomenclature: '8',
      british: '1"',
      metric: 'M36',
      oldModel: 'G-1',
      passageArea: '400',
      afB: '40',
      afN: '36',
      afM: '45',
      totalLength: '55'
    },
    {
      threadNomenclature: '10',
      british: '1¼"',
      metric: 'M42',
      oldModel: 'G1.25',
      passageArea: '800',
      afB: '46',
      afN: '40',
      afM: '56',
      totalLength: '70'
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
      activeSubsubsectionSlug="medium-size"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Overview</h2>
          <p>
            Our medium-size threaded pressure relief valves bridge the gap between compact small-size units and large flange systems. 
            Designed for direct installation into 1/2" to 1¼" (M26 to M42 metric) threaded ports, these valves deliver 
            significantly higher relief capacity while maintaining the simplicity and reliability of threaded connections. 
            Ideal for medium-to-large transformer tanks and pressure systems requiring robust, maintenance-free operation.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Threaded mount for direct installation—no flanges required</li>
            <li>Four size options: 1/2" (M26), 3/4", 1", 1¼" (M42)</li>
            <li>High passage areas: up to 800 mm² on 1¼" models</li>
            <li>Extra-heavy-duty stainless-steel diaphragm with reinforced spring</li>
            <li>Durable O-ring seals for long operational life</li>
            <li>Available in B.S.P., N.P.T., and metric thread standards</li>
            <li>Multiple configuration options: plain, with pull rings, rain guards, and visual indicators</li>
            <li>Extensively tested for reliability in industrial and utility transformer duty</li>
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
              {mediumSizeSpecs.map((spec, idx) => (
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
          <h2>Dimensional Data - Medium Size Series</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Size 4 (1/2")</th>
                <th>Size 6 (3/4")</th>
                <th>Size 8 (1")</th>
                <th>Size 10 (1¼")</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Body A/F (B.S.P. Thread)</strong></td>
                <td>30 mm</td>
                <td>36 mm</td>
                <td>40 mm</td>
                <td>46 mm</td>
              </tr>
              <tr>
                <td><strong>Body A/F (N.P.T. Thread)</strong></td>
                <td>24 mm</td>
                <td>30 mm</td>
                <td>36 mm</td>
                <td>40 mm</td>
              </tr>
              <tr>
                <td><strong>Body A/F (Metric Thread)</strong></td>
                <td>30 mm</td>
                <td>36 mm</td>
                <td>45 mm</td>
                <td>56 mm</td>
              </tr>
              <tr>
                <td><strong>Total Length (±10 mm)</strong></td>
                <td>55 mm</td>
                <td>55 mm</td>
                <td>55 mm</td>
                <td>70 mm</td>
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
                <th>Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plain</td>
                <td>#TØ</td>
                <td>Standard valve for direct relief applications</td>
                <td>Indoor or protected installations</td>
              </tr>
              <tr>
                <td>With Pull Ring</td>
                <td>#TØR</td>
                <td>Stainless-steel pull ring for manual pressure test</td>
                <td>Field serviceable systems</td>
              </tr>
              <tr>
                <td>With Cap</td>
                <td>#TØC</td>
                <td>Rain guard cap for weather protection</td>
                <td>Outdoor transformer installations</td>
              </tr>
              <tr>
                <td>With Cap & Pull Ring</td>
                <td>#TØR + Cap</td>
                <td>Combined protection with field testing capability</td>
                <td>Outdoor with maintenance access</td>
              </tr>
              <tr>
                <td>With Visual Indicator</td>
                <td>#TØF</td>
                <td>Flag-type mechanical indicator shows actuation</td>
                <td>Remote monitoring of valve operation</td>
              </tr>
              <tr>
                <td>With Electrical Contact (Optional)</td>
                <td>#TØEF</td>
                <td>Electronic limit switch for alarm systems</td>
                <td>Automated remote monitoring</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Working Principle</h2>
          <p>
            The medium-size threaded PRV utilizes the same time-proven diaphragm technology as our entire product line. 
            A precision-machined stainless-steel diaphragm is held firmly against its valve seat via a calibrated heavy-duty spring 
            and dual O-ring seals. During normal operation, internal pressure is contained safely below the set point. 
            When pressure exceeds the factory-calibrated relief threshold (typically 1.5–3.5 bar for transformer service), 
            the diaphragm lifts mechanically, opening a flow path for excess pressure. This action can optionally activate a 
            visual indicator (flag) and/or electrical contacts depending on the model configuration. Once pressure normalizes, 
            the spring reseats the diaphragm automatically, providing zero-maintenance continuous protection.
          </p>
        </section>

        <section>
          <h2>Installation Best Practices</h2>
          <ul>
            <li>Locate the appropriate threaded tapping on the transformer tank (typically on the top or side)</li>
            <li>Use two wrenches for installation: one holding the valve body, one on the connection nut</li>
            <li>Wrap the threaded end with PTFE or plumber's thread seal tape (typically 3–4 wraps)</li>
            <li>Screw in by hand until hand-tight, then tighten with a wrench—typically 20–40 Nm depending on valve size</li>
            <li>Avoid over-tightening; use moderate force to prevent cross-threading or damage to internal components</li>
            <li>For units with pull rings, position the ring downward for safe, convenient access</li>
            <li>For rain-guard versions, ensure the cap points downward for water drainage</li>
            <li>Leave adequate working space around the valve for future maintenance and inspection</li>
            <li>If connected to electrical monitoring, use shielded cables routed away from high-voltage equipment</li>
          </ul>
        </section>

        <section>
          <h2>Pressure Rating & Customization</h2>
          <p>
            Medium-size threaded PRVs are typically preset to 1.5, 2.0, 2.5, or 3.5 bar to match common transformer protection requirements. 
            Custom pressure ratings can be provided upon request. When ordering, always specify your required relief pressure setting 
            to ensure proper equipment protection. Pressure-setting modifications are available through Maier's engineering support team.
          </p>
        </section>

        <section>
          <h2>Applications</h2>
          <ul>
            <li>Medium-to-large power transformers (30–300 MVA range)</li>
            <li>On-load tap-changer tanks requiring independent pressure protection</li>
            <li>Industrial transformer installations with high duty cycles</li>
            <li>Sealed transformer systems with pressure monitoring</li>
            <li>Pressure vessels and accumulators in electrical utility networks</li>
            <li>Outdoor substation transformers requiring weather-resistant designs</li>
          </ul>
        </section>

        <section>
          <h2>Material Compatibility & Sealing</h2>
          <ul>
            <li><strong>Mineral Oil:</strong> Nitrile rubber O-rings (standard)</li>
            <li><strong>Synthetic Oil:</strong> FKM or EPDM seals available—specify at order</li>
            <li><strong>Ester Oil:</strong> Special sealing materials required for compatibility</li>
            <li><strong>Valve Body:</strong> Ductile iron or brass (specify preference)</li>
            <li><strong>Diaphragm:</strong> Stainless steel (316-grade for corrosive environments)</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance & Inspection</h2>
          <ul>
            <li>Conduct visual inspections semi-annually for oil weeping or surface corrosion</li>
            <li>For pull-ring equipped models, test the pull ring gently to verify manual trip capability</li>
            <li>For flag-indicator models, verify that the indicator is in the reset (closed) position</li>
            <li>For electrical-contact models, test the continuity annually via the monitoring system</li>
            <li>If oil seeps from the valve body, contact Maier for professional service or replacement</li>
            <li>Maintain a service log recording all pressure relief events for trend analysis</li>
            <li>Replace the valve if actuations occur frequently, indicating a system problem</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            To order medium-size threaded PRVs, provide the following details: requested port size 
            (1/2", 3/4", 1", or 1¼"), thread type (B.S.P., N.P.T., or metric), configuration 
            (plain, with cap, with pull ring, or with indicator), pressure setting (bar), and transformer fluid type. 
            Maier's technical sales team is ready to assist with specifications and custom requirements.
          </p>
        </section>

        <section>
          <h2>Related Products</h2>
          <ul>
            <li><Link to="/products/pressure-relief-valves/threaded/small-size">Small Size Threaded PRV</Link> - Compact applications</li>
            <li><Link to="/products/pressure-relief-valves/with-switches">PRV with Electrical Switches</Link> - Flanged with monitoring</li>
            <li><Link to="/products/pressure-relief-valves-with-oil-level-indicator">PRV with Oil Level Indicator</Link> - Dual functionality</li>
          </ul>
        </section>

        <section>
          <h2>Downloads & Documentation</h2>
          <ul>
            <li><a href="/downloads/Medium Size Threaded PRV Datasheet.pdf" target="_blank" rel="noopener noreferrer">Comprehensive Datasheet</a></li>
            <li><a href="/downloads/PRV Catalogue.pdf" target="_blank" rel="noopener noreferrer">Complete PRV Product Catalogue</a></li>
            <li><a href="/downloads/Thread Standards.pdf" target="_blank" rel="noopener noreferrer">Thread & Connection Guide</a></li>
            <li><a href="/downloads/Pressure Relief Guidelines.pdf" target="_blank" rel="noopener noreferrer">Technical Guidelines</a></li>
            <li><a href="/downloads/Maintenance Schedule.pdf" target="_blank" rel="noopener noreferrer">Recommended Maintenance Schedule</a></li>
          </ul>
        </section>

        <section>
          <h2>Technical Support</h2>
          <p>
            Maier's engineering and technical sales teams are available to support all aspects of medium-size threaded PRV 
            installations—from pressure calibration and thread compatibility verification to bulk procurement and on-site training. 
            Contact us for comprehensive support on all your pressure relief valve requirements.
          </p>
        </section>
      </article>
    </ProductPageLayout>
  );
}
