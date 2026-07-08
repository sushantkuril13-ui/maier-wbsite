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
                The Pressure Relief Valve (PRV) is a protective mechanical device designed to safely release excess
                pressure from transformers, tap changers, pressure vessels, and pressurized systems. Suitable for
                both indoor and outdoor installations, it provides reliable overpressure protection and can operate
                repeatedly, offering a significant advantage over conventional explosion vents that generally require
                replacement after a single operation.
              </p>
            </section>
            <section>
              <h2>Working</h2>
              <p>
                The valve outlet is sealed by a stainless-steel diaphragm positioned against an O-ring, while a
                robust spring mechanism maintains the valve in the closed position during normal operating conditions.
                If internal pressure rises beyond the preset safe limit due to factors such as temperature
                fluctuations, gas generation, or vapor formation, the diaphragm lifts, allowing the excess pressure
                to escape. Once the pressure drops back below the set threshold, the valve automatically reseals and
                returns to its normal state. During operation, the diaphragm movement also activates the visual
                indicator and limit switch to provide a clear indication of pressure relief.
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
                Oil Level Indicators (OLIs) are essential monitoring devices used in hermetically sealed transformers
                and distribution transformers equipped with expansion tanks. Designed for both indoor and outdoor
                installations, these indicators provide continuous visual monitoring of transformer oil levels,
                ensuring safe and efficient transformer operation. They help detect abnormal conditions such as oil
                leakage, trapped air bubbles, gas generation due to internal faults, or changes in oil volume caused
                by temperature variations.
              </p>
            </section>
            <section>
              <h2>Working</h2>
              <ul>
                <li>The oil level indicator operates on the principle of float movement corresponding to changes in oil level.</li>
                <li>A specially designed float moves up or down as the oil level varies within the transformer tank or conservator.</li>
                <li>This movement is mechanically transmitted to a pointer, which displays the oil level on a calibrated dial.</li>
                <li>Any abnormal drop in oil level may indicate leakage, while unusual fluctuations can signal trapped air, gas formation, or other operating issues.</li>
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
              <h2>Product Overview</h2>
              <p>
                XD series of Tubular Oil Level gauge is specialized product for hermetically sealed transformers.
                It is combo of a pressure relief valve at the top with an oil level indicator where blue indicates
                that the oil is sufficient and red indicates oil is to be refilled.
              </p>
            </section>
            <section>
              <h2>Features</h2>
              <ul>
                <li>Reliable Operating Pressure from 20 to 100 KPa. (0.20 to 1.00 kg/cm sq.)</li>
                <li>Spring Safety Valve is compact, highly reliable and particularly useful for use in transformer and tanks containing non corrosive liquid even in extreme outdoor condition.</li>
                <li>Compact and Rugged Design.</li>
                <li>Positive Resealing Pressure.</li>
                <li>Valve Resetting Automatic. Suitable for repeated use.</li>
                <li>Float compatible with Transformer Oil.</li>
                <li>UV Protected Polycarbonate Clear window.</li>
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
            <h2>Available Models</h2>
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
