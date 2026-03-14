export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  description: string;
  unit: string;
}

export const CATEGORIES = [
  { id: 'all', name: 'All', icon: 'Store' },
  { id: 'fruits', name: 'Fruits', icon: 'Apple' },
  { id: 'vegetables', name: 'Vegetables', icon: 'Leaf' },
  { id: 'dairy', name: 'Dairy', icon: 'Milk' },
  { id: 'bakery', name: 'Bakery', icon: 'Croissant' },
  { id: 'snacks', name: 'Snacks', icon: 'Cookie' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Red Apples",
    price: 180,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    description: "Crisp and sweet organic red apples, perfect for snacking or baking. Grown without synthetic pesticides.",
    unit: "1 kg"
  },
  {
    id: 2,
    name: "Fresh Broccoli",
    price: 95,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    description: "Farm-fresh green broccoli crowns. Rich in vitamins and fiber, ideal for steaming or stir-frying.",
    unit: "500g"
  },
  {
    id: 4,
    name: "Artisan Sourdough",
    price: 120,
    category: "bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    description: "Hand-crafted sourdough bread with a crispy crust and soft, airy interior. Baked daily.",
    unit: "Loaf"
  },
  {
    id: 5,
    name: "Mixed Berry Granola",
    price: 450,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    description: "Crunchy oat granola mixed with dried strawberries, blueberries, and raspberries.",
    unit: "400g"
  },
  {
    id: 6,
    name: "Baby Spinach",
    price: 80,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800",
    rating: 4.4,
    description: "Tender baby spinach leaves, pre-washed and ready for salads or smoothies.",
    unit: "250g"
  },
  {
    id: 7,
    name: "Greek Yogurt",
    price: 150,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    description: "Thick and creamy plain Greek yogurt. High in protein and great with honey.",
    unit: "500g"
  },
  {
    id: 9,
    name: "Premium Basmati Rice",
    price: 120,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    description: "Long-grain aromatic Basmati rice, aged to perfection for the best biryani and pulao experience.",
    unit: "1 kg"
  },
  {
    id: 10,
    name: "Masala Chai Blend",
    price: 250,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    description: "Authentic Indian tea blend with cardamom, ginger, and cloves. Perfect for your morning refresh.",
    unit: "250g"
  },
  {
    id: 11,
    name: "Fresh Alphonso Mangoes",
    price: 800,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    description: "The king of mangoes. Sweet, pulpy, and incredibly fragrant Alphonso mangoes from Ratnagiri.",
    unit: "Dozen"
  }
];
