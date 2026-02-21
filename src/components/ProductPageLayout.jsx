import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductSidebar from './ProductSidebar.jsx';
import '../styles/components/ProductPageLayout.css';

export default function ProductPageLayout({ 
  children, 
  activeCategory,
  showSidebar = true 
}) {
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
