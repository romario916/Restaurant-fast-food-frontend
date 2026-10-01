import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Flame,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import MenuItemCard from "../components/MenuItemCard";
import SectionTitle from "../components/SectionTitle";
import { menuItems } from "../data/menu";
import { galleryItems } from "../data/gallery";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";
import PromoBanner from "../components/PromoBanner";
import { openWhatsApp } from "../utils/whatsapp";
import { tiktokVideos } from "../data/tiktokVideos";
const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        {/* Background image */}
        <img
          src="aceill.webp"
          alt="Burger TENDEM"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Decorative orange glow */}
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400 backdrop-blur-sm">
              <Flame size={15} />
              GAstronomie MAlagasy Ninay TAvaratra
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              LE PLAT
              <br />
              DU
              <span className="text-orange-500"> NORD.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              Bienvenue sur site  officielle de Gamanta ! Ici, on valorise la cuisine malagasy du Nord avec amour et passion. Suivez-nous pour découvrir nos plats du jour🙏🏻👌🏻🥇🥂
              <span className="font-bold text-white"> GAMANTA</span>.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40"
              >
                Voir le menu

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
  type="button"
  onClick={() => openWhatsApp()}
  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
>
  Commander
</button>
            </div>

            {/* Quick information */}
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Préparé
                  </p>
                  <p className="text-sm font-black text-white">
                    À la minute
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  <Truck size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Service
                  </p>
                  <p className="text-sm font-black text-white">
                    Rapide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Restaurant
                  </p>
                  <p className="text-sm font-black text-white">
                    GAMANTA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Découvrir
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </section>


      {/* Réassurance */}
      <section className="relative border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          <div className="flex items-center gap-4 py-7 md:px-8 md:py-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <Truck size={23} />
            </div>

            <div>
              <h3 className="font-black text-black">
                Service rapide
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Votre commande préparée sans attendre.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-7 md:px-8 md:py-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <CheckCircle2 size={23} />
            </div>

            <div>
              <h3 className="font-black text-black">
                Ingrédients sélectionnés
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Des produits choisis avec soin.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-7 md:px-8 md:py-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <ShieldCheck size={23} />
            </div>

            <div>
              <h3 className="font-black text-black">
                Préparé à la minute
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Une préparation fraîche à chaque commande.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Best-sellers */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Les incontournables"
            title="Nos best-sellers"
            description="Les recettes préférées de nos clients, préparées à la minute avec des ingrédients soigneusement sélectionnés."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menuItems
              .filter((item) => item.available)
              .filter(
                (item) =>
                  item.badge === "Populaire" ||
                  item.badge === "Nouveau",
              )
              .slice(0, 4)
              .map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 text-sm font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Découvrir tout le menu

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Container>
      </section>

            {/* Expérience TENDEM */}
      <section className="overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="logo.webp"
                  alt="Burger premium TENDEM"
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-orange-500 px-5 py-4 shadow-2xl sm:-right-5">
                <p className="text-xs font-black uppercase tracking-widest text-black">
                  GAMANTA
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Le goût avant tout.
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                L'expérience TENDEM
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Simple dans
                <br />
                l'idée.
                <br />
                <span className="text-orange-500">
                  Fort en goût.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                Chez GAMANTA, nous croyons qu'un fast-food peut être
                rapide sans faire de compromis sur la qualité.
                Chaque recette est pensée pour être généreuse,
                savoureuse et préparée au moment où vous la
                commandez.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="font-black text-white">
                    Fraîcheur
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Des ingrédients sélectionnés avec attention.
                  </p>
                </div>

                <div className="border-l-2 border-red-600 pl-4">
                  <h3 className="font-black text-white">
                    Générosité
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Des portions pensées pour vraiment faire
                    plaisir.
                  </p>
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="font-black text-white">
                    Rapidité
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Une préparation efficace, sans sacrifier le
                    goût.
                  </p>
                </div>

                <div className="border-l-2 border-red-600 pl-4">
                  <h3 className="font-black text-white">
                    Convivialité
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Un lieu pensé pour partager un bon moment.
                  </p>
                </div>
              </div>

              <Link
                to="/a-propos"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
              >
                Découvrir notre histoire

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

            {/* Galerie */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="L'univers TENDEM"
            title="Ça se mange aussi avec les yeux."
            description="Découvrez nos plats, notre ambiance et les moments qui font l'expérience TENDEM."
          />

          <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
            {/* Grande image */}
            {galleryItems[0] && (
              <div className="group relative overflow-hidden rounded-3xl md:col-span-7 md:row-span-2">
                <img
                  src={galleryItems[0].image}
                  alt={galleryItems[0].title}
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full md:min-h-[620px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                    {galleryItems[0].category}
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Le goût au premier regard.
                  </h3>
                </div>
              </div>
            )}

            {/* Image 2 */}
            {galleryItems[1] && (
              <div className="group relative overflow-hidden rounded-3xl md:col-span-5">
                <img
                  src={galleryItems[1].image}
                  alt={galleryItems[1].title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </div>
            )}

            {/* Image 3 */}
            {galleryItems[2] && (
              <div className="group relative overflow-hidden rounded-3xl md:col-span-5">
                <img
                  src={galleryItems[2].image}
                  alt={galleryItems[2].title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            )}
          </div>

          {/* Bouton */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/galerie"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 text-sm font-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Voir toute la galerie

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Container>
      </section>

            {/* Témoignages */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Ils parlent de nous"
            title="Ce que nos clients pensent de TENDEM"
            description="Une bonne expérience commence par un bon repas. Découvrez quelques retours de nos clients."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </section>


      {/* Vidéos clients TikTok */}
<section className="bg-white py-20 sm:py-24 lg:py-28">
  <Container>
    <SectionTitle
      eyebrow="Ils parlent de nous"
      title="Nos clients vivent l'expérience GAMANTA"
      description="Découvrez les moments partagés par nos clients et retrouvez leurs vidéos directement sur Facebook."
    />

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tiktokVideos.map((video) => (
        <a
          key={video.id}
          href={video.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative aspect-[9/11] overflow-hidden bg-gray-100">
            <img
              src={video.image}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* TikTok badge */}
            <div className="absolute left-4 top-4 rounded-full bg-black/90 px-3 py-2 text-xs font-black text-white shadow-lg backdrop-blur-sm">
            Facebook
            </div>

            {/* Play button */}
            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-black shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.29-6.86a1 1 0 0 0 0-1.66L9.53 4.29A1 1 0 0 0 8 5.14Z" />
              </svg>
            </div>

            {/* Texte sur l'image */}
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-xl font-black text-white">
                {video.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                {video.description}
              </p>
            </div>
          </div>

          {/* Footer carte */}
          <div className="flex items-center justify-between px-5 py-4">
            <span className="text-sm font-black text-black">
              Voir la vidéo
            </span>

            <span className="text-sm font-bold text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
              Sur Facebook →
            </span>
          </div>
        </a>
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <a
        href="https://www.facebook.com/gboeana?locale=fr_FR"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
      >
        Découvrir GAMANTA sur Facebook
      </a>
    </div>
  </Container>
</section>
      
            {/* Promotion */}
      <PromoBanner
        title="Une envie de GAMANTA ?"
        description="Découvrez nos recettes incontournables et profitez d'une expérience généreuse, rapide et pleine de goût."
        buttonText="Voir le menu"
        buttonLink="/menu"
      />

      {/* CTA final */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />

        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              L'aventure GAMANTA commence ici
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Prêt à vous
              <br />
              <span className="text-orange-500">
                régaler ?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Choisissez vos recettes préférées et passez votre
              commande directement auprès de GAMANTA.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40"
              >
                Commander maintenant

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-black text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;