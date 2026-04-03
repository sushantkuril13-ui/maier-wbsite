import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Prismatic Oil Level Indicator';

export default function OilLevelPrismatic() {
  const slides = getSubsectionSlides('oil-level-indicator', 'prismatic');
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
      activeSubsectionSlug="prismatic"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Application</h2>
          <p>
            Prismatic oil level indicators are specialized gauge instruments designed for industrial tanks requiring
            wide-angle visibility and reliable level indication over extended viewing ranges. These are particularly
            useful for transformer conservators and similar sealed tank applications.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Available in Polycarbonate and Acrylic materials.</li>
            <li>Different sizes available based on customer requirements.</li>
            <li>Prismatic design provides excellent refractive properties for distant visibility.</li>
            <li>Robust construction suitable for indoor and outdoor environments.</li>
            <li>Leak-proof assembly with compatible seals.</li>
          </ul>
        </section>

        <section>
          <h2>Material Options</h2>
          <ul>
            <li>
              <strong>Polycarbonate:</strong> Superior impact resistance, UV protection, excellent for outdoor
              applications with high mechanical durability.
            </li>
            <li>
              <strong>Acrylic:</strong> Excellent optical clarity, lightweight, suitable for general industrial
              applications.
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Standard Sizes:</strong> Custom dimensions available</li>
            <li><strong>Working Temperature Range:</strong> -40 to 120°C</li>
            <li><strong>Float Type:</strong> Nitrophyl float compatible with transformer oil</li>
            <li><strong>Sealing Material:</strong> Nitrile rubber gasket (standard), Viton available</li>
            <li><strong>Attachment Options:</strong> Threaded or flanged mounting</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When ordering prismatic oil level indicators, please specify:
          </p>
          <ul>
            <li>Length and width dimensions required</li>
            <li>Material preference (Polycarbonate or Acrylic)</li>
            <li>Mounting type (threaded or flanged)</li>
            <li>Thread size if applicable</li>
            <li>Any special sealing material requirements</li>
          </ul>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/oil-level-indicator/${item.slug}`}
                className={`subsection-chip ${item.slug === 'prismatic' ? 'active' : ''}`}
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
