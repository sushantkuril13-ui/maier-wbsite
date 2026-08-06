import React from 'react';
import Header from './components/Header.jsx';
import HeroSlider from './components/HeroSlider.jsx';
import CompanyInfo from './components/CompanyInfo.jsx';
import ProductCategoryTabs from './components/ProductCategoryTabs.jsx';
// import ProductsSection from './components/ProductsSection.jsx';
import ReferencesSlider from './components/ReferencesSlider.jsx';
import Footer from './components/Footer.jsx';
import FloatingSocials from './components/FloatingSocials.jsx';
import ChatButton from './components/ChatButton.jsx';
import './styles/global.css';

function App() {
  return (
    <>
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
                <ProductCategoryTabs />
                <ReferencesSlider />
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
      <FloatingSocials />
      <ChatButton />
    </>
  );
}

export default App;
