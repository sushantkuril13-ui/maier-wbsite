import React from 'react';
import Header from './components/Header.jsx';
import HeroSlider from './components/HeroSlider.jsx';
import CompanyInfo from './components/CompanyInfo.jsx';
// import ProductsSection from './components/ProductsSection.jsx';
import ReferencesSlider from './components/ReferencesSlider.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="app site-shell">
      {/* red top accent */}
      {/* <div className="site-topbar" /> */}
      <div className="site-card">
        <Header />
        <div className="site-inner">
          <main>
            <HeroSlider />
            <div className="content-below-hero">
              <CompanyInfo />
              {/* <ProductsSection /> */}
              <ReferencesSlider />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
