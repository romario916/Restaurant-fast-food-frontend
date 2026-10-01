export interface TikTokVideo {
  id: number;
  image: string;
  title: string;
  description: string;
  tiktokUrl: string;
}

export const tiktokVideos: TikTokVideo[] = [
  {
    id: 1,
    image:
      "video1.webp",
    title: "Une expérience qui fait plaisir",
    description: "Découvrez l'expérience d'un client chez GAMANTA.",
    tiktokUrl: "https://www.facebook.com/reel/1776309520231588",
  },
  {
    id: 2,
    image:
      "video2.webp",
    title: "Le goût au rendez-vous",
    description: "Un moment gourmand partagé par nos clients.",
    tiktokUrl: "https://www.facebook.com/reel/1458748999367409",
  },
  {
    id: 3,
    image:
      "video3.webp",
    title: "Une visite chez GAMANTA",
    description: "Découvrez ce que nos clients pensent de GAMANTA.",
    tiktokUrl: "https://www.facebook.com/reel/3833678816768982",
  },
];