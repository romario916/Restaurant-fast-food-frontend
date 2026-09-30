import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "./Container";

interface PromoBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const PromoBanner = ({
  title,
  description,
  buttonText = "Voir le menu",
  buttonLink = "/menu",
}: PromoBannerProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 py-16 sm:py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-white">
              <Flame size={15} />
              Offre du moment
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              {description}
            </p>
          </div>

          <Link
            to={buttonLink}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            {buttonText}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PromoBanner;