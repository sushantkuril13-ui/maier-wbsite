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
          <h2>Model 502 Series</h2>
          <p>
            The 502 series represents our threaded oil level indicator product line, designed for direct threading
            into tank mounting bosses without additional flanges.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Available in Brass and Aluminium materials.</li>
            <li>Float ball indicates clear oil level.</li>
            <li>Available in 1" and 1½" mounting thread sizes.</li>
            <li>Easy installation with standard threading.</li>
            <li>Reliable sealing for hermetically sealed transformers.</li>
          </ul>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            Threaded oil level indicators are ideal for transformer tanks where direct thread mounting is preferred.
            The float ball mechanism provides clear visual indication of oil level from a distance.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Material Options:</strong> Brass (primary), Aluminium (alternative)</li>
            <li><strong>Thread Sizes:</strong> 1" BSP, 1½" BSP</li>
            <li><strong>Working Temperature:</strong> -40 to 120°C</li>
            <li><strong>Float Type:</strong> Nitrophyl float suitable for transformer oil</li>
            <li><strong>Sealing:</strong> Nitrile rubber gasket (standard), Viton available upon request</li>
          </ul>
        </section>

        <section>
          <h2>Installation</h2>
          <p>
            These indicators are mounted by threading directly into the leak-proof threaded boss on the transformer
            tank. Ensure proper sealing using Teflon tape or suitable sealing liquid to prevent oil leakage.
          </p>
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
