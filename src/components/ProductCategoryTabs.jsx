import React from 'react';
import '../styles/components/ProductCategoryTabs.css';

// TODO: Replace with dynamic data if needed
const categories = [
  {
    title: 'Radiator Valves',
    img: '/images/drosselklappe-din-42560-A-vorschweiflansch.png',
    desc: 'Radiator Valves for Transformers. The ideal solution for every task!',
    link: '/radiator-valves',
  },
  {
    title: 'Transformer Protection Devices',
    img: '/images/transformer-protection-devices.png',
    desc: 'For hermetically sealed transformers and transformers with expansion tank!',
    link: '/protection-devices',
  },
  {
    title: 'Oil Level Indicators',
    img: '/images/magnetischer-senkrechter-oelstandsanzeiger.png',
    desc: 'Oil level indicators for transformers - Many different versions in variable sizes!',
    link: '/oil-level-indicators',
  },
  {
    title: 'Dehydrating Breathers',
    img: '/images/Luftentfeuchter-DIN-42562.png',
    desc: 'Dehydrating breathers for transformers and reactors with expansion tank.',
    link: '/dehydrating-breathers',
  },
  {
    title: 'Pressure Relief Devices',
    img: '/images/Druckentlastungsventil-PRD-1.png',
    desc: 'Pressure relief devices for transformers - Protection against overpressure!',
    link: '/pressure-relief-devices',
  },
  {
    title: 'Tank Components',
    img: '/images/lablassvorrichtung-DIN-42551.png',
    desc: 'Fittings and tank components for transformers in a large variety.',
    link: '/tank-components',
  },
  {
    title: 'Tap Changers',
    img: '/images/Umsteller-Produktkategorien.png',
    desc: 'Tap Changers for Transformers in various sizes!',
    link: '/tap-changers',
  },
];

export default function ProductCategoryTabs() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="product-category-tabs container">
      <div className="tab-content">
        <div className="img-wrapper">
          <img src={categories[active].img} alt={categories[active].title} />
        </div>
        <h3>{categories[active].title}</h3>
        <p>{categories[active].desc}</p>
        <a className="btn" href={categories[active].link}>Category</a>
      </div>
      <ul className="tab-list">
        {categories.map((cat, i) => (
          <li key={cat.title} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
}