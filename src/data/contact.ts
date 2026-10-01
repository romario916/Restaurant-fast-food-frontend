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

  whatsappNumber: "261324160418",

  phone: "+261 34 79 238 08",

  email: "gamanta271@gmail.com",

  address: "Antananarivo, Madagascar",

  defaultMessage:
    "Bonjour GAMANTA, je souhaite avoir des informations concernant votre restaurant.",

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
    facebook: "https://www.facebook.com/gboeana?locale=fr_FR",
    tiktok: "https://www.tiktok.com/@gamanta123?is_from_webapp=1&sender_device=pc",
  } satisfies SocialLinks,

  googleMapsUrl:
    "https://maps.app.goo.gl/rauH1bDr7Y7SQbeh8",
};