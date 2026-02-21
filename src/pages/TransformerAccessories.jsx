import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import TransformerAccessoriesHero from '../components/TransformerAccessoriesHero.jsx';
import ProductCategoryTabs from '../components/ProductCategoryTabs.jsx';
import ProductGallery from '../components/ProductGallery.jsx';

function TransformerAccessories() {
  return (
    <div className="app site-shell">
      <div className="site-card">
        <Header />
        <div className="site-inner">
          <main>
            <div className="content-below-hero">
              <TransformerAccessoriesHero />
              <ProductCategoryTabs />
              <ProductGallery />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TransformerAccessories;
