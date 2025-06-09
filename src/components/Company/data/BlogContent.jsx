import React from 'react';

export const searchBlogs = (query) => {
  if (!query) return blogArticles;
  
  const searchTerm = query.toLowerCase();
  return blogArticles.filter(blog => {
    const titleMatch = blog.title.toLowerCase().includes(searchTerm);
    const keywordMatch = blog.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm)
    );
    const descriptionMatch = blog.metaDescription.toLowerCase().includes(searchTerm);
    
    return titleMatch || keywordMatch || descriptionMatch;
  });
};

export const blogArticles = [
  {
    id: 'blog-1',
    slug: '/blog/low-carbon-ferro-chrome-steelmaking',
    metaTitle: 'Low Carbon Ferro Chrome – Uses & Grades in Steelmaking | BBMAM',
    metaDescription: 'Discover the industrial role of Low Carbon Ferro Chrome, how it enhances stainless steel, and why global manufacturers rely on BBMAM\'s supply.',
    keywords: ['low carbon ferro chrome', 'LC FeCr', 'stainless steel additive', 'BBMAM ferroalloys'],
    title: 'Low Carbon Ferro Chrome – Uses, Grades & Why It\'s a Stainless Steel Essential',
    sections: [
      {
        type: 'introduction',
        content: 'Low Carbon Ferro Chrome (LC FeCr) is a vital alloying element in stainless steel manufacturing, where low carbon content and high chromium purity determine product quality. BBMAM specializes in delivering globally compliant LC FeCr for diverse steel industries.'
      },
      {
        type: 'section',
        title: 'What is Low Carbon Ferro Chrome?',
        content: 'Ferro Chrome is an alloy of chromium and iron, and LC FeCr contains <0.1% carbon, making it ideal for high-performance applications. It is generally produced through aluminothermic or silicothermic reduction.'
      },
      {
        type: 'list',
        title: 'BBMAM Grades Supplied',
        items: [
          'LC FeCr Lumps',
          'LC FeCr Granules',
          'LC FeCr Briquettes (on demand)'
        ]
      },
      {
        type: 'list',
        title: 'Industrial Applications of LC FeCr',
        description: 'Low carbon content ensures minimal carbide formation, essential for:',
        items: [
          'Austenitic stainless steel (304, 316 grades)',
          'Superalloys for aerospace',
          'Chemical processing equipment',
          'Heat-resistant and wear-resistant steel components'
        ]
      },
      {
        type: 'list',
        title: 'Why Stainless Steel Needs LC FeCr',
        description: 'LC FeCr improves:',
        items: [
          'Corrosion resistance: Chromium passivates steel, forming a protective oxide layer',
          'Strength-to-weight ratio: Enables thinner steel sections with higher mechanical integrity',
          'Weldability: Low carbon prevents intergranular corrosion after welding'
        ]
      },
      {
        type: 'section',
        title: 'BBMAM\'s Global Supply Edge',
        content: 'BBMAM serves global hubs including Europe (Italy, Spain, Germany), Asia (South Korea, Japan, India), and Russia with industrial-grade volumes.'
      },
      {
        type: 'list',
        title: 'Packaging Options',
        items: [
          '25kg bags',
          '1-ton jumbo bags',
          'Custom palletized shipping'
        ]
      }
    ]
  },
  {
    id: 'blog-2',
    slug: '/blog/ferro-molybdenum-steel-alloys',
    metaTitle: 'Ferro Molybdenum: Strengthen Your Steel Alloys | BBMAM',
    metaDescription: 'Understand how Ferro Molybdenum boosts tensile strength, weldability, and creep resistance in structural steel. Ideal for oil & gas, aerospace, and defense sectors.',
    keywords: ['ferro molybdenum', 'FeMo', 'steel alloys', 'molybdenum in steel', 'BBMAM exports'],
    title: 'Ferro Molybdenum – Strengthening Steel from Inside Out',
    sections: [
      {
        type: 'introduction',
        content: 'Ferro Molybdenum (FeMo) is a ferroalloy made of iron and molybdenum. It is used to increase hardenability, creep strength, and corrosion resistance in steels for critical applications.'
      },
      {
        type: 'list',
        title: 'Composition and Physical Characteristics',
        items: [
          'Mo Content: 60–75%',
          'Form: Lumps, granules',
          'Color: Silvery grey',
          'Melting Point: 1900°C+'
        ]
      },
      {
        type: 'list',
        title: 'Applications of Ferro Molybdenum',
        items: [
          'Oil & Gas Pipelines: Resists sour gas cracking',
          'Aerospace Parts: Strength at high temps',
          'Shipbuilding Steel: Withstands seawater corrosion',
          'Automotive Exhausts: Durable under thermal cycling'
        ]
      },
      {
        type: 'list',
        title: 'Why BBMAM\'s FeMo Stands Out',
        items: [
          'RoHS-compliant',
          'SGS-inspected lots',
          'Documented Mo consistency',
          'Bulk & containerized shipping'
        ]
      }
    ]
  },
  {
    id: 'blog-3',
    slug: '/blog/silicon-metal-aluminum-electronics',
    metaTitle: 'Silicon Metal for Aluminum & Semiconductors | BBMAM',
    metaDescription: 'Learn how Silicon Metal from BBMAM is used in aluminum alloys, solar panels, semiconductors, and silicones. Choose the right grade for your application.',
    keywords: ['silicon metal', 'high purity silicon', 'electronics', 'aluminum alloy', 'BBMAM'],
    title: 'Silicon Metal – The Backbone of Modern Metallurgy & Tech',
    sections: [
      {
        type: 'introduction',
        content: 'From smartphones to aerospace, Silicon Metal drives innovation. BBMAM provides industry-grade silicon for applications spanning from electronics to foundries.'
      },
      {
        type: 'list',
        title: 'Types of Silicon Metal BBMAM Supplies',
        items: [
          'Grade 553: Standard foundry use',
          'Grade 441: Higher purity',
          'Customized purity grades: On demand'
        ]
      },
      {
        type: 'list',
        title: 'Major Applications',
        items: [
          'Aluminum Foundries: Increases casting strength',
          'Semiconductors: Base for chips, diodes, solar cells',
          'Silicone Industry: Raw material for sealants, lubricants'
        ]
      },
      {
        type: 'list',
        title: 'Global Clients Served',
        items: [
          'Electronics factories (Japan, Korea)',
          'Automotive component makers (Germany)',
          'Chemical industries (India, Spain)'
        ]
      }
    ]
  },
  {
    id: 'blog-4',
    slug: '/blog/why-ferro-chrome-is-essential',
    metaTitle: 'Why Ferro Chrome is Critical in Steelmaking | BBMAM',
    metaDescription: 'Ferro Chrome adds corrosion resistance, strength, and formability to steel. Learn how BBMAM\'s quality grades serve diverse alloy requirements.',
    keywords: ['ferro chrome', 'ferro chrome steel', 'HC ferro chrome', 'LC ferro chrome'],
    title: 'What Makes Ferro Chrome Indispensable in Steelmaking?',
    sections: [
      {
        type: 'introduction',
        content: 'Ferro Chrome (FeCr) is an essential alloy in steelmaking due to its high chromium content and ability to improve corrosion resistance and toughness.'
      },
      {
        type: 'list',
        title: 'Types of Ferro Chrome Supplied by BBMAM',
        items: [
          'High Carbon FeCr (HC FeCr): General steel',
          'Medium Carbon FeCr (MC FeCr): Intermediate uses',
          'Low Carbon FeCr (LC FeCr): Stainless steel and precision tools'
        ]
      },
      {
        type: 'list',
        title: 'Role of Chromium in Steel',
        items: [
          'Passivation',
          'Hardness boost',
          'Wear resistance',
          'Formability in cold rolling'
        ]
      },
      {
        type: 'list',
        title: 'Why Steelmakers Choose BBMAM',
        items: [
          'Custom blends',
          'High purity raw materials',
          'Consistent bulk supply'
        ]
      }
    ]
  },
  {
    id: 'blog-5',
    slug: '/blog/how-ferroalloys-are-made',
    metaTitle: 'Ferroalloy Manufacturing Process | BBMAM',
    metaDescription: 'A behind-the-scenes look at how BBMAM makes world-class ferroalloys using electric arc furnaces and proprietary purification techniques.',
    keywords: ['ferroalloy manufacturing', 'electric arc furnace', 'ferro chrome production'],
    title: 'How Ferroalloys are Made – A Deep Dive into BBMAM\'s Process',
    sections: [
      {
        type: 'introduction',
        content: 'Ferroalloys are critical for steel, and their production determines quality. BBMAM follows high-efficiency, eco-safe methods to produce precision-grade alloys.'
      },
      {
        type: 'list',
        title: 'The Electric Arc Furnace (EAF) Method',
        items: [
          'Ore + reductant + flux',
          'Temperatures up to 3000°C',
          'Slag removal and metal tapping',
          'Refining and alloying steps'
        ]
      },
      {
        type: 'list',
        title: 'Other Techniques Used',
        items: [
          'Aluminothermic Reduction: LC alloys',
          'Vacuum Refining: High-purity applications',
          'Briquetting & Granulation: Better consistency in feedstock'
        ]
      },
      {
        type: 'list',
        title: 'Why BBMAM\'s Process is Industry Leading',
        items: [
          'Zero waste slag recovery',
          'Energy-efficient furnaces',
          'ISO-certified quality control'
        ]
      }
    ]
  },
  {
    id: 'blog-6',
    slug: '/blog/high-vs-low-carbon-ferro-chrome',
    metaTitle: 'High Carbon vs Low Carbon Ferro Chrome – Key Differences | BBMAM',
    metaDescription: 'Choosing between HC and LC Ferro Chrome? Compare grades, carbon content, and steelmaking applications with BBMAM\'s expert guide.',
    keywords: ['high carbon ferro chrome', 'low carbon ferro chrome', 'HC vs LC FeCr', 'steel alloy grades'],
    title: 'High Carbon vs Low Carbon Ferro Chrome – Which One Do You Need?',
    sections: [
      {
        type: 'introduction',
        content: 'In the world of steelmaking, carbon content plays a critical role. Ferro Chrome comes in multiple grades—High Carbon (HC), Medium Carbon (MC), and Low Carbon (LC)—each suited for specific applications.'
      },
      {
        type: 'table',
        title: 'What\'s the Difference?',
        headers: ['Grade', 'Carbon Content', 'Usage'],
        rows: [
          ['HC FeCr', '6–8%', 'Standard steel, castings'],
          ['MC FeCr', '2–4%', 'Transition applications'],
          ['LC FeCr', '<0.1%', 'Stainless steel, weldable steel']
        ]
      },
      {
        type: 'list',
        title: 'Application Insights',
        items: [
          'HC FeCr: Bridges, structural steel, tools',
          'LC FeCr: Kitchen appliances, pharma equipment, aerospace'
        ]
      },
      {
        type: 'list',
        title: 'Choosing the Right Grade',
        description: 'Factors to consider:',
        items: [
          'End-use (corrosion vs hardness)',
          'Weldability',
          'Compliance with global standards (RoHS, REACH)'
        ]
      }
    ]
  },
  {
    id: 'blog-7',
    slug: '/blog/ferroalloy-exports-india-global-role',
    metaTitle: 'Ferroalloy Exports from India – Opportunities and Growth | BBMAM',
    metaDescription: 'India is a leading exporter of ferroalloys like FeCr, FeMo, and Silicon Metal. Learn how BBMAM contributes to this global shift.',
    keywords: ['ferroalloy exports India', 'Indian ferroalloy companies', 'BBMAM exports', 'global ferroalloy trade'],
    title: 'The Strategic Importance of Ferroalloys in India\'s Export Economy',
    sections: [
      {
        type: 'introduction',
        content: 'Ferroalloys are India\'s quiet powerhouse—crucial for steelmaking and manufacturing industries around the globe. BBMAM is at the forefront of this growth wave.'
      },
      {
        type: 'list',
        title: 'What Makes India a Ferroalloy Hub?',
        items: [
          'Rich ore reserves',
          'Skilled labor & efficient manufacturing',
          'Competitive pricing in global markets'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM\'s Export Capabilities',
        items: [
          'Shipments to 15+ countries',
          'Port handling from all major port of india',
          'Government-approved export licenses'
        ]
      },
      {
        type: 'list',
        title: 'Key Sectors Served Globally',
        items: [
          'Defense manufacturing (Russia, Korea)',
          'Automotive (Italy, Spain)',
          'Infrastructure projects (Middle East, Europe)'
        ]
      }
    ]
  },
  {
    id: 'blog-8',
    slug: '/blog/ferroalloy-supplier-checklist',
    metaTitle: 'How to Choose a Ferro Alloy Supplier | BBMAM',
    metaDescription: 'Don\'t settle for low-grade alloys. Here\'s a checklist of 7 qualities to look for in a reliable ferroalloy supplier like BBMAM.',
    keywords: ['ferroalloy supplier', 'alloy manufacturer India', 'BBMAM quality check', 'export-grade alloys'],
    title: 'How to Choose the Right Ferro Alloy Supplier – 7 Must-Check Qualities',
    sections: [
      {
        type: 'introduction',
        content: 'Your steel is only as good as your alloy supplier. Here\'s what separates a top-tier ferroalloy supplier like BBMAM from the rest.'
      },
      {
        type: 'list',
        title: 'The 7 Qualities to Look For',
        items: [
          'Quality Certifications (ISO, SGS)',
          'Consistent Chemical Composition',
          'Flexible Packing & Delivery Options',
          'Global Shipping Capability',
          'Responsive Technical Support',
          'Batch Traceability',
          'Customer Testimonials or Case Studies'
        ]
      },
      {
        type: 'section',
        title: 'Why BBMAM Checks All Boxes',
        content: 'From lab-tested materials to export-grade labeling, we serve with transparency, consistency, and performance.'
      }
    ]
  },
  {
    id: 'blog-9',
    slug: '/blog/electrolytic-manganese-metal-steel-batteries',
    metaTitle: 'Electrolytic Manganese Metal (EMM) in Steel & Batteries | BBMAM',
    metaDescription: 'Learn how EMM is used in steel alloys and battery tech. BBMAM delivers premium electrolytic manganese flakes globally.',
    keywords: ['electrolytic manganese metal', 'EMM', 'BBMAM EMM flakes', 'battery manganese', 'stainless steel alloys'],
    title: 'Electrolytic Manganese Metal (EMM) – Steel\'s Secret Ingredient',
    sections: [
      {
        type: 'introduction',
        content: 'Manganese plays a subtle but vital role in the strength and sustainability of steel. Electrolytic Manganese Metal (EMM) is the purest form—and BBMAM delivers it worldwide.'
      },
      {
        type: 'list',
        title: 'What is EMM?',
        items: [
          'Purity: >99.7% Mn',
          'Form: Flakes',
          'Use: High-strength, corrosion-resistant steels'
        ]
      },
      {
        type: 'list',
        title: 'Applications Beyond Steel',
        items: [
          'Battery cathodes (Li-ion batteries)',
          'Alloy production for aerospace',
          'Pharmaceutical catalysts'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM\'s Offering',
        items: [
          'Flake consistency',
          'Anti-caking coating on request',
          'Export packaging (vacuum-sealed)'
        ]
      }
    ]
  },
  {
    id: 'blog-10',
    slug: '/blog/ferroalloys-in-green-steel-sustainability',
    metaTitle: 'Ferroalloys in Green Steel & Net Zero Goals | BBMAM',
    metaDescription: 'Discover how BBMAM\'s clean-grade ferroalloys contribute to the green steel revolution and sustainability in metallurgy.',
    keywords: ['green steel', 'low emission steelmaking', 'sustainable ferroalloys', 'BBMAM ESG'],
    title: 'The Role of Ferroalloys in Green Steel & Carbon Neutrality',
    sections: [
      {
        type: 'introduction',
        content: 'Steel is going green. But without clean ferroalloys, carbon neutrality is a myth. Here\'s how BBMAM supports the world\'s shift to sustainable steel.'
      },
      {
        type: 'list',
        title: 'What is Green Steel?',
        items: [
          'Made with lower carbon footprint',
          'Uses hydrogen or renewable energy',
          'Focuses on recyclability and eco-grade inputs'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM\'s Green Initiatives',
        items: [
          'Energy-efficient arc furnaces',
          'Zero-waste slag management',
          'Solar power integration (in progress)'
        ]
      },
      {
        type: 'list',
        title: 'Global ESG Compliance',
        items: [
          'RoHS, REACH standards',
          'Carbon credit documentation (on request)',
          'Eco-packaging with HDPE recycling protocols'
        ]
      }
    ]
  },
  {
    id: 'blog-11',
    slug: '/blog/ferro-chrome-grades-explained',
    metaTitle: 'Ferro Chrome Grades Explained – HC, MC, LC | BBMAM',
    metaDescription: 'Understand the difference between High, Medium, and Low Carbon Ferro Chrome. Learn which grade suits your steelmaking need with BBMAM.',
    keywords: ['HC ferro chrome', 'LC FeCr', 'MC ferro chrome', 'BBMAM ferro chrome grades'],
    title: 'A Complete Guide to Ferro Chrome Grades – HC, MC & LC',
    sections: [
      {
        type: 'introduction',
        content: 'Not all Ferro Chrome is the same. Steelmakers often choose from HC, MC, or LC grades depending on performance, application, and compliance.'
      },
      {
        type: 'table',
        title: 'Ferro Chrome Grade Breakdown',
        headers: ['Grade', 'Carbon Content', 'Chromium', 'Application'],
        rows: [
          ['HC FeCr', '6-8%', '~60%', 'General steelmaking'],
          ['MC FeCr', '2-4%', '~60%', 'Low carbon, less brittle'],
          ['LC FeCr', '<0.1%', '~60-70%', 'Stainless steel, weldable alloys']
        ]
      },
      {
        type: 'list',
        title: 'Global Demand Insights',
        items: [
          'Europe prefers LC FeCr for pharma-grade steel',
          'India and Russia use HC FeCr for infrastructure',
          'South Korea imports MC FeCr for automotive components'
        ]
      }
    ]
  },
  {
    id: 'blog-12',
    slug: '/blog/how-ferroalloys-enable-stainless-steel',
    metaTitle: 'How Ferroalloys Create Stainless Steel | BBMAM',
    metaDescription: 'Stainless steel wouldn\'t exist without ferroalloys. Learn how BBMAM\'s alloys contribute to strength, corrosion resistance, and flexibility in steel.',
    keywords: ['ferroalloys in stainless steel', 'BBMAM', 'chrome steel', 'molybdenum alloying'],
    title: 'The Science Behind Stainless Steel – How Ferroalloys Make It Possible',
    sections: [
      {
        type: 'introduction',
        content: 'Without the right alloys, stainless steel is just mild steel. Let\'s explore how ferroalloys like LC FeCr and FeMo enable this magical metal.'
      },
      {
        type: 'list',
        title: 'Core Alloying Agents in Stainless Steel',
        items: [
          'Ferro Chrome (LC): Corrosion resistance',
          'Ferro Molybdenum: Creep and heat resistance',
          'Nickel (via NiCr alloys): Toughness',
          'Silicon Metal: Deoxidation and fluidity in casting'
        ]
      },
      {
        type: 'list',
        title: 'How BBMAM Supports Global SS Producers',
        items: [
          'Grade-specific batches',
          'Weldability-optimized LC FeCr',
          'Supply continuity via Indian ports'
        ]
      }
    ]
  },
  {
    id: 'blog-13',
    slug: '/blog/bbmam-supporting-indian-steel',
    metaTitle: 'How BBMAM Strengthens India\'s Steel Industry | BBMAM',
    metaDescription: 'From ferro chrome to molybdenum, BBMAM provides the essential inputs for India\'s booming infrastructure and export steel projects.',
    keywords: ['Indian steel industry', 'BBMAM ferroalloy', 'ferro alloy supplier India'],
    title: 'BBMAM\'s Role in Building India\'s Steel Backbone',
    sections: [
      {
        type: 'introduction',
        content: 'As India accelerates infrastructure, its need for quality steel soars. BBMAM fuels this growth with world-class ferroalloy supply.'
      },
      {
        type: 'list',
        title: 'Our Indian Steel Customers Include',
        items: [
          'Railways',
          'Defence',
          'Smart Cities steel plants',
          'Automotive clusters (Pune, Chennai, Nagpur)'
        ]
      },
      {
        type: 'list',
        title: 'Government Compliance & Quality',
        items: [
          'BIS-certified',
          'EPC contractor support',
          'Custom declarations for GST crediting'
        ]
      }
    ]
  },
  {
    id: 'blog-14',
    slug: '/blog/ferroalloy-handling-storage-tips',
    metaTitle: 'Ferroalloy Storage & Handling Best Practices | BBMAM',
    metaDescription: 'Prevent oxidation, loss, and contamination. Learn BBMAM\'s expert tips on storing and handling ferroalloys at your plant.',
    keywords: ['ferroalloy storage tips', 'alloy handling guide', 'BBMAM ferro chrome', 'safe ferro metal storage'],
    title: 'How to Store & Handle Ferroalloys the Right Way',
    sections: [
      {
        type: 'introduction',
        content: 'Improper handling can ruin even the best-quality alloys. BBMAM offers these best practices to ensure your ferroalloy investment performs as intended.'
      },
      {
        type: 'list',
        title: 'Storage Guidelines',
        items: [
          'Store in dry, shaded areas',
          'Avoid contact with acidic surfaces',
          'Stack bags on pallets — not ground'
        ]
      },
      {
        type: 'list',
        title: 'Handling Precautions',
        items: [
          'Use dedicated scoops or tippers',
          'Avoid exposure to water (oxidation risk)',
          'Rotate FIFO (first-in, first-out) for older lots'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM Delivery Advantage',
        items: [
          'HDPE inner lining',
          'Moisture barrier seal',
          'Lab-tested before dispatch'
        ]
      }
    ]
  },
  {
    id: 'blog-15',
    slug: '/blog/ferroalloy-myths-and-facts',
    metaTitle: '7 Ferroalloy Myths Busted | BBMAM Industry Insights',
    metaDescription: 'Think all ferro chrome is the same? Think again. We bust 7 myths about ferroalloys and reveal what really matters for steel quality.',
    keywords: ['ferroalloy myths', 'ferro chrome misconceptions', 'BBMAM facts', 'steel quality tips'],
    title: '7 Common Ferroalloy Myths Debunked (And What\'s Actually True)',
    sections: [
      {
        type: 'introduction',
        content: 'There\'s a lot of misinformation in the ferroalloy world. Here\'s what BBMAM experts say about what really matters when choosing the right alloy.'
      },
      {
        type: 'list',
        title: 'Myth vs Fact',
        items: [
          'Myth: All ferro chrome is the same\nFact: Grades vary by carbon %, which changes steel properties',
          'Myth: Higher price = better quality\nFact: Purity, traceability, and composition testing are more reliable indicators',
          'Myth: Ferroalloys can\'t expire\nFact: Exposure to moisture and oxidation can ruin reactivity'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM\'s Quality Check Process',
        items: [
          'Chemical assay reports',
          'Granulometry control',
          'Anti-contaminant bagging'
        ]
      }
    ]
  },
  {
    id: 'blog-16',
    slug: '/blog/what-is-silicon-metal-grades-uses',
    metaTitle: 'Silicon Metal: Grades, Uses, and Market Demand | BBMAM',
    metaDescription: 'Silicon Metal powers everything from aluminum alloys to solar panels. Learn about its grades, industrial use, and how BBMAM meets global demand.',
    keywords: ['silicon metal grades', 'high purity silicon', 'aluminum alloys', 'BBMAM silicon export'],
    title: 'What is Silicon Metal? Grades, Uses, and Global Market Demand',
    sections: [
      {
        type: 'introduction',
        content: 'Silicon Metal is a high-purity form of silicon used across metallurgy, electronics, and chemical industries. BBMAM is a global supplier of silicon metal, meeting industrial standards across sectors.'
      },
      {
        type: 'table',
        title: 'Types of Silicon Metal Grades',
        headers: ['Grade', 'Purity', 'Use'],
        rows: [
          ['553', '~98.5%', 'Foundries, die casting'],
          ['441', '~99%', 'Chemical manufacturing'],
          ['3303 / 2202', '99.5%+', 'Semiconductors, electronics']
        ]
      },
      {
        type: 'list',
        title: 'Global Market Demand',
        items: [
          'China, Japan: Electronics & solar cell manufacturing',
          'Germany, Italy: Foundries, automotive',
          'India: Aluminum extrusions, cable sheaths'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM\'s Silicon Offering',
        items: [
          'Bulk container shipments',
          'Chemical-assay-certified batches',
          'Custom sizes: lumps, granules, powders'
        ]
      }
    ]
  },
  {
    id: 'blog-17',
    slug: '/blog/ferroalloy-export-process-india',
    metaTitle: 'The Lifecycle of Ferroalloy Exports – Plant to Port | BBMAM',
    metaDescription: 'Explore how BBMAM prepares, packages, and delivers high-grade ferroalloys to global customers via India\'s major ports.',
    keywords: ['ferroalloy exports India', 'BBMAM logistics', 'ferroalloy delivery', 'Nagpur to port supply'],
    title: 'The Lifecycle of Ferroalloy Exports – From Plant to Port',
    sections: [
      {
        type: 'introduction',
        content: 'Exporting ferroalloys isn\'t just about production. BBMAM follows a strict, reliable supply chain model to ensure quality reaches global customers intact.'
      },
      {
        type: 'list',
        title: 'Our End-to-End Process',
        items: [
          'Production at BBMAM plant',
          'Lab Testing for each batch',
          'Moisture-proof Packing with HDPE lining',
          'Dispatch via Container Freight Stations',
          'Export via all major port of india'
        ]
      },
      {
        type: 'list',
        title: 'Countries Served',
        items: [
          'South Korea',
          'Italy',
          'Russia',
          'Spain',
          'Japan'
        ]
      }
    ]
  },
  {
    id: 'blog-18',
    slug: '/blog/ferroalloy-quality-control-process',
    metaTitle: 'BBMAM\'s Ferroalloy Quality Control Process | BBMAM',
    metaDescription: 'See how BBMAM guarantees consistent composition, sizing, and moisture control across every alloy batch, from LC FeCr to Silicon Metal.',
    keywords: ['ferroalloy quality assurance', 'BBMAM testing lab', 'SGS certified ferroalloys'],
    title: 'How BBMAM Ensures Consistency Across All Ferroalloy Batches',
    sections: [
      {
        type: 'introduction',
        content: 'At BBMAM, quality isn\'t a feature—it\'s the foundation. We maintain industry-grade controls from raw ore to final export product.'
      },
      {
        type: 'list',
        title: 'Our Quality Control Process',
        items: [
          'Incoming Ore Inspection',
          'Blending Optimization',
          'XRF & Wet Lab Assay Reports',
          'Moisture Testing Before Packing',
          'Grain Size Control & Sieve Analysis'
        ]
      },
      {
        type: 'list',
        title: 'Certifications Offered',
        items: [
          'SGS',
          'ISO 9001:2015',
          'CE/REACH compliant declarations'
        ]
      }
    ]
  },
  {
    id: 'blog-19',
    slug: '/blog/compare-ferro-chrome-suppliers-bbmam',
    metaTitle: 'Compare Ferro Chrome Producers – Why BBMAM Wins | BBMAM',
    metaDescription: 'Explore what sets BBMAM apart from other ferro chrome manufacturers—traceability, purity, export speed, and pricing transparency.',
    keywords: ['compare ferro chrome suppliers', 'best ferroalloy manufacturer India', 'BBMAM advantages'],
    title: 'Comparing Ferro Chrome Producers – Why BBMAM Leads',
    sections: [
      {
        type: 'introduction',
        content: 'In a crowded market, choosing the right producer means avoiding supply failures. BBMAM is trusted by global buyers for good reasons.'
      },
      {
        type: 'table',
        title: 'BBMAM vs Competitors',
        headers: ['Criteria', 'BBMAM', 'Others'],
        rows: [
          ['Traceability', '✅', '❌'],
          ['Export packaging', '✅', '⚠️'],
          ['Lead times', '7–10 days', '15–25 days'],
          ['Custom grade blending', '✅', '❌']
        ]
      },
      {
        type: 'section',
        title: 'What Our Clients Say',
        content: '"BBMAM helped us maintain consistent stainless steel quality at our Italy-based foundry." — Client, Europe'
      }
    ]
  },
  {
    id: 'blog-20',
    slug: '/blog/bbmam-packaging-for-ferroalloys',
    metaTitle: 'BBMAM Packaging Options for Ferroalloy Export | BBMAM',
    metaDescription: 'Learn about BBMAM\'s anti-contaminant packaging systems—designed to preserve alloy purity and reduce shipping loss.',
    keywords: ['ferroalloy packaging', 'export-ready bags', 'jumbo bags', 'sealed packing BBMAM'],
    title: 'BBMAM\'s Packaging Options – Bulk, Palletized & Moisture-Sealed',
    sections: [
      {
        type: 'introduction',
        content: 'Packing matters. Alloy oxidation or contamination during transit can lead to huge quality drops. BBMAM prevents this with smart, export-ready packaging.'
      },
      {
        type: 'list',
        title: 'Standard Options',
        items: [
          '25kg HDPE Bags (Sealed)',
          '1-Ton Jumbo Bags',
          'Vacuum-Sealed Bags (for high-purity silicon)',
          'Heat-sealed laminated liners (on request)'
        ]
      },
      {
        type: 'list',
        title: 'Customization Per Country',
        items: [
          'Wooden pallet wrapping for EU',
          'Labeling in Italian, Japanese, Korean',
          'MSDS, CoA, and test reports included'
        ]
      }
    ]
  },
  {
    id: 'blog-21',
    slug: '/blog/global-ferroalloy-market-trends-2025',
    metaTitle: 'Global Ferroalloy Market Trends & Forecast 2025 | BBMAM',
    metaDescription: 'See what\'s driving global ferroalloy demand in 2025—stainless steel, electric vehicles, infrastructure. BBMAM breaks down the forecast.',
    keywords: ['global ferroalloy trends', 'ferro chrome demand', '2025 steel forecast', 'BBMAM exports'],
    title: 'The Global Ferroalloy Market in 2025 – Trends, Players & Projections',
    sections: [
      {
        type: 'introduction',
        content: 'As green steel, infrastructure and EV manufacturing soar, ferroalloys are in massive global demand. BBMAM analyzes where the industry is headed.'
      },
      {
        type: 'list',
        title: 'Key Growth Drivers',
        items: [
          'Green energy & green steel initiatives',
          'EV battery infrastructure (EMM, FeMo)',
          'Defense and aerospace manufacturing'
        ]
      },
      {
        type: 'list',
        title: 'Projected Leaders (by Import Volume)',
        items: [
          'China – silicon & manganese',
          'Japan – low carbon ferro chrome',
          'EU (Germany, Italy) – molybdenum-rich steel',
          'India – growth in domestic stainless steel'
        ]
      },
      {
        type: 'list',
        title: 'BBMAM Strategy for 2025',
        items: [
          'Expand to North America',
          'Focus on RoHS-compliant packaging',
          'Introduce traceable QR-coded batch reports'
        ]
      }
    ]
  },
  {
    id: 'blog-22',
    slug: '/blog/ferroalloy-solutions-for-new-steel-plants',
    metaTitle: 'Ferroalloy Supply for New Steel Plants | BBMAM',
    metaDescription: 'Starting a new steel plant? BBMAM delivers tailored ferroalloy solutions, flexible volumes, and compliance-ready documentation for EPC teams.',
    keywords: ['new steel plant ferroalloy', 'BBMAM steel supply', 'EPC compliant alloys'],
    title: 'How BBMAM Supports New Steel Plants with Custom Ferroalloy Solutions',
    sections: [
      {
        type: 'introduction',
        content: 'BBMAM provides high-grade, scalable ferroalloy solutions for upcoming steel projects—from mid-size foundries to government EPC operations.'
      },
      {
        type: 'list',
        title: 'Our New Plant Services',
        items: [
          'Technical grade recommendations',
          'Sample batch shipments',
          'Assay reports per heat',
          'Packing customization per plant design'
        ]
      },
      {
        type: 'list',
        title: 'Past Collaboration Snapshot',
        items: [
          'Supported a Maharashtra-based mini-steel plant launch',
          'Supplied 100+ tons of LC FeCr for pharma-grade SS',
          'Monthly delivery contracts established'
        ]
      }
    ]
  },
  {
    id: 'blog-23',
    slug: '/blog/ferroalloy-product-forms-lumps-granules-powders',
    metaTitle: 'BBMAM Ferroalloy Forms – Lumps, Granules, Powders | BBMAM',
    metaDescription: 'Learn the difference between lumps, granules, and powder forms of ferroalloys and how each serves your steel process.',
    keywords: ['ferroalloy forms', 'lumps vs granules', 'alloy powder for steel'],
    title: 'BBMAM\'s 3-Tier Product Line Explained – Lumps, Granules & Powders',
    sections: [
      {
        type: 'introduction',
        content: 'Choosing the right physical form of alloy is just as important as grade. BBMAM helps you match the form to your furnace and casting setup.'
      },
      {
        type: 'list',
        title: 'Key Form Types',
        items: [
          'Lumps: Best for induction furnaces',
          'Granules: Efficient melting & mixability',
          'Powder: Ideal for high-reactivity & controlled dosing'
        ]
      },
      {
        type: 'table',
        title: 'Industry Recommendations',
        headers: ['Application', 'Form'],
        rows: [
          ['Electric arc furnace', 'Granules'],
          ['Continuous casting', 'Lumps'],
          ['Add-on chemical blending', 'Powder']
        ]
      }
    ]
  },
  {
    id: 'blog-24',
    slug: '/blog/sustainable-ferro-chrome-production-bbmam',
    metaTitle: 'Sustainable Ferro Chrome Production at BBMAM | BBMAM',
    metaDescription: 'BBMAM practices green metallurgy: solar usage, zero slag loss, water reuse. Learn about our clean ferro chrome initiatives.',
    keywords: ['sustainable ferroalloy', 'green ferro chrome', 'BBMAM ESG'],
    title: 'Sustainable Ferro Chrome Production – What BBMAM Does Differently',
    sections: [
      {
        type: 'introduction',
        content: 'BBMAM is not just another ferro chrome manufacturer—we lead the shift to cleaner, greener metallurgy.'
      },
      {
        type: 'list',
        title: 'Sustainability Steps We\'ve Taken',
        items: [
          'Waste heat recovery furnaces',
          'Solar roof integration',
          'Slag-to-silicate conversion',
          'Water recycling units installed'
        ]
      },
      {
        type: 'list',
        title: 'Green Logistics',
        items: [
          'Bio-degradable packaging pilots',
          'Carbon neutral documentation for exports',
          'Local sourcing of packing material'
        ]
      }
    ]
  },
  {
    id: 'blog-25',
    slug: '/blog/ferroalloys-in-defense-aerospace',
    metaTitle: 'Ferroalloys for India\'s Defense & Aerospace Industry | BBMAM',
    metaDescription: 'FeMo, FeCr, and Silicon Metal form the backbone of high-performance alloys used in India\'s defense and aerospace.',
    keywords: ['defense grade ferroalloy', 'aerospace steel India', 'BBMAM military alloy supplier'],
    title: 'The Role of Ferroalloys in India\'s Defense and Aerospace Sectors',
    sections: [
      {
        type: 'introduction',
        content: 'Ferroalloys fuel India\'s advanced defense and aerospace-grade steels. BBMAM supplies customized grades to serve these critical sectors.'
      },
      {
        type: 'list',
        title: 'Applications',
        items: [
          'FeMo in jet engine components',
          'LC FeCr in armored vehicle plates',
          'Silicon Metal in defense castings',
          'EMM in electronics & signal systems'
        ]
      },
      {
        type: 'list',
        title: 'Strategic Tie-Ups',
        items: [
          'Export orders to Korean naval steel',
          'Trial lots approved by HAL subcontractors'
        ]
      }
    ]
  }
];

// Helper function to map blog links to actual application routes
const mapLinkToRoute = (link) => {
  // Product links - redirect to products page
  if (link.startsWith('/products/')) {
    return '/products';
  }
  // Industry links - redirect to landing page
  else if (link.startsWith('/industries/')) {
    return '/';
  }
  // About pages - redirect to company profile
  else if (link.startsWith('/about-bbmam')) {
    return '/company/profile';
  }
  // Contact links
  else if (link.includes('contact')) {
    return '/contact';
  }
  // Quality/certification links - redirect to Certi component in LandingPage.jsx
  else if (link.includes('quality') || link.includes('certification')) {
    return '/#certi';
  }
  // Global network links - redirect to ExportCountries.jsx
  else if (link.includes('global-network')) {
    return '/#export-countries';
  }
  // FAQ links - redirect to blog (assuming FAQs are in blog)
  else if (link.includes('faq')) {
    return '/blog';
  }
  // Sustainability/eco links - redirect to eco-friendly page
  else if (link.includes('sustainability') || link.includes('process')) {
    return '/eco-friendly-sustainability';
  }
  // Fallback to home page
  return '/';
};

// Modified renderBlogContent function that uses the mapping for links
export const renderBlogContent = (sections) => {
  return sections.map((section, index) => {
    switch (section.type) {
      case 'introduction':
        return (
          <p key={index} className="mb-4 text-gray-300">
            {section.content}
          </p>
        );
      case 'section':
        return (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
            <p className="text-gray-300">{section.content}</p>
          </div>
        );
      case 'list':
        return (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
            {section.description && (
              <p className="text-gray-300 mb-2">{section.description}</p>
            )}
            <ul className="list-disc pl-5 text-gray-300">
              {section.items.map((item, i) => (
                <li key={i} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        );
      case 'links':
        return (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
            <ul className="list-disc pl-5 text-gray-300">
              {section.items.map((item, i) => (
                <li key={i} className="mb-1">
                  <a href={mapLinkToRoute(item.url)} className="text-blue-400 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'table':
        return (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    {section.headers.map((header, i) => (
                      <th key={i} className="px-4 py-2 bg-gray-800 text-left text-sm font-medium text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {section.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-2 text-sm text-gray-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  });
};

