// SEO & Local Schema definitions for Renggli-Treuhand
// Primary Location: Stallikon, Zürich, Switzerland

export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://renggli-treuhand.ch/#organization",
      "name": "Renggli-Treuhand",
      "url": "https://renggli-treuhand.ch",
      "logo": "https://renggli-treuhand.ch/images/logo.png",
      "image": "https://renggli-treuhand.ch/images/logo.png",
      "description": "Professionelle Steuererklärung und Steuerberatung für Privatpersonen in Stallikon, Zürich und dem Knonaueramt. Kompetent, regional und transparent.",
      "telephone": "+41435117856",
      "email": "info@renggli-treuhand.ch",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Püntenstrasse 26",
        "addressLocality": "Stallikon",
        "addressRegion": "Zürich",
        "postalCode": "8143",
        "addressCountry": "CH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.32742,
        "longitude": 8.48972
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+41435117856",
        "contactType": "customer service",
        "email": "info@renggli-treuhand.ch",
        "availableLanguage": ["German", "Swiss-German"]
      },
      "founder": {
        "@type": "Person",
        "name": "Christoph Renggli",
        "jobTitle": "Dipl. Betriebswirtschafter HF & Dipl. Steuerberater NDS",
        "knowsAbout": ["Taxation", "Accounting", "Financial Planning", "Swiss Tax Law"]
      },
      "priceRange": "$$",
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Stallikon"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Zürich"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Affoltern am Albis"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Bonstetten"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Wettswil"
        }
      ]
    }
  ]
};

// Generates BreadcrumbList schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
