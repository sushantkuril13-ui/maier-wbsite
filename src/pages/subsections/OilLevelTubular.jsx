import React from 'react';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Tubular Oil Level Indicator';

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
            The Tubular Oil Level Indicator combines a transparent tube element with a floating indicator ball to provide continuous, maintenance-free level monitoring. Available in both polycarbonate and acrylic tube variants, tubular gauges offer simplicity, durability, and proven performance in transformer applications spanning decades. The direct tube design allows for clear inline visualization of oil level with minimal installation complexity wide industrial use.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Simple Float Mechanism: No complex linkages or electronics</li>
            <li>Transparent Tube Options: Polycarbonate or Acrylic</li>
            <li>Dual-Type Float: ATOLG and BTOLG designs for specific mounting orientations</li>
            <li>Anti-Theft Design Option: Back-bolt mounting available for secure installations</li>
            <li>Wide Temperature Range: Reliable operation from -40°C to +120°C</li>
            <li>Multiple Fluid Compatibility: Mineral oil, synthetic PAO, and ester-based fluids</li>
            <li>Zero Maintenance: No calibration, sealing, or adjustments required after installation</li>
            <li>Field Proven: Decades of proven reliability in utility and industrial transformers worldwide</li>
          </ul>
        </section>

        <section>
          <h2>Model (TOLG)</h2>
          <h3>Different Models are:</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Model (TOLG)</th>
                <th>Bolt Tightening Position</th>
                <th>Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ATOLG</td><td>Back</td><td>Anti-theft design</td></tr>
              <tr><td>BTOLG</td><td>Front</td><td>Easy front-side tightening</td></tr>
            </tbody>
          </table>
        </section>
      </article>
    </ProductPageLayout>
  );
}
