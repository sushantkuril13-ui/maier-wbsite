import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

export default function TankComponentGFV1() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'GFV-1' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="gfv-1"
    >
      <article>
        <h1>GFV-1</h1>

        <section>
          <h2>Overview</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>GFV-1</td>
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
                <td>Longer than usual valves (33mm length). Used for special gases like SF6 applications and switchgears</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            GFV-1 is a specialized tank valve designed for quick inflation, deflation and gauging of containers using
            standard accessories such as air chucks, deflators and pressure gauges. Its elongated design (33mm length)
            makes it particularly suitable for special gas applications like SF6 switchgears and other specialized
            transformer equipment.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Longer than usual valve design (33mm) for deep-mounted applications</li>
            <li>1/8" thread for compact mounting</li>
            <li>Brass construction for superior corrosion resistance</li>
            <li>Available in both NPT and BSP thread standards</li>
            <li>Optimized for SF6 and other specialty gases</li>
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
            <strong>GFV-1B Model:</strong> Available with 1/8" B.S.P. Mounting Thread, to be fitted with Rubber "O"
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
                className={`subsection-chip ${item.slug === 'gfv-1' ? 'active' : ''}`}
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
