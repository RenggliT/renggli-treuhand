import React from "react";
import { motion } from "motion/react";
import { FileText, CheckCircle2, ShieldCheck, HelpCircle, Users, Briefcase, Landmark, BookOpen } from "lucide-react";

export default function Features() {
  const privatePoints = [
    {
      title: "Erstellung der Steuererklärung",
      desc: "Komplette Erfassung aller Einkünfte, Abzüge und Vermögenswerte nach kantonalen Richtlinien.",
    },
    {
      title: "Konsequente Steueroptimierung",
      desc: "Prüfung sämtlicher gesetzlicher Abzugsmöglichkeiten (Vorsorge Säule 3a, Berufsauslagen, Krankheitskosten etc.).",
    },
    {
      title: "Prüfung der Veranlagung",
      desc: "Vergleich des definitiven Steuerentscheids mit unserer Berechnung zur Absicherung korrekter Steuerbeträge.",
    },
    {
      title: "Persönliche Beratung & Fragen",
      desc: "Ich nehme mir Zeit für Sie. Komplexe Steuerfragen kläre ich verständlich und auf Augenhöhe.",
    }
  ];

  const partnersPoints = [
    "Buchhaltung & Jahresabschlüsse",
    "Lohnadministration",
    "Firmengründungen (GmbH / AG)",
    "KMU-Finanzberatung"
  ];

  return (
    <section id="leistungen" className="py-20 bg-white border-t border-b border-brand-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
            Mein Leistungsangebot
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary tracking-tight leading-snug">
            Fachkundig ausgefüllt. <br />
            <span className="italic text-brand-accent font-medium">Maximale Abzüge gesichert.</span>
          </h2>
          <p className="font-sans text-brand-primary/80 mt-4 leading-relaxed text-base md:text-lg">
            Ich sorge dafür, dass Ihre Steuererklärung fehlerfrei, fristgerecht und optimal ausgefüllt wird. Keine bösen Überraschungen – dafür mehr Freizeit für Sie.
          </p>
        </div>

        {/* Asymmetrical Grid: 70% / 30% style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Block: Private Tax Returns (Takes 70% equivalent or 8 columns) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-brand-bg-warm/60 via-white to-brand-bg-warm/30 border border-brand-primary/10 p-6 sm:p-10 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between">
            
            {/* Background design glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/[0.02] rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6 text-left">
                <div className="p-3 bg-brand-primary text-white rounded-xl shadow-sm">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-brand-primary">
                    Steuererklärung für Privatpersonen
                  </h3>
                  <span className="text-xs text-brand-accent font-semibold tracking-wide uppercase">
                    Mein Hauptfokus
                  </span>
                </div>
              </div>

              <p className="font-sans text-brand-primary/80 text-sm sm:text-base text-left leading-relaxed mb-8 max-w-xl">
                Ob Angestellte, Familien, Pensionierte, Berufstätige oder junge Erwachsene: Jede Lebensphase hat ihre eigenen Steuerregeln. Ich kenne die kantonalen Besonderheiten im Kanton Zürich und sorge für die bestmögliche Entlastung.
              </p>

              {/* Sub features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {privatePoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 text-brand-accent">
                      <CheckCircle2 size={16} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-brand-primary mb-1">
                        {pt.title}
                      </h4>
                      <p className="font-sans text-xs text-brand-primary/70 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Guarantee label */}
            <div className="mt-10 pt-6 border-t border-brand-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-2 text-xs text-brand-primary/80 font-medium">
                <ShieldCheck size={16} className="text-brand-accent" />
                Vollständige Diskretion nach Schweizer Treuhand-Standard
              </div>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-sans text-xs font-bold text-brand-primary hover:text-brand-accent hover:underline inline-flex items-center gap-1"
              >
                Jetzt unkompliziert anfragen →
              </a>
            </div>
          </div>

          {/* Secondary Block: Other Services (Takes 30% equivalent or 4 columns) */}
          <div className="lg:col-span-4 bg-brand-bg-card border border-brand-primary/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 bg-brand-bg-warm text-brand-primary rounded-lg">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-brand-primary">
                    Weitere Dienstleistungen
                  </h3>
                  <span className="text-[10px] text-brand-accent uppercase tracking-widest block font-bold">
                    Für KMU & Gründer
                  </span>
                </div>
              </div>

              <p className="font-sans text-brand-primary/70 text-xs leading-relaxed mb-6">
                Neben Steuererklärungen für Private vermittle und begleite ich ausgewählte kaufmännische Dienstleistungen für kleine und mittlere Unternehmen (KMU):
              </p>

              {/* Bullet list of other services */}
              <ul className="space-y-3 mb-8">
                {partnersPoints.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-brand-primary/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer box as required by the instruction */}
            <div className="p-4 bg-white border border-brand-primary/10 rounded-xl">
              <span className="font-sans text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-1">
                Kooperationshinweis
              </span>
              <p className="font-sans text-[11px] text-brand-primary/80 leading-relaxed">
                Diese Dienstleistungen werden in Zusammenarbeit mit der <strong>Verito AG</strong> erbracht.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
