import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Vertical Oil Level Indicator';

const threadMountingData = [
  {
    mountingThread: 'G-1" (1-BSP)',
    brass: 'BB-80*L',
    aluminium: 'AB-80L'
  },
  {
    mountingThread: 'G-1½" (1.5-BSP)',
    brass: 'BB-120*L',
    aluminium: 'N/A'
  },
  {
    mountingThread: 'G-2" (2-BSP)',
    brass: 'BB-240*L',
    aluminium: 'N/A'
  }
];

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
          <h2>Application</h2>
          <p>
            Oil level gauges are designed for general industrial use for level monitoring of hermetically sealed
            transformer tanks and similar vessels. These vertical oil level indicators provide clear visibility and
            reliable long-term operation in sealed environments.
          </p>
        </section>

        <section>
          <h2>Working & Features</h2>
          <ul>
            <li>Clear visibility due to refractive property and compatible leak-proof seals.</li>
            <li>UV-protected polycarbonate clear window.</li>
            <li>Nitrophyl float suitable for transformer oil.</li>
            <li>Working temperature: -40 to 120°C.</li>
            <li>Easy to fit construction gives clear visibility from distance due to refractive property.</li>
            <li>Depending upon nature of liquid, seal ensures Leak Proof Assembly.</li>
          </ul>
        </section>

        <section>
          <h2>Mounting Options</h2>

          <h3>Thread Mounting (Vertical)</h3>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Mounting Thread</th>
                <th>Brass (B)</th>
                <th>Aluminium (A)</th>
              </tr>
            </thead>
            <tbody>
              {threadMountingData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.mountingThread}</td>
                  <td>{row.brass}</td>
                  <td>{row.aluminium}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Flange Mounting (Normal)</h3>
          <ul>
            <li><strong>Model P-250*L</strong> - Body: Aluminium</li>
            <li><strong>Model BG-1FCL</strong> - Flange Mounting Configuration</li>
            <li><strong>Model BG-1FL</strong> - Alternative Flange Configuration</li>
          </ul>
        </section>

        <section>
          <h2>Technical Notes</h2>
          <ul>
            <li>All units come with UV-protected polycarbonate windows for long-term outdoor reliability.</li>
            <li>Nitrile rubber seals are standard; Viton and other compatible materials available upon request.</li>
            <li>Operating pressure range: typically 0 to 10 bar depending on mounting configuration.</li>
            <li>Installation should be vertical or horizontal depending on tank orientation and visibility requirements.</li>
          </ul>
        </section>

        <section>
          <h2>More in this Section</h2>
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
          <p>Download catalogue and datasheet documents for this subsection.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
