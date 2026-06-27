export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitalgurukulnepal.com"
).replace(/\/+$/, "");

export const siteName = "Digital Gurukul";

export const siteLegalName = "Digital Gurukul Nepal";

export const siteTagline = "Learn Coding the Fun Way";

/** Brand strings used in titles, copy, and structured data. */
export const siteAlternateNames = [
  "Digital Gurukul",
  "Digital Gurukul Nepal",
  "digital gurukul",
  "digital gurukul nepal",
  "DG Nepal",
] as const;

export const siteDescription =
  "Digital Gurukul Nepal is a digital coding school for grades 4–10: interactive lessons, quizzes, and projects in HTML, CSS, JavaScript, Scratch, and Python. School-friendly programs across Nepal.";

export const siteKeywords = [
  "Digital Gurukul",
  "Digital Gurukul Nepal",
  "digital gurukul",
  "digital gurukul nepal",
  "digital gurukul coding",
  "digital education Nepal",
  "digital learning Nepal",
  "digital school Nepal",
  "coding for kids",
  "coding for students",
  "Nepal coding school",
  "HTML for kids",
  "CSS for kids",
  "JavaScript for students",
  "Scratch programming",
  "Python for beginners",
  "grade 5 to 10 coding",
  "computer science Nepal",
  "tech bootcamp Nepal",
];

export const siteContact = {
  email: "dgurukulnepal@gmail.com",
  phone: "+977-9812781125",
  phoneDisplay: "9812781125",
  whatsapp: "https://wa.me/9779812781125",
  addressCountry: "NP",
};

export const siteSocial = {
  facebook: "https://www.facebook.com/dgurukulnepal",
};

export const ogImage = {
  path: "/banner.jpg",
  width: 1200,
  height: 630,
  alt: "Digital Gurukul Nepal   students learning digital coding in school",
} as const;

export const defaultPageTitle =
  "Digital Gurukul Nepal   Learn Coding the Fun Way | Digital Education";

export type MarketingRoute = {
  path: "" | `/${string}`;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const marketingRoutes: MarketingRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

export function absoluteUrl(path: MarketingRoute["path"] | string = ""): string {
  if (!path) return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
