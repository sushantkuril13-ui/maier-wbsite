import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('pressure-relief-valves');
const subsectionTitle = 'Threaded Pressure Relief Valves';

const smallSizeTableData = [
  {
    parameter: 'Thread Nomenclature (Ø)',
    col2: '2',
    col3: '3',
    col4: '4'
  },
  {
    parameter: 'Size of Mounting Thread',
    col2: '',
    col3: '',
    col4: ''
  },
  {
    parameter: 'British (B/N)',
    col2: '1/4"',
    col3: '3/8"',
    col4: '1/2"'
  },
  {
    parameter: 'Metric',
    col2: 'M12',
    col3: 'M16',
    col4: 'M20'
  },
  {
    parameter: 'Old Model',
    col2: 'TS-04',
    col3: 'TS-03',
    col4: 'TS-04'
  },
  {
    parameter: 'Passage Area (Appx.) (mm²)',
    col2: '30',
    col3: '70',
    col4: '125'
  },
  {
    parameter: 'Body (A/F) in mm "B" (B.S.P. Thread)',
    col2: '18',
    col3: '22',
    col4: '30'
  },
  {
    parameter: 'Body (A/F) in mm "N" (N.P.T. Thread)',
    col2: '16',
    col3: '18',
    col4: '24'
  },
  {
    parameter: 'Body (A/F) in mm "M" (Metric Thread)',
    col2: '18',
    col3: '24',
    col4: '30'
  },
  {
    parameter: 'Total Length (±) 10 mm',
    col2: '40',
    col3: '45',
    col4: '55'
  }
];

const smallSizeModelTable = [
  {
    nomenclature: 'Plain',
    model: 'BTØ',
    col14bsp: 'BB2',
    col38bsp: ''
  },
  {
    nomenclature: 'With Stainless Steel Pull Ring',
    model: 'BTØR',
    col14bsp: 'BN2R',
    col38bsp: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard)',
    model: 'BTØC',
    col14bsp: 'BB2P',
    col38bsp: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard) and Pull Ring',
    model: 'BTØCR',
    col14bsp: '',
    col38bsp: 'BB3SR'
  },
  {
    nomenclature: 'With Cap (Rain Guard) Riveted / Screwed',
    model: 'BTØCS',
    col14bsp: 'BB2SS',
    col38bsp: ''
  },
  {
    nomenclature: 'With Visual Indicator (Flag)',
    model: 'BTØF',
    col14bsp: '',
    col38bsp: 'BB3F'
  }
];

const mediumSizeTableData = [
  {
    parameter: 'Thread Nomenclature (Ø)',
    col4: '4',
    col6: '6',
    col8: '8',
    col10: '10'
  },
  {
    parameter: 'Size of Mounting Thread',
    col4: '',
    col6: '',
    col8: '',
    col10: ''
  },
  {
    parameter: 'British (B/N)',
    col4: '1/2"',
    col6: '3/4"',
    col8: '1"',
    col10: '1¼"'
  },
  {
    parameter: 'Metric',
    col4: 'NA',
    col6: 'M26',
    col8: 'M36',
    col10: 'M42'
  },
  {
    parameter: 'Old Model',
    col4: 'T-05',
    col6: 'T-06',
    col8: 'G-1',
    col10: 'G1.25'
  },
  {
    parameter: 'Passage Area (Appx.) (mm²)',
    col4: '125',
    col6: '250',
    col8: '400',
    col10: '800'
  },
  {
    parameter: 'Body (A/F) in mm "B" (B.S.P. Thread)',
    col4: '30',
    col6: '36',
    col8: '40',
    col10: '46'
  },
  {
    parameter: 'Body (A/F) in mm "N" (N.P.T. Thread)',
    col4: '24',
    col6: '30',
    col8: '36',
    col10: '40'
  },
  {
    parameter: 'Body (A/F) in mm "M" (Metric Thread)',
    col4: '30',
    col6: '36',
    col8: '45',
    col10: '56'
  },
  {
    parameter: 'Total Length (±) 10 mm',
    col4: '55',
    col6: '55',
    col8: '55',
    col10: '70'
  }
];

const mediumSizeModelTable = [
  {
    nomenclature: 'Plain',
    model: '#TØ',
    col12: '',
    col34: '',
    col1: 'SB8'
  },
  {
    nomenclature: 'With Stainless Steel Pull Ring',
    model: '#TØR',
    col12: '',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard)',
    model: '#TØC',
    col12: '',
    col34: '',
    col1: 'BB8P / AB8P'
  },
  {
    nomenclature: 'With Cap (Rain Guard) and Pull Ring',
    model: '#TØCR',
    col12: '',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Cap (Rain Guard) Riveted / Screwed',
    model: '#TØCS',
    col12: 'SB4SS',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Visual Indicator (Flag)',
    model: '#TØF',
    col12: '',
    col34: '',
    col1: ''
  },
  {
    nomenclature: 'With Oil Collection Bend',
    model: '#TØO',
    col12: '',
    col34: 'BB6O',
    col1: ''
  }
];

export default function PressureReliefThreaded() {
  const slides = getSubsectionSlides('pressure-relief-valves', 'threaded');
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
      activeSubsectionSlug="threaded"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Application</h2>
          <p>
            Pressure Relief Valve (P.R.V.) is a safety device to be used in Transformer, Pressure Tanks &
            Pressure Lines for indoor & outdoor application. Suitable for repeated operation as compared to
            Conventional Explosion Vent which is for single use. It is compact, highly reliable and particularly
            designed to be used on O.L.T.C., Transformers, & similar equipment / tank with non-corrosive liquid.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <p>
            Spring Safety Valve completely made of Brass / Aluminium, compact, highly reliable and particularly useful
            for use in transformer & tanks containing non-corrosive liquid even in extreme outdoor condition. Reliable
            Operating Pressure from 20 to 100 KPa (0.20 to 1.00 kg/cm sq.) Positive Resealing Pressure. Operating
            Temperature: 0 to 100°C (of tank liquid). Sealing is with Nitrile Rubber Gasket. Valve Resetting Automatic.
            Suitable for repeated use. Protective Rain Guard Cap directs the Oil Spillage downwards. Flat Mounting
            Gasket can be provided if required. Depending upon nature of Tank Fluid we can supply with Viton Gaskets
            and "O" Ring. PRV at different Cracking Pressure (higher/lower) can be supplied as per your request.
            Normally we supply in Natural Finish. However, if required by customer we can supply with Ni-Cr plated or
            suitably painted.
          </p>
        </section>

        <section>
          <h2>Note</h2>
          <ul>
            <li>These can be used as an Oil Filling Cap.</li>
            <li>
              Mounting position preferably at the tank cover or topside is to be provided with leak proof welded
              suitably threaded boss having matching threads and tightened by help of Teflon Tape / Sealing Liquid.
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

          <h3>Technical Specifications</h3>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
              </tr>
            </thead>
            <tbody>
              {smallSizeTableData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.parameter}</strong></td>
                  <td>{row.col2}</td>
                  <td>{row.col3}</td>
                  <td>{row.col4}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Model Nomenclature</h3>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Model Nomenclature</th>
                <th>Model</th>
                <th>1/4" BSP</th>
                <th>3/8" BSP</th>
              </tr>
            </thead>
            <tbody>
              {smallSizeModelTable.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.nomenclature}</td>
                  <td><strong>{row.model}</strong></td>
                  <td>{row.col14bsp}</td>
                  <td>{row.col38bsp}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Model Code Legend</h3>
          <ul>
            <li><strong>T</strong> - Type of thread (B - BSP, N – NPT, M - Metric)</li>
            <li><strong>Ø</strong> - Thread Nomenclature: For B.S.P. & N.P.T. Thread (2-1/4", 3-3/8", 4-1/2"), For Metric Thread – Thread Size e.g. M12</li>
            <li><strong>C</strong> - Cap (Rain Guard) (P - Plastic, S - Stainless Steel, B - Brass)</li>
          </ul>

          <p><strong>Note:</strong> All models have option of availability in Natural Finish / Nickel Plated.</p>
        </section>

        <section>
          <h2>Threaded Medium Size PRV</h2>

          <h3>Technical Specifications</h3>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>4</th>
                <th>6</th>
                <th>8</th>
                <th>10</th>
              </tr>
            </thead>
            <tbody>
              {mediumSizeTableData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.parameter}</strong></td>
                  <td>{row.col4}</td>
                  <td>{row.col6}</td>
                  <td>{row.col8}</td>
                  <td>{row.col10}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Model Nomenclature</h3>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Model Nomenclature</th>
                <th>Model</th>
                <th>1/2"</th>
                <th>3/4"</th>
                <th>1"</th>
              </tr>
            </thead>
            <tbody>
              {mediumSizeModelTable.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.nomenclature}</td>
                  <td><strong>{row.model}</strong></td>
                  <td>{row.col12}</td>
                  <td>{row.col34}</td>
                  <td>{row.col1}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Model Code Legend</h3>
          <ul>
            <li><strong>Material</strong> - A (Aluminium), B (Brass), S (Stainless Steel)</li>
            <li><strong>T</strong> - Type of Thread (B - BSP, N – NPT, M - Metric)</li>
            <li><strong>Ø</strong> - Thread Nomenclature: For B.S.P. & N.P.T. Thread (Ø 3/4", 8 - 1", 10 - 1.25"), For Metric Thread – Thread Size e.g. M26</li>
            <li><strong>C</strong> - Cap (Rain Guard) (P - Plastic, S - Stainless Steel)</li>
          </ul>

          <p><strong>Note:</strong> All models have option of availability in Natural Finish / Nickel Plated.</p>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/pressure-relief-valves/${item.slug}`}
                className={`subsection-chip ${item.slug === 'threaded' ? 'active' : ''}`}
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
