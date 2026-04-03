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
          <h2>Application</h2>
          <p>
            Tubular oil level gauges are designed for general industrial tank level monitoring with distant clear
            readability. These indicators provide reliable indication of fluid level in large transformers, pressure
            tanks, and similar industrial vessels where visibility from a distance is required.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <ul>
            <li>Refractive gauge body enables visibility from distance.</li>
            <li>Float helps identify liquid level clearly.</li>
            <li>Leak-proof assembly with suitable rubber seal ensures reliable operation.</li>
            <li>Extended tubing design provides level indication across large tanks.</li>
            <li>Mounting on tank side provides unobstructed visibility.</li>
          </ul>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Tubular design suitable for large industrial tanks.</li>
            <li>Float-based indication mechanism for reliability.</li>
            <li>UV-protected materials for outdoor durability.</li>
            <li>Compatible leak-proof seals for hermetically sealed environments.</li>
            <li>Simple installation on standard tank mounting bosses.</li>
          </ul>
        </section>

        <section>
          <h2>Models Available</h2>
          <p>
            Tubular oil level indicators are available with two different mounting styles. The model nomenclature is:
            <strong> TOLG***</strong> where <strong>***</strong> represents the PCD (Pitch Circle Diameter) of the mounting holes in mm.
          </p>

          {modelVariants.map((variant, idx) => (
            <div key={idx}>
              <h3>{variant.series}</h3>
              <p><strong>{variant.description}</strong></p>
              <ul>
                {variant.features.map((feature, fidx) => (
                  <li key={fidx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Material:</strong> Polycarbonate (standard) or Acrylic</li>
            <li><strong>Float Type:</strong> Nitrophyl float suitable for transformer oil</li>
            <li><strong>Working Temperature Range:</strong> -40 to 120°C</li>
            <li><strong>Sealing:</strong> Nitrile rubber gasket (standard), Viton available upon request</li>
            <li><strong>Installation:</strong> Side mounting on tank with leak-proof threaded bosses</li>
          </ul>
        </section>

        <section>
          <h2>Installation Guide</h2>
          <ul>
            <li>Mount vertically or at an angle for best visibility depending on tank configuration.</li>
            <li>Ensure tank mounting bosses are aligned with gauge mounting holes</li>
            <li>Use appropriate bolts and washers for secure fastening</li>
            <li>Apply sealing liquid or Teflon tape to threaded connections for leak prevention</li>
            <li>Check seal integrity periodically, especially before transformer operation</li>
          </ul>
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
