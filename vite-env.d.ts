import React, { useState } from "react";
import { User, Sparkles, Send, Coffee } from "lucide-react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="ueber-uns" className="py-20 bg-brand-bg-warm/30 relative overflow-hidden border-b border-brand-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Badge / Portrait Card representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-brand-bg-card border border-brand-primary/10 p-3 rounded-2xl shadow-sm text-left max-w-sm relative group overflow-hidden">
              <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping z-10" />
              
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative bg-gray-50 border border-brand-primary/5">
                {!imageError ? (
                  <img
                    src="/images/portrait.jpg"
                    alt="Christoph Renggli - Dipl. Betriebswirtschafter HF & Dipl. Steuerberater NDS"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center p-6 border border-dashed border-gray-200 rounded-xl">
                    <User className="w-10 h-10 text-brand-primary/20 mb-2" />
                    <span className="font-sans text-xs font-semibold text-brand-primary/40 uppercase tracking-widest">Portrait folgt</span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-brand-primary/95 backdrop-blur-xs text-white text-[9px] uppercase tracking-widest px-2.5 py-1.5 rounded-md font-bold">
                  Ihr Steuerberater
                </div>
              </div>

              <div className="px-2 pb-2">
                <h4 className="font-serif text-lg font-bold text-brand-primary leading-tight">
                  Christoph Renggli
                </h4>
                <p className="font-sans text-[11px] text-brand-accent font-semibold mt-0.5 leading-tight">
                  Dipl. Betriebswirtschafter HF &<br />Dipl. Steuerberater NDS
                </p>
                
                {/* Mini personal values checklist */}
                <div className="space-y-2 border-t border-brand-primary/5 mt-3 pt-3 text-xs text-brand-primary/90">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent font-extrabold">✓</span> Persönlicher Ansprechpartner (1:1)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent font-extrabold">✓</span> Kein Beamtendeutsch, klare Worte
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent font-extrabold">✓</span> Kurze Wege & schnelle Abwicklung
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Über mich
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary tracking-tight mb-6">
              Persönlich, unkompliziert <span className="italic text-brand-accent font-medium">und nah.</span>
            </h2>
            
            <div className="font-sans text-brand-primary/90 text-base space-y-4 leading-relaxed max-w-xl">
              <p className="font-semibold text-brand-primary">
                Ich bin Christoph Renggli, Dipl. Betriebswirtschafter HF und Dipl. Steuerberater NDS.
              </p>
              <p>
                Als Inhaber der Renggli-Treuhand begleite ich Privatpersonen persönlich bei allen Fragen rund um ihre Steuererklärung.
              </p>
              <p>
                Bei mir haben Sie vom ersten Gespräch bis zur fertigen Steuererklärung immer denselben Ansprechpartner. Persönliche Beratung, kurze Wege und verständliche Erklärungen stehen für mich im Mittelpunkt.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs text-brand-primary/70 font-medium bg-brand-bg-card px-3.5 py-1.5 rounded-lg border border-brand-primary/10 shadow-xs">
                <Coffee size={14} className="text-brand-accent" />
                Unkomplizierter Steuer-Kaffee in Stallikon
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
