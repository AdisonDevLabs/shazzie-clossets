// lib/data/testimonials.ts

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
  profile: string;
  date?: string;
  purchased?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mercy W. – Nairobi",
    location: "Nairobi",
    rating: 5,
    text: "The Mood the Cup thermal cups are top quality! I really appreciated the scheduled Monday delivery layout. Highly recommend Shazzie Closets!", 
    product: "Mood the Cup (900ml) Thermal Cup", 
    profile: "https://picsum.photos/seed/mercy/150/150", 
  },
  {
    id: 2,
    name: "Joy K. – Nakuru",
    location: "Nakuru",
    rating: 5,
    text: "Got the Nunix dispenser set up and it works perfectly. Super easy ordering process via WhatsApp and fast confirmation from Mary.", 
    product: "Nunix Bottom Loading Dispenser", 
    profile: "https://picsum.photos/seed/joy/150/150", 
  },
  {
    id: 3,
    name: "David O. – Kisumu",
    location: "Kisumu",
    rating: 5,
    text: "The marble dining table build quality is absolutely premium. Shazzie Closets is definitely my go-to plug for transforming my home space.", 
    product: "Six Seater Marble Dining Table Set", 
    profile: "https://picsum.photos/seed/david/150/150", 
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Faith N.",
    location: "Nairobi",
    rating: 5,
    date: "2 days ago", 
    text: "The Belted Jeans fit beautifully. Customer coordination on WhatsApp is super fast and my package was dropped off safely on Wednesday.", 
    purchased: true, 
    product: "Belted Jeans Pant", 
    profile: "https://picsum.photos/seed/faith/150/150", 
  },
  {
    id: 2,
    name: "Grace M.",
    location: "Mombasa",
    rating: 5,
    date: "1 week ago", 
    text: "Trusted shop for sure. These contrast trim corset tops are so stylish, and the payment layout via Pochi la Biashara was secure and simple.", 
    purchased: true, 
    product: "Contrast Trim Corset Top", 
    profile: "https://picsum.photos/seed/grace/150/150", 
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100", 
  "https://picsum.photos/seed/user2/100/100", 
  "https://picsum.photos/seed/user3/100/100" 
];

export const reviewStats = {
  averageRating: "4.9/5 Average Rating", 
  totalCustomers: "3,200+ Happy Customers" 
};