import {
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/Container";

const values = [
  {
    icon: Sparkles,
    title: "Fraîcheur",
    description:
      "Des ingrédients sélectionnés avec attention pour préserver le goût et la qualité de chaque recette.",
  },
  {
    icon: Clock3,
    title: "Rapidité",
    description:
      "Un service efficace et une préparation pensée pour vous faire gagner du temps sans sacrifier le plaisir.",
  },
  {
    icon: Utensils,
    title: "Goût",
    description:
      "Des recettes généreuses, équilibrées et travaillées pour offrir une véritable expérience gourmande.",
  },
  {
    icon: HeartHandshake,
    title: "Convivialité",
    description:
      "Un univers chaleureux où l'on vient autant pour bien manger que pour partager un bon moment.",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 sm:py-32">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

        <Container className="relative">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              À propos de TENDEM
            </span>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Plus qu'un
              <br />
              fast-food.
              <br />
              <span className="text-orange-500">
                Une expérience.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              TENDEM imagine une nouvelle génération de fast-food :
              rapide, généreuse, qualitative et pensée autour du
              plaisir de bien manger.
            </p>
          </div>
        </Container>
      </section>

      {/* Notre histoire */}
      <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-orange-500/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85"
                  alt="Ambiance du restaurant TENDEM"
                  loading="lazy"
                  className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-orange-500 px-5 py-4 shadow-2xl sm:-right-5">
                <p className="text-xs font-black uppercase tracking-widest text-black">
                  TENDEM
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Simple. Généreux. Gourmand.
                </p>
              </div>
            </div>

            <div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                Notre histoire
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-black sm:text-5xl">
                Le fast-food,
                <br />
                <span className="text-orange-500">
                  autrement.
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
                <p>
                  TENDEM est né d'une idée simple : proposer une
                  cuisine rapide qui donne réellement envie de
                  revenir.
                </p>

                <p>
                  Notre concept repose sur trois choses essentielles :
                  des recettes gourmandes, une préparation soignée
                  et une expérience agréable du début à la fin.
                </p>

                <p>
                  Que vous veniez pour un déjeuner rapide, un repas
                  entre amis ou simplement une envie de burger,
                  TENDEM veut faire de chaque commande un moment
                  généreux.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-orange-500">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="font-black text-black">
                    Notre engagement
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Qualité, goût et service au cœur de chaque
                    expérience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              Nos valeurs
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
              Ce qui fait
              <span className="text-orange-500"> TENDEM.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Chaque détail compte pour créer une expérience simple,
              moderne et mémorable.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-black">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              L'expérience TENDEM
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Maintenant, place
              <br />
              <span className="text-orange-500">
                au goût.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
              Découvrez notre menu et choisissez votre prochaine
              recette préférée.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40"
            >
              Découvrir le menu
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;