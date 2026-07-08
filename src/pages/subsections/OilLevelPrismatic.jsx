import React from 'react';
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
            The Prismatic Oil Level Indicator employs advanced optical prism technology to provide magnified, highly visible level indication. Unlike standard transparent designs, the prismatic designs delivers superior clarity and extended viewing distance, making it ideal for large transformers where observers may need to read the level from several meters away. The prism design also provides sharper visual distinction between oil and air phases.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Prismatic Lens Design: Optical magnification for distance visibility</li>
            <li>Enhanced Clarity: Sharper oil/air boundary compared to transparent designs</li>
            <li>Extended Viewing Distance: Readable from 10+ meters in most field conditions</li>
            <li>Available Materials: Polycarbonate (outdoor) and Acrylic (standard)</li>
            <li>Durable Construction: Prism made from high-quality optical material</li>
            <li>Color-Coded Bands: Optional red/green bands for quick status indication</li>
            <li>Weather Resistant: Suitable for outdoor and harsh environments</li>
            <li>Low Maintenance: Sealed design prevents contamination</li>
          </ul>
        </section>
      </article>
    </ProductPageLayout>
  );
}
