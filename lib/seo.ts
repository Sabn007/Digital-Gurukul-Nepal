import type { Metadata } from "next";
import {
  absoluteUrl,
  ogImage,
  siteContact,
  siteDescription,
  siteLegalName,
  siteName,
  siteSocial,
  siteUrl,
} from "@/lib/site";
import type { Course } from "@/types/course";

/**
 * Spread into each page's `metadata.openGraph` so the OG image, type, locale,
 * and siteName persist (Next.js replaces — does not merge — nested metadata).
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

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}#organization`,
    name: siteLegalName,
    alternateName: siteName,
    url: siteUrl,
    logo: absoluteUrl("/favicon.png"),
    image: absoluteUrl(ogImage.path),
    description: siteDescription,
    sameAs: Object.values(siteSocial),
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
    description: siteDescription,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}#organization` },
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
          audienceType: "Grades 5–10",
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
