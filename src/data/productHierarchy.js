const productHierarchy = [
  {
    title: 'Pressure Relief Valves',
    slug: 'pressure-relief-valves',
    icon: '/images/Icons-druckentlastungsventile.png',
    catalogueLink: '/downloads/PRV Catalogue.pdf',
    slides: [
      { img: '/images/Product Images/PRV_DP1EF.png', caption: 'Pressure Relief Valves' },
      { img: '/images/Product Images/PRV_DP3EF.png', caption: 'With Switches' },
      { img: '/images/Product Images/PRV_DP6EF.png', caption: 'Flange Models' }
    ],
    subsections: [
      { 
        title: 'Pressure Relief Valves with Switches', 
        slug: 'with-switches',
        slides: [{ img: '/images/Product Images/PRV_DP1EF.png', caption: 'PRV with Switches' }]
      },
      { 
        title: 'Threaded Pressure Relief Valves', 
        slug: 'threaded',
        slides: [{ img: '/images/Product Images/PRV_AT-25.png', caption: 'Threaded PRV' }]
      },
      { 
        title: 'Flange Pressure Relief Valves', 
        slug: 'flange',
        slides: [{ img: '/images/Product Images/PRV_DP6EF.png', caption: 'Flange PRV' }]
      }
    ]
  },
  {
    title: 'Oil Level Indicator',
    slug: 'oil-level-indicator',
    icon: '/images/Icons-oelstandsanzeiger.png',
    catalogueLink: '/downloads/Oil level indicator  Catalogue.pdf',
    slides: [
      { img: '/images/Product Images/OLI.png', caption: 'Oil Level Indicator' },
      { img: '/images/Product Images/OLI_P.png', caption: 'Vertical OLI' },
      { img: '/images/Product Images/OLI_PRISMATIC.png', caption: 'Prismatic OLI' }
    ],
    subsections: [
      { 
        title: 'Vertical Oil Level Indicator', 
        slug: 'vertical',
        slides: [{ img: '/images/Product Images/OLI_P.png', caption: 'Vertical OLI' }]
      },
      { 
        title: 'Threaded Oil Level Indicator', 
        slug: 'threaded',
        slides: [{ img: '/images/Product Images/OLI.png', caption: 'Threaded OLI' }]
      },
      { 
        title: 'Prismatic Oil Level Indicator', 
        slug: 'prismatic',
        slides: [{ img: '/images/Product Images/OLI_PRISMATIC.png', caption: 'Prismatic OLI' }]
      },
      { 
        title: 'Tubular Oil Level Indicator', 
        slug: 'tubular',
        slides: [{ img: '/images/Product Images/TOLG_BT.png', caption: 'Tubular OLI' }]
      },
      // { title: 'Other Models', slug: 'other-models' }
    ]
  },
  {
    title: 'Nitrogen Gas Monitoring System',
    slug: 'nitrogen-gas-monitoring-system',
    icon: '/images/icon-gas-monitoring-system.png',
    catalogueLink: '/downloads',
    slides: [
      { img: '/images/Product Images/Gas Monitoring.png', caption: 'Nitrogen Gas Monitoring' }
    ],
    subsections: [
      { 
        title: 'SDGR-02', 
        slug: 'sdgr-02',
        slides: [{ img: '/images/Product Images/GMS_SDGR02.png', caption: 'SDGR-02' }]
      },
      { 
        title: 'SDGR-02D', 
        slug: 'sdgr-02d',
        slides: [{ img: '/images/Product Images/GMS_SDGR02D.png', caption: 'SDGR-02D' }]
      },
      { 
        title: 'DGR-02', 
        slug: 'dgr-02',
        slides: [{ img: '/images/Product Images/GMS_DGR02.png', caption: 'DGR-02' }]
      },
      { 
        title: 'DGR-05', 
        slug: 'dgr-05',
        slides: [{ img: '/images/Product Images/GMS_DGR05.png', caption: 'DGR-05' }]
      },
      { 
        title: 'TGR-02', 
        slug: 'tgr-02',
        slides: [{ img: '/images/Product Images/GMS_SDGR02.png', caption: 'TGR-02' }] // Reusing SDGR02 as placeholder for TGR if not found
      }
    ]
  },
  {
    title: 'Pressure Relief Valves with Oil Level Indicator',
    slug: 'pressure-relief-valves-with-oil-level-indicator',
    icon: '/images/icon-prv-eith-level-indicator.png',
    catalogueLink: '/downloads',
    slides: [
      { img: '/images/Product Images/PRV-LLI.png', caption: 'PRV with OLI' }
    ],
    subsections: []
  },
  {
    title: 'Pressure Alarm System',
    slug: 'pressure-alarm-system',
    icon: '/images/icon-low-high-pressure.png',
    catalogueLink: '/downloads',
    slides: [
      { img: '/images/Product Images/Pressure Alarm.png', caption: 'Pressure Alarm System' }
    ],
    subsections: []
  },
  {
    title: 'Tank Components',
    slug: 'tank-components',
    icon: '/images/Icon-armaturen-kesselbau.png',
    catalogueLink: '/downloads',
    slides: [
      { img: '/images/Product Images/Tank Valve.png', caption: 'Tank Components' }
    ],
    subsections: [
      { 
        title: 'GFV-1', 
        slug: 'gfv-1',
        slides: [{ img: '/images/Product Images/Tank Valve.png', caption: 'Tank Valve GFV-1' }]
      },
      { 
        title: 'GFV-2', 
        slug: 'gfv-2',
        slides: [{ img: '/images/Product Images/TANK VALVE.png', caption: 'Tank Valve GFV-2' }]
      },
      { 
        title: 'GFV-3', 
        slug: 'gfv-3',
        slides: [{ img: '/images/Product Images/Tank Valve.png', caption: 'Tank Valve GFV-3' }]
      },
      { 
        title: 'GFV-4', 
        slug: 'gfv-4',
        slides: [{ img: '/images/Product Images/Tank Valve.png', caption: 'Tank Valve GFV-4' }]
      },
      { 
        title: 'GFV-5', 
        slug: 'gfv-5',
        slides: [{ img: '/images/Product Images/Tank Valve.png', caption: 'Tank Valve GFV-5' }]
      },
      { 
        title: 'GFV-6', 
        slug: 'gfv-6',
        slides: [{ img: '/images/Product Images/Tank Valve.png', caption: 'Tank Valve GFV-6' }]
      },
      { 
        title: 'Special Options & Variants', 
        slug: 'special-options-and-variants',
        slides: [{ img: '/images/Product Images/Tank Valve.png', caption: 'Special Options' }]
      },
      // { title: 'GFV-1B Model', slug: 'gfv-1b-model' },
      // { title: 'GFV-2B Model', slug: 'gfv-2b-model' },
      // { title: 'Brass Cap Options', slug: 'brass-cap-options' },
      // { title: 'Finish Options', slug: 'finish-options' }
    ]
  },
  {
    title: 'Solenoid Interlock Device',
    slug: 'solenoid-interlock-device',
    icon: '/images/icon-solenooid-interlock-device.png',
    catalogueLink: '/downloads',
    slides: [
      { img: '/images/Product Images/Solenoid Interlock.png', caption: 'Solenoid Interlock Device' }
    ],
    subsections: []
  }
];

export function getSectionBySlug(slug) {
  return productHierarchy.find((section) => section.slug === slug);
}

export function getSubsectionBySlug(section, subsectionSlug) {
  if (!section || !Array.isArray(section.subsections)) return undefined;
  return section.subsections.find((subsection) => subsection.slug === subsectionSlug);
}

export function getSubsectionSlides(sectionSlug, subsectionSlug) {
  const section = getSectionBySlug(sectionSlug);
  if (!section) return [];
  const subsection = getSubsectionBySlug(section, subsectionSlug);
  if (subsection && subsection.slides && subsection.slides.length > 0) {
    return subsection.slides;
  }
  return section.slides || [];
}

export default productHierarchy;
