import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Tubular Oil Level Indicator';

const modelVariants = [
  {
    series: 'ATOLG***',
    description: 'Back-bolt tightening, anti-theft style.',
    features: [
      'Bolting from rear provides anti-theft design',
      'Secure mounting for outdoor installations',
      'Ideal for areas with high theft risk'
    ]
  },
  {
    series: 'BTOLG***',
    description: 'Front-bolt tightening style.',
    features: [
      'Bolting from front for easier maintenance',
      'Standard design for general applications',
      'Convenient service access'
    ]
  }
];

export default function OilLevelTubular() {
  const slides = getSubsectionSlides('oil-level-indicator', 'tubular');
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
      activeSubsectionSlug="tubular"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Tubular Oil Level Indicator combines a transparent tube element with a floating indicator ball to provide continuous, 
            maintenance-free level monitoring. Available in both polycarbonate (traditional high-reliability) and acrylic (lightweight alternative) tube variants, 
            tubular gauges offer simplicity, durability, and proven performance in transformer applications spanning decades. The direct tube design allows 
            for clear inline visualization of oil level with minimal installation complexity wide industrial use.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Simple Float Mechanism:</strong> No complex linkages or electronics</li>
            <li><strong>Transparent Tube Options:</strong> Polycarbonate (durable) or Acrylic (clarity)</li>
            <li><strong>Dual-Type Float:</strong> ATOLG and BTOLG designs for specific mounting orientations</li>
            <li><strong>Anti-Theft Design Option:</strong> Back-bolt mounting available for secure installations</li>
            <li><strong>Wide Temperature Range:</strong> Reliable operation from -40°C to +120°C</li>
            <li><strong>Multiple Fluid Compatibility:</strong> Mineral oil, synthetic PAO, and ester-based fluids</li>
            <li><strong>Zero Maintenance:</strong> No calibration, sealing, or adjustments required after installation</li>\n            <li><strong>Field Proven:</strong> Decades of proven reliability in utility and industrial transformers worldwide</li>\n          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Available Models</strong></td>
                <td>ATOLG***, BTOLG*** (mounting variations)</td>
              </tr>
              <tr>
                <td><strong>Tube Material - Option A</strong></td>
                <td>Polycarbonate (ATOLG) — Standard, extremely durable</td>
              </tr>
              <tr>
                <td><strong>Tube Material - Option B</strong></td>
                <td>Acrylic (BTOLG) — Superior optical clarity alternative</td>
              </tr>
              <tr>
                <td><strong>Float Material</strong></td>
                <td>Nitrophyl synthetic elastomer with integrated ball valve</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C (liquid medium)</td>
              </tr>
              <tr>
                <td><strong>Standard Seals</strong></td>
                <td>Nitrile rubber (NBR) gaskets and O-rings</td>
              </tr>
              <tr>
                <td><strong>Alternative Seals</strong></td>
                <td>Viton (FKM) for synthetic and ester-based oils</td>
              </tr>
              <tr>
                <td><strong>Maximum Operating Pressure</strong></td>
                <td>Typically 0–5 bar (varies by mounting; specify requirements)</td>
              </tr>
              <tr>
                <td><strong>Tube Length</strong></td>
                <td>Typically 300–500 mm depending on tank design</td>
              </tr>
              <tr>
                <td><strong>Service Life</strong></td>
                <td>Polycarbonate: 20+ years; Acrylic: 10–15 years typical</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Model Variants & Styles</h2>
          <p>
            Tubular oil level indicators are available with different mounting styles optimized for various installation scenarios. 
            The model nomenclature is: <strong>TOLG***</strong> where <strong>***</strong> represents the PCD (Pitch Circle Diameter) of the mounting holes in mm.
          </p>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Model Series</th>
                <th>Description</th>
                <th>Mounting Style</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ATOLG***</strong></td>
                <td>Back-bolt tightening, anti-theft design</td>
                <td>Bolting from rear provides anti-theft security</td>
                <td>Outdoor yards, high-theft risk areas, secure installations</td>
              </tr>
              <tr>
                <td><strong>BTOLG***</strong></td>
                <td>Front-bolt tightening style</td>
                <td>Bolting from front for easy maintenance</td>
                <td>Standard installations, indoor substations, convenient service access</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>How Tubular Indicators Work</h2>
          <p>
            The tubular gauge contains a precision-engineered floating ball that rises and falls with liquid level. As transformer oil or dielectric fluid 
            fills the tube, buoyancy forces lift the ball vertically. The ball position directly indicates liquid level—no magnification, no calibration, 
            no electronics. This elegant simplicity has made tubular gauges the industry standard for utility transformers and industrial applications. 
            The transparent tube allows direct observation of both the float and liquid column, providing absolute confidence in level indication.
          </p>
        </section>

        <section>
          <h2>Installation Guide</h2>
          <ol>
            <li>Verify tank mounting bosses alignment with gauge mounting holes (check PCD match)</li>
            <li>Position tubular gauge vertically or at slight angle for optimal visibility depending on tank configuration</li>
            <li>Clean tank mounting areas to remove debris and corrosion</li>
            <li>Use appropriate bolts and washers rated for continuous service</li>
            <li>Apply sealing liquid or PTFE tape to all threaded connections for leak prevention</li>
            <li>Tighten bolts in a cross-pattern with moderate, even force to ensure proper seal</li>
            <li>Refill tank gradually while observing float movement to verify proper operation</li>
            <li>Check seal integrity daily for first week, then periodically before transformer operation</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance & Longevity</h2>
          <ul>
            <li><strong>Polycarbonate Tubes:</strong> Expected service life 20+ years with minimal maintenance</li>
            <li><strong>Acrylic Tubes:</strong> Expected service life 10–15 years; replace once material becomes cloudy or brittle</li>
            <li>Inspect quarterly for cracks in material or discoloration of tube</li>
            <li>Clean tube surface with soft cloth and mild cleaner if external dirt accumulates</li>\n            <li>Monitor float for sluggish movement—contact Maier if speed decreases over multiple fill cycles</li>
            <li>Replace gaskets if oil seepage appears at connection points; field kits available</li>
            <li>Document float positions at known tank levels for future trending analysis</li>
            <li>Replace entire unit if tube cracks develop (field-service replacement tubes available)</li>
          </ul>
        </section>

        <section>
          <h2>Polycarbonate vs. Acrylic Comparison</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Polycarbonate (ATOLG***)</th>
                <th>Acrylic (BTOLG***)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Durability</td>
                <td>Excellent (20+ years)</td>
                <td>Good (10–15 years)</td>
              </tr>
              <tr>
                <td>Clarity</td>
                <td>Very good; slight amber tint over time</td>
                <td>Excellent clarity; may cloud after 10+ years</td>
              </tr>
              <tr>
                <td>Chemical Resistance</td>
                <td>Superior to all standard fluids</td>
                <td>Good for mineral oils; check for synthetics</td>
              </tr>
              <tr>
                <td>Impact Resistance</td>
                <td>Excellent; flexible material</td>
                <td>Moderate; more brittle</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>Standard weight</td>
                <td>Slightly lighter</td>
              </tr>
              <tr>
                <td>Temperature Range</td>
                <td>-40°C to +120°C</td>
                <td>-40°C to +100°C (softening)</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>Standard</td>
                <td>5–10% less</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Outdoor, harsh environments, long life</td>
                <td>Indoor, clarity requirements</td>
              </tr>
            </tbody>
          </table>
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
                <td>Oil leaks from connection points</td>
                <td>Loose mounting bolts or degraded gasket</td>
                <td>Tighten bolts evenly; if persistent, replace gasket kit</td>
              </tr>
              <tr>
                <td>Float doesn't move when tank fills</td>
                <td>Float stuck or oil not reaching tube yet</td>
                <td>Check tank level; try gentle tank vibration; contact Maier if stuck</td>
              </tr>
              <tr>
                <td>Tube cloudiness or discoloration</td>
                <td>Chemical attack or aging (acrylics especially)</td>
                <td>Replace tube with field-service kit; consider polycarbonate upgrade</td>
              </tr>
              <tr>
                <td>Inaccurate level reading</td>
                <td>Float density changed or contamination in tube</td>
                <td>Empty and flush tube; verify float moves freely</td>
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
                className={`subsection-chip ${item.slug === 'tubular' ? 'active' : ''}`}
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
