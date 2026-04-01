import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ProductSidebar.css';
import productHierarchy from '../data/productHierarchy.js';

export const productCategories = productHierarchy.map((section) => ({
  title: section.title,
  icon: section.icon,
  link: `/products/${section.slug}`,
  subsections: section.subsections || []
}));

export default function ProductSidebar({
  activeCategory,
  hierarchy,
  activeSectionSlug,
  activeSubsectionSlug
}) {
  const sidebarHierarchy = hierarchy || productHierarchy;

  return (
    <aside className="product-sidebar">
      <div className="sidebar-panel">
        <ul className="sidebar-nav">
          {sidebarHierarchy.map((section) => {
            const sectionLink = `/products/${section.slug}`;
            const isActiveSection =
              activeSectionSlug === section.slug || activeCategory === section.title;

            return (
              <li
                key={section.title}
                className={`sidebar-nav-item ${isActiveSection ? 'active' : ''}`}
              >
                <Link to={sectionLink} className="sidebar-nav-link">
                  {section.icon && <img src={section.icon} alt={section.title} className="sidebar-icon" />}
                  <span className="sidebar-title">{section.title}</span>
                </Link>

                {isActiveSection && section.subsections && section.subsections.length > 0 && (
                  <ul className="sidebar-subnav">
                    {section.subsections.map((subsection) => {
                      const subsectionLink = `/products/${section.slug}/${subsection.slug}`;
                      return (
                        <li key={subsection.slug} className="sidebar-subnav-item">
                          <Link
                            to={subsectionLink}
                            className={`sidebar-subnav-link ${activeSubsectionSlug === subsection.slug ? 'active' : ''}`}
                          >
                            {subsection.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
