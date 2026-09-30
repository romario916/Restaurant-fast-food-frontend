export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Romario R.",
    text: "Très bon Godrogodro, produits frais et service rapide. Une excellente adresse pour manger rapidement sans sacrifier la qualité.",
    rating: 5,
    image:
      "romario.webp",
  },
  {
    id: 2,
    name: "Arlhane S.",
    text: "Le Sawaba signature est vraiment généreux. Les frites sont croustillantes et l'accueil est très agréable.",
    rating: 5,
    image:
      "arlhane.webp",
  },
  {
    id: 3,
    name: "Carmella A.",
    text: "J'ai beaucoup aimé l'ambiance et la qualité des plats. La commande était prête rapidement.",
    rating: 5,
    image:
      "carmela.webp",
  },
  {
    id: 4,
    name: "Eugelie G.",
    text: "Une belle découverte. Les portions sont généreuses et les produits sont bien préparés.",
    rating: 4,
    image:
      "eugelie.webp",
  },
];