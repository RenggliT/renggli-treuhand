import React from "react";
import { Check, Plus, HelpCircle, Clock, AlertCircle } from "lucide-react";

export default function Pricing() {
  return (
    <section id="preise" className="py-20 bg-brand-bg-card relative overflow-hidden border-b border-brand-primary/10">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">
            Preise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary tracking-tight mb-4">
            Faire Festpreise für Ihre <span className="italic text-brand-accent font-medium">Steuererklärung</span>
          </h2>
          <p className="font-sans text-brand-primary/70 text-sm sm:text-base">
            Freundlich, transparent und unkompliziert. Wissen Sie bereits im Voraus, mit welchen Kosten Sie rechnen können.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Einzelperson */}
          <div className="bg-white border border-brand-primary/10 hover:border-brand-primary/20 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-bold text-brand-accent uppercase tracking-wider">
                  Steuererklärung Privatperson
                </span>
                <span className="px-2.5 py-1 bg-brand-bg-warm text-brand-primary text-[10px] font-bold rounded-md">
                  Beliebt
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary mb-3">
                Einzelperson
              </h3>
              <p className="font-sans text-xs text-brand-primary/60 leading-relaxed mb-6">
                Für Singles, Alleinerziehende, Angestellte, Pensionierte oder Grenzgänger.
              </p>
              
              <div className="border-t border-brand-primary/5 pt-6 mb-6">
                <span className="font-sans text-xs text-brand-primary/60 block">Ab</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-4xl font-extrabold text-brand-primary">CHF 80.–</span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-brand-primary/5 pt-6">
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Vollständige Erstellung aller Steuerformulare</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Prüfung aller Abzugsmöglichkeiten (Sparen)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Einreichung & finale Kontrollprüfung</span>
              </div>
            </div>
          </div>

          {/* Card 2: Ehepaar */}
          <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 sm:p-8 shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-accent text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
              Häufigste Wahl
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-bold text-brand-accent uppercase tracking-wider">
                  Steuererklärung Privatperson
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary mb-3">
                Ehepaar
              </h3>
              <p className="font-sans text-xs text-brand-primary/60 leading-relaxed mb-6">
                Für gemeinsam veranlagte Ehepaare und eingetragene Partnerschaften.
              </p>
              
              <div className="border-t border-brand-primary/5 pt-6 mb-6">
                <span className="font-sans text-xs text-brand-primary/60 block">Ab</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-4xl font-extrabold text-brand-primary">CHF 100.–</span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-brand-primary/5 pt-6">
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Gemeinsame Veranlagung aller Einkünfte</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Optimierte Abzüge für beide Partner</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Prüfung von Kinderabzügen & Betreuungskosten</span>
              </div>
            </div>
          </div>

          {/* Card 3: Studenten & Lernende */}
          <div className="bg-white border border-brand-primary/10 hover:border-brand-primary/20 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-bold text-brand-accent uppercase tracking-wider">
                  Ausbildungstarif
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary mb-3">
                Studenten & Lernende
              </h3>
              <p className="font-sans text-xs text-brand-primary/60 leading-relaxed mb-6">
                Vergünstigter Tarif für Studierende, Auszubildende und Schüler mit schmalem Budget.
              </p>
              
              <div className="border-t border-brand-primary/5 pt-6 mb-6">
                <span className="font-sans text-xs text-brand-primary/60 block">Pauschal</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-4xl font-extrabold text-brand-primary">CHF 40.–</span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-brand-primary/5 pt-6">
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Komplette Ausfüllung zum Schülertarif</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Beratung zur Steuerpflicht bei Nebenjobs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-primary/80">
                <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Unkomplizierter Service digital oder postalisch</span>
              </div>
            </div>
          </div>

        </div>

        {/* Zuschläge & Spezialfälle Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
          
          {/* Zuschläge */}
          <div className="bg-brand-bg-warm/50 border border-brand-primary/10 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <div className="p-3 bg-brand-primary/5 rounded-xl text-brand-primary">
              <Plus size={20} className="text-brand-accent" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-primary mb-2">
                Zuschläge
              </h4>
              <p className="font-sans text-xs text-brand-primary/70 mb-4">
                Für zusätzliche, spezifische Vermögenswerte erheben wir einen fairen und transparenten Aufpreis:
              </p>
              <ul className="space-y-2 font-sans text-xs text-brand-primary/90">
                <li className="flex justify-between border-b border-brand-primary/5 pb-2">
                  <span className="font-medium">Immobilie:</span>
                  <span className="font-bold text-brand-accent">+ CHF 20.– <span className="text-[10px] font-normal text-brand-primary/60">pro Liegenschaft</span></span>
                </li>
                <li className="flex justify-between border-b border-brand-primary/5 pb-2">
                  <span className="font-medium">Aktiendepot:</span>
                  <span className="font-bold text-brand-accent">+ CHF 20.– <span className="text-[10px] font-normal text-brand-primary/60">pro Depot</span></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Spezialfälle */}
          <div className="bg-brand-bg-warm/50 border border-brand-primary/10 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <div className="p-3 bg-brand-primary/5 rounded-xl text-brand-primary">
              <Clock size={20} className="text-brand-accent" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-primary mb-2">
                Spezialfälle & Beratungen
              </h4>
              <p className="font-sans text-xs text-brand-primary/70 mb-4">
                Für komplexe Steuerfälle, anspruchsvolle Abklärungen, Steuerberatung oder Unterstützung bei Einsprachen:
              </p>
              <div className="flex items-baseline justify-between border-b border-brand-primary/5 pb-2">
                <span className="font-sans text-xs font-semibold text-brand-primary">Stundensatz:</span>
                <span className="font-serif text-lg font-bold text-brand-accent">CHF 100.– <span className="font-sans text-[10px] font-normal text-brand-primary/60">pro Stunde</span></span>
              </div>
              <p className="font-sans text-[11px] text-brand-primary/60 mt-3">
                Abrechnung erfolgt fair und minutengenau nach tatsächlichem Aufwand.
              </p>
            </div>
          </div>

        </div>

        {/* Richtpreise Warning Note */}
        <div className="bg-white border border-brand-primary/5 rounded-xl p-4 max-w-3xl mx-auto flex items-center justify-center gap-3 shadow-xs">
          <AlertCircle size={16} className="text-brand-accent flex-shrink-0" />
          <p className="font-sans text-xs text-brand-primary/70 italic text-center leading-relaxed">
            "Die angegebenen Preise sind Richtpreise. Der definitive Preis richtet sich nach dem effektiven Aufwand und der Komplexität der Steuererklärung."
          </p>
        </div>

      </div>
    </section>
  );
}
