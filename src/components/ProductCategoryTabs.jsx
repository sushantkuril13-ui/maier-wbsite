import React from 'react';
import '../styles/components/ProductCategoryTabs.css';
import products from '../data/products.json';

// Use the exact ordered category list provided by the user and map
// representative images/links (fall back to first product found).
const orderedCategories = [
  'Gas Monitoring System (Automat)',
  'Low/High Pressure Alarm System',
  'Oil Level Indicator',
  'Pressure Relief Valve',
  'PRV with Liquid Level Indicator',
  'Solenoid Interlock Device',
  'Tank Valve',
  'Tubular Oil Level Gauge',
  'Threaded Pressure Relief Valve',
];

const categoryImageMap = {
  'Gas Monitoring System (Automat)': '/images/Product Images/GMS_DGR02.png',
  'Low/High Pressure Alarm System': '/images/Product Images/LHPAS.png',
  'Oil Level Indicator': '/images/Product Images/OLI.png',
  'Pressure Relief Valve': '/images/Product Images/PRV.png',
  'PRV with Liquid Level Indicator': '/images/Product Images/PRV_LIQUID INDICATOR 2.png',
  'Solenoid Interlock Device': '/images/Product Images/Solenoid Interlock.png',
  'Tank Valve': '/images/Product Images/Tank Valve.png',
  'Tubular Oil Level Gauge': '/images/Product Images/TOLG_BT.png',
  'Threaded Pressure Relief Valve': '/images/Product Images/PRV_BB2P.png',
};

const categories = orderedCategories.map(name => {
  const first = products.find(p => p.filter === name) || {};
  return {
    title: name,
    img: categoryImageMap[name] || first.img || '/images/Product Images/OLI.png',
    desc: `${name} — explore our selection of products and components.`,
    link: first.link || '#',
  };
});

export default function ProductCategoryTabs() {
  const [active, setActive] = React.useState(0);
  return (
    // <div className="product-category-tabs container">
    //   <div className="tab-content">
    //     <div className="img-wrapper">
    //       <img src={categories[active].img} alt={categories[active].title} />
    //     </div>
    //     <h3>{categories[active].title}</h3>
    //     <p>{categories[active].desc}</p>
    //     <a className="btn" href={categories[active].link}>Category</a>
    //   </div>
    //   <ul className="tab-list">
    //     {categories.map((cat, i) => (
    //       <li key={cat.title} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
    //         {cat.title}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  <div></div>
  );
}