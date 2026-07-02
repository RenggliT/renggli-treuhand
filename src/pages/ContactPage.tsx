import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getBreadcrumbSchema, BUSINESS_SCHEMA } from "../lib/seoData";
import ContactForm from "../components/ContactForm";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  const pageSchema = [
    BUSINESS_SCHEMA,
    getBreadcrumbSchema([
      { name: "Home", url: "https://renggli-treuhand.ch" },
      { name: "Kontakt", url: "https://renggli-treuhand.ch/contact" }
    ])
  ];

  return (
    <>
      <SEO
        title="Kontakt & Anfahrt | Renggli-Treuhand Stallikon"
        description="Nehmen Sie direkt Kontakt mit Christoph Renggli von Renggli-Treuhand auf. Adresse: Püntenstrasse 26, 8143 Stallikon. Telefon: +41 43 511 78 56."
        canonicalUrl="https://renggli-treuhand.ch/contact"
        schema={pageSchema}
      />

      <div className="pt-24 bg-radial from-brand-bg-warm via-brand-bg-card to-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-8 border-b border-brand-primary/10 text-left">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Persönlicher Kontakt
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-primary tracking-tight">
              Kontaktieren Sie Renggli-Treuhand
            </h1>
          </div>

          {/* Breadcrumbs */}
          <nav className="flex py-4 text-xs font-sans text-brand-primary/60 border-b border-brand-primary/5">
            <Link to="/" className="hover:text-brand-accent">Home</Link>
            <ChevronRight size={12} className="mx-2 self-center" />
            <span className="text-brand-primary font-bold">Kontakt</span>
          </nav>
        </div>
      </div>

      {/* Render the contact form section with direct address, email, phone, and Google Map */}
      <ContactForm />
    </>
  );
}
