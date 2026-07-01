import React from "react";
import { UserCheck, MapPin, Search, Calendar } from "lucide-react";

export default function WhyUs() {
  const cards = [
    {
      title: "Persönlich",
      desc: "Keine anonyme Hotline oder wechselnde Sachbearbeiter. Ich bin Ihr direkter, fester Partner, der Ihre Situation versteht und sich Zeit nimmt.",
      icon: <UserCheck className="w-5 h-5 text-brand-accent" />
    },
    {
      title: "Regional",
      desc: "Zuhause in Stallikon. Ich kenne die Steuerpraxis im Kanton Zürich und im Knonaueramt (Säuliamt) ganz genau.",
      icon: <MapPin className="w-5 h-5 text-brand-accent" />
    },
    {
      title: "Transparent",
      desc: "Faire Fixpreise ab 80.-. Sie wissen vorab ganz genau, was anfällt – ohne versteckte Kosten oder böse Überraschungen.",
      icon: <Search className="w-5 h-5 text-brand-accent" />
    },
    {
      title: "Zuverlässig",
      desc: "Sorgfältige Abzüge, pünktliche Einreichung und Überwachung aller Fristen. Ihre Steuererklärung ist bei mir in sicheren Händen.",
      icon: <Calendar className="w-5 h-5 text-brand-accent" />
    }
  ];

  return (
    <section id="warum-wir" className="py-20 bg-white border-b border-brand-primary/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="max-w-xl mx-auto mb-16 text-center">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
            Ihre Vorteile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary tracking-tight">
            Warum Renggli-Treuhand?
          </h2>
          <p className="font-sans text-brand-primary/80 mt-4 leading-relaxed text-sm sm:text-base">
            Ich setze auf persönliche Werte statt unpersönliche Großkanzlei-Strukturen. Profitieren Sie von einer Partnerschaft auf Augenhöhe.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-brand-bg-card/50 hover:bg-brand-bg-card border border-brand-primary/10 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-brand-primary/[0.04] hover:-translate-y-0.5"
            >
              <div className="p-2.5 bg-brand-primary/5 inline-flex rounded-lg mb-5 text-brand-accent">
                {card.icon}
              </div>
              <h3 className="font-sans font-bold text-lg text-brand-primary mb-2 flex items-center gap-1.5">
                <span className="text-brand-accent font-black">✓</span> {card.title}
              </h3>
              <p className="font-sans text-xs text-brand-primary/80 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Localized Region List as requested */}
        <div className="mt-16 pt-10 border-t border-brand-primary/10">
          <span className="font-sans text-[11px] font-bold text-brand-accent uppercase tracking-wider block mb-4">
            Regionale Erreichbarkeit im Säuliamt & Zürich
          </span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-brand-primary">
            {["Stallikon", "Bonstetten", "Wettswil", "Birmensdorf", "Aesch", "Affoltern am Albis", "Zürich"].map((place, i) => (
              <span key={i} className="px-3.5 py-1.5 bg-brand-bg-card border border-brand-primary/10 rounded-full font-medium shadow-xs">
                📍 {place}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
