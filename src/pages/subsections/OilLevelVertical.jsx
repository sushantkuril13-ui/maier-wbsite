import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Vertical Oil Level Indicator';

export default function OilLevelVertical() {
  const slides = getSubsectionSlides('oil-level-indicator', 'vertical');
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
      activeSubsectionSlug="vertical"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            Vertical Oil Level Indicator is a reliable and efficient level-monitoring device designed for hermetically sealed transformers, industrial tanks, and similar vessels. Engineered for general industrial applications, it provides accurate visual indication of fluid levels, helping operators monitor equipment conditions and maintain safe operation. Its specially designed transparent viewing section offers excellent visibility from a distance by utilizing refractive properties, enabling quick and easy level inspection without the need for complex instruments. The gauge is simple to install and requires minimal maintenance. A high-quality compatible rubber seal ensures a leak-proof assembly, preventing fluid loss and maintaining system integrity. Built for durability and dependable performance, the Oil Level Gauge is suitable for both indoor and outdoor applications, making it an ideal solution for transformer and tank level monitoring requirements.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>UV Protected Polycarbonate Clear window.</li>
            <li>Nitrophyl Float suitable for use in transformer oil.</li>
            <li>Working Temperature- -40 to 120 ⁰C</li>
          </ul>
        </section>

        <section>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Options / Variants</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Material</td><td>Brass, Aluminium</td></tr>
              <tr><td>Thread Size</td><td>1", 1.5", 2"</td></tr>
              <tr><td>Cap Type</td><td>Transparent, Metal (Brass / Aluminium)</td></tr>
              <tr><td>Mounting Type</td><td>Threaded, Flange</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>More Oil Level Indicator Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/oil-level-indicator/${item.slug}`}
                className={`subsection-chip ${item.slug === 'vertical' ? 'active' : ''}`}
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
