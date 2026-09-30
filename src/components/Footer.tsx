import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

import { contact } from "../data/contact";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="border-b border-white/10">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-block text-3xl font-black tracking-[-0.06em]"
              >
                GAMANTA<span className="text-orange-500">.</span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                Le plat du Nord qui combine rapidité, qualité et goût
                pour vous offrir une expérience gourmande différente.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-bold text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Frais. Rapide. Gourmand.
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                Navigation
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-sm text-gray-400 transition hover:text-orange-400"
                >
                  Accueil
                </Link>

                <Link
                  to="/menu"
                  className="text-sm text-gray-400 transition hover:text-orange-400"
                >
                  Menu
                </Link>

                <Link
                  to="/galerie"
                  className="text-sm text-gray-400 transition hover:text-orange-400"
                >
                  Galerie
                </Link>

                <Link
                  to="/a-propos"
                  className="text-sm text-gray-400 transition hover:text-orange-400"
                >
                  À propos
                </Link>

                <Link
                  to="/contact"
                  className="text-sm text-gray-400 transition hover:text-orange-400"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                Contact
              </h3>

              <div className="mt-5 space-y-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-orange-400"
                >
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <span>{contact.phone}</span>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-orange-400"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <span className="break-all">
                    {contact.email}
                  </span>
                </a>

                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm leading-6 text-gray-400 transition hover:text-orange-400"
                >
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <span>{contact.address}</span>
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                Horaires
              </h3>

              <div className="mt-5 space-y-3">
                {contact.openingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-gray-400">
                      {schedule.day}
                    </span>

                    <span className="font-semibold text-white">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom footer */}
      <Container className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-gray-500">
          © {new Date().getFullYear()} {contact.restaurantName}.
          Tous droits réservés.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={contact.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
         <span className="text-sm font-black">IG</span>
          </a>

          <a
            href={contact.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <span className="text-sm font-black">f</span>
          </a>

          <a
            href={contact.socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <Send size={18} />
          </a>

          <div className="ml-2 hidden items-center gap-2 text-xs text-gray-500 sm:flex">
            <Clock3 size={14} />
            <span>Service rapide</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;