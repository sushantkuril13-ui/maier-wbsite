import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV6() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-6' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-6"
    >
      <article>
        <h1>GFV-6</h1>

        <section>
          <h2>Overview</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>GFV-6</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>None (Without thread)</td>
              </tr>
              <tr>
                <td><strong>Material</strong></td>
                <td>Both Brass and Aluminium</td>
              </tr>
              <tr>
                <td><strong>Mounting</strong></td>
                <td>Without thread - mounted from inside of the tank</td>
              </tr>
              <tr>
                <td><strong>Remark/Note</strong></td>
                <td>Economical alternative to GFV-1. To be mounted from inside of the tank.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            GFV-6 is an economical tank valve component designed as a cost-effective alternative to GFV-1. It is mounted
            from inside the transformer tank without thread connection, making it suitable for applications where
            internal mounting space is available and cost optimization is important. It combines the longer valve design
            benefits of GFV-1 with economical internal mounting.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Economical design with GFV-1 equivalent valve length and function</li>
            <li>Internal tank mounting without external threads</li>
            <li>Available in both Brass and Aluminium materials</li>
            <li>Lightweight design reduces installation burden</li>
            <li>Compact and efficient valve-core construction</li>
            <li>Suitable for special gas applications with space-optimized mounting</li>
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
              <strong>Plunger Pin:</strong> Seating at the top & bottom of plunger pin provides positive location.
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
                className={`subsection-chip ${item.slug === 'gfv-6' ? 'active' : ''}`}
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
