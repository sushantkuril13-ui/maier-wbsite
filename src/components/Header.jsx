import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { productCategories } from './ProductSidebar.jsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');

  // const languages = ['DE', 'EN', 'TR'];
  const menuItems = [
    // { label: 'News', href: '/news' },
    { label: 'Transformer Accessories', href: '/transformer-accessories' },
    { label: 'Applications', href: '/applications' },
    { label: 'Company', href: '/company' },
    { label: 'Support & Contact', href: '/support' }
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className="container flex-between">
          <div className="logo">
            <img src="./images/Logo_Maier_final_RGB.png" alt="Maier Accessories" />
          </div>
          <div className="header-right">
            <form className="search-form">
              <input 
                type="text" 
                placeholder="search..." 
                className="search-input"
              />
            </form>
            {/* <div className="language-selector">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`lang-btn ${activeLanguage === lang ? 'active' : ''}`}
                  onClick={() => setActiveLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {menuItems.map((item, index) => {
                if (item.label === 'Transformer Accessories') {
                  return (
                    <li key={index} className="nav-item dropdown">
                      <Link to={item.href}>{item.label}</Link>
                      <div className="dropdown-content">
                        <ul>
                          {productCategories.map(cat => (
                            <li key={cat.title} className="dropdown-item">
                              <Link to={cat.link} className="dropdown-link">
                                {cat.icon && <img src={cat.icon} alt={cat.title} className="dropdown-icon" />}
                                {cat.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={index} className="nav-item">
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
