import { Utensils, Beer, PersonStanding, Baby } from 'lucide-react';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Cheese Curds", price: "$9.00", description: "Golden fried authentic cheese curds", popular: true },
      { name: "Chicken Wings (12pc)", price: "$15.00", description: "Crispy wings tossed in your choice of sauce" },
      { name: "Onion Rings", price: "$7.50", description: "Thick cut and battered" },
    ]
  },
  {
    title: "Burgers",
    items: [
      { name: "Oldies Burger", price: "$14.25", description: "Double cheeseburger with signature Oldies sauce", popular: true },
      { name: "Wisconsin Burger", price: "$12.50", description: "Topped with melting Cheese Curds" },
      { name: "Firehouse Burger", price: "$12.50", description: "Jalapeno & Candied Bacon for a sweet heat kick" },
    ]
  },
  {
    title: "Entrees & Classics",
    items: [
      { name: "Hot Beef Combo", price: "$12.50", description: "Tender roast beef served open-faced with mashed potatoes and rich gravy", popular: true },
      { name: "Country Fried Steak", price: "$12.50", description: "Breaded steak smothered in country gravy" },
    ]
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Reuben", price: "$12.00", description: "Corned beef, sauerkraut, Swiss cheese on rye" },
      { name: "French Dip", price: "$12.50", description: "Roast beef on a hoagie with au jus dipping sauce" },
      { name: "Philly/Wrap Options", price: "Ask Server", description: "Available upon request" },
    ]
  },
  {
    title: "Breakfast",
    items: [
      { name: "Sunrise Breakfast", price: "$6.50", description: "The classic start to your day" },
      { name: "Breakfast Burrito", price: "$7.50", description: "Eggs, cheese, and meat wrapped in a warm tortilla" },
    ]
  },
];

export const FEATURES = [
  { icon: PersonStanding, text: "Wheelchair Accessible" },
  { icon: Utensils, text: "Fast Service" },
  { icon: Beer, text: "Great Beer Selection" },
  { icon: Baby, text: "Good for Kids" },
];