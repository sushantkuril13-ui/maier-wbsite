import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Pressure Relief Valves with Switches';

const modelData = [
  {
    model: 'DP-1',
    portSize: '1"',
    holes: '4',
    boltSize: 'M08 / 10 mm. Ø',
    pcd: '85 mm'
  },
  {
    model: 'DP-3',
    portSize: '3"',
    holes: '4',
    boltSize: 'M10 / 12 mm. Ø',
    pcd: '125 mm'
  },
  {
    model: 'DP-6',
    portSize: '6"',
    holes: '6',
    boltSize: 'M12 / 14 mm. Ø',
    pcd: '235 mm'
  }
];

const featureData = [
  { feature: 'Without Electrical Contact & Visual Indicator', model: 'DP-Ø' },
  { feature: 'With Electrical Contact & Visual Indicator', model: 'DP-ØEF#' },
  { feature: 'With Shroud / Oil Collection Cap', model: 'DP-ØEF#S' },
  { feature: 'With Plug and Socket Type Limit Switch Connection', model: 'DP-ØEF#P' },
  { feature: 'With Shroud / Oil Collection Cap & Plug and Socket Connection', model: 'DP-ØEF#SP' },
  { feature: 'With Shroud / Oil Collection Cap & Plug and Socket Connection & Cable', model: 'DP-ØEF#SPC' }
];

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
            limit switch and visual indicator mechanism. Engineered for rugged use & long life, each P.R.V. is checked
            for its operational condition individually. It is important to note that depending upon the tank fluid
            different "O" Ring material is suggested.
          </p>
        </section>

        <section>
          <h2>Note</h2>
          <ol>
            <li>PRV with Nitrile Rubber Gasket.</li>
            <li>Limit switch with IP-67 protection and 3/4" 16 T.P.I. (B.S.C.) PVC Cable Gland.</li>
          </ol>
        </section>

        {modelData.map((row) => (
          <section key={row.model}>
            <h2>{row.model}</h2>
            <table className="specification-table">
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
            <p><strong>Where:</strong></p>
            <ul>
              <li>Ø = Size of Release Port (6", 3", 1")</li>
              <li># = No. of Electrical Contacts [(1 for 1 N.O. & 1 N.C.) and (2 for 2 N.O. & 2 N.C.)]</li>
              <li>S = With Shroud / Oil Direction Cap</li>
              <li>P = Number of Pins</li>
              <li>C = Number of Cable Core</li>
            </ul>

            <table className="specification-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Model</th>
                </tr>
              </thead>
              <tbody>
                {featureData.map((featureRow) => (
                  <tr key={`${row.model}-${featureRow.model}`}>
                    <td>{featureRow.feature}</td>
                    <td>{featureRow.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}

        <section>
          <h2>More in this Section</h2>
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
          <p>Download catalogue and datasheet documents for this subsection.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
