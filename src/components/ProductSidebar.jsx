import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  activeSubsectionSlug,
  activeSubSubsectionSlug
}) {
  const sidebarHierarchy = hierarchy || productHierarchy;
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const sectionFromUrl = pathParts[0] === 'products' ? pathParts[1] : undefined;
  const subsectionFromUrl = pathParts[0] === 'products' ? pathParts[2] : undefined;
  const subSubsectionFromUrl = pathParts[0] === 'products' ? pathParts[3] : undefined;

  const resolvedSectionSlug = activeSectionSlug || sectionFromUrl;
  const resolvedSubsectionSlug = activeSubsectionSlug || subsectionFromUrl;
  const resolvedSubSubsectionSlug = activeSubSubsectionSlug || subSubsectionFromUrl;

  return (
    <aside className="product-sidebar">
      <div className="sidebar-panel">
        <ul className="sidebar-nav">
          {sidebarHierarchy.map((section) => {
            const sectionLink = `/products/${section.slug}`;
            const isActiveSection =
              resolvedSectionSlug === section.slug || activeCategory === section.title;

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
                      const isActiveSubsection = resolvedSubsectionSlug === subsection.slug;

                      return (
                        <li key={subsection.slug} className="sidebar-subnav-item">
                          <Link
                            to={subsectionLink}
                            className={`sidebar-subnav-link ${isActiveSubsection ? 'active' : ''}`}
                          >
                            {subsection.title}
                          </Link>

                          {isActiveSubsection && subsection.subsections && subsection.subsections.length > 0 && (
                            <ul className="sidebar-subsubnav">
                              {subsection.subsections.map((subSubsection) => {
                                const subSubsectionLink = `/products/${section.slug}/${subsection.slug}/${subSubsection.slug}`;
                                return (
                                  <li key={subSubsection.slug} className="sidebar-subsubnav-item">
                                    <Link
                                      to={subSubsectionLink}
                                      className={`sidebar-subsubnav-link ${resolvedSubSubsectionSlug === subSubsection.slug ? 'active' : ''}`}
                                    >
                                      {subSubsection.title}
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
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
