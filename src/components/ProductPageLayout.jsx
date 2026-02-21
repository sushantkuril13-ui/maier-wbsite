import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductSidebar from './ProductSidebar.jsx';
import ProductImageSlider from './ProductImageSlider.jsx';
import '../styles/components/ProductPageLayout.css';

export default function ProductPageLayout({ 
  children, 
  activeCategory,
  slides = [],
  showSidebar = true 
}) {
  const hasSlider = slides && slides.length > 0;
  return (
    <div className="app site-shell">
      <div className="site-card">
        <Header />
        <div className="site-inner">
          <main>
            <div className="content-below-hero">
              <div className={`product-page-container ${showSidebar ? 'with-sidebar' : ''}`}>
                {showSidebar && (
                  <ProductSidebar 
                    activeCategory={activeCategory}
                  />
                )}
                <div className="product-page-content">
                  {hasSlider && (
                    <div className="product-page-slider">
                      <ProductImageSlider slides={slides} />
                    </div>
                  )}
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
