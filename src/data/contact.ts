export interface OpeningHour {
  day: string;
  hours: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  tiktok: string;
}

export const contact = {
  restaurantName: "GAMANTA",

  whatsappNumber: "261378911098",

  phone: "+261 32 33 621 72",

  email: "romarheny08@gmail.com",

  address: "Antananarivo, Madagascar",

  defaultMessage:
    "Bonjour TENDEM, je souhaite avoir des informations concernant votre restaurant.",

  openingHours: [
    { day: "Lundi", hours: "10:00 - 22:00" },
    { day: "Mardi", hours: "10:00 - 22:00" },
    { day: "Mercredi", hours: "10:00 - 22:00" },
    { day: "Jeudi", hours: "10:00 - 22:00" },
    { day: "Vendredi", hours: "10:00 - 23:00" },
    { day: "Samedi", hours: "10:00 - 23:00" },
    { day: "Dimanche", hours: "11:00 - 22:00" },
  ] satisfies OpeningHour[],

  socialLinks: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  } satisfies SocialLinks,

  googleMapsUrl:
    "https://maps.app.goo.gl/QvDWdBDre9sd4FSK9",
};