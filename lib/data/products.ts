// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Mood the Cup (900ml) Thermal Cup", 
    price: 1000, 
    image: "/1.jpg", 
    images: ["/1.jpg"], 
    category: "Households", 
    rating: 4.8, 
    reviews: 142, 
    sizes: [], 
    colors: ["Pink", "Blue", "Green", "Black"], 
    isBestSeller: true, 
    description: "Insulated 900ml thermal travel tumbler featuring a sturdy side handle, secure sip-and-straw lid combo, and available in multiple vibrant matte finishes." 
  },
  {
    id: "p2",
    name: "Vibrant Striped Maxi Dress", 
    price: 1400, 
    image: "/2.jpg", 
    images: ["/2.jpg"], 
    category: "Fashions", 
    rating: 4.7, 
    reviews: 98, 
    sizes: ["M", "L", "XL"], 
    colors: ["Orange", "Pink"], 
    description: "Stunning short-sleeve maxi dress boasting bold vertical stripes in rich shades of orange, pink, and yellow with a classic keyhole neckline tie." 
  },
  {
    id: "p3",
    name: "Patterned Long Abaya Maxi Dress", 
    price: 1300, 
    image: "/3.jpg", 
    images: ["/3.jpg"], 
    category: "Fashions", 
    rating: 4.9, 
    reviews: 156, 
    sizes: ["L", "XL"], 
    colors: ["Grey", "Brown"], 
    isBestSeller: true, 
    description: "Elegant long-sleeve abaya style maxi dress adorned with artistic multi-tonal abstract patterns, complete with an accent waist belt and matching shawl." 
  },
  {
    id: "p4",
    name: "Belted Jeans Pant", 
    price: 2200, 
    image: "/4.jpg", 
    images: ["/4.jpg"], 
    category: "Fashions", 
    rating: 4.8, 
    reviews: 110, 
    sizes: ["L", "XL", "2XL"], 
    colors: ["Blue"], 
    description: "High-waisted wide-leg statement denim jeans styled with distinctive integrated thigh-strap buckle details for a modern edge." 
  },
  {
    id: "p5",
    name: "Nunix Bottom Loading Dispenser", 
    price: 10000, 
    image: "/5.jpg", 
    images: ["/5.jpg"], 
    category: "Appliances", 
    rating: 4.9, 
    reviews: 185, 
    sizes: [], 
    colors: ["Black"], 
    isNewArrival: true, 
    description: "Premium Nunix bottom-loading hot and cold water dispenser station integrated with an elegant top glass-panel brewing kettle setup." 
  },
  {
    id: "p6",
    name: "Six Seater Marble Dining Table Set", 
    price: 68000, 
    image: "/6.jpg", 
    images: ["/6.jpg"], 
    category: "Households", 
    rating: 4.6, 
    reviews: 210, 
    sizes: [], 
    colors: ["White", "Silver", "Gold"], 
    isBestSeller: true, 
    description: "Luxury dining room set including a sleek polished marble top table paired with six high-back microfiber upholstered chairs featuring metallic gold or silver legs." 
  },
  {
    id: "p7",
    name: "Halter Neck Heart-Patterned Maxi Dress", 
    price: 1200, 
    image: "/7.jpg", 
    images: ["/7.jpg"], 
    category: "Fashions", 
    rating: 4.9, 
    reviews: 175, 
    sizes: ["L", "XL", "2XL"], 
    colors: ["Red", "Blue", "White", "Black"], 
    description: "Flowing halter-neck maxi gown patterned with mini contrast hearts all over, featuring a pleated cinched waistline." 
  },
  {
    id: "p8",
    name: "Long-Sleeve Chiffon Mini Dress", 
    price: 1500, 
    image: "/8.jpg", 
    images: ["/8.jpg"], 
    category: "Fashions", 
    rating: 4.8, 
    reviews: 144, 
    sizes: ["M", "L", "XL"], 
    colors: ["Purple", "Black", "Red"], 
    description: "Flirty long-sleeve chiffon dress tailored with a deep cowl neckline, tiered ruffle skirt layer, and a dramatic open self-tie back." 
  },
  {
    id: "p9",
    name: "Contrast Trim Corset Top", 
    price: 1600, 
    image: "/9.jpg", 
    images: ["/9.jpg"], 
    category: "Fashions", 
    rating: 4.9, 
    reviews: 180, 
    sizes: ["M", "L"], 
    colors: ["White", "Black", "Tan"], 
    isNewArrival: true, 
    description: "Structured strapless bustier corset top defined by contrasting panel outlines that accentuate and lift the silhouette beautifully." 
  }
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller); 
export const getNewArrivals = () => products.filter((p) => p.isNewArrival); 
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal); 
export const getProductById = (id: string) => products.find((p) => p.id === id); 

export const colorMap: Record<string, string> = {
  'Black': '#000000', 
  'White': '#ffffff', 
  'Red': '#ff0000', 
  'Blue': '#0000ff', 
  'Pink': '#ffc0cb', 
  'Tan': '#d2b48c', 
  'Grey': '#808080', 
  'Olive': '#808000', 
  'Green': '#008000', 
  'Brown': '#8b4513', 
  'Orange': '#ffa500', 
  'Camo': 'linear-gradient(45deg, #4b5320, #808000, #556b2f)' 
};

export const sizeGuideData = [
  {eu: 38, uk: 5, us: 6, cm: 23.5}, 
  {eu: 39, uk: 6, us: 7, cm: 24.5}, 
  {eu: 40, uk: 6.5, us: 7.5, cm: 25.0}, 
  {eu: 41, uk: 7, us: 8, cm: 26.0}, 
  {eu: 42, uk: 8, us: 9, cm: 27.0}, 
  {eu: 43, uk: 9, us: 10, cm: 28.0}, 
  {eu: 44, uk: 10, us: 11, cm: 29.0} 
];