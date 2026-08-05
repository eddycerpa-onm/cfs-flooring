import type { ImageMetadata } from 'astro';

import imgSandFinish from '@/assets/services/sand-finish.webp';
import imgHardwood from '@/assets/services/hardwood-lvp.webp';
import imgVCT from '@/assets/services/vct.webp';
import imgTile from '@/assets/services/ceramic-tile.webp';

export interface BlogArticleSection {
  heading: string;
  content: string;
  listItems?: string[];
}

export interface BlogArticleFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  pubDate: string; // YYYY-MM-DD format
  category: string;
  author: string;
  readTime: string;
  geoTarget: string;
  image: ImageMetadata;
  imageAlt: string;
  content: {
    intro: string;
    sections: BlogArticleSection[];
    faq?: BlogArticleFAQ[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hardwood-refinishing-lake-oswego',
    title: 'Hardwood Floor Refinishing & Dustless Sanding in Lake Oswego, OR',
    metaTitle: 'Hardwood Refinishing Lake Oswego, OR | Dustless Sanding Experts',
    metaDescription: 'Professional hardwood floor refinishing and dust-contained sand & finish in Lake Oswego and West Linn, OR. Restore your oak and fir floors with CFS Flooring.',
    description: 'A comprehensive guide to preserving and restoring natural oak and fir hardwood floors in Lake Oswego homes with HEPA-contained sand and finish techniques.',
    pubDate: '2025-02-10',
    category: 'Hardwood Refinishing',
    author: 'Jose & CFS Flooring Team',
    readTime: '6 min read',
    geoTarget: 'Lake Oswego & West Linn, OR',
    image: imgSandFinish,
    imageAlt: 'Craftsman refinishing hardwood floors in a Lake Oswego residence',
    content: {
      intro: 'Lake Oswego is renowned for its historic craftsman homes, lakeside estates, and modern architectural residences in neighborhoods like First Addition, Blue Heron, Uplands, and Lake Grove. Hardwood floors are a defining character feature of these homes, but years of foot traffic, pet paws, and Pacific Northwest humidity fluctuations can dull their luster. Refinishing your hardwood floors restores their natural beauty while protecting your investment for decades to come.',
      sections: [
        {
          heading: 'Why Lake Oswego Homeowners Choose Refinishing Over Replacement',
          content: 'Original red oak, white oak, and Douglas fir floors found in older Lake Oswego and West Linn residences possess tight grain structures and character that modern mass-produced planks simply cannot replicate. Refinishing existing solid hardwood preserves the historic integrity of your property at a fraction of the cost of full replacement.',
          listItems: [
            'Saves up to 60-70% compared to tearing out and laying brand-new solid wood.',
            'Eliminates surface scratches, deep gouges, sun discoloration, and water stains.',
            'Allows you to customize stain colors—from classic natural oak to modern Nordic whitewash or rich espresso.',
            'Increases resale value across Clackamas County real estate markets.'
          ]
        },
        {
          heading: 'Our Advanced Dust-Contained Sanding & Refinishing Process',
          content: 'One common concern homeowners express is the dust created during traditional sanding. At CFS Flooring, we utilize specialized high-efficiency dust containment systems equipped with HEPA filtration that collect airborne particles at the machine level before they enter your home.',
          listItems: [
            'In-Home Assessment: We evaluate floor thickness, moisture levels, and past finish layers.',
            'Multi-Stage Sanding: Progressing through fine-grit sandpaper passes to create a perfectly flat, satiny surface.',
            'Custom Color Staining: Testing wood stain samples directly on your floor so you can see the true color under your lighting.',
            'Protective Topcoats: Applying multiple coats of high-durability commercial-grade polyurethane finish.'
          ]
        },
        {
          heading: 'Water-Based vs. Oil-Based Polyurethane in Oregon Climate',
          content: 'The Pacific Northwest climate brings damp winters and warm dry summers, causing hardwood to naturally expand and contract. Choosing the right finish sealer is critical to prevent cracking, yellowing, or premature wear.',
          listItems: [
            'Water-Based Polyurethane: Dries rapidly (re-entry within 24 hours), yields low VOC odors, and maintains the natural tone of white oak without yellowing.',
            'Oil-Based Polyurethane: Delivers a warm amber sheen with deep wood penetration, favored for traditional red oak and heavy-wear zones.'
          ]
        },
        {
          heading: 'Long-Term Floor Maintenance Tips for PNW Residents',
          content: 'To maximize the life of your refinished floors in Lake Oswego and West Linn, maintain indoor relative humidity between 35% and 55% using home HVAC or dehumidifiers during damp winter months. Use felt pads beneath all chair legs and place absorbent entry mats at exterior doors to catch grit and rain moisture.'
        }
      ],
      faq: [
        {
          question: 'How long does the hardwood refinishing process take in Lake Oswego?',
          answer: 'Most residential refinishing projects in Lake Oswego take between 3 to 5 days, depending on square footage, stain selection, and drying times between polyurethane coats.'
        },
        {
          question: 'Will sanding generate fine dust inside my home?',
          answer: 'Our dust-contained sanding machinery traps over 98% of airborne dust at the source, keeping your living space clean and safe throughout the project.'
        }
      ],
      conclusion: 'Ready to bring your Lake Oswego or West Linn hardwood floors back to life? Trust Jose and the expert craftsman team at CFS Flooring. Contact us today for a free, transparent on-site consultation.'
    }
  },
  {
    slug: 'waterproof-lvp-flooring-west-linn-portland',
    title: 'Waterproof LVP Flooring: The Ultimate Guide for West Linn & Portland Homes',
    metaTitle: 'Waterproof LVP Flooring West Linn & Portland OR | Luxury Vinyl Installation',
    metaDescription: 'Discover why Luxury Vinyl Plank (LVP) is the top moisture-resistant flooring choice for active families and pets in West Linn, Wilsonville, and Portland, OR.',
    description: 'Explore how Luxury Vinyl Plank (LVP) handles Oregon wet weather, pet scratches, and heavy daily traffic while mimicking authentic hardwood tones.',
    pubDate: '2025-01-28',
    category: 'LVP & Vinyl',
    author: 'Jose & CFS Flooring Team',
    readTime: '5 min read',
    geoTarget: 'West Linn & Portland Metro, OR',
    image: imgHardwood,
    imageAlt: 'Waterproof Luxury Vinyl Plank flooring installed in a West Linn open concept kitchen',
    content: {
      intro: 'Living in the Portland metropolitan area—including West Linn, Wilsonville, and Lake Oswego—means dealing with rainy winters, muddy boots, wet dogs, and outdoor activity tracking indoors. For homeowners seeking the elegance of hardwood without the worry of water damage or scratching, Waterproof Luxury Vinyl Plank (LVP) has emerged as the premier choice.',
      sections: [
        {
          heading: 'What Makes Modern LVP 100% Waterproof?',
          content: 'Unlike traditional laminate or standard vinyl from decades past, today\'s rigid core LVP utilizes Stone Plastic Composite (SPC) or Wood Plastic Composite (WPC) core layers. These synthetic composite cores do not swell, warp, or cup when exposed to standing water, spills, or moisture.',
          listItems: [
            'Wear Layer: Heavy-duty clear coating (typically 20mil or higher) that resists scratches, scuffs, and UV fading.',
            'High-Definition Image Layer: Ultra-realistic print technology reproducing natural oak, hickory, walnut, and pine wood grains.',
            'Rigid Core: Waterproof SPC/WPC core providing dimensional stability over temperature shifts.',
            'Attached Acoustic Underlayment: Sound dampening pad built directly onto the plank base for quiet steps.'
          ]
        },
        {
          heading: 'Ideal Spaces for LVP in West Linn & Portland Properties',
          content: 'Because LVP is moisture impervious, it can be installed seamlessly across every level of your home, including areas where natural hardwood is susceptible to moisture issues.',
          listItems: [
            'Daylight Basements & Below-Grade Rooms: Common in West Linn hillside homes, where subfloor moisture can affect organic wood.',
            'Kitchens & Mudrooms: High-spill zones that handle wet rain coats, pet bowls, and food drops.',
            'Bathrooms & Laundry Rooms: Creates a continuous hardwood aesthetic without water damage risk.',
            'Open-Concept Living Areas: Seamless transitions between living, dining, and kitchen areas.'
          ]
        },
        {
          heading: 'Subfloor Preparation: The Key to Professional LVP Installation',
          content: 'Even the finest LVP product will fail if installed over uneven subfloors. CFS Flooring emphasizes rigorous subfloor inspection, grinding high spots, filling low points with self-leveling compounds, and testing concrete slab moisture prior to laying a single plank.'
        },
        {
          heading: 'Trending LVP Aesthetics in the Portland Metro Area',
          content: 'Current design trends in Portland, West Linn, and Wilsonville favor wide-plank formats (7 inches to 9 inches wide) in warm natural oak, muted greige, and matte low-sheen finishes that match Pacific Northwest organic modern interiors.'
        }
      ],
      faq: [
        {
          question: 'Can LVP be installed over existing tile or vinyl floors in West Linn?',
          answer: 'In many cases, yes. As long as the existing floor is flat, securely bonded, and free of structural defects, LVP can be installed directly over it using proper subfloor prep.'
        },
        {
          question: 'Is 20mil wear layer LVP strong enough for active dogs?',
          answer: 'Yes! A 20mil commercial wear layer is highly recommended for households with medium to large dogs, resisting scratch marks from claws and active play.'
        }
      ],
      conclusion: 'Looking to transform your West Linn or Portland home with durable, waterproof LVP flooring? Contact Jose at CFS Flooring today to explore samples and schedule your free installation quote.'
    }
  },
  {
    slug: 'commercial-flooring-wilsonville-portland',
    title: 'Commercial Flooring Solutions in Wilsonville & Portland: VCT, Carpet & Sheet Vinyl',
    metaTitle: 'Commercial Flooring Contractor Wilsonville & Portland OR | CFS Flooring',
    metaDescription: 'Heavy-duty VCT, commercial sheet vinyl, and carpet tile installation for businesses in Wilsonville, Tualatin, and Portland metro. Fast, certified commercial installation.',
    description: 'Discover durable commercial flooring options—VCT, sheet vinyl, and modular carpet tiles—engineered for Wilsonville warehouses, offices, and medical facilities.',
    pubDate: '2025-01-15',
    category: 'Commercial Flooring',
    author: 'Jose & CFS Flooring Team',
    readTime: '7 min read',
    geoTarget: 'Wilsonville & Portland Metro, OR',
    image: imgVCT,
    imageAlt: 'Resilient commercial VCT tile installed in a Wilsonville commercial building',
    content: {
      intro: 'Commercial facilities in Wilsonville, Tualatin, Portland, and Lake Oswego demand flooring systems built to withstand extreme daily foot traffic, rolling loads, chemical cleansers, and strict safety regulations. CFS Flooring provides comprehensive commercial flooring removal, subfloor remediation, and certified installation tailored to commercial schedules.',
      sections: [
        {
          heading: 'VCT (Vinyl Composition Tile): Cost-Effective Resiliency for High-Traffic Zones',
          content: 'Vinyl Composition Tile remains a gold standard for retail centers, educational facilities, cafeteria spaces, and industrial breakrooms across the Wilsonville business corridor due to its economical cost and durability.',
          listItems: [
            'Exceptional durability under heavy foot traffic and equipment carts.',
            'Modular tile format enables easy single-tile replacement if damaged.',
            'Long lifecycle when maintained with periodic polish and wax schedules.'
          ]
        },
        {
          heading: 'Hygienic Commercial Sheet Vinyl for Healthcare & Food Preparation',
          content: 'For medical clinics, dental offices, laboratories, and commercial kitchens in Portland and Wilsonville, seamless sheet vinyl with heat-welded seams provides a non-porous, sterile surface that complies with health code standards.',
          listItems: [
            'Zero open seams where bacteria, dirt, or moisture can accumulate.',
            'Flash-coving options available to extend floor material up walls for seamless washdowns.',
            'Slip-resistant surface textures for enhanced worker safety.'
          ]
        },
        {
          heading: 'Modular Carpet Tiles for Corporate Offices & Boardrooms',
          content: 'Modern commercial offices favor modular carpet tiles over traditional broadloom carpet. Carpet tiles offer sound insulation, ergonomic comfort underfoot, and customizable tile patterning to delineate workspaces or walkways.'
        },
        {
          heading: 'Off-Hours Installation: Zero Business Downtime',
          content: 'We understand that commercial downtime costs money. CFS Flooring offers flexible evening, weekend, and holiday installation schedules throughout Wilsonville, Tualatin, and the greater Portland area so your operations remain uninterrupted.'
        }
      ],
      faq: [
        {
          question: 'Do you handle commercial flooring removal and subfloor prep in Wilsonville?',
          answer: 'Yes, we provide complete teardown, adhesive scraping, concrete grinding, and moisture barrier application before installing new commercial flooring.'
        },
        {
          question: 'What is your service coverage area for commercial contracts?',
          answer: 'We service commercial clients throughout Wilsonville, Tualatin, Lake Oswego, West Linn, Portland, Beaverton, Oregon City, and Vancouver, WA.'
        }
      ],
      conclusion: 'Partner with CFS Flooring for your upcoming commercial renovation or new build in Wilsonville or Portland. Call Jose today to discuss specifications and request a competitive bid.'
    }
  },
  {
    slug: 'tile-and-countertop-renovation-lake-oswego',
    title: 'Ceramic Tile & Custom Countertop Renovations in Lake Oswego & Wilsonville',
    metaTitle: 'Tile & Countertop Installation Lake Oswego & Wilsonville OR',
    metaDescription: 'Custom tile backsplashes, ceramic tile floors, and countertop surfaces in Lake Oswego, Wilsonville, and Portland homes. Premium tile work by CFS Flooring.',
    description: 'Transform your bathroom, kitchen, or outdoor patio with custom ceramic tile, heated subfloor underlayments, and countertop surfaces designed for Oregon living.',
    pubDate: '2024-12-20',
    category: 'Tile & Counters',
    author: 'Jose & CFS Flooring Team',
    readTime: '6 min read',
    geoTarget: 'Lake Oswego & Wilsonville, OR',
    image: imgTile,
    imageAlt: 'Custom ceramic tile installation with modern backsplash in a Lake Oswego residence',
    content: {
      intro: 'Tile is one of the most versatile and permanent surfacing materials available for Pacific Northwest homes. Whether you are updating a primary bathroom suite in Lake Oswego, installing a chef\'s kitchen backsplash in Wilsonville, or tiling a custom outdoor patio deck, professional tile craftsmanship ensures lasting structural integrity and visual distinction.',
      sections: [
        {
          heading: 'Ceramic & Porcelain Tile Flooring with Radiant Floor Heat',
          content: 'Cold, damp Oregon mornings can make bare floor surfaces chilly. Pairing porcelain or ceramic tile with electric radiant floor heating systems creates an ultra-luxurious, energy-efficient warm floor experience for Lake Oswego master baths and entryways.',
          listItems: [
            'Uncoupling Membrane Waterproofing: Prevents moisture intrusion and protects tile from subfloor movement cracks.',
            'Radiant Heating Integration: Distributes gentle, consistent warmth under foot.',
            'Durable Porcelain Formats: High density porcelain tiles resist moisture absorption (<0.5%) and daily wear.'
          ]
        },
        {
          heading: 'Custom Kitchen Backsplashes & Accent Walls',
          content: 'A custom tiled backsplash serves as the artistic center of any kitchen. From classic subway layout to intricate herringbone, mosaic glass, or hand-painted ceramic tiles, CFS Flooring precise layout work brings depth and character to kitchen spaces.',
          listItems: [
            'Subway & Staggered Patterns for timeless craftsman elegance.',
            'Herringbone & Chevron Cuts for dramatic visual interest.',
            'Stain-Resistant Epoxy & Urethane Grouts for easy cleanup of cooking splatters.'
          ]
        },
        {
          heading: 'Countertops & Deck Surfacing in Pacific Northwest Architecture',
          content: 'Beyond indoor floors and walls, custom tile and slab surfaces on kitchen islands, bar counters, and outdoor entertainment decks elevate outdoor living spaces throughout Wilsonville and Clackamas County.'
        },
        {
          heading: 'Waterproofing Standards for Oregon Moisture Control',
          content: 'Water management is paramount in the rainy PNW. We utilize industry-certified waterproofing membranes (such as Schluter-KERDI systems) behind shower walls and floor underlayments to ensure total mold and moisture protection.'
        }
      ],
      faq: [
        {
          question: 'How long does a typical bathroom tile remodel take in Lake Oswego?',
          answer: 'Most bathroom tile projects require 3 to 5 days, incorporating demolition, subfloor leveling, waterproofing membrane cure time, tile layout, and grouting.'
        },
        {
          question: 'Can ceramic tile withstand heavy kitchen traffic and dropped pans?',
          answer: 'Porcelain and high-fired ceramic tiles are exceptionally dense and hard-wearing. When properly set on a flat, rigid subfloor with full thinset coverage, they withstand decades of heavy residential use.'
        }
      ],
      conclusion: 'Ready to discuss your ceramic tile or custom countertop project in Lake Oswego, Wilsonville, or Portland? Contact Jose and the master installers at CFS Flooring today for a free estimate.'
    }
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts.slice(0, limit);
}
