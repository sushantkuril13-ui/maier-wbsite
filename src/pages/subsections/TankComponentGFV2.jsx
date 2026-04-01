import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV2() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-2' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-2"
    >
      <article>
        <h1>GFV-2</h1>

        <section>
          <h2>Overview</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>GFV-2</td>
              </tr>
              <tr>
                <td><strong>Thread Size</strong></td>
                <td>1/8"</td>
              </tr>
              <tr>
                <td><strong>Material</strong></td>
                <td>Brass</td>
              </tr>
              <tr>
                <td><strong>Available in</strong></td>
                <td>Both NPT and BSP</td>
              </tr>
              <tr>
                <td><strong>Remark/Note</strong></td>
                <td>Most commonly used model. Specially designed smaller size valve to be mounted from inside of the tank.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            GFV-2 is the most commonly used tank valve model. It is specially designed as a smaller size valve to be
            mounted from inside of the tank for quick inflation, deflation and gauging operations. Its compact design
            and internal mounting capability make it ideal for standard transformer applications.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Most popular model for standard transformer applications</li>
            <li>Compact valve suitable for internal tank mounting</li>
            <li>1/8" thread for secure connection</li>
            <li>Brass construction ensures long-term reliability</li>
            <li>Available in both NPT and BSP thread standards</li>
            <li>Valve-core based construction with precision sealing</li>
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
              <strong>Brass Valve Cap:</strong> Provides maximum sealing force with minimum effort. Thus avoiding
              entry of any dirt particles to the valve mouth to impair the operating efficiency of valve core.
            </li>
          </ul>
        </section>

        <section>
          <h2>Special Options</h2>
          <p>
            <strong>GFV-2B Model:</strong> Available with 1/8" B.S.P. Mounting Thread, to be fitted with Rubber "O"
            or Aluminum Washer.
          </p>
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
                className={`subsection-chip ${item.slug === 'gfv-2' ? 'active' : ''}`}
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
