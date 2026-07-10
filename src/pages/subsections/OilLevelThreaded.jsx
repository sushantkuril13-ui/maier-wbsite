import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Oil sight glass / Threaded Oil Level Indicator';

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
            Oil Sight Glass/Threaded Oil Level Indicators are designed to provide dependable oil level monitoring through a compact, direct-thread mounting arrangement. Ideal for both OEM applications and retrofit installations, especially where installation space is restricted or flange mounting is not feasible, these indicators can be easily screwed into threaded tank openings. Their float-operated mechanism ensures precise and maintenance-free level indication, delivering consistent performance under a wide range of transformer operating conditions.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Direct Thread Mount: It can be mounted directly on the tank without any extra flange.</li>
            <li>Material Options: Brass (standard) or Aluminium alloy (for weight-sensitive applications)</li>
            <li>Precision Float Ball: Nitrophyl float with calibrated density for mineral oil. Various Color option like black , red , green are available.</li>
            <li>Multiple Thread Sizes: Available in BSP / NPT threads.</li>
            <li>Toughened glass used instead of plastic.</li>
            <li>Reliable Sealing: O-ring design maintains hermetic seal under all pressures</li>
            <li>Wide Temperature Range: With a wide temperature range this is one of the best suitable options for high temperature ct/pt or instrument transformers.</li>
            <li>No Calibration: Once installed, requires no adjustment or zeroing</li>
          </ul>
        </section>

        <section>
          <h2>More Oil Level Indicator Models</h2>
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
          <p>Download catalogue and datasheet documents for this product.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
        
      </article>
    </ProductPageLayout>
  );
}
