import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductSidebar from './ProductSidebar.jsx';
import ProductImageSlider from './ProductImageSlider.jsx';
import '../styles/components/ProductPageLayout.css';

export default function ProductPageLayout({ 
  children, 
  activeCategory,
  slides = [],
  showSidebar = true,
  breadcrumbs = [],
  hierarchy,
  activeSectionSlug,
  activeSubsectionSlug
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
                    hierarchy={hierarchy}
                    activeSectionSlug={activeSectionSlug}
                    activeSubsectionSlug={activeSubsectionSlug}
                  />
                )}
                <div className="product-page-content">
                  {breadcrumbs.length > 0 && (
                    <nav className="product-breadcrumbs" aria-label="Breadcrumb">
                      {breadcrumbs.map((item, index) => (
                        <span key={`${item.label}-${index}`}>
                          {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
                          {index < breadcrumbs.length - 1 && <span className="product-breadcrumb-sep">-&gt;</span>}
                        </span>
                      ))}
                    </nav>
                  )}
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
