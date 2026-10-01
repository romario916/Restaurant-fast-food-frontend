import { Check, Flame, ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";

import Container from "../components/Container";
import MenuItemCard from "../components/MenuItemCard";
import SectionTitle from "../components/SectionTitle";
import { menuItems } from "../data/menu";

const categories = [
  "Tous",
  "Sawaba",
  "Godrogodro",
  "Accompagnements",
  "Boissons",
  "Desserts",
  "Menus",
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredItems =
    activeCategory === "Tous"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const availableItems = filteredItems.filter(
    (item) => item.available,
  );

  return (
    <div className="bg-white">
      {/* En-tête */}
      <section className="relative isolate overflow-hidden bg-neutral-950 py-28 sm:py-36 lg:py-44">
  {/* Photo de fond */}
  <img
    src="menu.jfif"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-30 h-full w-full object-cover object-center opacity-60 sm:opacity-70"
  />

  {/* Voile sombre pour la lisibilité (plus fort à gauche, là où est le texte) */}
  <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black via-black/80 to-black/30" />
  <div className="absolute inset-0 -z-20 bg-gradient-to-t from-neutral-950 via-transparent to-black/40" />

  {/* Lueurs chaudes */}
  <div className="absolute -left-32 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/25 blur-[120px]" />
  <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-red-600/25 blur-[120px]" />

  <Container className="relative">
    <div className="max-w-3xl">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 shadow-lg shadow-orange-500/10 backdrop-blur-md">
        <Flame size={15} className="animate-pulse" />
        Le menu GAMANTA
      </div>

      <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
        Faites votre{" "}
        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          choix.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-neutral-200 sm:text-lg">
    Sawaba, Godrogodro, Accompagnements, Boissons et Desserts. Des
        recettes généreuses préparées à la minute.
      </p>

      {/* Catégories rapides */}
      <div className="mt-10 flex flex-wrap gap-3">
        {["Sawaba", "Godrogodro", "Accompagnements", "Boissons", "Desserts"].map(
          (cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-black hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              {cat}
            </a>
          )
        )}
      </div>
    </div>
  </Container>

  {/* Ligne lumineuse en bas */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
</section>

      {/* Filtres */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black transition-all duration-300 ${
                    isActive
                      ? "bg-black text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {isActive && <Check size={15} />}

                  {category}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Produits */}
      <main className="bg-gray-50 py-16 sm:py-20">
        <Container>
          {/* Formule mise en avant */}
          {activeCategory === "Tous" && (
            <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-7 shadow-xl sm:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                    <Sparkles size={14} />
                    Formule GAMANTA
                  </div>

                  <h2 className="text-3xl font-black text-white sm:text-4xl">
                    Le plaisir en version complète.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">
                    GAMANTA, accompagnement et boisson réunis dans
                    une formule généreuse pour profiter pleinement
                    de l'expérience GAMANTA.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-black px-5 py-4 text-white">
                  <ShoppingBag
                    size={22}
                    className="text-orange-500"
                  />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Disponible
                    </p>

                    <p className="font-black">
                      Sur le menu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <SectionTitle
            eyebrow={
              activeCategory === "Tous"
                ? "Toutes nos recettes"
                : activeCategory
            }
            title={
              activeCategory === "Tous"
                ? "Choisissez votre envie."
                : `Nos ${activeCategory.toLowerCase()}`
            }
            description="Chaque recette est préparée avec soin pour vous offrir un maximum de goût."
          />

          {availableItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {availableItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <p className="text-lg font-black text-black">
                Aucun produit disponible
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Cette catégorie sera bientôt enrichie.
              </p>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
};

export default Menu;