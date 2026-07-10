import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Pressure Relief Valves with Switches';

export default function PressureReliefWithSwitches() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'with-switches');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Pressure Relief Valves', to: '/products/pressure-relief-valves' },
    { label: subsectionTitle }
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Relief Valves"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="pressure-relief-valves"
      activeSubsectionSlug="with-switches"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Pressure Relief Valve (PRV) is a reliable mechanical safety device designed to protect transformers,
            tap changers, pressure tanks, and pressure lines from excessive pressure buildup in indoor and outdoor
            applications. Unlike conventional explosion vents, the PRV supports repeated operation, ensuring enhanced
            safety and reduced maintenance. A spring-loaded stainless-steel diaphragm instantly opens when pressure
            exceeds a preset limit, releasing gas, vapor, or liquid to prevent equipment damage. Once pressure
            normalizes, the valve automatically reseals for continued protection. Available with optional limit
            switches, visual indicators, shrouds, and plug-and-socket connections, the PRV offers durable,
            long-lasting performance and dependable operation.
          </p>
        </section>

        <section>
          <h2>Models</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Appx. Port Size</th>
                <th>No. of Mounting Holes</th>
                <th>P.C.D</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>DP-1</td><td>1”</td><td>4</td><td>85 mm</td></tr>
              <tr><td>DP-3</td><td>3”</td><td>4</td><td>125 mm</td></tr>
              <tr><td>DP-6</td><td>6”</td><td>6</td><td>235 mm</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Different Models available are :</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Features</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Without Electrical Contact & Visual Indicator</td><td>DP-Ø</td></tr>
              <tr><td>With Electrical Contact & Visual Indicator</td><td>DP-ØEF#</td></tr>
              <tr><td>With Shroud/ Oil Collection Cap</td><td>DP-ØEF#S</td></tr>
              <tr><td>With Plug and Socket Type Limit Switch Connection</td><td>DP-ØEF#P</td></tr>
              <tr><td>With Shroud /Oil Collection Cap & Plug and Socket Connection</td><td>DP-ØEF#SP</td></tr>
              <tr><td>With Shroud /Oil Collection Cap & Plug and Socket Connection & Cable</td><td>DP-ØEF#SPC</td></tr>
            </tbody>
          </table>
          <p>Where :</p>
          <ul>
            <li>Ø - Size of Release Port i.e., 6”;3”;1”</li>
            <li># - No. of Electrical Contacts [(1 for 1 N.O. & 1 N.C.) & (2 for 2 N.O. & 2 N.C.)]</li>
            <li>S - With Shroud / Oil Direction Cap</li>
            <li>P – Number of Pins</li>
            <li>C – Number of Cable Core</li>
          </ul>
        </section>

        <section>
          <h2>More Pressure Relief Valve Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/pressure-relief-valves/${item.slug}`}
                className={`subsection-chip ${item.slug === 'with-switches' ? 'active' : ''}`}
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
