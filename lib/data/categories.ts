// lib/data/categories.ts

export interface Category {
  name: string;
  slug: string;
  label?: string;
  image: string;
  span?: string;
}

export const categories: Category[] = [
  {
    name: "HOUSEHOLDS",
    slug: "households",
    label: "Glam Your Home",
    image: "/1.jpg", 
    span: "md:col-span-1",
  },
  {
    name: "FASHIONS",
    slug: "fashions",
    label: "Trendy Closets",
    image: "/2.jpg", 
    span: "md:col-span-1",
  },
  {
    name: "APPLIANCES",
    slug: "appliances",
    label: "Modern Living",
    image: "/5.jpg", 
    span: "md:col-span-1",
  },
];

export const heroCategories = categories.slice(0, 5); 

export const discoveryChips = [
  { id: 'trending', label: '🔥 Trending', context: 'Trending Styles' }, 
  { id: 'best-sellers', label: '⭐ Best Sellers', context: 'Best Sellers' }, 
  { id: 'just-dropped', label: '✨ Just Dropped', context: 'New Arrivals' }, 
  { id: 'households', label: '🏡 Households', context: 'Home Essentials' }, 
  { id: 'fashions', label: '👗 Fashions', context: 'Trendy Outfits' }, 
];

export const filterCategories = ['All', 'Households', 'Fashions', 'Appliances']; 

export const searchSuggestions = ['Mood the Cup', 'Nunix Dispenser', 'Marble Dining Table', 'Belted Jeans Pant', 'Maxi Dress']; 

export const navSearchSuggestions = ['Households', 'Fashions', 'Appliances']; 

export const navLinksData = [
  { label: "Shop", href: "/shop", baseTextClass: "text-white", hoverTextClass: "hover:text-[#C6FF00]", underlineClass: "bg-[#C6FF00]", isLive: false }, 
  { label: "New Drops", href: "/shop?category=new-arrivals", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false }, 
  { label: "Trending", href: "/shop?category=trending", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false }, 
  { label: "Offers", href: "/shop?category=offers", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-[#FF0000]", underlineClass: "bg-[#FF0000]", isLive: true }, 
];

export const priceRanges = ['Under 2000', '2000 - 10000', 'Over 10000']; 

export const filterSizes = ['M', 'L', 'XL', '2XL'];