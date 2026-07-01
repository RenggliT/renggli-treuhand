import React, { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "/images/logo.png",
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to get or create a meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to remove a meta tag if not needed
    const removeMetaTag = (attrName: string, attrValue: string) => {
      const element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.remove();
      }
    };

    // 2. Set Meta Description
    setMetaTag("name", "description", description);

    // 3. Set Robots
    setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // 4. Set Open Graph (OG) Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);
    const currentUrl = canonicalUrl || window.location.href;
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:site_name", "Renggli-Treuhand");
    setMetaTag("property", "og:locale", "de_CH");

    // 5. Set Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 6. Set Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // 7. Inject Structured Data (JSON-LD)
    const scriptId = "seo-json-ld-structured-data";
    let jsonLdScript = document.getElementById(scriptId);
    if (jsonLdScript) {
      jsonLdScript.remove();
    }

    if (schema) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.id = scriptId;
      jsonLdScript.setAttribute("type", "application/ld+json");
      jsonLdScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(jsonLdScript);
    }

    // Cleanup on unmount or prop change
    return () => {
      // We don't necessarily want to strip everything on fast navigations, but we clear the JSON-LD script
      const scriptToClean = document.getElementById(scriptId);
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null; // This component handles side effects inside head and does not render anything to DOM
}
