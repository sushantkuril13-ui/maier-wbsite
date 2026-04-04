import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('oil-level-indicator');
const subsectionTitle = 'Prismatic Oil Level Indicator';

export default function OilLevelPrismatic() {
  const slides = getSubsectionSlides('oil-level-indicator', 'prismatic');
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
      activeSubsectionSlug="prismatic"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The Prismatic Oil Level Indicator employs advanced optical prism technology to provide magnified, highly visible level indication. 
            Unlike standard transparent designs, the prismatic lens system delivers superior clarity and extended viewing distance, making it ideal for large 
            transformers where observers may need to read the level from several meters away. The prism design also provides sharper visual distinction between oil and air phases.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Prismatic Lens Design:</strong> Optical magnification for distance visibility</li>
            <li><strong>Enhanced Clarity:</strong> Sharper oil/air boundary compared to transparent designs</li>
            <li><strong>Extended Viewing Distance:</strong> Readable from 10+ meters in most field conditions</li>
            <li><strong>Available Materials:</strong> Polycarbonate (outdoor) and Acrylic (standard)</li>
            <li><strong>Durable Construction:</strong> Prism made from high-quality optical material</li>
            <li><strong>Color-Coded Bands:</strong> Optional red/green bands for quick status indication</li>
            <li><strong>Weather Resistant:</strong> Suitable for outdoor and harsh environments</li>
            <li><strong>Low Maintenance:</strong> Sealed design prevents contamination</li>
          </ul>
        </section>

        <section>
          <h2>Material Options</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Advantages</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Polycarbonate</strong></td>
                <td>Superior impact resistance, UV protection, extreme weather tolerance, excellent for outdoor high-impact environments</td>
                <td>Outdoor transformer yards, harsh climates, high-traffic areas</td>
              </tr>
              <tr>
                <td><strong>Acrylic</strong></td>
                <td>Excellent optical clarity, lightweight, cost-effective, superior light transmission</td>
                <td>Indoor substations, control rooms, standard industrial applications</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Optical Design</strong></td>
                <td>Prismatic lens with multi-ray refraction</td>
              </tr>
              <tr>
                <td><strong>Available Sizes</strong></td>
                <td>Standard modules (custom sizes available)</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature Range</strong></td>
                <td>-40°C to +120°C (liquid medium)</td>
              </tr>
              <tr>
                <td><strong>Float Material</strong></td>
                <td>Nitrophyl synthetic elastomer</td>
              </tr>
              <tr>
                <td><strong>Standard Seals</strong></td>
                <td>Nitrile rubber (NBR) gaskets and O-rings</td>
              </tr>
              <tr>
                <td><strong>Alternative Seals</strong></td>
                <td>Viton (FKM) for synthetic/ester oils</td>
              </tr>
              <tr>
                <td><strong>Viewing Distance</strong></td>
                <td>Clearly readable up to 10+ meters in normal lighting</td>
              </tr>
              <tr>
                <td><strong>Color Bands (Optional)</strong></td>
                <td>Green (OK level), Red (Refill required) thresholds</td>
              </tr>
              <tr>
                <td><strong>Mounting Options</strong></td>
                <td>Threaded (BSP) or flanged coupling</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>How the Prismatic Design Works</h2>
          <p>
            The prismatic lens intercepts light rays passing through the oil, bending them at precise angles to create optical magnification. 
            Light rays passing through oil are refracted differently than those passing through air, creating a sharp visual boundary. This refraction-based 
            design delivers superior image clarity compared to standard transparent tube designs, enabling accurate level reading from greater distances.
          </p>
        </section>

        <section>
          <h2>Installation & Maintenance</h2>
          <ul>
            <li>Install using appropriate thread seal (PTFE tape or coupling) for threaded or flanged connections</li>
            <li>Position gauge at convenient viewing angle from control room or access point</li>
            <li>No special tools or calibration required</li>
            <li>Periodically clean the prism surface with a soft, lint-free cloth</li>
            <li>Inspect prism for condensation or internal contamination annually</li>
            <li>If prism becomes cloudy, contact Maier for replacement</li>
            <li>Replace O-rings using field-service kits if seepage develops</li>\n          </ul>
        </section>

        <section>
          <h2>Advantages Over Standard Designs</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Prismatic Design</th>
                <th>Standard Transparent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Viewing Distance</td>
                <td>10+ meters</td>
                <td>3–5 meters</td>
              </tr>
              <tr>
                <td>Image Clarity</td>
                <td>Magnified with sharp boundaries</td>
                <td>Natural size, softer boundaries</td>
              </tr>
              <tr>
                <td>Oil/Air Distinction</td>
                <td>Very distinct (high contrast)</td>
                <td>Subtle (lower contrast)</td>
              </tr>
              <tr>
                <td>Outdoor Performance</td>
                <td>Excellent in sunlight</td>
                <td>Can be difficult in glare</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>Premium</td>
                <td>Standard</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When ordering prismatic oil level indicators, please specify:
          </p>
          <ul>
            <li>Mounting type preference (threaded or flanged)</li>
            <li>Thread size (1", 1½" BSP, etc.) if threaded</li>
            <li>Material preference (Polycarbonate or Acrylic)</li>
            <li>Optional color-coded band thresholds</li>
            <li>Special sealing material requirements (Viton for synthetic oils)</li>
            <li>Delivery timeline and quantity requirements</li>
          </ul>
        </section>

        <section>
          <h2>More in this Section</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/oil-level-indicator/${item.slug}`}
                className={`subsection-chip ${item.slug === 'prismatic' ? 'active' : ''}`}
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
