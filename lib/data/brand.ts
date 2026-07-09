import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "Shazzie Closets",
  url: 'https://shazzie-closets.storxia.tech',
  shortName: "Shazzie Closets",
  logo: "/storxia-logo.webp",
  tagline: "Lets Glam Your Home 🏡🥰",
  description:
    "We sell Households, Electronics, Beddings, Shoes, and Fashions & Appliances. All deliveries are done on Monday & Wednesday.",
  location: "Kenya",
  seo: {
    title: "Shazzie Closets & Households | Quality Home & Fashion Hub",
    description: "Shop households, electronics, beddings, shoes, and fashions at Shazzie Closets & Households.",
    ogImage: '/og-preview.png',
    favicon: '/favicon.ico',
    appleIcon: '/apple-touch-icon.png',
  },

  hero: {
    badge: "Welcome to Shazzie Closets & Households ✨",
    headlineTop: "LETS GLAM",
    headlineHighlight: "YOUR HOME",
    backgroundImage: "/background-image.jpg",
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },

  sections: {
    featured: {
      title: "Featured Collection",
      subtitle: "Find your perfect look. Browse our curated selection of quality households, electronics, and fashion styles."
    },
    flashDeals: {
      badge: "Live Offers",
      title: "Flash Deals",
      subtitle: "Cop your favorite items at unbeatable prices before stocks run out.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Just Dropped",
      title: "Latest Arrivals",
      subtitle: "Fresh items added directly from our catalog — step out in the latest trends.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in"
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Highly reviewed and loved by our community.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We offer quality households, electronics, fashion, and convenient deliveries."
    },
    reviews: {
      badge: "Real Customer Feedback",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Active",
      titleTop: "LOCK IN",
      titleBottom: "YOUR ORDER",
      subtitle: "Chat with us directly on WhatsApp to secure your items and confirm your delivery details."
    }
  },

  whatsappNumber: "254796784572",
  whatsappMessage: {
    general:
      "Hello Shazzie Closets & Households,\n\nI would like to place an order.\n\nItem Name/Screenshot:\n\nSize:\n\nDelivery Location:\n\nPlease confirm availability. Thank you",
  },
  socialLinks: {
    instagram: "https://instagram.com/shazzieclosets",
    facebook: "https://facebook.com/shazzieclosets",
    tiktok: "https://www.tiktok.com/@shazzieclosets",
  },
  deliveryInfo: {
    standard: "All deliveries are done on Wednesday & Monday. 🚚",
    Nairobi: "Confirm item availability before making any payment. ✅",
  },
  trustStatements: [
    "Pochi La Biashara: 0796784572",
    "Paybill: 522522 Acc: 1344285120",
    "Deliveries on Monday & Wednesday 🚚",
    "Flexible Chama Plans Available 👥",
  ],
  features: [
    {
      title: "Households & Appliances",
      description: "We stock a versatile range of premium households, electronics, and home appliances."
    },
    {
      title: "Latest Fashions",
      description: "Step out in style with our wide collection of ladies dresses, tops, and trousers."
    },
    {
      title: "Scheduled Deliveries",
      description: "All deliveries are systematically handled and dispatched every Monday and Wednesday."
    },
    {
      title: "Chama Available",
      description: "Secure your favorite home items smoothly through our active group saving terms."
    }
  ],
  whatsappTrustSignals: [
    "Payment always done before",
    "No exchange, no returns",
    "Deliveries Monday & Wednesday",
    "Verified Merchant: Mary Chege"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Shazzie Closets & Households

I'd like to order:

• Mood the Cup (900ml) Thermal Cup
Price: Ksh 1,000

Please confirm availability.

Thank you.`,
      time: "10:30 AM" },
    { sender: "brand",
      text: `Hello! Yes, that item is available.

Please secure your order by forwarding your payment to Pochi la Biashara 0796784572! ✅`,
      time: "10:32 AM"
    }
  ],
  salesCallout: "Glam Your Home Today! 🏡✨",

  featuredImages: [
    "/1000705163.jpg",
    "/1000705164.jpg",
    "/1000705165.jpg",
    "/1000705168.jpg",
    "/1000705169.jpg",
    "/1000705170.jpg",
    "/1000705173.jpg",
    "/1000705177.jpg",
    "/1000705176.jpg"
  ]
};

export const announcementMessages = [
  { text: "Welcome to Shazzie Closets & Households 🏡✨", icon: Star },
  { text: "Order via WhatsApp Pochi: 0796784572", icon: MessageCircle },
  { text: "Deliveries every Monday & Wednesday 🚚", icon: Truck },
  { text: "Confirm availability before payment ✅", icon: Tag },
  { text: "Chama savings structures available 👥", icon: Sparkles },
];

export const cartTrustFeatures = [
  { text: "Scheduled Mon & Wed Deliveries 🚚", icon: CheckCircle },
  { text: "Secure Payment via Pochi / Paybill 💳", icon: Truck },
  { text: "Easy Ordering via WhatsApp Chat", icon: MessageCircle },
  { text: "Trusted Group Chamas Available 👥", icon: ShieldCheck },
];

export const footerQuickShopLinks = [
  { label: "Households", href: "/shop?category=households" },
  { label: "Fashions", href: "/shop?category=fashions" },
  { label: "Appliances", href: "/shop?category=appliances" },
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "FAQ", href: "/faq" },
];