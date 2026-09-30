export type MenuCategory =
  | "Sawaba"
  | "Godrogodro"
  | "Accompagnements"
  | "Boissons"
  | "Desserts"
  | "Menus";

export type MenuBadge =
  | "Populaire"
  | "Nouveau"
  | "Épicé"
  | "Végétarien";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  badge?: MenuBadge;
  available: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Sawaba au Banane",
    description:
      "Pain brioché, steak haché, cheddar, salade, tomate et sauce maison.",
    price: 18000,
    category: "Sawaba",
    image:
      "sawababanane.webp",
    badge: "Populaire",
    available: true,
  },
  {
    id: 2,
    name: "Sawaba Banane au Chocola",
    description:
      "Double steak, double cheddar, oignons caramélisés et sauce signature.",
    price: 24000,
    category: "Sawaba",
    image:
      "sawababananecho.webp",
    badge: "Épicé",
    available: true,
  },
  {
    id: 3,
    name: "Sawaba Friapain",
    description:
      "Steak haché, cheddar, jalapeños, oignons croustillants et sauce épicée.",
    price: 21000,
    category: "Sawaba",
    image:
      "sawabafri.webp",
    badge: "Épicé",
    available: true,
  },
  {
    id: 4,
    name: "Sawaba Majola",
    description:
      "Poulet croustillant, salade fraîche, cheddar et sauce crémeuse.",
    price: 19000,
    category: "Sawaba",
    image:
      "sawabama.webp",
    badge: "Nouveau",
    available: true,
  },

  {
    id: 5,
    name: "Godrogodro Special GAMANTA",
    description:
      "Poulet croustillant, salade, tomate, fromage et sauce Tendem.",
    price: 60000,
    category: "Godrogodro",
    image:
      "godro1.webp",
    available: true,
  },
  {
    id: 6,
    name: "Godrogodro au Chocolat",
    description:
      "Steak grillé, fromage fondant, oignons et sauce maison dans un pain toasté.",
    price: 40000,
    category: "Godrogodro",
    image:
      "godro2.webp",
    available: true,
  },

  {
    id: 7,
    name: "Pakopako Matavy",
    description: "Pommes de terre croustillantes préparées à la minute.",
    price: 1000,
    category: "Accompagnements",
    image:
      "pakopako.webp",
    available: true,
  },
  {
    id: 8,
    name: "Prochette Viande",
    description:
      "Frites croustillantes, cheddar fondu, viande hachée et sauce signature.",
    price: 12000,
    category: "Accompagnements",
    image:
      "brochete.webp",
    badge: "Populaire",
    available: true,
  },

  {
    id: 9,
    name: "Jus Citron",
    description: "Boisson fraîche 33 cl.",
    price: 5000,
    category: "Boissons",
    image:
      "citron.webp",
    available: true,
  },
  {
    id: 10,
    name: "Jus Ananas",
    description: "Milkshake onctueux à la vanille.",
    price: 10000,
    category: "Boissons",
    image:
      "ananas.webp",
    badge: "Nouveau",
    available: true,
  },

  {
    id: 11,
    name: "Tendem Cookie",
    description: "Cookie généreux aux pépites de chocolat.",
    price: 7000,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: 12,
    name: "Brownie Chocolat",
    description: "Brownie fondant au chocolat intense.",
    price: 8000,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    available: true,
  },

  {
    id: 13,
    name: "Ravitoto au Chrevette au Coco",
    description:
      "Tendem Original + frites maison + boisson fraîche.",
    price: 40000,
    category: "Menus",
    image:
      "ravitoto.webp",
    badge: "Populaire",
    available: true,
  },
  {
    id: 14,
    name: "Poulet au Coco",
    description:
      "Double Tendem + Loaded Fries + boisson fraîche.",
    price: 34000,
    category: "Menus",
    image:
      "poulet.webp",
    badge: "Nouveau",
    available: true,
  },
];

export const menuCategories: MenuCategory[] = [
  "Menus",
  "Sawaba",
  "Godrogodro",
  "Accompagnements",
  "Boissons",
  "Desserts",
];