import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://pierresquarra.de/",
  author: "Pierre Squarra",
  desc: "A computer science student.",
  title: "portfolio",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pierresquarra",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pierre-squarra-88394527b",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  }
];
