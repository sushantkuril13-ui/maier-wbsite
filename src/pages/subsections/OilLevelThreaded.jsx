import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Threaded Oil Level Indicator';

export default function OilLevelThreaded() {
  const slides = getSubsectionSlides('oil-level-indicator', 'threaded');
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
      activeSubsectionSlug="threaded"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            Threaded Oil Level Indicators (Model 502 Series) combine compact direct-thread mounting with reliable float-based level indication. 
            Designed for retrofit applications and OEM installations where space is limited or flange mounting is impractical, these indicators 
            thread directly into tank bosses and provide accurate, maintenance-free operation across the full range of transformer operating conditions.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Direct Thread Mount:</strong> No flanges needed; threads directly into tank bosses</li>
            <li><strong>Material Options:</strong> Brass (standard) or Aluminium alloy (for weight-sensitive applications)</li>
            <li><strong>Precision Float Ball:</strong> Nitrophyl float with calibrated density for mineral oil</li>
            <li><strong>Multiple Thread Sizes:</strong> 1" BSP and 1½" BSP mounting threads</li>
            <li><strong>Reliable Sealing:</strong> O-ring design maintains hermetic seal under all pressures</li>
            <li><strong>Wide Temperature Range:</strong> -40°C to +120°C continuous operation</li>
            <li><strong>Field Serviceable:</strong> Replacement seals and float kits available</li>
            <li><strong>No Calibration:</strong> Once installed, requires no adjustment or zeroing</li>
          </ul>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            Threaded oil level indicators are ideal for transformer tanks where direct thread mounting is preferred over flange installations. 
            Common applications include: liquid-filled transformers, on-load tap-changers, sealed buses, and retrofit projects. The float ball mechanism 
            provides clear visual indication of oil level readable from several meters distance, making them suitable for both attended and remote installations.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Series</strong></td>
                <td>502 (Threaded OLI)</td>
              </tr>
              <tr>
                <td><strong>Material Options</strong></td>
                <td>Brass (BB), Aluminium (AB)</td>
              </tr>
              <tr>
                <td><strong>Thread Sizes</strong></td>
                <td>1" BSP, 1½" BSP</td>
              </tr>
              <tr>
                <td><strong>Thread Type</strong></td>
                <td>G (Whitworth Pipe Thread)</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C (liquid)</td>
              </tr>
              <tr>
                <td><strong>Float Type</strong></td>
                <td>Nitrophyl synthetic elastomer</td>
              </tr>
              <tr>
                <td><strong>Standard Seals</strong></td>
                <td>Nitrile rubber (NBR) O-rings</td>
              </tr>
              <tr>
                <td><strong>Alternative Seals</strong></td>
                <td>Viton (FKM), EPDM (for synthetic/ester oils)</td>
              </tr>
              <tr>
                <td><strong>Maximum Operating Pressure</strong></td>
                <td>Typically 0–10 bar (specify requirements)</td>
              </tr>
              <tr>
                <td><strong>Visible Level Range</strong></td>
                <td>Dependent on thread depth; typically 100–300 mm</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Installation Instructions</h2>
          <ol>
            <li>Locate the threaded boss on the transformer tank (1" or 1½" BSP)</li>
            <li>Clean the threaded port to remove debris and rust</li>
            <li>Wrap the threaded end with 3–4 layers of PTFE thread seal tape</li>
            <li>Screw the indicator in by hand until hand-tight</li>
            <li>Using a wrench on the hex body, tighten with moderate force (15–20 Nm typical)</li>
            <li>Position the float chamber vertically for optimal operation</li>
            <li>Fill the tank with oil and verify float movement</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance & Care</h2>
          <ul>
            <li>Visually inspect the indicator monthly for oil residue or external corrosion</li>
            <li>Verify float movement when tank is filled (expect gradual rise as level increases)</li>
            <li>Clean external surfaces with a soft cloth; avoid harsh solvents</li>
            <li>If seepage appears around the threaded seal, apply additional thread seal tape and re-tighten</li>
            <li>Replace O-rings if permanent seal failure occurs; field-service kits available</li>
            <li>Contact Maier if the float becomes sluggish or unresponsive</li>
          </ul>
        </section>

        <section>
          <h2>Troubleshooting</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Issue</th>
                <th>Cause</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oil leaks from thread joint</td>
                <td>Loose fitting or degraded seal</td>
                <td>Tighten gently with wrench; if leak persists, add PTFE tape and re-tighten</td>
              </tr>
              <tr>
                <td>Float doesn't move</td>
                <td>Float mechanism stuck or chamber pressurized</td>
                <td>Depressurize tank; contact Maier service if problem persists</td>
              </tr>
              <tr>
                <td>Inaccurate level reading</td>
                <td>Contamination in float chamber or float density changed</td>
                <td>Contact Maier for internal inspection and cleaning</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/oil-level-indicator/${item.slug}`}
                className={`subsection-chip ${item.slug === 'threaded' ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for this subsection.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
