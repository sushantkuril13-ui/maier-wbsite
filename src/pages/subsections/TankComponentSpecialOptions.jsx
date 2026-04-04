import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');
const subsectionTitle = 'Special Options & Variants';

export default function TankComponentSpecialOptions() {
  const slides = getSubsectionSlides('tank-components', 'special-options-and-variants');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: subsectionTitle }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="special-options-and-variants"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Special Options & Variants</h2>
          <ul>
            <li>
              <strong>GFV-1B Model:</strong> Available with 1/8" B.S.P. Mounting Thread, to be fitted with Rubber "O" or Aluminum Washer.
            </li>
            <li>
              <strong>GFV-2B Model:</strong> Available with 1/8" B.S.P. Mounting Thread, to be fitted with Rubber "O" or Aluminum Washer.
            </li>
            <li>
              <strong>Brass Cap Options:</strong> All models have option of availability with / without Brass Cap.
            </li>
            <li>
              <strong>Finish Options:</strong> All models have option of availability in Natural Finish / Nickel Plated.
            </li>
          </ul>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'special-options-and-variants' ? 'active' : ''}`}
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
