import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionBySlug } from '../data/productHierarchy.js';
import '../styles/components/ProductHierarchyPages.css';

const pressureReliefModelRows = [
  { model: 'DP-1', portSize: '1"', holes: '4', boltSize: 'M08 / 10 mm. O', pcd: '85 mm' },
  { model: 'DP-3', portSize: '3"', holes: '4', boltSize: 'M10 / 12 mm. O', pcd: '125 mm' },
  { model: 'DP-6', portSize: '6"', holes: '6', boltSize: 'M12 / 14 mm. O', pcd: '235 mm' }
];

const pressureReliefFeatureRows = [
  { feature: 'Without Electrical Contact & Visual Indicator', model: 'DP-O' },
  { feature: 'With Electrical Contact & Visual Indicator', model: 'DP-OEF#' },
  { feature: 'With Shroud / Oil Collection Cap', model: 'DP-OEF#S' },
  { feature: 'With Plug and Socket Type Limit Switch Connection', model: 'DP-OEF#P' },
  { feature: 'With Shroud / Oil Collection Cap & Plug and Socket Connection', model: 'DP-OEF#SP' },
  { feature: 'With Shroud / Oil Collection Cap & Plug and Socket Connection & Cable', model: 'DP-OEF#SPC' }
];

function PressureReliefSwitchesContent() {
  return (
    <>
      {pressureReliefModelRows.map((row) => (
        <section key={row.model}>
          <h2>{row.model}</h2>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Port Size</th>
                <th>No. of Holes</th>
                <th>Bolt Size / Hole Size</th>
                <th>P.C.D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{row.model}</td>
                <td>{row.portSize}</td>
                <td>{row.holes}</td>
                <td>{row.boltSize}</td>
                <td>{row.pcd}</td>
              </tr>
            </tbody>
          </table>

          <h3>Models Available</h3>
          <p>Where: O = Size of Release Port (6", 3", 1")</p>
          <p># = No. of Electrical Contacts [(1 for 1 N.O. & 1 N.C.) and (2 for 2 N.O. & 2 N.C.)]</p>
          <p>S = With Shroud / Oil Direction Cap</p>
          <p>P = Number of Pins</p>
          <p>C = Number of Cable Core</p>

          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              {pressureReliefFeatureRows.map((featureRow) => (
                <tr key={`${row.model}-${featureRow.model}`}>
                  <td>{featureRow.feature}</td>
                  <td>{featureRow.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}

function PressureReliefThreadedContent() {
  return (
    <>
      <section>
        <h2>Application</h2>
        <p>
          Pressure Relief Valve (P.R.V.) is a safety device to be used in Transformer, Pressure Tanks and Pressure
          Lines for indoor and outdoor application. It is suitable for repeated operation as compared to
          Conventional Explosion Vent which is for single use. It is compact, highly reliable and particularly
          designed to be used on O.L.T.C., Transformers, and similar equipment or tanks with non-corrosive liquid.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <p>
          Spring Safety Valve can be supplied in Brass or Aluminium construction, compact and highly reliable,
          suitable for transformer and tank service with non-corrosive liquids, including outdoor conditions.
          Typical operating pressure range is 20 to 100 KPa (0.20 to 1.00 kg/cm sq.) with positive resealing
          pressure. Operating temperature is 0 to 100 deg C (tank liquid). Sealing is with Nitrile Rubber Gasket,
          valve reset is automatic, and the unit is suitable for repeated use. Protective rain guard cap directs
          oil spillage downward. Flat mounting gasket can be provided. Depending on fluid type, Viton gasket and
          O-ring options are available. Higher or lower cracking pressure options are also available on request.
        </p>
      </section>

      <section>
        <h2>Note</h2>
        <ul>
          <li>These models can be used as an oil filling cap.</li>
          <li>
            Mounting position is preferably at tank cover or top side with leak-proof welded threaded boss, and
            tightened using Teflon tape or suitable sealing liquid.
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Details</h2>
        <p>These are available in two different sizes:</p>
        <ol>
          <li>Small Size PRV</li>
          <li>Medium Size PRV</li>
        </ol>
      </section>

      <section>
        <h2>Threaded Small Size PRV</h2>
        <p>These are available only in brass.</p>
        <table>
          <thead>
            <tr>
              <th>Thread Nomenclature</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>British (B/N)</td><td>1/4"</td><td>3/8"</td><td>1/2"</td></tr>
            <tr><td>Metric</td><td>M12</td><td>M16</td><td>M20</td></tr>
            <tr><td>Old Model</td><td>TS-04</td><td>TS-03</td><td>TS-04</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Threaded Medium Size PRV</h2>
        <table>
          <thead>
            <tr>
              <th>Thread Nomenclature</th>
              <th>4</th>
              <th>6</th>
              <th>8</th>
              <th>10</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>British (B/N)</td><td>1/2"</td><td>3/4"</td><td>1"</td><td>1 1/4"</td></tr>
            <tr><td>Metric</td><td>NA</td><td>M26</td><td>M36</td><td>M42</td></tr>
            <tr><td>Old Model</td><td>T-05</td><td>T-06</td><td>G-1</td><td>G1.25</td></tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

function OilLevelVerticalContent() {
  return (
    <>
      <section>
        <h2>Application</h2>
        <p>
          Oil level gauge for hermetically sealed transformer and similar tanks for reliable level monitoring.
        </p>
      </section>
      <section>
        <h2>Working & Features</h2>
        <ul>
          <li>Clear visibility due to refractive property and compatible leak-proof seals.</li>
          <li>UV-protected polycarbonate clear window.</li>
          <li>Nitrophyl float suitable for transformer oil.</li>
          <li>Working temperature: -40 to 120 C.</li>
        </ul>
      </section>
      <section>
        <h2>Mounting Options</h2>
        <h3>Thread Mounting (Vertical)</h3>
        <table>
          <thead>
            <tr>
              <th>Mounting Thread</th>
              <th>G-1" (1-BSP)</th>
              <th>G-1 1/2" (1.5-BSP)</th>
              <th>G-2" (2-BSP)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Brass (B)</td><td>BB-80*L</td><td>BB-120*L</td><td>BB-240*L</td></tr>
            <tr><td>Aluminium (A)</td><td>AB-80L</td><td>N/A</td><td>N/A</td></tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

function OilLevelThreadedContent() {
  return (
    <section>
      <h2>Model 502 Series</h2>
      <ul>
        <li>Thread mounting oil level indicator.</li>
        <li>Available in Brass and Aluminium.</li>
        <li>Float ball indicates clear oil level.</li>
        <li>Available in 1" and 1 1/2" mounting.</li>
      </ul>
    </section>
  );
}

function OilLevelPrismaticContent() {
  return (
    <section>
      <h2>Prismatic Model</h2>
      <ul>
        <li>Available in Polycarbonate and Acrylic material.</li>
        <li>Different sizes available based on customer requirement.</li>
      </ul>
    </section>
  );
}

function OilLevelTubularContent() {
  return (
    <>
      <section>
        <h2>Application</h2>
        <p>
          Tubular oil level gauge for general industrial tank level monitoring with distant clear readability.
        </p>
      </section>
      <section>
        <h2>Working</h2>
        <ul>
          <li>Refractive gauge body enables visibility from distance.</li>
          <li>Float helps identify liquid level.</li>
          <li>Leak-proof assembly with suitable rubber seal.</li>
        </ul>
      </section>
      <section>
        <h2>Models (TOLG***)</h2>
        <ul>
          <li>ATOLG***: back-bolt tightening, anti-theft style.</li>
          <li>BTOLG***: front-bolt tightening style.</li>
        </ul>
      </section>
    </>
  );
}

function NitrogenModelTable({ model, cylinders, stages, gauges, features }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>No. of Cylinders</th>
          <th>No. of Stages</th>
          <th>No. of Gauges</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{model}</td>
          <td>{cylinders}</td>
          <td>{stages}</td>
          <td>{gauges}</td>
          <td>{features}</td>
        </tr>
      </tbody>
    </table>
  );
}

function PrvWithOliContent({ modelType, modelCode }) {
  return (
    <>
      <section>
        <h2>Application</h2>
        <p>
          XD series tubular oil level gauge is specialized for hermetically sealed transformers combining pressure
          relief valve and level indication in a single assembly.
        </p>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Operating pressure: 20 to 70 KPa (0.20 to 0.70 kg/cm sq.).</li>
          <li>Compact rugged design with automatic reset and positive resealing.</li>
          <li>Operating temperature: -40 C to 105 C.</li>
          <li>Level indication: Blue (sufficient), Red (refill required).</li>
        </ul>
      </section>
      <section>
        <h2>Model</h2>
        <p><strong>{modelCode}</strong> - {modelType} mounting configuration.</p>
      </section>
    </>
  );
}

function TankComponentModelContent({ code, note }) {
  return (
    <section>
      <h2>{code}</h2>
      <p>{note}</p>
    </section>
  );
}

export default function ProductSubsection() {
  const { sectionSlug, subsectionSlug } = useParams();
  const section = getSectionBySlug(sectionSlug);
  const subsection = getSubsectionBySlug(section, subsectionSlug);

  if (!section || !subsection) {
    return (
      <ProductPageLayout showSidebar={false}>
        <article>
          <h1>Subsection Not Found</h1>
          <p>Please return to Transformer Accessories and choose a valid subsection.</p>
        </article>
      </ProductPageLayout>
    );
  }

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: section.title, to: `/products/${section.slug}` },
    { label: subsection.title }
  ];
  const isPressureReliefSection = section.slug === 'pressure-relief-valves';

  const renderSubsectionContent = () => {
    if (!isPressureReliefSection) {
      return (
        <>
          <section>
            <h2>Product Overview</h2>
            <p>
              {subsection.title} belongs to the {section.title.toLowerCase()} portfolio and is designed for
              transformer applications that require reliable long-term operation.
            </p>
            <p>
              This page is prepared for model-level content including working principle, mounting options,
              dimensions, and testing details.
            </p>
          </section>

          <section>
            <h2>Key Features</h2>
            <ul>
              <li>Engineered for industrial transformer environments.</li>
              <li>Built with corrosion-conscious material options and robust sealing philosophy.</li>
              <li>Suitable for integration with standard maintenance and service workflows.</li>
            </ul>
          </section>
        </>
      );
    }

    if (subsection.slug === 'with-switches') {
      return <PressureReliefSwitchesContent />;
    }

    if (subsection.slug === 'threaded') {
      return <PressureReliefThreadedContent />;
    }

    if (subsection.slug === 'flange') {
      return (
        <>
          <section>
            <h2>Flange Pressure Relief Valve</h2>
            <p>
              Flange mounted pressure relief valve models are available in DP-1, DP-3 and DP-6 configurations.
              Select model based on required release port and mounting footprint.
            </p>
          </section>
          <PressureReliefSwitchesContent />
        </>
      );
    }

    if (section.slug === 'oil-level-indicator') {
      if (subsection.slug === 'vertical') return <OilLevelVerticalContent />;
      if (subsection.slug === 'threaded') return <OilLevelThreadedContent />;
      if (subsection.slug === 'prismatic') return <OilLevelPrismaticContent />;
      if (subsection.slug === 'tubular') return <OilLevelTubularContent />;
      if (subsection.slug === 'other-models') {
        return (
          <section>
            <h2></h2>
            <ul>
              <li>P-250*L (Body: Aluminium)</li>
              <li>BG-1FCL (Flange Mounting)</li>
              <li>BG-1FL</li>
            </ul>
          </section>
        );
      }
    }

    if (section.slug === 'nitrogen-gas-monitoring-system') {
      if (subsection.slug === 'sdgr-02') {
        return <NitrogenModelTable model="SDGR-02" cylinders="1 or 2" stages="2" gauges="2" features="Box Mounting" />;
      }
      if (subsection.slug === 'sdgr-02d') {
        return <NitrogenModelTable model="SDGR-02D" cylinders="1" stages="2" gauges="2" features="Direct Single Cylinder Mounting" />;
      }
      if (subsection.slug === 'dgr-02') {
        return <NitrogenModelTable model="DGR-02" cylinders="1 or 2" stages="2" gauges="2" features="Box Mounting" />;
      }
      if (subsection.slug === 'dgr-05') {
        return <NitrogenModelTable model="DGR-05" cylinders="1 or 2" stages="2" gauges="5" features="Box Mounting with individual cylinder pressure visualization" />;
      }
      if (subsection.slug === 'tgr-02') {
        return <NitrogenModelTable model="TGR-02" cylinders="1 or 2" stages="3" gauges="2" features="Precise low-pressure control with 3-way valve for gas purging" />;
      }
    }

    if (section.slug === 'pressure-relief-valves-with-oil-level-indicator') {
      if (subsection.slug === 'alxd') return <PrvWithOliContent modelType="Threaded" modelCode="ALXD" />;
      if (subsection.slug === 'alxf') return <PrvWithOliContent modelType="Flange" modelCode="ALXF" />;
    }

    if (section.slug === 'tank-components') {
      if (subsection.slug === 'gfv-1') return <TankComponentModelContent code="GFV-1" note="Longer valve (33 mm), used for special gases such as SF6 and switchgear applications." />;
      if (subsection.slug === 'gfv-2') return <TankComponentModelContent code="GFV-2" note="Most commonly used compact model, typically mounted from inside of tank." />;
      if (subsection.slug === 'gfv-3') return <TankComponentModelContent code="GFV-3" note="Model listed in catalogue; visual reference provided in source document." />;
      if (subsection.slug === 'gfv-4') return <TankComponentModelContent code="GFV-4" note="1/4 in brass valve available in NPT and BSP thread options." />;
      if (subsection.slug === 'gfv-5') return <TankComponentModelContent code="GFV-5" note="Economical alternative to GFV-2, available in brass/aluminium and without thread." />;
      if (subsection.slug === 'gfv-6') return <TankComponentModelContent code="GFV-6" note="Economical alternative to GFV-1, available in brass/aluminium and without thread." />;
      if (subsection.slug === 'gfv-1b-model') return <TankComponentModelContent code="GFV-1B" note="1/8 in BSP mounting thread with rubber O-ring or aluminium washer fitment." />;
      if (subsection.slug === 'gfv-2b-model') return <TankComponentModelContent code="GFV-2B" note="1/8 in BSP mounting thread with rubber O-ring or aluminium washer fitment." />;
      if (subsection.slug === 'brass-cap-options') return <TankComponentModelContent code="Brass Cap Options" note="All models available with or without brass cap." />;
      if (subsection.slug === 'finish-options') return <TankComponentModelContent code="Finish Options" note="All models available in natural finish or nickel plated finish." />;
    }

    return null;
  };

  return (
    <ProductPageLayout
      activeCategory={section.title}
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug={section.slug}
      activeSubsectionSlug={subsection.slug}
    >
      <article>
        <h1>{subsection.title}</h1>

        {renderSubsectionContent()}

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for this subsection.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/${section.slug}/${item.slug}`}
                className={`subsection-chip ${item.slug === subsection.slug ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </ProductPageLayout>
  );
}
