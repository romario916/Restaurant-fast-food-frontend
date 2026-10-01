export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: "Plats" | "Restaurant" | "Ambiance";
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Tendem Original",
    image:
      "plat1.webp",
    category: "Plats",
  },
  {
    id: 2,
    title: "Burger signature",
    image:
      "plat2.webp",
    category: "Plats",
  },
  {
    id: 3,
    title: "Poulet croustillant",
    image:
      "plat3.webp",
    category: "Plats",
  },
  {
    id: 4,
    title: "Frites maison",
    image:
      "plat4.jpg",
    category: "Plats",
  },
  {
    id: 5,
    title: "Ambiance TENDEM",
    image:
      "resto1.webp",
    category: "Restaurant",
  },
  {
    id: 6,
    title: "Espace restaurant",
    image:
      "resto2.webp",
    category: "Restaurant",
  },
  {
    id: 7,
    title: "Service et convivialité",
    image:
      "ambuance1.webp",
    category: "Ambiance",
  },
  {
    id: 8,
    title: "Moment gourmand",
    image:
      "ambuance2.webp",
    category: "Ambiance",
  },
];