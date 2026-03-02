import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Header.css';
import { productCategories } from './ProductSidebar.jsx';
import products from '../data/products.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // const languages = ['DE', 'EN', 'TR'];
  const menuItems = [
    { label: 'Transformer Accessories', href: '/transformer-accessories' },
    // { label: 'Applications', href: '/applications' },
    { label: 'Company', href: '/company' },
    { label: 'Support & Contact', href: '/support' }
  ];

  const updateSuggestions = (q) => {
    const t = (q || '').trim().toLowerCase();
    if (!t) return setSuggestions([]);
    const matches = products.filter(p => p.title.toLowerCase().includes(t)).slice(0, 6);
    setSuggestions(matches);
    setActiveIndex(-1);
  };

  const handleChange = (e) => {
    const v = e.target.value;
    setSearchQuery(v);
    updateSuggestions(v);
  };

  const goToProduct = (link) => {
    setSearchQuery('');
    setSuggestions([]);
    navigate(link);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        e.preventDefault();
        const chosen = activeIndex >= 0 ? suggestions[activeIndex] : suggestions[0];
        if (chosen) goToProduct(chosen.link);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
    }
  };

  const handleSuggestionMouseDown = (e, link) => {
    // prevent input blur before click registers
    e.preventDefault();
    goToProduct(link);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container flex-between">
          <div className="logo">
            <Link to="/">
              <img src="./images/Logo_Maier_final_RGB.png" alt="Rajshi Enterprise" />
            </Link>
          </div>
          <div className="header-right">
            <div className="search-form" role="search">
              <input 
                ref={inputRef}
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                type="text" 
                className="search-input"
                placeholder=""
                aria-label="Search products"
                autoComplete="off"
              />

              {suggestions && suggestions.length > 0 && (
                <ul className="search-suggestions" role="listbox">
                  {suggestions.map((s, idx) => (
                    <li
                      key={s.title + idx}
                      role="option"
                      aria-selected={activeIndex === idx}
                      className={`suggestion-item ${activeIndex === idx ? 'active' : ''}`}
                      onMouseDown={(e) => handleSuggestionMouseDown(e, s.link)}
                    >
                      <div className="suggestion-meta">
                        <span className="suggestion-title">{s.title}</span>
                        <span className="suggestion-filter">{s.filter}</span>
                      </div>
                      <div className="suggestion-action">Is this the product? →</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
        <div className="container-header">
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
