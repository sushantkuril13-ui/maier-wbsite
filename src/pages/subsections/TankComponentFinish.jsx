import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

const finishOptions = [
  {
    finish: 'Natural Finish',
    description: 'Standard brass or aluminium finish',
    advantages: [
      'Cost-effective option',
      'Authentic material appearance',
      'Suitable for most indoor applications',
      'Easy maintenance'
    ]
  },
  {
    finish: 'Nickel Plated',
    description: 'Chrome/nickel electroplated finish',
    advantages: [
      'Enhanced corrosion resistance',
      'Superior protection for outdoor applications',
      'Professional appearance',
      'Extended service life',
      'Additional protection against rust and oxidation'
    ]
  }
];

export default function TankComponentFinish() {
  const slides = getSubsectionSlides('tank-components', 'finish');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'Finish Options' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="finish"
    >
      <article>
        <h1>Finish Options</h1>

        <section>
          <h2>Overview</h2>
          <p>
            All tank component models (GFV-1 through GFV-6) are available with two finish options: Natural Finish or
            Nickel Plated. The choice of finish affects both the appearance and durability of the component.
          </p>
        </section>

        <section>
          <h2>Available Finish Options</h2>
          {finishOptions.map((option, idx) => (
            <div key={idx}>
              <h3>{option.finish}</h3>
              <p><strong>{option.description}</strong></p>
              <h4>Advantages:</h4>
              <ul>
                {option.advantages.map((adv, aidx) => (
                  <li key={aidx}>{adv}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Selection Guide</h2>

          <h3>Natural Finish - Best For:</h3>
          <ul>
            <li>Indoor transformer installations</li>
            <li>Climate-controlled environments</li>
            <li>Cost-sensitive applications</li>
            <li>Short to medium-term storage</li>
            <li>Applications where authentic material color is preferred</li>
          </ul>

          <h3>Nickel Plated - Best For:</h3>
          <ul>
            <li>Outdoor transformer installations</li>
            <li>High-humidity or coastal environments</li>
            <li>Long-term storage and transportation</li>
            <li>Export applications requiring enhanced corrosion protection</li>
            <li>Applications requiring premium appearance</li>
            <li>Industrial environments with corrosive atmospheres</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>

          <h3>Natural Finish</h3>
          <ul>
            <li><strong>Material Base:</strong> Brass or Aluminium</li>
            <li><strong>Surface Treatment:</strong> None (raw material)</li>
            <li><strong>Corrosion Resistance:</strong> Inherent material properties</li>
            <li><strong>Maintenance:</strong> Regular cleaning recommended in humid environments</li>
          </ul>

          <h3>Nickel Plated</h3>
          <ul>
            <li><strong>Base Material:</strong> Brass or Aluminium</li>
            <li><strong>Plating Type:</strong> Chrome/Nickel electroplatings</li>
            <li><strong>Coating Thickness:</strong> Standard industrial thickness for durability</li>
            <li><strong>Corrosion Resistance:</strong> Superior protection against rust, oxidation, and salt-spray</li>
            <li><strong>Maintenance:</strong> Minimal maintenance required</li>
          </ul>
        </section>

        <section>
          <h2>Application Recommendations by Environment</h2>

          <h3>Indoor, Climate-Controlled</h3>
          <p>
            <strong>Recommended:</strong> Natural Finish
          </p>
          <p>
            Indoor environments with stable temperature and humidity typically provide adequate protection. Natural
            finish is cost-effective for these applications.
          </p>

          <h3>Outdoor, Temperate Climate</h3>
          <p>
            <strong>Recommended:</strong> Nickel Plated
          </p>
          <p>
            Outdoor installations exposed to weather patterns benefit from the additional corrosion protection of
            nickel plating.
          </p>

          <h3>Outdoor, Coastal or Industrial</h3>
          <p>
            <strong>Recommended:</strong> Nickel Plated
          </p>
          <p>
            High-salt or corrosive atmospheric conditions require nickel plating to ensure long-term component
            reliability.
          </p>

          <h3>Sealed/Hermetically Sealed Tanks</h3>
          <p>
            <strong>Recommended:</strong> Natural Finish acceptable; Nickel Plated for extended storage
          </p>
          <p>
            While sealed tanks provide protection, nickel plating is recommended for equipment with extended storage or
            transportation periods.
          </p>
        </section>

        <section>
          <h2>Compatibility</h2>
          <p>
            Finish options are available for all tank component models:
          </p>
          <ul>
            <li>GFV-1 - Natural Finish / Nickel Plated</li>
            <li>GFV-2 - Natural Finish / Nickel Plated</li>
            <li>GFV-3 - Natural Finish / Nickel Plated</li>
            <li>GFV-4 - Natural Finish / Nickel Plated</li>
            <li>GFV-5 - Natural Finish / Nickel Plated</li>
            <li>GFV-6 - Natural Finish / Nickel Plated</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When placing an order, please specify your preferred finish option for each component. If no finish is
            specified, Natural Finish will be the default.
          </p>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'finish' ? 'active' : ''}`}
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
