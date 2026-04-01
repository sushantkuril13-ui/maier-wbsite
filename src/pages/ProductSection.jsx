import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../data/productHierarchy.js';
import '../styles/components/ProductHierarchyPages.css';

export default function ProductSection() {
  const { sectionSlug } = useParams();
  const section = getSectionBySlug(sectionSlug);

  if (!section) {
    return (
      <ProductPageLayout showSidebar={false}>
        <article>
          <h1>Product Section Not Found</h1>
          <p>Please return to Transformer Accessories and choose a section.</p>
        </article>
      </ProductPageLayout>
    );
  }

  const hasSubsections = section.subsections && section.subsections.length > 0;
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: section.title }
  ];

  return (
    <ProductPageLayout
      activeCategory={section.title}
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug={section.slug}
    >
      <article>
        <h1>{section.title}</h1>
        {section.slug === 'pressure-relief-valves' && (
          <>
            <section>
              <h2>Application</h2>
              <p>
                Pressure Relief Valve (P.R.V.) is a mechanical safety device used for relief of excessive pressure
                build-up in transformer, top changer, pressure tanks and pressure lines for indoor and outdoor
                applications. It is suitable for repeated operation compared to conventional explosion vent solutions
                that are typically single use.
              </p>
            </section>
            <section>
              <h2>Working</h2>
              <p>
                The release port is sealed by a stainless-steel diaphragm resting on an O-ring. A heavy-duty spring
                set keeps the port closed in normal condition. When pressure exceeds the safe limit due to
                temperature change, vapor formation, or related conditions, the diaphragm lifts and releases pressure.
                The valve then resets automatically once pressure returns below set value. The lift also actuates the
                limit switch and visual indicator mechanism.
              </p>
            </section>
            <section>
              <h2>Note</h2>
              <ol>
                <li>PRV with Nitrile Rubber Gasket.</li>
                <li>Limit switch with IP-67 protection and 3/4" 16 T.P.I. (B.S.C.) PVC Cable Gland.</li>
              </ol>
            </section>
          </>
        )}

        {section.slug === 'oil-level-indicator' && (
          <>
            <section>
              <h2>Application</h2>
              <p>
                Oil level gauges are designed for general industrial use for level monitoring of tanks and similar
                vessels.
              </p>
            </section>
            <section>
              <h2>Working</h2>
              <ul>
                <li>Easy to fit construction gives clear visibility from distance due to refractive property.</li>
                <li>Depending on liquid type, compatible seals ensure leak-proof assembly.</li>
              </ul>
            </section>
          </>
        )}

        {section.slug === 'nitrogen-gas-monitoring-system' && (
          <>
            <section>
              <h2>Application</h2>
              <p>
                Used in transformer and other sealed tanks during storage or transportation to maintain constant
                Nitrogen/Inert Gas/Dry Air pressure and prevent atmospheric air and moisture entry.
              </p>
            </section>
            <section>
              <h2>Working</h2>
              <p>
                Gas regulator maintains positive pressure in the connected tank and automatically allows additional
                gas flow from high-pressure cylinder when pressure drops below set point. Double-stage regulation
                improves flow stability and efficiency.
              </p>
            </section>
          </>
        )}

        {section.slug === 'pressure-relief-valves-with-oil-level-indicator' && (
          <>
            <section>
              <h2>Application</h2>
              <p>
                XD series tubular oil level gauge is specialized for hermetically sealed transformers. It combines
                pressure relief valve at top and level indication (blue for sufficient oil and red for refill).
              </p>
            </section>
            <section>
              <h2>Features</h2>
              <ul>
                <li>Reliable operating pressure from 20 to 70 KPa (0.20 to 0.70 kg/cm sq.).</li>
                <li>Compact rugged design with automatic valve reset and positive resealing.</li>
                <li>Operating temperature: -40 C to 105 C (tank liquid).</li>
                <li>Available as threaded model ALXD and flange model ALXF.</li>
              </ul>
            </section>
          </>
        )}

        {section.slug === 'pressure-alarm-system' && (
          <section>
            <h2>Overview</h2>
            <p>
              Pressure Alarm System content is intentionally aligned with the existing detailed product page, with no
              change requested in the source document.
            </p>
          </section>
        )}

        {section.slug === 'tank-components' && (
          <>
            <section>
              <h2>Application</h2>
              <p>
                Tank valves are designed for quick inflation, deflation and gauging of containers using standard
                accessories such as air chucks, deflators and pressure gauges, especially in hermetically sealed
                transformers.
              </p>
            </section>
            <section>
              <h2>Working</h2>
              <p>
                These valves use valve-core based construction where each component is optimized for sealing,
                operating efficiency and repeated service in field conditions.
              </p>
            </section>
          </>
        )}

        {section.slug === 'solenoid-interlock-device' && (
          <section>
            <h2>Overview</h2>
            <p>
              Solenoid Interlock Device content remains aligned with the existing detailed page, as requested in your
              updated source.
            </p>
          </section>
        )}

        {![
          'pressure-relief-valves',
          'oil-level-indicator',
          'nitrogen-gas-monitoring-system',
          'pressure-relief-valves-with-oil-level-indicator',
          'pressure-alarm-system',
          'tank-components',
          'solenoid-interlock-device'
        ].includes(section.slug) && (
          <p>
            Explore our {section.title.toLowerCase()} range. Choose a subsection below to view model-specific
            details, technical information, and catalogue options.
          </p>
        )}

        {hasSubsections ? (
          <section>
            <h2>Subsections</h2>
            <div className="subsection-grid">
              {section.subsections.map((subsection) => (
                <Link
                  key={subsection.slug}
                  to={`/products/${section.slug}/${subsection.slug}`}
                  className="subsection-card"
                >
                  <h3>{subsection.title}</h3>
                  <p>View technical overview and available catalogue for {subsection.title.toLowerCase()}.</p>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <h2>Overview</h2>
            <p>
              This section currently contains a focused product line. Use the catalogue button below
              for complete documentation.
            </p>
          </section>
        )}

        <section>
          <h2>Catalogue</h2>
          <p>Download the related catalogue and technical documents.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
