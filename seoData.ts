import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, FileCheck, HelpCircle, ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-radial from-brand-bg-warm via-brand-bg-card to-white/60"
    >
      {/* Decorative clean shapes (Swiss minimalist) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-brand-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small location tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 text-brand-primary rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <MapPin size={13} className="text-brand-accent" />
              Ihr lokaler Treuhänder in Stallikon & Region
            </motion.div>

            {/* Main Catchy Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-primary leading-[1.12] tracking-tight mb-6"
            >
              Sie hassen Steuern. <br />
              <span className="italic text-brand-accent font-medium">Ich liebe sie.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-brand-primary/80 max-w-xl leading-relaxed mb-6"
            >
              Ich unterstütze Privatpersonen unkompliziert bei ihrer Steuererklärung – persönlich, zuverlässig und direkt aus Stallikon.
            </motion.p>

            {/* Small personal touch greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 mb-8 bg-brand-primary/[0.03] pl-2 pr-4 py-1.5 rounded-full border border-brand-primary/10"
            >
              {!imageError ? (
                <img
                  src="/images/portrait.jpg"
                  alt="Christoph Renggli"
                  className="w-8 h-8 rounded-full object-cover object-top border border-brand-primary/20 shadow-xs"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 text-[10px] font-sans font-bold text-brand-primary">
                  CR
                </div>
              )}
              <div className="text-left">
                <p className="font-sans text-[11px] font-extrabold text-brand-primary leading-none">
                  Christoph Renggli
                </p>
                <p className="font-sans text-[9px] text-brand-accent font-semibold mt-0.5 leading-none">
                  Inhaber & Ihr persönlicher Ansprechpartner
                </p>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={(e) => handleAnchorClick(e, "kontakt")}
                className="font-sans text-center font-bold text-sm px-8 py-4 bg-brand-primary hover:bg-brand-accent text-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                Steuererklärung anfragen
              </button>
              <button
                onClick={(e) => handleAnchorClick(e, "leistungen")}
                className="font-sans text-center font-semibold text-sm px-8 py-4 bg-white border border-brand-primary/20 hover:border-brand-primary text-brand-primary hover:bg-brand-primary/[0.02] rounded-xl shadow-sm transition-all duration-200"
              >
                Mehr erfahren
              </button>
            </motion.div>

            {/* Local Trust badging */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-brand-primary/10 w-full"
            >
              <div className="flex items-center gap-1.5 text-xs text-brand-primary/70 font-medium">
                <span className="text-brand-accent font-extrabold">✓</span> Schnell & unkompliziert
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-primary/70 font-medium">
                <span className="text-brand-accent font-extrabold">✓</span> Fixpreis-Garantie
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-primary/70 font-medium">
                <span className="text-brand-accent font-extrabold">✓</span> Ohne Fachchinesisch
              </div>
            </motion.div>
          </div>

          {/* Interactive Illustration Card Right */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md bg-brand-bg-card border border-brand-primary/10 p-6 sm:p-8 rounded-2xl shadow-xl shadow-brand-primary/[0.04] text-left"
            >
              {/* Cute Header representing a simplified local Swiss Tax Checklist */}
              <div className="flex items-center justify-between border-b border-brand-primary/5 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                  <span className="font-sans text-xs font-bold text-brand-primary uppercase tracking-wider">
                    Meine Steuer-Checkliste
                  </span>
                </div>
                <div className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-extrabold rounded-full">
                  Stallikon ZH
                </div>
              </div>

              {/* Simulation checklist items */}
              <div className="space-y-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-between p-3 bg-brand-primary/5 rounded-xl border border-brand-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <span className="font-sans text-xs font-semibold text-brand-primary">
                      Lohnausweis & Belege sammeln
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-accent font-bold">Erledigt</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between p-3 bg-brand-primary/5 rounded-xl border border-brand-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <span className="font-sans text-xs font-semibold text-brand-primary">
                      An Renggli-Treuhand senden
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-accent font-bold">Erledigt</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-between p-3 bg-brand-bg-warm rounded-xl border border-dashed border-brand-accent/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-bg-warm text-brand-primary flex items-center justify-center text-xs font-bold animate-pulse border border-brand-primary/20">
                      ☕
                    </div>
                    <span className="font-sans text-xs font-semibold text-brand-primary/80">
                      Entspannen & Kaffee trinken
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-accent/70">In Arbeit</span>
                </motion.div>
              </div>

              {/* Pricing teaser / trust badge */}
              <div className="p-4 bg-brand-primary/[0.02] border border-brand-primary/10 rounded-xl text-center">
                <p className="font-sans text-xs text-brand-primary/60">Privat-Steuererklärungen ab</p>
                <div className="font-sans font-black text-2xl text-brand-primary mt-0.5">CHF 80.—</div>
                <p className="font-sans text-[10px] text-brand-accent mt-1">Festpreis ohne versteckte Gebühren</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
