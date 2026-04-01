import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentBrassCap() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'Brass Cap Options' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="brass-cap"
    >
      <article>
        <h1>Brass Cap Options</h1>

        <section>
          <h2>Overview</h2>
          <p>
            All tank component models (GFV-1 through GFV-6) have the option of availability with or without Brass Cap.
            The Brass Cap provides enhanced sealing, protection, and ease of operation.
          </p>
        </section>

        <section>
          <h2>Features of Brass Cap</h2>
          <ul>
            <li>
              <strong>Maximum Sealing Force:</strong> Provides maximum sealing with minimum effort, ensuring reliable
              operation.
            </li>
            <li>
              <strong>Dirt Protection:</strong> Avoiding entry of any dirt particles to the valve mouth to impair the
              operating efficiency of valve core.
            </li>
            <li>
              <strong>Easy Operation:</strong> Ergonomic design allows comfortable hand operation without tools.</li>
            <li>
              <strong>Durability:</strong> Brass construction ensures long-term reliability and corrosion resistance.
            </li>
            <li>
              <strong>Professional Appearance:</strong> Enhanced aesthetic with professional finish options.</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When ordering tank components, you have two options:
          </p>
          <ul>
            <li><strong>With Brass Cap:</strong> Recommended for general use and outdoor installations</li>
            <li><strong>Without Brass Cap:</strong> Suitable for space-constrained applications or when cap protection is not required</li>
          </ul>
        </section>

        <section>
          <h2>Application Recommendations</h2>
          <ul>
            <li>
              <strong>Indoor Transformers:</strong> Brass cap optional depending on maintenance preferences
            </li>
            <li>
              <strong>Outdoor Transformers:</strong> Brass cap strongly recommended for protection against environmental
              contamination
            </li>
            <li>
              <strong>High-Vibration Environments:</strong> Brass cap helps prevent accidental opening and loss of
              pressure
            </li>
            <li>
              <strong>Hermetically Sealed Tanks:</strong> Brass cap essential to maintain seal integrity
            </li>
          </ul>
        </section>

        <section>
          <h2>Compatibility</h2>
          <p>
            Brass Cap options are available for all tank component models:
          </p>
          <ul>
            <li>GFV-1 with / without Brass Cap</li>
            <li>GFV-2 with / without Brass Cap</li>
            <li>GFV-3 with / without Brass Cap</li>
            <li>GFV-4 with / without Brass Cap</li>
            <li>GFV-5 with / without Brass Cap</li>
            <li>GFV-6 with / without Brass Cap</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'brass-cap' ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for tank components.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
