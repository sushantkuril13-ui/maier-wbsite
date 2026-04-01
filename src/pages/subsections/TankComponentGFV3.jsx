import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV3() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-3' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-3"
    >
      <article>
        <h1>GFV-3</h1>

        <section>
          <h2>Overview</h2>
          <p>GFV-3 is a specialized tank valve component designed for transformer applications requiring medium-capacity fast-response inflation and deflation operations.</p>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            GFV-3 is used for quick inflation, deflation and gauging of sealed transformer containers and similar
            industrial vessels. It provides reliable performance for standard pressure range operations with medium
            throughput capacity.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Medium-capacity valve for industrial transformer applications</li>
            <li>Valve-core technology with precision engineering</li>
            <li>Reliable sealing and repeated operation capability</li>
            <li>Compact design for efficient space utilization</li>
            <li>Compatible with standard transformer accessories</li>
          </ul>
        </section>

        <section>
          <h2>Key Components</h2>
          <ul>
            <li>
              <strong>Plug:</strong> Single piece construction permits full flow of gas giving clear & fast
              inflation/deflation.
            </li>
            <li>
              <strong>Teflon Sleeve:</strong> Super slippery, self-swiveling & non-sticky gasket turns as it tightens,
              thus maintaining a perfect sealing.
            </li>
            <li>
              <strong>Ferrule & Plunger Washer:</strong> Scientifically designed to optimum air blast along with
              cleaning the plunger washer each time valve operates.
            </li>
            <li>
              <strong>Spring:</strong> Corrosion Resistant Stainless Steel / Brass coil spring provide right tension
              for the best seal.
            </li>
            <li>
              <strong>Plunger Pin:</strong> Seating at the top & bottom of plunger pin provides positive location
              for inflation/deflation pressure gauge.
            </li>
            <li>
              <strong>Brass Valve Cap:</strong> Provides maximum sealing force with minimum effort.
            </li>
          </ul>
        </section>

        <section>
          <h2>Additional Options</h2>
          <ul>
            <li><strong>Brass Cap Options:</strong> All models have option of availability with / without Brass Cap.</li>
            <li><strong>Finish Options:</strong> Available in Natural Finish / Nickel Plated.</li>
          </ul>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'gfv-3' ? 'active' : ''}`}
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
