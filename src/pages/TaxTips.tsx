import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import { getBreadcrumbSchema } from "../lib/seoData";
import { ChevronRight, Sparkles, AlertCircle, TrendingDown, Landmark, GraduationCap, Briefcase, HeartPulse, HandHeart } from "lucide-react";

export default function TaxTips() {
  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Steuertipps für Privatpersonen | Renggli-Treuhand",
      "description": "5 wertvolle Steuertipps für Steuerzahler im Kanton Zürich und in Stallikon. So optimieren Sie Ihre Steuerabzüge legal."
    },
    getBreadcrumbSchema([
      { name: "Home", url: "https://renggli-treuhand.ch" },
      { name: "Steuertipps", url: "https://renggli-treuhand.ch/tax-tips" }
    ])
  ];

  const tips = [
    {
      id: "saule3a",
      title: "1. Säule 3a: Altersvorsorge maximieren und Steuern sparen",
      icon: <Landmark className="w-5 h-5 text-brand-accent" />,
      text: "Einzahlungen in die Säule 3a können Sie vollumfänglich von Ihrem steuerbaren Einkommen abziehen (bis zum gesetzlichen Maximalbetrag). Wenn Sie die Einzahlungen auf mehrere Konten verteilen, können Sie diese später gestaffelt beziehen und so auch die Progression beim Bezug reduzieren."
    },
    {
      id: "berufskosten",
      title: "2. Berufskosten & Pendlerabzug optimal deklarieren",
      icon: <Briefcase className="w-5 h-5 text-brand-accent" />,
      text: "Ziehen Sie Fahrtkosten zwischen Wohn- und Arbeitsort sowie die auswärtige Verpflegung ab. Im Kanton Zürich gilt für den Fahrkostenabzug ein Maximalbetrag von CHF 5'000.-. Falls Sie regelmässig im Home Office arbeiten, können unter Umständen zusätzliche Abzüge geltend gemacht werden."
    },
    {
      id: "weiterbildung",
      title: "3. Weiterbildungskosten steuerlich geltend machen",
      icon: <GraduationCap className="w-5 h-5 text-brand-accent" />,
      text: "Berufsorientierte Aus- und Weiterbildungskosten (inklusive Umschulungskosten) können bis zu einem Maximalbetrag von CHF 12'000.- pro Jahr im Kanton Zürich abgezogen werden. Bewahren Sie alle Rechnungen, Kursbestätigungen und Fahrtbelege sorgfältig auf."
    },
    {
      id: "krankheitskosten",
      title: "4. Krankheits- und Unfallkosten sammeln",
      icon: <HeartPulse className="w-5 h-5 text-brand-accent" />,
      text: "Selbstgetragene Krankheits-, Unfall- und Zahnarztkosten können abgezogen werden, sofern sie den Selbstbehalt von 5% des Nettoeinkommens übersteigen. Sammeln Sie daher alle Apotheken- und Zahnarztrechnungen systematisch."
    },
    {
      id: "spenden",
      title: "5. Spenden & freiwillige Zuwendungen abziehen",
      icon: <HandHeart className="w-5 h-5 text-brand-accent" />,
      text: "Spenden an steuerbefreite gemeinnützige Institutionen mit Sitz in der Schweiz können Sie vom Einkommen abziehen. Dies gilt im Kanton Zürich ab einem Mindestbetrag von insgesamt CHF 100.- pro Kalenderjahr."
    }
  ];

  return (
    <>
      <SEO
        title="Steuertipps Zürich & Stallikon | Renggli-Treuhand"
        description="Erfahren Sie, wie Sie Ihre Steuererklärung im Kanton Zürich legal optimieren. Praktische Steuertipps für Privatpersonen, Angestellte, Rentner und Familien."
        canonicalUrl="https://renggli-treuhand.ch/tax-tips"
        schema={pageSchema}
      />

      <div className="pt-24 pb-20 bg-radial from-brand-bg-warm via-brand-bg-card to-white/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="py-12 border-b border-brand-primary/10">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
              Erfolgreich Optimieren
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-primary tracking-tight mb-6">
              Steuertipps für Privatpersonen im Kanton Zürich.
            </h1>
            <p className="font-sans text-brand-primary/80 text-sm sm:text-base leading-relaxed">
              Viele Abzugsmöglichkeiten werden beim Ausfüllen der Steuererklärung schlicht vergessen. Mit diesen erprobten Empfehlungen senken Sie Ihre Steuerrechnung in der Region Stallikon und im ganzen Kanton Zürich vollkommen legal.
            </p>
          </div>

          {/* Breadcrumbs */}
          <nav className="flex py-4 text-xs font-sans text-brand-primary/60 border-b border-brand-primary/5 mb-12">
            <Link to="/" className="hover:text-brand-accent">Home</Link>
            <ChevronRight size={12} className="mx-2 self-center" />
            <span className="text-brand-primary font-bold">Steuertipps</span>
          </nav>

          {/* Content list */}
          <div className="space-y-8 text-left">
            <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-xl p-5 flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-sm text-brand-primary mb-1">
                  Wichtiger Hinweis für das Steuerjahr 2025/2026:
                </h4>
                <p className="font-sans text-xs text-brand-primary/80 leading-relaxed">
                  Stellen Sie sicher, dass alle Belege vollständig vorhanden sind. Das Steueramt im Kanton Zürich fordert unvollständige Unterlagen konsequent nach, was die Veranlagung verzögert.
                </p>
              </div>
            </div>

            {tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-brand-bg-card border border-brand-primary/10 rounded-2xl p-6 sm:p-8 hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-brand-primary/5 text-brand-accent rounded-lg">
                    {tip.icon}
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-primary">
                    {tip.title}
                  </h2>
                </div>
                <p className="font-sans text-xs sm:text-sm text-brand-primary/80 leading-relaxed">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>

          {/* Contact callout */}
          <div className="mt-16 bg-brand-bg-warm/60 border border-brand-primary/15 rounded-3xl p-8 text-center">
            <TrendingDown className="w-8 h-8 text-brand-accent mx-auto mb-3" />
            <h3 className="font-serif text-xl text-brand-primary mb-2">Möchten Sie das Maximum herausholen?</h3>
            <p className="font-sans text-xs sm:text-sm text-brand-primary/80 max-w-lg mx-auto mb-6">
              Überlassen Sie nichts dem Zufall. Ich analysiere Ihre finanzielle Lebenslage und erstelle Ihre Steuererklärung professionell und fehlerfrei.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 bg-brand-primary hover:bg-brand-accent text-white rounded-xl shadow-sm transition-all"
            >
              Unverbindliches Gespräch anfragen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
