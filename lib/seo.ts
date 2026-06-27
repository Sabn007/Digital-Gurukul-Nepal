import type { Metadata } from "next";
import {
  absoluteUrl,
  ogImage,
  siteAlternateNames,
  siteContact,
  siteDescription,
  siteKeywords,
  siteLegalName,
  siteName,
  siteSocial,
  siteTagline,
  siteUrl,
  type MarketingRoute,
} from "@/lib/site";
import type { Course } from "@/types/course";

/**
 * Spread into each page's `metadata.openGraph` so the OG image, type, locale,
 * and siteName persist (Next.js replaces   does not merge   nested metadata).
 */
export const openGraphBase = {
  type: "website",
  siteName,
  locale: "en_US",
  images: [
    {
      url: ogImage.path,
      width: ogImage.width,
      height: ogImage.height,
      alt: ogImage.alt,
    },
  ],
} as const satisfies NonNullable<Metadata["openGraph"]>;

/** Spread into each page's `metadata.twitter` for the same reason. */
export const twitterBase = {
  card: "summary_large_image",
  images: [ogImage.path],
} as const satisfies NonNullable<Metadata["twitter"]>;

type PageMetadataOptions = {
  /** Short segment used in the HTML title (template adds site name). */
  title: string;
  description: string;
  path: MarketingRoute["path"] | `/${string}`;
  /** Full title for Open Graph / Twitter when you want the brand phrase upfront. */
  socialTitle?: string;
  /** Extra keywords merged with site-wide defaults. */
  keywords?: string[];
};

/** Consistent per-page metadata with canonical URL and social cards. */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  keywords,
}: PageMetadataOptions): Metadata {
  const canonical = path || "/";
  const ogTitle = socialTitle ?? `${title} | ${siteName} Nepal`;

  return {
    title,
    description,
    keywords: keywords ? [...siteKeywords, ...keywords] : siteKeywords,
    alternates: { canonical },
    openGraph: {
      ...openGraphBase,
      url: canonical,
      title: ogTitle,
      description,
    },
    twitter: {
      ...twitterBase,
      title: ogTitle,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}#organization`,
    name: siteLegalName,
    alternateName: [...siteAlternateNames],
    url: siteUrl,
    logo: absoluteUrl("/dgn.jpg"),
    image: absoluteUrl(ogImage.path),
    description: siteDescription,
    slogan: siteTagline,
    sameAs: Object.values(siteSocial),
    knowsAbout: [
      "digital education",
      "coding for kids",
      "computer science",
      "HTML",
      "CSS",
      "JavaScript",
      "Scratch",
      "Python",
      "web development",
    ],
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteContact.email,
        telephone: siteContact.phone,
        areaServed: siteContact.addressCountry,
        availableLanguage: ["en", "ne"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: siteContact.addressCountry,
    },
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    alternateName: [...siteAlternateNames],
    description: siteDescription,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}#organization` },
    about: { "@id": `${siteUrl}#organization` },
  } as const;
}

export function faqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  } as const;
}

export function breadcrumbJsonLd(
  trail: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path || "/"),
    })),
  } as const;
}

export function courseListJsonLd(courses: Course[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Digital Gurukul coding courses",
    description:
      "Digital coding courses from Digital Gurukul Nepal for grades 4–10.",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.shortDescription,
        url: absoluteUrl(`/courses#${course.id}`),
        provider: { "@id": `${siteUrl}#organization` },
        educationalLevel: course.level,
        timeRequired: `P${course.durationWeeks}W`,
        inLanguage: "en",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType: "Grades 4–10",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Blended",
          courseWorkload: `P${course.durationWeeks}W`,
          inLanguage: "en",
        },
      },
    })),
  } as const;
}
