import { Camera, Maximize2 } from "lucide-react";
import { useState } from "react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { galleryItems } from "../data/gallery";

const categories = ["Tous", "Plats", "Restaurant", "Ambiance"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredItems =
    activeCategory === "Tous"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 sm:py-32">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

        <Container className="relative">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              <Camera size={15} />
              L'univers GAMANTA en images
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Entrez dans
              <span className="text-orange-500">
                {" "}
                notre univers.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Découvrez nos recettes, notre restaurant et
              l'ambiance qui fait l'expérience GAMANTA.
            </p>
          </div>
        </Container>
      </section>

      {/* Galerie */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle
            eyebrow="Galerie"
            title="GAMANTA en images"
            description="Des plats généreux, un espace convivial et une expérience pensée pour être partagée."
          />

          {/* Filtres */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition-all duration-300 ${
                    isActive
                      ? "bg-black text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Grille */}
          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl bg-black ${
                  index === 0
                    ? "sm:row-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Contenu */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                {/* Icône */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 size={17} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Gallery;