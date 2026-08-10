import type { ImageMetadata } from 'astro';

import imgHardwood from '../assets/services/hardwood-lvp.webp';
import imgLaminate from '../assets/services/slide-1.webp';
import imgTile from '../assets/services/ceramic-tile.webp';
import imgCarpet from '../assets/services/carpet.webp';
import imgCommercial from '../assets/services/vct.webp';
import imgRepair from '../assets/services/sand-finish.webp';
import imgMaintenance from '../assets/services/slide-3.webp';
import imgCountersDecks from '../assets/services/counters-decks.webp';
import imgPainting from '../assets/services/painting.webp';
import imgPaintingExterior from '../assets/services/painting-exterior.webp';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  tag?: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageMetadata;
  exteriorImage?: ImageMetadata;
  heroBadge?: string;
  order: number;
  features: string[];
  detailedFeatures?: ServiceFeature[];
  processSteps?: ServiceProcessStep[];
  specifications?: ServiceSpec[];
  applications?: string[];
  faqs: ServiceFAQ[];
  seoTitle?: string;
  seoText?: string;
}

export function getRelatedServices(currentSlug: string, count: number = 3): ServiceItem[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}

export const services: ServiceItem[] = [
  {
    "slug": "hardwood-laminate-and-lvp",
    "title": "Hardwood, Laminate & LVP",
    "shortTitle": "Hardwood & LVP",
    "subtitle": "CFS Flooring installs hardwood, laminate, and luxury vinyl plank flooring for homes and businesses that want a clean, lasting finish. Whether you are updating one room or planning a full property refresh, we help you choose flooring that fits your style, traffic level, and long-term goals without making the process feel overwhelming.",
    "description": "Beautiful New Floors Installed Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Professional installation for hardwood, laminate, and luxury vinyl plank with guidance on what works best for your space.",
    "metaTitle": "Hardwood, Laminate & LVP | CFS Flooring",
    "metaDescription": "Hardwood, laminate, and luxury vinyl plank installation across Lake Oswego, West Linn, and Wilsonville.",
    "image": imgHardwood,
    "heroBadge": "Hardwood • Laminate • LVP",
    "order": 1,
    "features": [
      "Hardwood, Laminate & LVP",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Selection",
        "title": "Flooring guidance based on your space and lifestyle",
        "description": "Choosing the right floor is about more than color alone. We help you compare hardwood, laminate, and LVP based on durability, moisture resistance, maintenance, and the overall feel you want for the space.",
        "bullets": [
          "Product recommendations based on traffic, pets, kids, moisture exposure, and daily use",
          "Guidance on plank size, finish, texture, color tones, and layout direction",
          "Clear comparisons between hardwood, laminate, and luxury vinyl plank options",
          "Recommendations that balance style goals, performance, and budget"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Subfloor prep and planning that support a better finish",
        "description": "A floor only performs as well as the surface beneath it. We evaluate the installation area carefully so the finished result feels stable, looks clean, and holds up the way it should.",
        "bullets": [
          "Review of existing flooring, transitions, level changes, and installation conditions",
          "Subfloor preparation to support proper fit, alignment, and long-term performance",
          "Planning for trim details, doorway transitions, edges, and room-to-room flow"
        ]
      },
      {
        "tag": "Installation",
        "title": "Clean, professional installation for a polished finished floor",
        "description": "Whether the project is a single room, a full home update, or a commercial space, we install with attention to consistency, detail, and overall presentation.",
        "bullets": [
          "Hardwood, laminate, and LVP installation with careful layout and finish alignment",
          "Attention to transitions, trim lines, cuts, and room flow for a more polished result",
          "Organized project completion with clear communication from start to finish"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great flooring projects depend on the installation process as much as the material itself. Clients choose CFS Flooring for clear guidance, dependable service, and workmanship that respects the space.",
        "bullets": [
          "Honest recommendations based on performance, design goals, and real-world use",
          "Organized work that keeps the project straightforward and easier to manage",
          "Finished floors designed to look clean, feel solid, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "What is the difference between solid hardwood and Luxury Vinyl Plank (LVP)?",
            "answer": "Solid hardwood is natural timber that can be sanded and refinished multiple times over decades, while LVP is an engineered waterproof flooring with a durable wear layer that replicates real wood, making it ideal for moisture-prone areas like basements and kitchens."
      },
      {
            "question": "How do you handle moisture issues common in Oregon and Washington homes?",
            "answer": "We test subfloor moisture levels before every installation and apply vapor retarders or moisture mitigation membranes when needed to protect your hardwood or LVP from warping and cupping."
      },
      {
            "question": "Can LVP or laminate be installed over existing flooring?",
            "answer": "In many cases, yes. Floating LVP or laminate can be installed over existing sheet vinyl or tile, provided the subfloor is flat, sound, and properly prepared."
      },
      {
            "question": "How long does a typical hardwood or LVP installation take?",
            "answer": "Most residential hardwood or LVP installations take between 1 to 3 days depending on square footage, room layout, subfloor prep, and trim details."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville flooring projects",
    "seoText": "CFS Flooring provides hardwood, laminate, and LVP flooring installation for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you want a more classic wood look, a practical upgrade for high-traffic rooms, or a floor that balances durability and style, we help define the right scope and install it with care."
  },
  {
    "slug": "carpet-installation",
    "title": "Carpet Installation",
    "shortTitle": "Carpet Installation",
    "subtitle": "CFS Flooring provides carpet installation for homes and businesses that want comfort, warmth, and a polished finished look. Whether you are replacing worn carpet in one room or updating an entire property, we help you choose the right texture, color, and performance level for your space so the process feels simple from start to finish.",
    "description": "Professional Carpet Installation Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Residential and commercial carpet installation completed with attention to fit, finish, comfort, and performance.",
    "metaTitle": "Carpet Installation | CFS Flooring",
    "metaDescription": "Professional carpet installation across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "image": imgCarpet,
    "heroBadge": "Carpet • Padding • Installation",
    "order": 2,
    "features": [
      "Carpet Installation",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Selection",
        "title": "Carpet guidance based on your space and lifestyle",
        "description": "Choosing the right carpet is about more than color alone. We help you compare carpet styles, textures, and performance levels based on comfort, durability, maintenance, and the overall feel you want for the space.",
        "bullets": [
          "Product recommendations based on traffic, pets, kids, comfort preferences, and daily use",
          "Guidance on carpet texture, pile height, padding options, and color tones",
          "Clear comparisons between practical, soft-touch, and high-performance carpet options",
          "Recommendations that balance style goals, comfort, durability, and budget"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Subfloor prep and planning that support a better carpet finish",
        "description": "Carpet performs best when the surface beneath it is prepared properly. We review the installation area carefully so the finished result feels smooth, secure, and ready for daily use.",
        "bullets": [
          "Review of existing flooring, transitions, room conditions, and installation requirements",
          "Preparation of the installation area to support proper fit, padding, and long-term performance",
          "Planning for edges, doorway transitions, stairs, and room-to-room flow"
        ]
      },
      {
        "tag": "Installation",
        "title": "Clean, professional carpet installation for a polished finished floor",
        "description": "Whether the project is a single room, a full home update, or a commercial space, we install carpet with attention to fit, detail, and overall presentation.",
        "bullets": [
          "Carpet installation with careful layout, stretching, and finish alignment",
          "Attention to seams, transitions, stairs, edges, and trim details for a more polished result",
          "Organized project completion with clear communication from start to finish"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great carpet projects depend on the installation process as much as the material itself. Clients choose CFS Flooring for clear guidance, dependable service, and workmanship that respects the space.",
        "bullets": [
          "Honest recommendations based on comfort, performance, design goals, and real-world use",
          "Organized work that keeps the project straightforward and easier to manage",
          "Finished carpet installation designed to look clean, feel comfortable, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "Why is power-stretching necessary during carpet installation?",
            "answer": "Power-stretching uses hydraulic leverage to pull the carpet taut across the room before securing it to tack strips. This prevents future buckling, unsightly ripples, and premature carpet wear, extending the lifespan of your flooring."
      },
      {
            "question": "Are carpet tiles better than broadloom carpet for commercial spaces?",
            "answer": "Carpet tiles offer superior flexibility for commercial offices in Vancouver and Portland. Damaged or stained tiles can be replaced individually without removing carpet across the entire office floor, and installation requires less downtime."
      },
      {
            "question": "What cushion padding density do you recommend for residential homes?",
            "answer": "We recommend high-density 8lb memory-foam or rubberized carpet padding (3/8 to 7/16 inch thickness). Premium padding absorbs foot traffic impact, enhances foot comfort, improves thermal insulation, and extends carpet durability."
      },
      {
            "question": "Do you offer eco-friendly or low-allergen carpet choices?",
            "answer": "Yes! We offer CRI Green Label Plus certified carpets and hypoallergenic recycled pads that feature zero-VOC emission ratings, ideal for families with pets or respiratory sensitivities."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville carpet projects",
    "seoText": "CFS Flooring provides carpet installation for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you want a softer feel in bedrooms, a comfortable update for living areas, or a practical carpet solution for a business space, we help define the right scope and install it with care."
  },
  {
    "slug": "sand-and-finish",
    "title": "Sand & Finish",
    "shortTitle": "Sand & Finish",
    "subtitle": "CFS Flooring provides sand and finish services for hardwood floors that need to be restored, refreshed, and protected for everyday living. Whether you want to bring old wood floors back to life or update the color and sheen of your existing flooring, we help create a smooth, beautiful finish with attention to detail from preparation to final coat.",
    "description": "Professional Sand & Finish Services Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Restore existing hardwood floors with sanding and finishing services that bring back color and character.",
    "metaTitle": "Sand & Finish | CFS Flooring",
    "metaDescription": "Dust-controlled hardwood sanding, custom stain color matching, and refinishing in Lake Oswego & West Linn.",
    "image": imgRepair,
    "heroBadge": "Sanding • Staining • Refinishing",
    "order": 3,
    "features": [
      "Sand & Finish",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Evaluation",
        "title": "Floor assessment based on condition, wood species, and finish goals",
        "description": "Every sand and finish project starts with understanding the current condition of the floor and the look you want to achieve. We help evaluate wear, scratches, coating condition, and overall wood character so the right approach is chosen from the start.",
        "bullets": [
          "Assessment of floor wear, surface damage, scratches, and finish condition",
          "Guidance on stain color, sheen level, and the finished appearance you want for the space",
          "Recommendations based on wood type, age of the floor, and expected daily use",
          "Clear direction that balances restoration goals, durability, and overall design style"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Surface prep and sanding steps that support a smooth, even finish",
        "description": "Great results depend on proper preparation before the finish is applied. We take the time to prepare the floor correctly so the final look feels clean, consistent, and ready for years of use.",
        "bullets": [
          "Review of floor condition, previous coatings, transitions, and project requirements",
          "Sanding preparation designed to create a more even surface and better finish adhesion",
          "Planning for edges, corners, room transitions, and detail areas throughout the project"
        ]
      },
      {
        "tag": "Finishing",
        "title": "Professional sanding, staining, and finishing for a renewed hardwood floor",
        "description": "Whether the goal is to refresh a worn floor, change the tone of the wood, or fully restore the surface, we complete sand and finish projects with close attention to detail and overall presentation.",
        "bullets": [
          "Sanding and finishing with attention to smoothness, consistency, and overall floor appearance",
          "Careful detail work around edges, transitions, trim, and room-to-room flow",
          "Organized project completion with clear communication from preparation to final coat"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great hardwood refinishing depends on the process as much as the final product. Clients choose CFS Flooring for clear recommendations, dependable service, and workmanship that respects both the material and the space.",
        "bullets": [
          "Honest recommendations based on floor condition, finish goals, durability, and everyday use",
          "Organized work that keeps the refinishing process straightforward and easier to manage",
          "Finished hardwood floors designed to look refreshed, feel elevated, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "How dust-free is your hardwood sanding process?",
            "answer": "We utilize commercial dust-containment sanding systems attached to high-efficiency vacuum units that capture over 95% of airborne wood dust, keeping your home clean and protecting indoor air quality."
      },
      {
            "question": "How many times can my hardwood floors be sanded and refinished?",
            "answer": "Solid 3/4-inch hardwood floors can typically be sanded and refinished 4 to 6 times over their lifetime. Engineered hardwood with a real wood wear layer can usually be refinished 1 to 3 times depending on wear layer thickness."
      },
      {
            "question": "What is the difference between water-based and oil-based finishes?",
            "answer": "Water-based polyurethane cures faster (ready for foot traffic in 24 hours), stays clear without ambering over time, and emits low VOC odors. Oil-based polyurethane delivers a warm amber glow, takes longer to dry, and has a stronger initial odor."
      },
      {
            "question": "How long after refinishing can we walk on the floors and move furniture back?",
            "answer": "With water-based finishes, light socks-only foot traffic is allowed after 24 hours. Full cure and furniture replacement typically occur within 3 to 7 days, using felt protective pads under table and chair legs."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville sand and finish projects",
    "seoText": "CFS Flooring provides sand and finish services for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you want to restore older hardwood floors, refresh the color and sheen, or improve the overall look of your space, we help define the right scope and complete the work with care."
  },
  {
    "slug": "ceramic-tile",
    "title": "Ceramic Tile",
    "shortTitle": "Ceramic Tile",
    "subtitle": "CFS Flooring provides ceramic tile installation for homes and businesses that want a clean, durable, and timeless finish. Whether you are updating a kitchen, bathroom, entryway, or a larger commercial space, we help you choose the right tile style, layout, and finish so the project feels simple from planning to installation.",
    "description": "Professional Ceramic Tile Installation Across Lake Oswego, West Linn, Wilsonville & Vancouver, Oregon.",
    "cardDescription": "Ceramic tile installation for durable, practical surfaces that work especially well in kitchens and baths.",
    "metaTitle": "Ceramic Tile | CFS Flooring",
    "metaDescription": "Precision ceramic, porcelain, and stone tile setting for floors, walls, and backsplashes.",
    "image": imgTile,
    "heroBadge": "Ceramic • Porcelain • Tile",
    "order": 4,
    "features": [
      "Ceramic Tile",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Selection",
        "title": "Tile guidance based on your space, style, and performance needs",
        "description": "Choosing the right ceramic tile is about more than color alone. We help you compare formats, finishes, and styles based on durability, maintenance, slip resistance, and the overall look you want for the space.",
        "bullets": [
          "Product recommendations based on room use, moisture exposure, traffic level, and design preferences",
          "Guidance on tile size, finish, grout color, pattern direction, and layout options",
          "Clear comparisons between practical, decorative, and high-performance ceramic tile options",
          "Recommendations that balance style goals, durability, maintenance, and budget"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Surface prep and planning that support a better tile installation",
        "description": "Ceramic tile performs best when the substrate and layout are prepared properly. We review the installation area carefully so the finished result feels level, secure, and built for daily use.",
        "bullets": [
          "Review of existing surfaces, transitions, room conditions, and installation requirements",
          "Preparation of the installation area to support proper adhesion, alignment, and long-term performance",
          "Planning for edges, cuts, doorway transitions, pattern alignment, and room-to-room flow"
        ]
      },
      {
        "tag": "Installation",
        "title": "Clean, professional ceramic tile installation for a polished finished surface",
        "description": "Whether the project is a bathroom, kitchen, entryway, full-home update, or commercial space, we install ceramic tile with attention to layout, detail, and overall presentation.",
        "bullets": [
          "Ceramic tile installation with careful layout, spacing, and finish alignment",
          "Attention to grout joints, transitions, edges, corners, and trim details for a more polished result",
          "Organized project completion with clear communication from start to finish"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great tile projects depend on the installation process as much as the material itself. Clients choose CFS Flooring for clear guidance, dependable service, and workmanship that respects the space.",
        "bullets": [
          "Honest recommendations based on durability, design goals, maintenance, and real-world use",
          "Organized work that keeps the project straightforward and easier to manage",
          "Finished ceramic tile installation designed to look clean, perform well, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "Why do you use uncoupling membranes (like Schluter-Ditra) under tile?",
            "answer": "Uncoupling membranes isolate the tile layer from subfloor expansion and contraction, preventing cracked tiles or fractured grout lines caused by natural building movement or moisture shifts in Oregon homes."
      },
      {
            "question": "Are porcelain tiles better than ceramic tiles for moisture areas?",
            "answer": "Yes. Porcelain tile has an extremely low water absorption rate (<0.5%), making it superior for bathrooms, walk-in showers, entryways, and outdoor spaces exposed to heavy moisture and frost."
      },
      {
            "question": "Can you install radiant floor heating beneath tile?",
            "answer": "Absolutely! We frequently integrate electric radiant floor heating cables or mats beneath bathroom and kitchen tile installations for warm, luxurious floors year-round."
      },
      {
            "question": "Do you offer stain-resistant grout options?",
            "answer": "We install high-performance epoxy and urethane grouts that are inherently stain-resistant, waterproof, and do not require periodic resealing like traditional cementitious grouts."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville ceramic tile projects",
    "seoText": "CFS Flooring provides ceramic tile installation for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you want a durable tile surface for kitchens and bathrooms, a clean update for entryways and living areas, or a practical tile solution for a business space, we help define the right scope and install it with care."
  },
  {
    "slug": "sheet-vinyl",
    "title": "Sheet Vinyl",
    "shortTitle": "Sheet Vinyl",
    "subtitle": "CFS Flooring provides sheet vinyl installation for homes and businesses that want a practical, durable, and easy-to-maintain flooring solution. Whether you are updating a kitchen, bathroom, laundry room, or a larger commercial space, we help you choose the right style, pattern, and performance level for your space so the process feels simple from planning to installation.",
    "description": "Professional Sheet Vinyl Installation Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Sheet vinyl flooring installed for spaces that need a resilient, cost-conscious, and low-maintenance solution.",
    "metaTitle": "Sheet Vinyl | CFS Flooring",
    "metaDescription": "Resilient, seamless sheet vinyl flooring installation across Lake Oswego, West Linn, and Wilsonville.",
    "image": imgMaintenance,
    "heroBadge": "Seamless • Waterproof • Sheet Vinyl",
    "order": 5,
    "features": [
      "Sheet Vinyl",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Selection",
        "title": "Sheet vinyl guidance based on room use and performance needs",
        "description": "Choosing the right sheet vinyl is about more than picking a pattern. We help you compare styles, textures, and wear levels based on moisture exposure, comfort, maintenance, and the overall function of the space.",
        "bullets": [
          "Product recommendations based on bathrooms, kitchens, laundry rooms, utility spaces, and commercial areas",
          "Guidance on sheet vinyl patterns, finishes, textures, and color tones that fit the space",
          "Clear comparisons between practical, design-forward, and high-durability sheet vinyl options",
          "Recommendations that balance appearance, water resistance, comfort, and budget"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Subfloor prep and layout planning that support a better vinyl finish",
        "description": "Sheet vinyl performs best when the surface beneath it is prepared correctly. We review the installation area carefully so the finished result feels smoother, cleaner, and ready for daily wear.",
        "bullets": [
          "Review of existing flooring, room conditions, moisture-prone areas, and installation requirements",
          "Preparation of the installation area to support proper adhesion, fit, and long-term performance",
          "Planning for seams, edges, transitions, doorways, and room-to-room flow"
        ]
      },
      {
        "tag": "Installation",
        "title": "Clean, professional sheet vinyl installation for a polished finished floor",
        "description": "Whether the project is a single room, a home update, or a commercial space, we install sheet vinyl with attention to fit, finish, and overall presentation.",
        "bullets": [
          "Sheet vinyl installation with careful layout, fitting, and finish alignment",
          "Attention to seams, transitions, corners, edges, and trim details for a more polished result",
          "Organized project completion with clear communication from planning to installation"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great sheet vinyl projects depend on the installation process as much as the material itself. Clients choose CFS Flooring for clear guidance, dependable service, and workmanship that respects the finished space.",
        "bullets": [
          "Honest recommendations based on moisture resistance, maintenance, design goals, and daily use",
          "Organized work that keeps the project straightforward and easier to manage",
          "Finished sheet vinyl installation designed to look clean, perform well, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "What are the key benefits of sheet vinyl compared to individual vinyl tiles?",
            "answer": "Sheet vinyl provides a seamless, 100% waterproof surface with zero grout joints or plank seams, preventing water from reaching the subfloor. It is ideal for healthcare settings, commercial kitchens, laundries, and bathrooms."
      },
      {
            "question": "What is flash coving in commercial sheet vinyl installation?",
            "answer": "Flash coving extends sheet vinyl 4 to 6 inches up the wall with a cove stick and cap strip, creating a continuous hygienic basin that prevents liquid pooling and makes sanitation effortless."
      },
      {
            "question": "How durable is modern sheet vinyl against wear and heavy foot traffic?",
            "answer": "Commercial-grade sheet vinyl features fiberglass reinforcement and heavy polyurethane wear layers designed to withstand rolling carts, heavy foot traffic, and frequent chemical cleaning."
      },
      {
            "question": "Can sheet vinyl be installed over existing subfloors?",
            "answer": "Yes, as long as the subfloor is smooth, dry, and flat. We often apply self-leveling underlayment or quarter-inch mahogany underlayment panels to ensure a flawless finish."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville sheet vinyl projects",
    "seoText": "CFS Flooring provides sheet vinyl installation for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you need a durable surface for kitchens and bathrooms, a practical solution for laundry and utility areas, or an easy-to-maintain floor for a business, we help define the right scope and install it with care."
  },
  {
    "slug": "vct-flooring",
    "title": "VCT Flooring",
    "shortTitle": "VCT Flooring",
    "subtitle": "CFS Flooring provides VCT flooring installation for commercial spaces that need a durable, practical, and cost-effective surface. Whether you are updating an office, retail space, school, healthcare facility, or another high-traffic environment, we help you choose the right VCT flooring solution for performance, maintenance, and long-term value so the process feels clear from planning to installation.",
    "description": "Professional VCT Flooring Installation Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "VCT flooring solutions for commercial environments that need dependable performance and easier upkeep.",
    "metaTitle": "VCT Flooring | CFS Flooring",
    "metaDescription": "Commercial Vinyl Composition Tile (VCT) installation across Lake Oswego, West Linn, and Portland metro area.",
    "image": imgCommercial,
    "heroBadge": "Commercial VCT • Heavy Duty",
    "order": 6,
    "features": [
      "VCT Flooring",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Selection",
        "title": "VCT guidance based on traffic, maintenance, and facility needs",
        "description": "Choosing the right VCT flooring is about more than color alone. We help you compare tile options, layout choices, and performance needs based on daily traffic, maintenance routines, durability goals, and the overall function of the space.",
        "bullets": [
          "Product recommendations based on foot traffic, space type, maintenance expectations, and daily use",
          "Guidance on color combinations, tile patterns, layout flow, and commercial presentation",
          "Clear comparisons between practical, budget-conscious, and high-traffic VCT options",
          "Recommendations that balance durability, maintenance planning, appearance, and value"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Subfloor prep and planning that support a better VCT installation",
        "description": "VCT flooring performs best when the surface beneath it is prepared correctly. We review the installation area carefully so the finished result feels level, secure, and ready for heavy daily use.",
        "bullets": [
          "Review of existing flooring, transitions, room conditions, and commercial installation requirements",
          "Preparation of the installation area to support proper adhesion, layout accuracy, and long-term performance",
          "Planning for seams, borders, doorway transitions, cuts, and room-to-room flow"
        ]
      },
      {
        "tag": "Installation",
        "title": "Clean, professional VCT flooring installation for high-use commercial spaces",
        "description": "Whether the project is an office, retail space, school, healthcare facility, or another commercial environment, we install VCT flooring with attention to fit, layout, and long-term function.",
        "bullets": [
          "VCT installation with careful layout, alignment, and finish consistency",
          "Attention to transitions, edges, pattern flow, and trim details for a more polished result",
          "Organized project completion with clear communication from planning to installation"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why businesses choose CFS Flooring",
        "description": "Great VCT projects depend on the installation process as much as the material itself. Clients choose CFS Flooring for clear guidance, dependable service, and workmanship that supports busy commercial spaces.",
        "bullets": [
          "Honest recommendations based on durability, maintenance, facility demands, and real-world use",
          "Organized work that keeps commercial flooring projects straightforward and easier to manage",
          "Finished VCT flooring designed to perform well, look clean, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "Why is VCT the industry standard for high-traffic commercial spaces?",
            "answer": "Vinyl Composition Tile (VCT) is extremely economical, durable, and repairable. Individual tiles can be replaced easily, and regular maintenance maintains a clean, professional shine for decades."
      },
      {
            "question": "How often should VCT flooring be stripped, sealed, and waxed?",
            "answer": "High-traffic commercial VCT floors should be burnished regularly, with professional stripping and re-waxing performed every 6 to 12 months depending on foot traffic levels."
      },
      {
            "question": "Can VCT be installed over concrete slabs with high moisture?",
            "answer": "We conduct Calcium Chloride and relative humidity (RH) tests prior to installation. If moisture levels exceed manufacturer thresholds, we apply specialized moisture mitigation epoxy primers."
      },
      {
            "question": "Do you offer layout design patterns with VCT tiles?",
            "answer": "Yes! VCT is available in dozens of colors, allowing custom borders, accent patterns, checkerboard layouts, and directional pathways for school, retail, and office environments."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville VCT flooring projects",
    "seoText": "CFS Flooring provides VCT flooring installation for commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you need a durable flooring solution for offices, retail spaces, schools, healthcare environments, or other high-traffic facilities, we help define the right scope and install it with care."
  },
  {
    "slug": "flooring-removal",
    "title": "Flooring Removal",
    "shortTitle": "Flooring Removal",
    "subtitle": "CFS Flooring provides flooring removal services for homes and businesses preparing for a new installation, renovation, or full space update. Whether you need old carpet, tile, vinyl, laminate, or hardwood removed, we help make the process cleaner, more organized, and easier to manage so your next flooring project starts on the right foundation.",
    "description": "Professional Flooring Removal Services Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Careful removal of existing flooring to prepare your space for a clean new installation.",
    "metaTitle": "Flooring Removal | CFS Flooring",
    "metaDescription": "Fast, dust-controlled removal of tile, hardwood, carpet, and old adhesives in Lake Oswego & Portland area.",
    "image": imgLaminate,
    "heroBadge": "Demolition • Removal • Subfloor Prep",
    "order": 7,
    "features": [
      "Flooring Removal",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Assessment",
        "title": "Removal planning based on your existing flooring and project goals",
        "description": "Every flooring removal project starts with understanding what is in place and what needs to happen next. We help evaluate the type of flooring, the condition of the surface below, and the best approach for a smoother transition into the next phase.",
        "bullets": [
          "Review of carpet, tile, vinyl, laminate, hardwood, or other existing flooring materials",
          "Guidance based on removal scope, jobsite conditions, timelines, and what flooring comes next",
          "Recommendations for preparation needs, subfloor condition, and project sequencing",
          "Clear direction that helps keep the removal process organized and easier to manage"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Site prep and removal planning that support a cleaner project start",
        "description": "Flooring removal works best when the space is prepared correctly before the work begins. We review the area carefully so the process is more controlled, more efficient, and ready for the next step in the project.",
        "bullets": [
          "Review of room conditions, transitions, access points, and project-specific removal requirements",
          "Preparation of the work area to support safer, more organized flooring removal",
          "Planning for edges, adhesives, base areas, doorways, and subfloor exposure after removal"
        ]
      },
      {
        "tag": "Removal",
        "title": "Professional flooring removal for homes, businesses, and renovation projects",
        "description": "Whether the project involves one room, a full property update, or a commercial space, we handle flooring removal with attention to detail, clean workflow, and readiness for the next stage of work.",
        "bullets": [
          "Removal of existing flooring with attention to control, efficiency, and surface readiness",
          "Careful handling around transitions, perimeter areas, trim zones, and room-to-room changes",
          "Organized project completion with clear communication from removal through cleanup"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great flooring removal is about more than taking out old material. Clients choose CFS Flooring for clear planning, dependable service, and work that helps set the stage for a better finished result.",
        "bullets": [
          "Honest recommendations based on scope, jobsite needs, timelines, and what comes next in the project",
          "Organized work that keeps the removal process more straightforward and easier to manage",
          "Project-ready surfaces designed to support a smoother installation, remodel, or renovation phase"
        ]
      }
    ],
    "faqs": [
      {
            "question": "How do you control dust during heavy tile or mortar demolition?",
            "answer": "We use industrial HEPA-filtered air scrubbers, sealed containment barriers, and vacuum-assisted electric scrapers to minimize airborne dust and keep adjacent living areas clean."
      },
      {
            "question": "Can you flatten uneven concrete or sagged wood subfloors before new floor installation?",
            "answer": "Yes. After removing old flooring, we grind concrete high spots, patch low areas with polymer-modified self-leveling underlayment, and reinforce wood joists or subfloor sheathing."
      },
      {
            "question": "What happens to the old flooring debris after removal?",
            "answer": "We handle complete haul-away and disposal of all old carpet, tile, hardwood, adhesive residue, and underlayment, leaving your site vacuumed and ready for immediate new floor installation."
      },
      {
            "question": "How long does floor removal take for an average home?",
            "answer": "Most residential carpet or floating LVP tear-outs take less than 1 day. Tile, glued-down hardwood, or thick mortar bed removals typically take 1 to 2 days."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville flooring removal projects",
    "seoText": "CFS Flooring provides flooring removal services for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you need old carpet removed before replacement, tile taken out during a remodel, or a full flooring tear-out before new installation, we help define the right scope and prepare the space with care."
  },
  {
    "slug": "counters-and-decks",
    "title": "Countertops & Decks",
    "shortTitle": "Countertops & Decks",
    "subtitle": "CFS Flooring provides counters and decks services for homes and businesses looking to upgrade the look, function, and overall finish of their spaces. Whether you are planning a kitchen update, a bathroom refresh, or a surface upgrade for another interior area, we help you choose practical, attractive solutions that fit your space and make the process feel clear from planning to installation.",
    "description": "Professional Counters & Decks Services Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Counter and deck surface solutions that help complete your space with durable materials and practical finishes.",
    "metaTitle": "Countertops & Decks | CFS Flooring",
    "metaDescription": "Custom quartz & granite countertop installation and outdoor deck construction across Lake Oswego & West Linn.",
    "image": imgCountersDecks,
    "heroBadge": "Countertops • Decks • Woodwork",
    "order": 8,
    "features": [
      "Countertops & Decks",
      "Residential & Commercial",
      "Design Guidance • Installation"
    ],
    "detailedFeatures": [
      {
        "tag": "Materials",
        "title": "Direct material guidance for counters and decks",
        "description": "Choosing the right surface starts with understanding how the space is used, what look you want, and how much maintenance you want to handle. We help guide material choices clearly so the final result fits both the project and the lifestyle.",
        "bullets": [
          "Counter materials can include quartz, granite, marble, laminate, butcher block, and solid surface options",
          "Deck materials can include composite decking, pressure-treated wood, cedar, redwood, and PVC decking systems",
          "Guidance on color, texture, edge profile, finish level, and overall material appearance",
          "Recommendations based on moisture exposure, daily wear, style goals, and maintenance expectations"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Planning and prep that support a better finished installation",
        "description": "Great results depend on proper preparation before materials are installed. We review the space carefully so the finished project feels clean, functional, and properly aligned with the surrounding area.",
        "bullets": [
          "Review of existing surfaces, dimensions, transitions, support conditions, and project requirements",
          "Preparation planning for cuts, seams, edges, corners, trim areas, and attachment points",
          "Layout guidance to support a cleaner fit, better flow, and stronger overall presentation"
        ]
      },
      {
        "tag": "Installation",
        "title": "Professional installation for counters and deck surfaces",
        "description": "Whether the project is a kitchen counter, bathroom vanity top, workspace surface, or deck upgrade, we install with attention to fit, detail, and the finished look of the overall space.",
        "bullets": [
          "Counter and deck installation with careful layout, alignment, and surface finishing",
          "Attention to seams, edges, trim details, transitions, and attachment points for a more polished result",
          "Organized project completion with clear communication from planning to final installation"
        ]
      },
      {
        "tag": "Why CFS",
        "title": "Why homeowners and businesses choose CFS Flooring",
        "description": "Great surface projects depend on the material choice and the installation process working together. Clients choose CFS Flooring for clear recommendations, dependable service, and workmanship that respects the space and the finished details.",
        "bullets": [
          "Honest recommendations based on quartz, granite, laminate, composite, wood, and other real material options",
          "Organized work that keeps the project straightforward and easier to manage",
          "Finished counters and decks designed to look clean, perform well, and support long-term value"
        ]
      }
    ],
    "faqs": [
      {
            "question": "Which countertop material is best for low-maintenance kitchens?",
            "answer": "Engineered quartz is the top choice for low-maintenance kitchens. It is non-porous, highly stain-resistant, scratch-resistant, and requires no periodic sealing unlike natural granite or marble."
      },
      {
            "question": "Why is composite decking ideal for Pacific Northwest weather?",
            "answer": "Composite decking (like Trex or TimberTech) resists moisture absorption, rot, mold, and insect damage caused by wet Oregon winters, eliminating the annual sanding, staining, and sealing required for wood decks."
      },
      {
            "question": "Can you replace countertops without replacing lower kitchen cabinets?",
            "answer": "Yes! As long as your existing lower cabinets are structurally sound and level, we can template, fabricate, and install new quartz or solid surface countertops directly onto existing cabinetry."
      },
      {
            "question": "Do you build custom railings and stairs for outdoor decks?",
            "answer": "Yes, we construct complete deck additions including custom stairs, aluminum or steel cable railings, composite top rails, and integrated LED stair lighting."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville counters and decks projects",
    "seoText": "CFS Flooring provides counter and deck services for residential and commercial properties in Lake Oswego, West Linn, and Wilsonville. Whether you need quartz or granite counters for an interior space, laminate or butcher block for a practical update, or composite and wood decking materials for an outdoor area, we help define the right scope and complete the project with care."
  },
  {
    "slug": "interior-and-exterior-painting",
    "title": "Interior & Exterior Painting",
    "shortTitle": "Painting Services",
    "subtitle": "CFS Flooring provides professional interior and exterior painting services for homes and commercial spaces in Lake Oswego, West Linn, Wilsonville, and Vancouver WA. From wall and ceiling painting to baseboards, trim work, and weather-resistant exterior coatings, we deliver immaculate surface prep and flawless finishes using premium low-VOC paints.",
    "description": "Professional Interior & Exterior Painting Across Lake Oswego, West Linn, Wilsonville & Vancouver.",
    "cardDescription": "Flawless interior wall & trim painting and weather-resistant exterior house painting with premium low-VOC paints.",
    "metaTitle": "Interior & Exterior Painting | CFS Flooring",
    "metaDescription": "Professional interior and exterior painting services in Lake Oswego, West Linn, Wilsonville & Vancouver WA. Premium low-VOC paints, detailed trim finishing, and exterior power-washing.",
    "image": imgPainting,
    "exteriorImage": imgPaintingExterior,
    "heroBadge": "Interior • Exterior • Painting",
    "order": 9,
    "features": [
      "Interior & Exterior Painting",
      "Residential & Commercial",
      "Design Guidance • Painting"
    ],
    "detailedFeatures": [
      {
        "tag": "Selection",
        "title": "Paint selection and color guidance for your home or business",
        "description": "Choosing the right paint finish and color scheme sets the tone for your whole space. We help you select between satin, eggshell, matte, and semi-gloss finishes from Sherwin-Williams and Benjamin Moore for maximum washability and long-term beauty.",
        "bullets": [
          "Guidance on sheen levels, color palettes, accent walls, and light-reflecting qualities",
          "Eco-friendly low-VOC and zero-VOC paint formulas safe for children and pets",
          "Durable exterior coatings designed to withstand Pacific Northwest rain and UV exposure"
        ]
      },
      {
        "tag": "Preparation",
        "title": "Thorough surface prep, drywall repair, and masking",
        "description": "Flawless painting depends on meticulous surface preparation. We repair drywall imperfections, sand trim, seal gaps, and protect your floors and furniture completely before opening a single paint can.",
        "bullets": [
          "Drywall patching, texture matching, nail pop repair, and stain blocking primer",
          "Baseboard, door casing, and crown molding sanding and caulking for crisp lines",
          "Exterior power washing, scraping loose paint, and wood surface priming"
        ]
      },
      {
        "tag": "Execution",
        "title": "Clean, precise application for sharp trim and even coverage",
        "description": "Our painting specialists execute every job with razor-sharp lines, uniform coat thickness, and complete daily jobsite cleanup so your routine is uninterrupted.",
        "bullets": [
          "Multi-coat application for rich depth of color and seamless coverage",
          "Coordinated scheduling alongside flooring installation or refinishing",
          "Thorough final walkthrough and satisfaction guarantee"
        ]
      }
    ],
    "faqs": [
      {
            "question": "What type of paint do you use for interior residential rooms?",
            "answer": "We use premium low-VOC and zero-VOC interior paints (like Sherwin-Williams Emerald or Benjamin Moore Regal Select) that deliver excellent coverage, durability, and washable finishes while protecting indoor air quality."
      },
      {
            "question": "How do you prepare exterior surfaces before applying paint?",
            "answer": "Exterior prep includes full pressure washing to remove dirt and mildew, scraping loose paint, sanding rough edges, caulking gaps around windows and trim, and applying high-adhesion exterior primer."
      },
      {
            "question": "Can painting be scheduled alongside flooring installation or refinishing?",
            "answer": "Yes! We coordinate painting before new floor installation or after hardwood sanding so your walls and trim remain protected and spotless."
      },
      {
            "question": "Do you handle drywall repairs and trim touch-ups before painting?",
            "answer": "Absolutely. We patch nail holes, repair drywall cracks, fix water-damaged spots, and sand baseboards or door casings prior to applying finish coats."
      }
    ],
    "seoTitle": "Serving Lake Oswego, West Linn, and Wilsonville painting projects",
    "seoText": "CFS Flooring provides residential and commercial interior and exterior painting services across Lake Oswego, West Linn, Wilsonville, and Vancouver WA. Whether updating single rooms or full house exteriors, we deliver high quality finishes with care."
  }
];
