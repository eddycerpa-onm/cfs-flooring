import type { ImageMetadata } from 'astro';

import imgHardwood from '../assets/services/hardwood-lvp.webp';
import imgLaminate from '../assets/services/slide-1.webp';
import imgLVP from '../assets/services/slide-2.webp';
import imgTile from '../assets/services/ceramic-tile.webp';
import imgCarpet from '../assets/services/carpet.webp';
import imgCommercial from '../assets/services/vct.webp';
import imgRepair from '../assets/services/sand-finish.webp';
import imgMaintenance from '../assets/services/slide-3.webp';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
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
  heroBadge?: string;
  order: number;
  features: string[];
  detailedFeatures?: ServiceFeature[];
  processSteps?: ServiceProcessStep[];
  specifications?: ServiceSpec[];
  applications?: string[];
  faqs: ServiceFAQ[];
}

export const services: ServiceItem[] = [
  {
    slug: 'hardwood-flooring',
    title: 'Hardwood Flooring Installation & Refinishing',
    shortTitle: 'Hardwood Flooring',
    subtitle: 'Premium Solid & Engineered Hardwood Crafted for Timeless Elegance',
    description: 'Transform your home or business with solid hardwood and precision engineered wood flooring. CFS Flooring delivers expert installation, custom stain matching, and dust-controlled refinishing across Lake Oswego, West Linn, Wilsonville, and the greater Portland metro area.',
    cardDescription: 'Solid & engineered hardwood installation, custom staining, subfloor prep, and expert dustless refinishing.',
    metaTitle: 'Hardwood Flooring Installation & Refinishing | Lake Oswego & West Linn',
    metaDescription: 'Professional solid & engineered hardwood flooring installation and refinishing in Lake Oswego, West Linn, and Portland metro area.',
    image: imgHardwood,
    heroBadge: 'Hardwood Specialist',
    order: 1,
    features: [
      'Solid & Engineered Hardwood Installation',
      'Custom Wood Stains & Polyurethane Finishes',
      'Dust-Controlled Sanding & Refinishing',
      'Digital Moisture Testing & Vapor Barriers',
      'Custom Baseboard, Shoe Molding & Stair Transitions',
      'Low-VOC, Eco-Friendly Sealants'
    ],
    detailedFeatures: [
      {
        title: 'Authentic Timber Craftsmanship',
        description: 'We work with premium red oak, white oak, maple, walnut, and hickory timbers selected for grain structure and dimensional integrity.'
      },
      {
        title: 'Dust-Controlled Refinishing',
        description: 'Our advanced sanding systems capture 99% of airborne dust, keeping your indoor air clean while restoring old hardwood to mint condition.'
      },
      {
        title: 'Precision Color Matching',
        description: 'Custom blend stains to match your exact interior vision—from rich classic walnuts to light, modern Nordic natural tones.'
      },
      {
        title: 'Moisture Vapor Barrier Protection',
        description: 'Subfloor testing and specialized moisture membranes safeguard your wood floors against damp Pacific Northwest climate shifts.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Subfloor Inspection & Moisture Testing',
        description: 'We evaluate concrete or wooden subfloors with digital moisture meters to ensure optimal surface conditions.'
      },
      {
        step: 2,
        title: 'Material Acclimation',
        description: 'Hardwood boards are acclimated on-site for 3–7 days so moisture content matches your indoor environment.'
      },
      {
        step: 3,
        title: 'Subfloor Prep & Leveling',
        description: 'We sand high spots, fill dips, install vapor barriers, and prepare a rock-solid foundation.'
      },
      {
        step: 4,
        title: 'Nail / Glue Down Installation',
        description: 'Master craftsmen lay each plank with staggered joints and tight seam alignments for enduring stability.'
      },
      {
        step: 5,
        title: 'Sanding, Staining & Sealant',
        description: 'For unfinished hardwood, we sand smooth, apply custom stains, and coat with high-durability polyurethane finish.'
      }
    ],
    specifications: [
      { label: 'Species Available', value: 'White Oak, Red Oak, Maple, Walnut, Hickory' },
      { label: 'Construction', value: '3/4" Solid & Multi-ply Engineered Hardwood' },
      { label: 'Installation Method', value: 'Nail-down, Staple, Glue-down, or Floating' },
      { label: 'Warranty', value: '10-Year Craftsmanship Guarantee' },
      { label: 'Downtime', value: '2 to 4 Days typical residential turnaround' }
    ],
    applications: [
      'Living Rooms & Great Rooms',
      'Master Bedrooms & Suites',
      'Formal Dining Rooms',
      'Executive Office Spaces',
      'Staircases & Hallways'
    ],
    faqs: [
      {
        question: 'What is the difference between solid hardwood and engineered hardwood?',
        answer: 'Solid hardwood is a single piece of 100% natural timber that can be sanded and refinished multiple times over decades. Engineered hardwood features a real wood veneer layer glued over cross-grain plywood layers, providing superior dimensional stability in humid or climate-variable environments.'
      },
      {
        question: 'How long does wood need to acclimate before installation?',
        answer: 'We recommend acclimating hardwood on-site for 3 to 7 days prior to installation so that moisture levels equalize with your home HVAC environment.'
      },
      {
        question: 'Can hardwood flooring be installed in basements or over concrete?',
        answer: 'Engineered hardwood with a certified vapor barrier adhesive can be safely installed over concrete slabs, whereas solid hardwood is best suited for above-grade wooden subfloors.'
      },
      {
        question: 'How do I care for newly installed or refinished hardwood?',
        answer: 'Use microfiber mops, avoid standing water or harsh abrasive chemicals, and place protective felt pads under heavy furniture legs.'
      }
    ]
  },
  {
    slug: 'laminate-flooring',
    title: 'Laminate Flooring Installation',
    shortTitle: 'Laminate Flooring',
    subtitle: 'High-Performance, Scratch-Resistant Flooring Built for Active Homes',
    description: 'Enjoy the luxurious look of authentic hardwood with superior scratch resistance and water protection. CFS Flooring installs premium high-density laminate systems with precision underlayments for quiet, comfortable, and durable floors.',
    cardDescription: 'Durable, scratch-resistant laminate flooring with authentic wood textures and integrated underlayment.',
    metaTitle: 'Laminate Flooring Installation | Lake Oswego & West Linn',
    metaDescription: 'Expert laminate flooring installation with scratch-resistant finishes and noise-reducing underlayment in Lake Oswego & West Linn.',
    image: imgLaminate,
    heroBadge: 'Durable & Value-Driven',
    order: 2,
    features: [
      'AC4 & AC5 Commercial-Grade Scratch Resistance',
      'Water-Resistant Core Technologies',
      'Acoustic Underlayment & Noise Reduction',
      'Precision Click-Lock Assembly',
      'Stain & Fade Resistant Surface Layers',
      'Easy Clean & Low Maintenance Care'
    ],
    detailedFeatures: [
      {
        title: 'Authentic Wood Textures',
        description: 'Advanced embossing-in-register (EIR) techniques replicate real wood grains, knots, and bevels with striking realism.'
      },
      {
        title: 'High-Traffic Scratch Protection',
        description: 'AC4 and AC5 durability ratings ensure maximum resistance to pet claws, active kids, heavy boots, and dropped objects.'
      },
      {
        title: 'Acoustic Comfort',
        description: 'Paired with premium high-density foam or cork underlayment to absorb impact sound and cushion every step.'
      },
      {
        title: 'Spill Protection',
        description: 'Hydrophobic bevel sealers prevent surface spills from seeping into core joints for up to 72 hours.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Subfloor Prep & Leveling',
        description: 'We inspect for flatness, grind high spots, and fill low areas to prevent bounce or hollow sounds.'
      },
      {
        step: 2,
        title: 'Acoustic Vapor Barrier Laying',
        description: 'Roll out underlayment for thermal insulation, sound dampening, and moisture protection.'
      },
      {
        step: 3,
        title: 'Precision Click-Lock Interlocking',
        description: 'Planks are clicked seamlessly into place with expansion gap spacers along all perimeter walls.'
      },
      {
        step: 4,
        title: 'Doorway Undercutting & Trims',
        description: 'Undercut door jambs for custom flush fits and install matching T-moldings and baseboards.'
      },
      {
        step: 5,
        title: 'Final Quality Check',
        description: 'Inspect joint tightness, clean the installation area, and walk the completed floor with you.'
      }
    ],
    specifications: [
      { label: 'Durability Rating', value: 'AC4 Heavy Residential / AC5 Commercial' },
      { label: 'Plank Thickness', value: '8mm, 10mm, 12mm premium thickness' },
      { label: 'Underlayment', value: 'Built-in IXPE foam or attached cork pad' },
      { label: 'Warranty', value: '25-Year Residential / 10-Year Commercial' },
      { label: 'Downtime', value: '1 to 2 Days fast installation' }
    ],
    applications: [
      'Busy Family Living Rooms',
      'Children Playrooms & Bedrooms',
      'Home Offices & Den Areas',
      'Rental Properties & Multi-family Units',
      'High-Traffic Hallways'
    ],
    faqs: [
      {
        question: 'Is laminate flooring suitable for homes with pets and active kids?',
        answer: 'Yes! Modern AC4 and AC5 rated laminates are engineered specifically to resist pet claws, heavy foot traffic, and impact drops better than traditional softwoods.'
      },
      {
        question: 'Is laminate flooring waterproof?',
        answer: 'Many of our premium laminate collections feature 24-hour to 72-hour surface water protection with sealed edge technologies to prevent swelling.'
      },
      {
        question: 'Do I need underlayment for laminate flooring?',
        answer: 'Yes, high-density acoustic underlayment is essential for thermal insulation, sound dampening, and smoothing minor subfloor imperfections.'
      }
    ]
  },
  {
    slug: 'lvp-flooring',
    title: 'Luxury Vinyl Plank (LVP) Flooring',
    shortTitle: 'LVP Flooring',
    subtitle: '100% Waterproof Luxury Vinyl Plank & Tile Installation',
    description: 'Get the ideal combination of 100% waterproof protection, high-end wood grain aesthetics, and incredible durability. Ideal for PNW homes, basements, kitchens, and commercial properties requiring waterproof resilience.',
    cardDescription: '100% waterproof luxury vinyl plank (LVP) and tile (LVT) with rigid core stability and deep wood texture.',
    metaTitle: 'Waterproof LVP & LVT Flooring Installation | Lake Oswego & West Linn',
    metaDescription: '100% waterproof Luxury Vinyl Plank (LVP) installation with rigid core SPC & WPC technology in Lake Oswego and Portland area.',
    image: imgLVP,
    heroBadge: '100% Waterproof',
    order: 3,
    features: [
      '100% Waterproof Rigid Core (SPC / WPC)',
      '20mil+ Heavy-Duty Commercial Wear Layers',
      'Real Wood Grain Embossing & Beveled Edges',
      'Integrated Sound-Proofing Cushion',
      'Pet-Proof & Scratch Resistant',
      'Ideal for Kitchens, Bathrooms & Basements'
    ],
    detailedFeatures: [
      {
        title: 'Stone Polymer Core (SPC)',
        description: 'Ultra-dense rigid core prevents expansion and contraction during Pacific Northwest seasonal temperature shifts.'
      },
      {
        title: 'Commercial Wear Layer',
        description: '20mil to 28mil ceramic bead wear layer shields against scratches, furniture scuffs, and daily wear.'
      },
      {
        title: 'Built-in Acoustic Backing',
        description: 'Attached acoustic backing absorbs impact sound, softening footfall noise across upper floor levels.'
      },
      {
        title: 'Seamless Wet Zone Performance',
        description: 'Completely submersible—perfect for bathrooms, laundry rooms, basements, and kitchen splash zones.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Site Moisture & Subfloor Prep',
        description: 'Ensure subfloor cleanliness and flatness, repairing cracks or loose boards.'
      },
      {
        step: 2,
        title: 'Layout & Stagger Planning',
        description: 'Plan plank staggering and layout direction to maximize visual length and light flow.'
      },
      {
        step: 3,
        title: 'Dustless Cutting & Interlocking',
        description: 'Click planks tightly into place, cutting custom fits around vents, walls, and doorways.'
      },
      {
        step: 4,
        title: 'Transitions & Trim Installation',
        description: 'Install matching stair nosings, reducers, T-moldings, and baseboards.'
      },
      {
        step: 5,
        title: 'Detailed Clean Up & Inspection',
        description: 'Vacuum and wipe down newly installed flooring and perform a final walkthrough.'
      }
    ],
    specifications: [
      { label: 'Core Type', value: 'SPC Rigid Core (Stone Polymer Composite)' },
      { label: 'Wear Layer', value: '20mil to 28mil Ceramic Bead Finish' },
      { label: 'Waterproofing', value: '100% Submersible Waterproof' },
      { label: 'Warranty', value: '25-Year Residential / 15-Year Commercial' },
      { label: 'Radiant Heat', value: 'Compatible with in-floor heating up to 85°F' }
    ],
    applications: [
      'Kitchens & Dining Areas',
      'Bathrooms & Powder Rooms',
      'Finished Basements',
      'Pet-Friendly Family Living Rooms',
      'Retail Stores & Offices'
    ],
    faqs: [
      {
        question: 'Why is LVP so popular in Oregon and Washington homes?',
        answer: 'Because it provides the warm visual appeal of natural hardwood while being completely immune to moisture, spills, muddy boots, and damp Pacific Northwest weather.'
      },
      {
        question: 'Can LVP be installed over radiant floor heating?',
        answer: 'Yes, most rigid-core SPC luxury vinyl planks are compatible with in-floor radiant heat systems up to 85°F.'
      },
      {
        question: 'How does LVP compare to tile or laminate?',
        answer: 'LVP is warmer and softer underfoot than ceramic tile, and significantly more waterproof than standard laminate.'
      }
    ]
  },
  {
    slug: 'tile-flooring',
    title: 'Custom Tile & Ceramic Flooring Installation',
    shortTitle: 'Tile Flooring',
    subtitle: 'Precision Porcelain, Ceramic & Natural Stone Setting',
    description: 'Elevate your spaces with custom tile, porcelain, ceramic, and natural stone installation. From kitchen floors and backsplashes to curbless tile showers, CFS Flooring ensures straight grout lines, waterproof membranes, and flawless finish work.',
    cardDescription: 'Precision ceramic, porcelain, and stone tile installation for floors, walls, backsplashes, and custom showers.',
    metaTitle: 'Custom Tile & Ceramic Flooring Installation | Lake Oswego & West Linn',
    metaDescription: 'Custom porcelain, ceramic, and natural stone tile installation for residential and commercial spaces in Lake Oswego & Portland.',
    image: imgTile,
    heroBadge: 'Master Tile Setter',
    order: 4,
    features: [
      'Porcelain, Ceramic & Natural Stone Flooring',
      'Waterproof Membrane Systems (Schluter / RedGard)',
      'Large Format & Mosaic Pattern Laying',
      'Stain-Resistant Epoxy & Polymer Grouts',
      'Heated Subfloor Tile Systems (Ditra-Heat)',
      'Kitchen Backsplashes & Custom Showers'
    ],
    detailedFeatures: [
      {
        title: 'Uncoupling & Waterproofing Membranes',
        description: 'We install Schluter Ditra membranes to prevent subfloor movement from cracking tiles or grout lines.'
      },
      {
        title: 'Laser-Guided Layout Precision',
        description: 'Laser levelling tools ensure symmetrical tile placement, square corners, and perfectly crisp grout lines.'
      },
      {
        title: 'Stain-Proof Grouting Options',
        description: 'Advanced polymer and epoxy grouts resist water absorption, mildew growth, and heavy discoloration.'
      },
      {
        title: 'In-Floor Heating Integration',
        description: 'Enjoy cozy warm bathroom floors with Ditra-Heat electric radiant heating cable integration.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Substrate & Backer Board Prep',
        description: 'Install cement backer board or uncoupling membrane over rigid subfloors.'
      },
      {
        step: 2,
        title: 'Laser Alignment & Dry Lay',
        description: 'Map out grid lines and test tile layouts to eliminate unsightly narrow cuts.'
      },
      {
        step: 3,
        title: 'Mortar Setting & Lippage Control',
        description: 'Apply modified thin-set mortar using levelling clips for smooth, flat tile surfaces.'
      },
      {
        step: 4,
        title: 'Grouting & Expansion Joints',
        description: 'Pack grout joints tight, tool smooth, and seal perimeter expansion joints with silicone.'
      },
      {
        step: 5,
        title: 'Sealing & Final Polish',
        description: 'Seal natural stone tiles, clean off grout haze, and inspect for perfection.'
      }
    ],
    specifications: [
      { label: 'Tile Materials', value: 'Porcelain, Ceramic, Marble, Travertine, Slate' },
      { label: 'Underlayment', value: 'Cement Board, Schluter Ditra Membrane' },
      { label: 'Grout', value: 'High-Performance Polymer & Epoxy Grout' },
      { label: 'Warranty', value: '10-Year Craftsmanship Guarantee' },
      { label: 'Applications', value: 'Floors, Showers, Walls, Backsplashes' }
    ],
    applications: [
      'Master Bathrooms & Showers',
      'Kitchen Floors & Backsplashes',
      'Mudrooms & Entry Foyers',
      'Outdoor Patios & Sunrooms',
      'Commercial Restrooms & Lobbies'
    ],
    faqs: [
      {
        question: 'How long after tile installation can I walk on the floor?',
        answer: 'Foot traffic should be avoided for 24 hours until the mortar sets. Grouting usually occurs on day two, followed by another 24 hours of curing before full use.'
      },
      {
        question: 'Do you offer waterproof shower and bathroom tiling?',
        answer: 'Absolutely. We use industry-certified uncoupling membranes and waterproof systems to prevent moisture penetration behind tiles.'
      },
      {
        question: 'Are porcelain tiles better than ceramic tiles?',
        answer: 'Porcelain is denser, less porous, and more durable than standard ceramic, making it ideal for high-traffic floors and wet environments.'
      }
    ]
  },
  {
    slug: 'carpet-installation',
    title: 'Carpet Installation',
    shortTitle: 'Carpet Installation',
    subtitle: 'Luxurious Residential & Heavy-Duty Commercial Carpet Systems',
    description: 'Add warmth, comfort, and noise insulation to bedrooms, living areas, staircases, and offices. CFS Flooring provides professional power-stretching, high-density padding, and flawless seam matching for residential plush carpet and commercial carpet tiles.',
    cardDescription: 'Residential plush carpeting, power-stretching, stairs, and heavy-commercial carpet tile installation.',
    metaTitle: 'Professional Carpet Installation | Lake Oswego & West Linn',
    metaDescription: 'Expert carpet installation, power stretching, cushion padding, and commercial carpet tiles in Lake Oswego & West Linn area.',
    image: imgCarpet,
    heroBadge: 'Comfort & Warmth',
    order: 5,
    features: [
      'Plush, Cut-Pile & Textured Loop Carpeting',
      'High-Density Memory Foam Cushion Padding',
      'Power-Stretching to Prevent Wrinkling & Buckling',
      'Invisible Seam Sealing & Custom Stair Runners',
      'Stain-Resistant Technology (SmartStrand / Solution-Dyed)',
      'Modular Commercial Carpet Tile Installation'
    ],
    detailedFeatures: [
      {
        title: 'Power-Stretched Durability',
        description: 'We use industrial power stretchers to pull carpet drum-tight across every room, eliminating ripples and buckling forever.'
      },
      {
        title: 'High-Density Cushion Support',
        description: 'Premium 8lb to 10lb memory foam underpads add deep luxurious comfort underfoot and double carpet life.'
      },
      {
        title: 'Precision Seam Sealing',
        description: 'Hot-melt seam irons and pattern matching make seams virtually invisible even across large open rooms.'
      },
      {
        title: 'Custom Stairwork & Runners',
        description: 'Expert waterfall or cap-and-band stair installations for curved, open-rail, and straight staircases.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Tear-Out & Floor Sweep',
        description: 'Remove old carpet and worn padding, vacuum subfloor clean, and inspect tack strips.'
      },
      {
        step: 2,
        title: 'Padding Laying & Stapling',
        description: 'Lay high-density cushion padding, seam-tape joins, and secure to subfloor.'
      },
      {
        step: 3,
        title: 'Carpet Roll Seaming',
        description: 'Cut carpet rolls, match pile direction and patterns, and join seams with heat tape.'
      },
      {
        step: 4,
        title: 'Power Stretching & Tucking',
        description: 'Stretch carpet tightly over tack strips on all walls, trimming excess neatly.'
      },
      {
        step: 5,
        title: 'Vacuum & Room Clean Up',
        description: 'Vacuum installed carpet, clean trim work, and present finished work to client.'
      }
    ],
    specifications: [
      { label: 'Carpet Styles', value: 'Plush Cut-Pile, Textured Loop, Pattern, Berber' },
      { label: 'Padding', value: '8lb to 10lb High-Density Memory Foam Pad' },
      { label: 'Installation', value: 'Power-Stretched over Tack Strips / Glue Down' },
      { label: 'Warranty', value: '10-Year Wear & Installation Warranty' },
      { label: 'Turnaround', value: '1 Day average room / floor turnaround' }
    ],
    applications: [
      'Bedrooms & Nursery Suites',
      'Living Rooms & Family Rooms',
      'Staircases & Custom Runners',
      'Home Theaters & Media Rooms',
      'Commercial Executive Offices'
    ],
    faqs: [
      {
        question: 'Why is power-stretching carpet important?',
        answer: 'Power stretching ensures carpet is pulled drum-tight across the room, preventing ripples, waves, and premature wear over time.'
      },
      {
        question: 'What padding density do you recommend?',
        answer: 'We recommend an 8lb to 10lb high-density cushion pad for maximum comfort, thermal insulation, and extended carpet lifespan.'
      },
      {
        question: 'Can carpet tiles be installed in commercial offices?',
        answer: 'Yes! Modular carpet tiles are extremely popular in office settings because individual stained or worn tiles can be replaced easily without replacing the entire floor.'
      }
    ]
  },
  {
    slug: 'commercial-flooring',
    title: 'Commercial Flooring & VCT Installation',
    shortTitle: 'Commercial Flooring',
    subtitle: 'Heavy-Duty, High-Traffic Flooring Solutions for Businesses',
    description: 'Keep your business operating smoothly with commercial-grade flooring designed for heavy foot traffic, rolling loads, and low maintenance. CFS Flooring installs Vinyl Composition Tile (VCT), commercial sheet vinyl, rubber flooring, and heavy-duty carpet tiles for retail, medical, school, and office facilities.',
    cardDescription: 'Heavy-duty VCT, commercial sheet vinyl, rubber tile, and low-downtime commercial installation.',
    metaTitle: 'Commercial Flooring & VCT Installation | Lake Oswego & Portland',
    metaDescription: 'Commercial VCT, sheet vinyl, rubber flooring, and commercial carpet installation for businesses in Lake Oswego & Portland.',
    image: imgCommercial,
    heroBadge: 'Commercial Grade',
    order: 6,
    features: [
      'Vinyl Composition Tile (VCT) & Commercial Sheet Vinyl',
      'Heat-Welded Hygienic Seams & Cove Base Fitting',
      'High-Traffic Wear Layer & Chemical Resistance',
      'Off-Hours & Weekend Low-Downtime Installation',
      'Concrete Slab Grinding & Self-Leveling',
      'ADA Compliant Transitions & Safety Flooring'
    ],
    detailedFeatures: [
      {
        title: 'Heavy Traffic Durability',
        description: 'Engineered for rolling loads, heavy foot traffic, inventory carts, and frequent cleaning chemicals.'
      },
      {
        title: 'Hygienic Heat-Welded Seams',
        description: 'Sanitary sheet vinyl with heat-welded joints prevents bacteria, moisture, and dirt penetration in medical/food prep zones.'
      },
      {
        title: 'Night & Weekend Scheduling',
        description: 'Flexible off-hours installations to ensure zero disruption to your daily business operations.'
      },
      {
        title: 'Concrete Prep & Diamond Grinding',
        description: 'Remove old adhesives, level uneven concrete slabs, and apply commercial moisture barriers.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Site Evaluation & Slab Testing',
        description: 'Test concrete relative humidity (RH) and surface alkalinity before material spec.'
      },
      {
        step: 2,
        title: 'Mechanical Grinding & Leveling',
        description: 'Diamond grind existing slab, repair cracks, and pour self-leveling cement.'
      },
      {
        step: 3,
        title: 'Commercial Adhesive Application',
        description: 'Spread premium pressure-sensitive or acrylic adhesives with trowel precision.'
      },
      {
        step: 4,
        title: 'Tile / Sheet Setting & Rolling',
        description: 'Lay VCT or sheet vinyl, rolling with a 100lb roller for complete adhesive transfer.'
      },
      {
        step: 5,
        title: 'Seam Welding & Base Finishing',
        description: 'Heat weld seams, install vinyl cove base, and apply initial protective polish.'
      }
    ],
    specifications: [
      { label: 'Target Facilities', value: 'Retail Stores, Medical Clinics, Schools, Offices' },
      { label: 'Materials Offered', value: 'VCT, Commercial Sheet Vinyl, LVT, Carpet Tile' },
      { label: 'Safety Compliance', value: 'ADA Slip-Resistant & ASTM Fire Rated' },
      { label: 'Schedule Flexibility', value: 'Overnight, Weekend, and Holiday Service' },
      { label: 'Warranty', value: '15-Year Commercial Craftsmanship Warranty' }
    ],
    applications: [
      'Retail Showrooms & Boutiques',
      'Medical Offices & Healthcare Clinics',
      'Schools, Daycares & Classrooms',
      'Commercial Kitchens & Breakrooms',
      'Corporate Office Buildings'
    ],
    faqs: [
      {
        question: 'Can you complete commercial flooring installation after business hours?',
        answer: 'Yes, we offer flexible night and weekend scheduling to eliminate downtime for your business operations.'
      },
      {
        question: 'What is the advantage of VCT for high-traffic spaces?',
        answer: 'VCT is incredibly cost-effective, tough under heavy foot traffic, and easy to wax, strip, and maintain for decades.'
      },
      {
        question: 'Do you handle subfloor concrete leveling for commercial jobs?',
        answer: 'Yes, we perform mechanical diamond grinding, moisture mitigation, and self-leveling cement applications.'
      }
    ]
  },
  {
    slug: 'flooring-repair',
    title: 'Flooring Repair & Restoration',
    shortTitle: 'Flooring Repair',
    subtitle: 'Expert Repair, Patching, Demolition & Subfloor Restoration',
    description: 'Fix damaged floors, squeaks, water damage, and uneven subfloors without replacing your entire surface. CFS Flooring offers expert plank replacement, hardwood board weave-ins, subfloor repair, and fast demolition/removal of old flooring materials.',
    cardDescription: 'Expert hardwood repair, plank replacement, subfloor leveling, water damage fix, and floor removal.',
    metaTitle: 'Flooring Repair & Subfloor Restoration | Lake Oswego & West Linn',
    metaDescription: 'Fast, professional flooring repair, board replacement, subfloor leveling, and floor removal in Lake Oswego and West Linn.',
    image: imgRepair,
    heroBadge: 'Repair Specialist',
    order: 7,
    features: [
      'Hardwood Plank Weaving & Spot Replacement',
      'Subfloor Leveling, Joist Sistering & Squeak Repair',
      'Water & Fire Damage Floor Restoration',
      'LVP & Laminate Damaged Board Swap',
      'Fast Demolition of Tile, Carpet, Hardwood & Adhesives',
      'Diamond Grinding for Mastic & Glue Removal'
    ],
    detailedFeatures: [
      {
        title: 'Seamless Hardwood Board Weaving',
        description: 'Remove damaged planks and interweave matching new boards so the repair blends invisibly into surrounding flooring.'
      },
      {
        title: 'Squeak Elimination & Subfloor Stiffening',
        description: 'Secure loose subfloors, shim sagging joists, and stop annoying squeaks and creaks underfoot.'
      },
      {
        title: 'Water Damage Restoration',
        description: 'Address cupped, buckled, or warped flooring caused by plumbing leaks or humidity spikes.'
      },
      {
        title: 'Clean & Fast Floor Demolition',
        description: 'Heavy-duty tear-out equipment quickly removes old tile, carpet, hardwood, and stubborn adhesives.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Damage Inspection & Diagnostics',
        description: 'Examine damage extent, subfloor moisture levels, and structural integrity.'
      },
      {
        step: 2,
        title: 'Selective Board / Section Tear-Out',
        description: 'Carefully remove damaged tiles, planks, or subflooring without disturbing adjacent areas.'
      },
      {
        step: 3,
        title: 'Subfloor Leveling & Reinforcement',
        description: 'Reinforce joists, replace soft plywood subfloor, and level low spots.'
      },
      {
        step: 4,
        title: 'Precision Board Patch / Weave-In',
        description: 'Install matching replacement boards or tiles with tight seam tolerances.'
      },
      {
        step: 5,
        title: 'Finish Matching & Final Inspection',
        description: 'Sand, stain, or seal replacement area to blend seamlessly into existing floor.'
      }
    ],
    specifications: [
      { label: 'Repairs Handled', value: 'Hardwood, LVP, Laminate, Tile, Subfloor' },
      { label: 'Subfloor Work', value: 'Plywood patching, joist repair, squeak fix' },
      { label: 'Demolition', value: 'Dust-controlled removal of tile, carpet, wood' },
      { label: 'Response', value: 'Prompt scheduling for urgent water damage repairs' },
      { label: 'Warranty', value: 'Full Craftsmanship Guarantee' }
    ],
    applications: [
      'Water-Damaged Kitchen & Bathroom Floors',
      'Cupped or Scratched Hardwood Planks',
      'Creaking Hallways & Staircases',
      'Old Tile & Carpet Removal Projects',
      'Pre-Sale Real Estate Flooring Touch-Ups'
    ],
    faqs: [
      {
        question: 'Can you replace damaged hardwood boards without replacing the whole floor?',
        answer: 'Yes! We perform board weave-ins where individual damaged planks are carefully removed and replaced with matching wood species, then sanded and stained to match perfectly.'
      },
      {
        question: 'How do you fix squeaky wood floors?',
        answer: 'We identify the underlying cause—often loose subfloor plywood or joist friction—and secure the subfloor using specialized screws, shims, or adhesive from below or above.'
      },
      {
        question: 'Do you handle demolition and debris disposal?',
        answer: 'Yes, our team handles total demolition, adhesive scraping, subfloor preparation, and complete environmental debris disposal.'
      }
    ]
  },
  {
    slug: 'maintenance',
    title: 'Floor Care & Maintenance Services',
    shortTitle: 'Floor Maintenance',
    subtitle: 'Professional Deep Cleaning, Screen & Recoat, and Protective Maintenance',
    description: 'Extend the life and brilliance of your floors with professional care services. CFS Flooring provides hardwood buff & recoat treatments, deep tile & grout cleaning, commercial strip and wax, and scheduled maintenance for residential and commercial clients.',
    cardDescription: 'Buff & recoat for hardwood, commercial strip & wax, deep grout cleaning, and protective floor care.',
    metaTitle: 'Floor Care & Maintenance Services | Lake Oswego & West Linn',
    metaDescription: 'Keep your floors looking new with buff & recoat, deep tile cleaning, and commercial floor maintenance in Lake Oswego & Portland.',
    image: imgMaintenance,
    heroBadge: 'Care & Protection',
    order: 8,
    features: [
      'Hardwood Dustless Screen & Recoat Finish Refresh',
      'Deep Tile & Grout Steam Cleaning & Sealing',
      'Commercial VCT Strip, Wax & High-Speed Buffing',
      'LVP & Laminate Protective Polish & Seal',
      'Stain & Spill Guard Applications',
      'Preventative Maintenance Plans for Commercial Properties'
    ],
    detailedFeatures: [
      {
        title: 'One-Day Screen & Recoat',
        description: 'Lightly abrade the top finish layer of hardwood floors and apply a fresh coat of commercial polyurethane—restoring shine in 24 hours without full sanding.'
      },
      {
        title: 'Deep Grout Extraction & Sealing',
        description: 'Remove ground-in dirt, oil, and bacteria from tile grout lines, then apply penetrating sealers for long-term stain protection.'
      },
      {
        title: 'Commercial Strip & Wax',
        description: 'Strip away old discolored wax layers on VCT floors and apply multiple coats of high-solids commercial floor finish.'
      },
      {
        title: 'Protective Spill Guards',
        description: 'Apply high-durability surface sealants that protect wood, tile, and vinyl against moisture absorption and scuff marks.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Surface Inspection & Chemical Check',
        description: 'Test floor surface for old wax or silicone buildup before treatment.'
      },
      {
        step: 2,
        title: 'Deep Extraction Cleaning',
        description: 'Perform mechanical scrub and extraction to remove heavy soil and grease.'
      },
      {
        step: 3,
        title: 'Screening / Abrasion',
        description: 'Buff surface with fine abrasives to prepare top layer for new finish adhesion.'
      },
      {
        step: 4,
        title: 'Protective Finish Application',
        description: 'Apply commercial polyurethane or high-solid floor finish uniformly.'
      },
      {
        step: 5,
        title: 'Curing & Final Inspection',
        description: 'Allow coat to cure for light foot traffic and perform sheen check.'
      }
    ],
    specifications: [
      { label: 'Care Services', value: 'Screen & Recoat, Deep Grout Clean, VCT Waxing' },
      { label: 'Sheen Options', value: 'Matte, Satin, Semi-Gloss, Gloss' },
      { label: 'Downtime', value: 'Same-day return to light foot traffic' },
      { label: 'Frequency', value: 'Annual residential / Bi-annual commercial' },
      { label: 'Warranty', value: '100% Satisfaction Guarantee' }
    ],
    applications: [
      'Residential Hardwood Refreshing',
      'High-Traffic Commercial Facilities',
      'Medical & Retail Vinyl Maintenance',
      'Restaurant & Kitchen Tile Cleaning',
      'Property Management Turnovers'
    ],
    faqs: [
      {
        question: 'What is a screen and recoat for hardwood floors?',
        answer: 'A screen & recoat light-abrades the top protective polyurethane layer without sanding down to raw wood, then applies a fresh topcoat to restore shine and seal minor surface scuffs. It takes just one day!'
      },
      {
        question: 'How often should commercial VCT floors be stripped and waxed?',
        answer: 'Depending on traffic, high-volume retail or medical spaces benefit from stripping and waxing every 6 to 12 months, with monthly high-speed buffing.'
      },
      {
        question: 'Can dirty tile grout lines be restored?',
        answer: 'Yes! We use deep extraction cleaning and penetrating color sealers that restore grout to its original color and protect it against future stains.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit = 3): ServiceItem[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
