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
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    category: "Plats",
  },
  {
    id: 2,
    title: "Burger signature",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    category: "Plats",
  },
  {
    id: 3,
    title: "Poulet croustillant",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80",
    category: "Plats",
  },
  {
    id: 4,
    title: "Frites maison",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
    category: "Plats",
  },
  {
    id: 5,
    title: "Ambiance TENDEM",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    category: "Restaurant",
  },
  {
    id: 6,
    title: "Espace restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    category: "Restaurant",
  },
  {
    id: 7,
    title: "Service et convivialité",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    category: "Ambiance",
  },
  {
    id: 8,
    title: "Moment gourmand",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    category: "Ambiance",
  },
];