import React from "react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import { getBreadcrumbSchema } from "../lib/seoData";
import { Calendar, User, Clock, ChevronRight, ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Renggli-Treuhand Steuer-Blog",
      "description": "Hilfreiche Steuertipps, Neuigkeiten und Fristen rund um die Steuererklärung im Kanton Zürich und in Stallikon.",
      "publisher": {
        "@type": "LocalBusiness",
        "name": "Renggli-Treuhand"
      }
    },
    getBreadcrumbSchema([
      { name: "Home", url: "https://renggli-treuhand.ch" },
      { name: "Blog", url: "https://renggli-treuhand.ch/blog" }
    ])
  ];

  const posts = [
    {
      id: "steuertipps-stallikon-privatpersonen",
      title: "Steuern sparen in Stallikon: 5 einfache Abzüge für Privatpersonen",
      excerpt: "Erfahren Sie, welche Abzüge in Ihrer Steuererklärung in der Gemeinde Stallikon oft vergessen werden und wie Sie Ihre Steuerrechnung legal reduzieren können.",
      date: "01. Juni 2026",
      readTime: "4 Min. Lesezeit",
      category: "Steuertipps",
      slug: "steuern-sparen-stallikon"
    },
    {
      id: "fristerstreckung-kanton-zuerich",
      title: "Fristen für die Steuererklärung 2025/2026 im Kanton Zürich",
      excerpt: "Bis wann muss die Steuererklärung im Kanton Zürich eingereicht werden? Wie funktioniert die Fristerstreckung online und welche Gebühren fallen in Stallikon an?",
      date: "15. Mai 2026",
      readTime: "3 Min. Lesezeit",
      category: "Fristen & Recht",
      slug: "fristen-steuererklaerung-zuerich"
    },
    {
      id: "belege-steuererklaerung-schweiz-checklist",
      title: "Checkliste: Welche Unterlagen brauche ich für die Steuererklärung?",
      excerpt: "Eine vollständige Auflistung aller Dokumente, Belege und Bescheinigungen, die Sie für die effiziente Erstellung Ihrer privaten Steuererklärung bereithalten sollten.",
      date: "10. April 2026",
      readTime: "5 Min. Lesezeit",
      category: "Anleitungen",
      slug: "checkliste-unterlagen-steuererklaerung"
    }
  ];

  return (
    <>
      <SEO
        title="Steuer-Blog & Tipps | Renggli-Treuhand Stallikon"
        description="Lesen Sie aktuelle Steuertipps, News und rechtliche Änderungen für die Steuererklärung im Kanton Zürich. Erstellt von Ihrem lokalen Steuerberater."
        canonicalUrl="https://renggli-treuhand.ch/blog"
        schema={pageSchema}
      />

      <div className="pt-24 pb-20 bg-radial from-brand-bg-warm via-brand-bg-card to-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-12 border-b border-brand-primary/10">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
              Aktuelles Fachwissen
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-primary tracking-tight max-w-3xl mb-6">
              Steuer-Ratgeber & Treuhand-Tipps.
            </h1>
            <p className="font-sans text-brand-primary/80 text-lg max-w-2xl leading-relaxed">
              Verständliche Erklärungen, Fristen und praktische Tipps, um das Beste aus Ihrer Steuererklärung herauszuholen. Direkt aus der Praxis für Sie aufbereitet.
            </p>
          </div>

          {/* Breadcrumbs */}
          <nav className="flex py-4 text-xs font-sans text-brand-primary/60 border-b border-brand-primary/5 mb-12">
            <a href="/" className="hover:text-brand-accent">Home</a>
            <ChevronRight size={12} className="mx-2 self-center" />
            <span className="text-brand-primary font-bold">Blog</span>
          </nav>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-brand-bg-card border border-brand-primary/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 bg-brand-primary/5 text-brand-primary text-[10px] font-extrabold uppercase tracking-wider rounded-md border border-brand-primary/10">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-sans text-brand-primary/60">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl font-bold text-brand-primary leading-snug group-hover:text-brand-accent transition-colors mb-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-sm text-brand-primary/80 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer of the card */}
                <div className="px-6 py-4 bg-brand-primary/[0.02] border-t border-brand-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-brand-primary/60">
                    <Calendar size={12} className="text-brand-accent" />
                    <span>{post.date}</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                    <span>Mehr lesen</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter / Contact Promo */}
          <div className="mt-20 bg-brand-bg-warm/60 border border-brand-primary/15 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <BookOpen className="w-10 h-10 text-brand-accent mx-auto mb-4" />
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-primary mb-3">
              Haben Sie Fragen zu den Blog-Beiträgen?
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-primary/80 max-w-xl mx-auto mb-6">
              Gerne berate ich Sie persönlich zu den optimalen Abzugsmöglichkeiten für Ihre individuelle Lebenslage in Stallikon und dem Kanton Zürich.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 bg-brand-primary hover:bg-brand-accent text-white rounded-xl shadow-sm transition-all"
            >
              Kostenlose Erstanfrage starten
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
