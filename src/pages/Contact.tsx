
import {
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { contact } from "../data/contact";
import {
  getContactFormMessage,
  openWhatsApp,
} from "../utils/whatsapp";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = getContactFormMessage(
      name,
      phone,
      message,
    );

    openWhatsApp(whatsappMessage);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 sm:py-32">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              Contact
            </span>

            <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Parlons
              <span className="text-orange-500"> TENDEM.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Une question, une commande ou simplement envie de
              nous contacter ? Notre équipe est à votre écoute.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact + formulaire */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Informations */}
            <div className="lg:col-span-2">
              <SectionTitle
                eyebrow="Nos coordonnées"
                title="Retrouvez-nous"
                description="Toutes les informations pour nous contacter ou venir découvrir TENDEM."
              />

              <div className="mt-8 space-y-4">
                {/* Téléphone */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-orange-500">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                      Téléphone
                    </p>

                    <p className="mt-1 font-black text-black">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-orange-500">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 break-all font-black text-black">
                      {contact.email}
                    </p>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-orange-500">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                      Adresse
                    </p>

                    <p className="mt-1 font-black text-black">
                      {contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-6 rounded-3xl bg-black p-6 text-white">
                <div className="flex items-center gap-3">
                  <Clock3
                    size={21}
                    className="text-orange-500"
                  />

                  <h3 className="font-black">
                    Horaires d'ouverture
                  </h3>
                </div>

                <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                  {contact.openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-gray-400">
                        {item.day}
                      </span>

                      <span className="font-bold text-white">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                  Suivez TENDEM
                </p>

                <div className="mt-3 flex gap-3">
                  <a
                    href={contact.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-xs font-black text-black transition hover:bg-orange-500 hover:text-white"
                  >
                    IG
                  </a>

                  <a
                    href={contact.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-sm font-black text-black transition hover:bg-orange-500 hover:text-white"
                  >
                    f
                  </a>

                  <a
                    href={contact.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-xs font-black text-black transition hover:bg-orange-500 hover:text-white"
                  >
                    TT
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
                    <MessageCircle size={22} />
                  </div>

                  <h2 className="mt-5 text-3xl font-black text-black">
                    Écrivez-nous
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    Remplissez le formulaire. Votre message sera
                    préparé automatiquement dans WhatsApp.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-black text-black"
                    >
                      Nom
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-black text-black"
                    >
                      Téléphone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value)
                      }
                      required
                      placeholder="+261 ..."
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-black text-black"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      value={message}
                      onChange={(event) =>
                        setMessage(event.target.value)
                      }
                      required
                      rows={6}
                      placeholder="Votre message..."
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>

                  {/* WhatsApp */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40"
                  >
                    <MessageCircle size={18} />
                    Envoyer via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Localisation"
            title="Venez nous voir"
            description="Retrouvez facilement TENDEM et préparez votre itinéraire."
          />

          <div className="mt-10">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              {/* Carte */}
              <iframe
                src={contact.googleMapsUrl}
                title="Localisation de TENDEM"
                className="h-[400px] w-full border-0 sm:h-[500px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Badge professionnel */}
              <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/90 px-4 py-3 text-white shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-black tracking-wide">
                      TENDEM
                    </p>

                    <p className="text-[11px] text-gray-400">
                      Restaurant
                    </p>
                  </div>
                </div>

                <div className="mt-3 border-t border-white/10 pt-2">
                  <p className="text-xs text-gray-300">
                    Antananarivo, Madagascar
                  </p>
                </div>
              </div>

              {/* Bouton Google Maps */}
              <a
                href="https://www.google.com/maps/place/TANDEM+votre+DEMENAGEUR/@-18.8239587,47.4442664,2079m/data=!3m1!1e3!4m6!3m5!1s0x21fa7f66316c7329:0x1617c1e6f4a25df2!8m2!3d-18.8221417!4d47.4446944!16s%2Fg%2F11fk3_rkjt"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black text-black shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
              >
                <MapPin size={15} />
                Ouvrir dans Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

