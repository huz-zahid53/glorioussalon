export interface SalonInfo {
  name: string;
  fullName: string;
  tagline: string;
  phone: string;
  whatsappRaw: string;
  address: string;
  city: string;
  timings: string;
  googleRating: number;
  reviewsCount: number;
  established: string;
  instagram: string;
  facebook: string;
  mapUrl: string;
  announcement: string;
  brandWord: string;
  ownerLine: string;
  ownerName: string;
  cityShort: string;
  eyebrow: string[];
  headlinePre: string;
  headlineAccent: string;
  about: string;
  addressShort: string;
  addressShort2: string;
  studioLabel: string;
  badgeLabel: string;
  heroQuoteText: string;
  heroQuoteName: string;
  footerAbout: string;
  marquee: string[];
  aboutOwner: string;
}

export interface ServiceItem {
  id: string;
  category: 'bridal' | 'hair' | 'skin' | 'spa';
  title: string;
  subtitle: string;
  duration: string;
  priceTag: string;
  description: string;
  included: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface BridalPackageTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  basePrice: number;
  priceDisplay: string;
  recommendedFor: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  event: string;
  review: string;
  rating: number;
  timeAgo: string;
  verifiedOn: string;
}

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export const SALON_INFO: SalonInfo = {
  name: 'Glorious by Iram',
  fullName: 'Glorious by Iram Beauty Salon',
  tagline: 'Where Islamabad Glows, The Glorious Way',
  phone: '+92 318 1886167',
  whatsappRaw: '923181886167',
  address: 'Shop #09, First Floor, Pehchan Mall, G-9/1, G-9 Markaz, Islamabad',
  city: 'Islamabad, Pakistan',
  timings: 'Monday – Sunday : 11:00 AM – 09:00 PM',
  googleRating: 4.9,
  reviewsCount: 47,
  established: 'G-9’s Favourite Glow Studio',
  instagram: 'https://www.instagram.com/glorious_by_iram',
  facebook: 'https://www.facebook.com/p/Glorious-by-Iram-61581804680648/',
  mapUrl: 'https://maps.google.com/maps?q=Glorious%20by%20Iram%20Pehchan%20Mall%20G-9%20Islamabad&output=embed',
  announcement: 'Bridal Season 2026/27 · Bridal packages now open for booking',
  brandWord: 'Glorious',
  ownerLine: 'By Iram',
  ownerName: 'Iram',
  cityShort: 'Islamabad',
  eyebrow: ['Skin & Glow Studio', 'Bridal Artistry', 'Islamabad'],
  headlinePre: 'Where Islamabad Glows With',
  headlineAccent: 'Quiet Luxury.',
  about: 'Hydrafacials, hair treatments and picture-perfect bridal looks by Iram and team — a cosy G-9 studio where clinical-grade skincare meets occasion glam.',
  addressShort: 'Pehchan Mall, G-9 Markaz',
  addressShort2: 'First Floor, Pehchan Mall, G-9',
  studioLabel: 'Glorious Beauty Studio',
  badgeLabel: 'Bridal Season 2026/27 Booking',
  heroQuoteText: '"My skin glowed on my barat thanks to their facials and makeup!"',
  heroQuoteName: '— Verified Google Review',
  footerAbout: 'From bridal mornings to self-care afternoons, Glorious by Iram is Islamabad’s cosy destination for hydrafacials, healthy hair and occasion glam.',
  marquee: [
    'BESPOKE BRIDAL COUTURE',
    'HYDRAFACIAL & GLOW',
    'HEALTHY HAIR ARCHITECTURE',
    'KERATIN & PROTEIN',
    'SIGNATURE MEHNDI & PARTY GLAM',
    'GROOMING SANCTUARY',
    'PRIVATE BRIDAL SUITE',
    'PEHCHAN MALL G-9 ISLAMABAD'
  ],
  aboutOwner: 'Iram personally oversees every signature bridal consultation.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'signature-bridal',
    category: 'bridal',
    title: 'Signature Bridal Masterpiece',
    subtitle: 'Barat & Valima Haute Couture Makeup',
    duration: '3.5 - 4 Hours',
    priceTag: 'On request',
    description: 'Timeless bridal and party looks tailored to you. High-definition flawless complexion, intricate eye artistry, and all-day radiance.',
    included: [
      'High-Definition long-lasting skin finish',
      'Artisanal eye embellishment & 3D lashes',
      'Architectural hair styling & dupatta setting',
      'Jewelry & accessory pinning with trial consultation'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/578021f7d_generated_image.png',
    isPopular: true
  },
  {
    id: 'party-event-glam',
    category: 'bridal',
    title: 'Party & Occasion Glam',
    subtitle: 'Engagements, Mehndis & Dinner Looks',
    duration: '2 Hours',
    priceTag: 'On request',
    description: 'Photogenic, sweat-proof elegance designed to illuminate night and day ceremonies with effortless sophistication.',
    included: [
      'Luminous dewy or velvet-matte skin prep',
      'Subtle smokey or sculpted cut-crease eyes',
      'Premium lash application & brow definition',
      'Signature volume blowout or textured updo'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/578021f7d_generated_image.png',
    isPopular: true
  },
  {
    id: 'hydrafacial',
    category: 'skin',
    title: 'Hydrafacial & Glow Treatments',
    subtitle: 'Deep-Cleanse Skin Perfection',
    duration: '75 Mins',
    priceTag: 'On request',
    description: 'Deep-cleanse hydrafacials and glow treatments for real, visible results. The signature pre-bridal skin ritual.',
    included: [
      'Gentle vortex pore extraction',
      'Hyaluronic acid + Vitamin C infusion',
      'Cryo-firming contour massage',
      'Collagen recovery mask'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/62dd1c826_generated_image.png',
    isPopular: true
  },
  {
    id: 'herbal-facial',
    category: 'skin',
    title: 'Pure Radiance Herbal Facial',
    subtitle: 'Natural Botanical Rejuvenation',
    duration: '60 Mins',
    priceTag: 'On request',
    description: 'Gentle organic herbs and cooling gua-sha sculpting designed for sensitive and stressed skin.',
    included: [
      'Aromatherapy steam & gentle extraction',
      'Herbal compress',
      'Gua-sha facial sculpting',
      'Hydrating herbal moisture veil'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/d41c47f30_generated_image.png',
    isPopular: false
  },
  {
    id: 'hair-treatments',
    category: 'hair',
    title: 'Keratin, Protein & Colour',
    subtitle: 'Healthy Hair Architecture',
    duration: '2.5 - 4 Hours',
    priceTag: 'On request',
    description: 'Keratin, protein treatments and colour that keeps hair healthy, glossy and manageable for months.',
    included: [
      'Deep clarifying scalp cleanse',
      'Keratin or protein thermal seal',
      'Nutrient sealing silk mist',
      'Take-home post-care protocol guide'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/f1813b4af_generated_image.png',
    isPopular: true
  },
  {
    id: 'waxing-grooming',
    category: 'spa',
    title: 'Waxing, Threading & Grooming',
    subtitle: 'Full Grooming Menu in a Private Setting',
    duration: '30 - 60 Mins',
    priceTag: 'On request',
    description: 'A complete grooming menu in a clean, private, comfortable setting.',
    included: [
      'Full body waxing',
      'Threading & facial hair removal',
      'Manicure & pedicure',
      'Soothing after-care'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/d41c47f30_generated_image.png',
    isPopular: false
  }
];

export const BRIDAL_PACKAGES: BridalPackageTier[] = [
  {
    id: 'intimate-nikkah',
    name: 'The Nikkah & Engagement Glow',
    subtitle: 'Soft, ethereal luminescence for day & evening ceremonies',
    basePrice: 0,
    priceDisplay: 'On request',
    recommendedFor: 'Nikkah, Engagement, or Mehndi functions',
    features: [
      'Customized Dewy Skin Preparation',
      'Soft Glam Eyes with Natural Flutter Lashes',
      'Dupatta Pinning & Fine Jewelry Setting',
      'Signature Textured Braid or Classic Half-Updo',
      'Complimentary Hydrating Lip Glow touch-up kit'
    ]
  },
  {
    id: 'royal-bridal-barat',
    name: 'The Royal Barat & Valima Suite',
    subtitle: 'The complete 2-day bridal transformation',
    badge: 'Most Revered',
    basePrice: 0,
    priceDisplay: 'On request',
    recommendedFor: 'Traditional Barat & Modern Valima Brides',
    features: [
      '2 Full Bridal Makeup & Styling Sessions',
      'Complimentary Pre-Bridal Glow Facial',
      'Full Bridal Consultation & Shade Matching Trial',
      'Luxury 3D Mink Lashes & 24hr Waterproof Lock',
      'Advanced Crown Dupatta & Heavy Veil Engineering',
      'Includes 1 Guest/Mother-of-Bride Makeup'
    ]
  },
  {
    id: 'complete-bridal-troussau',
    name: 'The Empress All-Inclusive Trousseau',
    subtitle: 'Head-to-toe pampering leading up to the celebration',
    badge: 'Ultimate Luxury',
    basePrice: 0,
    priceDisplay: 'On request',
    recommendedFor: 'Complete wedding week experience',
    features: [
      'Barat & Valima Signature Makeup Sessions',
      'Mehndi / Mayun Event Makeup Session',
      'Full Body Polish & Spa Rituals',
      'Hydrafacial Series (3 days prior)',
      'Hair Repair & Luxury Mani-Pedi Ritual',
      'Private Dressing Lounge Access'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    clientName: 'A Happy Bride',
    event: 'Barat Bride · Islamabad',
    review: 'My skin glowed on my barat thanks to their facials and makeup. Iram personally takes such good care of every bride. Highly recommended!',
    rating: 5,
    timeAgo: '1 month ago',
    verifiedOn: 'Verified Google Review'
  },
  {
    id: 'rev-2',
    clientName: 'Ayesha Khan',
    event: 'Hydrafacial Regular',
    review: 'Very skilled and caring staff. My skin has never looked better. The hydrafacials are amazing value and the studio is always spotless.',
    rating: 5,
    timeAgo: '3 weeks ago',
    verifiedOn: 'Verified Google Review'
  },
  {
    id: 'rev-3',
    clientName: 'Rabia Noor',
    event: 'Keratin Treatment',
    review: 'My hair has never been healthier. They explained everything before starting and the results lasted months. Wonderful experience.',
    rating: 5,
    timeAgo: '2 months ago',
    verifiedOn: 'Verified Google Review'
  },
  {
    id: 'rev-4',
    clientName: 'Zoya Ahmed',
    event: 'Party Makeup',
    review: 'They did my engagement makeup and it was flawless in photos. Clean, comfortable and reasonably priced studio.',
    rating: 5,
    timeAgo: '2 weeks ago',
    verifiedOn: 'Verified Google Review'
  }
];

export const REVIEWS = TESTIMONIALS;

export const FAQS: FaqItem[] = [
  {
    category: 'Booking & Consultations',
    question: 'How far in advance should I reserve my bridal dates?',
    answer: 'For wedding season (October through March in Islamabad), we recommend reserving your Barat and Valima dates 2 to 3 months in advance. Dates are locked with an advance booking deposit via WhatsApp.'
  },
  {
    category: 'Bridal Services',
    question: 'Do bridal packages include hair styling and dupatta setting?',
    answer: 'Yes, absolutely. All our bridal packages include complete hair styling, dupatta drape pinning, matha patti/tikka placement, and complete jewelry fixing.'
  },
  {
    category: 'Consultation & Trials',
    question: 'Can I book a consultation or makeup trial prior to booking?',
    answer: 'Yes! We offer bridal look consultations where we examine your bridal outfits, skin undertones, and hair length to create your bespoke bridal blueprint.'
  },
  {
    category: 'Location',
    question: 'Where is Glorious by Iram located?',
    answer: 'We are situated on the first floor of Pehchan Mall, G-9 Markaz, Islamabad.'
  },
  {
    category: 'Pricing',
    question: 'How much do bridal packages cost?',
    answer: 'Every bride is different. Message us on WhatsApp with your dates and functions and we will share a detailed quote the same day.'
  }
];
