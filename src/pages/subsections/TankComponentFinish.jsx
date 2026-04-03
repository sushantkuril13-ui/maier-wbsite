import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('tank-components');

const finishOptions = [
  {
    finish: 'Natural Finish',
    description: 'Standard brass or aluminium finish',
    advantages: [
      'Cost-effective option',
      'Authentic material appearance',
      'Suitable for most indoor applications',
      'Easy maintenance'
    ]
  },
  {
    finish: 'Nickel Plated',
    description: 'Chrome/nickel electroplated finish',
    advantages: [
      'Enhanced corrosion resistance',
      'Superior protection for outdoor applications',
      'Professional appearance',
      'Extended service life',
      'Additional protection against rust and oxidation'
    ]
  }
];

export default function TankComponentFinish() {
  const slides = getSubsectionSlides('tank-components', 'finish');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Tank Components', to: '/products/tank-components' },
    { label: 'Finish Options' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Tank Components"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="tank-components"
      activeSubsectionSlug="finish"
    >
      <article>
        <h1>Finish Options</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            All GFV tank component models (GFV-1 through GFV-6) are available with two carefully engineered finish options: 
            Natural Finish (cost-effective, standard) or Nickel-Plated (premium, corrosion-resistant). The finish selection directly impacts 
            long-term durability, maintenance requirements, and environmental performance. Natural finish suits indoor controlled environments, 
            while nickel plating provides superior protection for outdoor installations, marine environments, or applications with elevated 
            corrosion risk or chemical exposure.
          </p>
        </section>

        <section>
          <h2>Finish Options Comparison</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Natural Finish</th>
                <th>Nickel-Plated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Material Appearance</strong></td>
                <td>Golden/reddish brass color or aluminum silver</td>
                <td>Bright silvery metallic finish</td>
              </tr>
              <tr>
                <td><strong>Cost</strong></td>
                <td>Standard (baseline cost)</td>
                <td>Premium (+15–25% cost)</td>
              </tr>
              <tr>
                <td><strong>Corrosion Resistance</strong></td>
                <td>Good for indoor use; limited outdoor resistance</td>
                <td>Excellent; rated for extreme environments</td>
              </tr>
              <tr>
                <td><strong>Indoor Lifespan</strong></td>
                <td>10–20+ years typical</td>
                <td>20–30+ years typical</td>
              </tr>
              <tr>
                <td><strong>Outdoor Lifespan</strong></td>
                <td>1–3 years (oxidation/tarnishing)</td>
                <td>10–15+ years (heavy-duty protection)</td>
              </tr>
              <tr>
                <td><strong>Maintenance Effort</strong></td>
                <td>Occasional polishing needed outdoors</td>
                <td>Minimal; periodic cleaning sufficient</td>
              </tr>
              <tr>
                <td><strong>Chemical Resistance</strong></td>
                <td>Moderate; susceptible to salt/moisture</td>
                <td>Superior; resistant to salt/acid exposure</td>
              </tr>\n              <tr>
                <td><strong>Professional Appearance</strong></td>
                <td>Authentic material look</td>
                <td>Premium, polished industrial appearance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Natural Finish – Details & Best Practices</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Description</strong></td>
                <td>Untreated brass or aluminum; exposes natural material colors</td>
              </tr>
              <tr>
                <td><strong>Appearance Over Time</strong></td>
                <td>Develops patina (darkening) in outdoor environments; maintains stable appearance indoors</td>
              </tr>
              <tr>
                <td><strong>Cost Advantage</strong></td>
                <td>Most economical option; baseline manufacturing cost</td>
              </tr>
              <tr>
                <td><strong>Best Applications</strong></td>
                <td>Indoor substations, controlled environments, temporary installations</td>
              </tr>
              <tr>
                <td><strong>Maintenance Regimen</strong></td>
                <td>Minimal indoors (dry-cloth wipe); vigorous outdoors (regular polishing/coating required)</td>
              </tr>
              <tr>
                <td><strong>Optional Protection</strong></td>
                <td>Clear lacquer coating can extend outdoor life; apply if extended outdoor use anticipated</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Nickel-Plated Finish – Details & Benefits</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Description</strong></td>
                <td>Electroplated nickel layer (20–50 µm) over brass base metal; bright silvery finish</td>
              </tr>
              <tr>
                <td><strong>Corrosion Protection Mechanism</strong></td>
                <td>Nickel layer acts as barrier against moisture, salt, and chemical attack</td>
              </tr>
              <tr>
                <td><strong>Environmental Resistance</strong></td>
                <td>Rated for marine, coastal, industrial, and chemical exposure environments</td>
              </tr>
              <tr>
                <td><strong>Cost Premium</strong></td>
                <td>+15–25% over natural finish; justified by extended lifespan</td>
              </tr>
              <tr>
                <td><strong>Best Applications</strong></td>
                <td>Outdoor transformer yards, coastal installations, industrial sites, high-vibration areas</td>
              </tr>
              <tr>
                <td><strong>Maintenance Regimen</strong></td>
                <td>Minimal; periodic dry-cloth wipe sufficient; optional annual light washing</td>
              </tr>
              <tr>
                <td><strong>Field Durability</strong></td>
                <td>Maintains appearance and functionality 15–20+ years in moderate outdoor service</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Selection Guide – Which Finish to Choose?</h2>
          <ul>
            <li><strong>Choose Natural Finish if:</strong>
              <ul>
                <li>Installation is permanently indoors or sheltered from weather</li>
                <li>Cost minimization is primary concern</li>
                <li>Environmental conditions are non-corrosive (dry climate, neutral pH)</li>
                <li>Valve life expectancy less than 5–10 years acceptable</li>
              </ul>
            </li>
            <li><strong>Choose Nickel-Plated if:</strong>
              <ul>
                <li>Installation is outdoors or intermittently exposed to weather</li>
                <li>Coastal, marine, or high-corrosion environment (salt spray, acid rain, industrial pollution)</li>
                <li>Long-term durability (15+ years) required with minimal maintenance</li>
                <li>Professional appearance and brand consistency important</li>
                <li>Equipment is high-visibility or critical infrastructure</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Maintenance for Each Finish Type</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Maintenance Task</th>
                <th>Natural Finish</th>
                <th>Nickel-Plated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Regular Cleaning</strong></td>
                <td>Weekly: dry cloth indoors; bi-weekly outdoors with mild soap</td>
                <td>Monthly: dry cloth sufficient; annual light washing if needed</td>
              </tr>
              <tr>
                <td><strong>Corrosion Prevention</strong></td>
                <td>After outdoor exposure: polish with brass cleaner; optional protective coating</td>
                <td>No action needed; plating provides inherent protection</td>
              </tr>
              <tr>
                <td><strong>Annual Inspection</strong></td>
                <td>Check for tarnishing/patina buildup; clean if oxidation excessive</td>
                <td>Visual inspection; ensure plating intact (no bare spots or blistering)</td>
              </tr>
              <tr>
                <td><strong>Emergency Action (Corrosion Detected)</strong></td>
                <td>Apply protective clear lacquer or replacement recommended</td>
                <td>Contact Maier if plating damage detected; replacement plating available</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Ordering & Specification</h2>
          <p>
            When ordering GFV components, specify your preferred finish option:
          </p>
          <ul>
            <li><strong>Natural Finish:</strong> Cost-optimized, standard delivery timeline</li>
            <li><strong>Nickel-Plated:</strong> Premium finish, +3–5 work days additional processing</li>
            <li>Bulk orders: volume discounts available on both finish options</li>
            <li>Custom plating specifications available upon request</li>
            <li>Mixed orders accepted (some units natural, some plated)</li>
          </ul>
        </section>

        <section>
          <h2>Available Finish Options</h2>
          {finishOptions.map((option, idx) => (
            <div key={idx}>
              <h3>{option.finish}</h3>
              <p><strong>{option.description}</strong></p>
              <h4>Advantages:</h4>
              <ul>
                {option.advantages.map((adv, aidx) => (
                  <li key={aidx}>{adv}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Selection Guide</h2>

          <h3>Natural Finish - Best For:</h3>
          <ul>
            <li>Indoor transformer installations</li>
            <li>Climate-controlled environments</li>
            <li>Cost-sensitive applications</li>
            <li>Short to medium-term storage</li>
            <li>Applications where authentic material color is preferred</li>
          </ul>

          <h3>Nickel Plated - Best For:</h3>
          <ul>
            <li>Outdoor transformer installations</li>
            <li>High-humidity or coastal environments</li>
            <li>Long-term storage and transportation</li>
            <li>Export applications requiring enhanced corrosion protection</li>
            <li>Applications requiring premium appearance</li>
            <li>Industrial environments with corrosive atmospheres</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>

          <h3>Natural Finish</h3>
          <ul>
            <li><strong>Material Base:</strong> Brass or Aluminium</li>
            <li><strong>Surface Treatment:</strong> None (raw material)</li>
            <li><strong>Corrosion Resistance:</strong> Inherent material properties</li>
            <li><strong>Maintenance:</strong> Regular cleaning recommended in humid environments</li>
          </ul>

          <h3>Nickel Plated</h3>
          <ul>
            <li><strong>Base Material:</strong> Brass or Aluminium</li>
            <li><strong>Plating Type:</strong> Chrome/Nickel electroplatings</li>
            <li><strong>Coating Thickness:</strong> Standard industrial thickness for durability</li>
            <li><strong>Corrosion Resistance:</strong> Superior protection against rust, oxidation, and salt-spray</li>
            <li><strong>Maintenance:</strong> Minimal maintenance required</li>
          </ul>
        </section>

        <section>
          <h2>Application Recommendations by Environment</h2>

          <h3>Indoor, Climate-Controlled</h3>
          <p>
            <strong>Recommended:</strong> Natural Finish
          </p>
          <p>
            Indoor environments with stable temperature and humidity typically provide adequate protection. Natural
            finish is cost-effective for these applications.
          </p>

          <h3>Outdoor, Temperate Climate</h3>
          <p>
            <strong>Recommended:</strong> Nickel Plated
          </p>
          <p>
            Outdoor installations exposed to weather patterns benefit from the additional corrosion protection of
            nickel plating.
          </p>

          <h3>Outdoor, Coastal or Industrial</h3>
          <p>
            <strong>Recommended:</strong> Nickel Plated
          </p>
          <p>
            High-salt or corrosive atmospheric conditions require nickel plating to ensure long-term component
            reliability.
          </p>

          <h3>Sealed/Hermetically Sealed Tanks</h3>
          <p>
            <strong>Recommended:</strong> Natural Finish acceptable; Nickel Plated for extended storage
          </p>
          <p>
            While sealed tanks provide protection, nickel plating is recommended for equipment with extended storage or
            transportation periods.
          </p>
        </section>

        <section>
          <h2>Compatibility</h2>
          <p>
            Finish options are available for all tank component models:
          </p>
          <ul>
            <li>GFV-1 - Natural Finish / Nickel Plated</li>
            <li>GFV-2 - Natural Finish / Nickel Plated</li>
            <li>GFV-3 - Natural Finish / Nickel Plated</li>
            <li>GFV-4 - Natural Finish / Nickel Plated</li>
            <li>GFV-5 - Natural Finish / Nickel Plated</li>
            <li>GFV-6 - Natural Finish / Nickel Plated</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information</h2>
          <p>
            When placing an order, please specify your preferred finish option for each component. If no finish is
            specified, Natural Finish will be the default.
          </p>
        </section>

        <section>
          <h2>More Tank Components</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/tank-components/${item.slug}`}
                className={`subsection-chip ${item.slug === 'finish' ? 'active' : ''}`}
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
