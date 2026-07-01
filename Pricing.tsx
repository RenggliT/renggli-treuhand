import React, { useState } from "react";
import { FileText, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
    <footer className="bg-brand-primary text-white/70 pt-16 pb-10 border-t border-white/10 text-left">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 mb-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {!logoError ? (
                <img
                  src="/images/logo.png"
                  alt="Renggli-Treuhand Logo"
                  className="h-8 w-auto object-contain brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex flex-col text-left">
                  <span className="font-serif font-extrabold text-sm tracking-widest text-white leading-none">
                    RENGGLI
                  </span>
                  <span className="font-sans font-bold text-[9px] tracking-[0.2em] text-brand-accent block mt-1 uppercase">
                    TREUHAND
                  </span>
                </div>
              )}
            </div>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-sm">
              Persönliche, zuverlässige und unkomplizierte Erstellung von Steuererklärungen für Privatpersonen im Kanton Zürich und der Region Säuliamt.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#leistungen"
                  onClick={(e) => handleAnchorClick(e, "leistungen")}
                  className="hover:text-brand-accent transition-colors text-white/80"
                >
                  Steuererklärung
                </a>
              </li>
              <li>
                <a
                  href="#ueber-uns"
                  onClick={(e) => handleAnchorClick(e, "ueber-uns")}
                  className="hover:text-brand-accent transition-colors text-white/80"
                >
                  Über mich
                </a>
              </li>
              <li>
                <a
                  href="#warum-wir"
                  onClick={(e) => handleAnchorClick(e, "warum-wir")}
                  className="hover:text-brand-accent transition-colors text-white/80"
                >
                  Ihre Vorteile
                </a>
              </li>
              <li>
                <a
                  href="#preise"
                  onClick={(e) => handleAnchorClick(e, "preise")}
                  className="hover:text-brand-accent transition-colors text-white/80"
                >
                  Preise & Tarife
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  onClick={(e) => handleAnchorClick(e, "kontakt")}
                  className="hover:text-brand-accent transition-colors text-white/80"
                >
                  Kontakt & Anfahrt
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="space-y-2 text-white/70 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Püntenstrasse 26, 8143 Stallikon</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-brand-accent flex-shrink-0" />
                <a href="tel:0435117856" className="hover:text-brand-accent text-white/80">
                  043 511 78 56
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-brand-accent flex-shrink-0" />
                <a href="mailto:info@renggli-treuhand.ch" className="hover:text-brand-accent text-white/80 break-all">
                  info@renggli-treuhand.ch
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Impressum & Privacy */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-sans">
          <span>
            © {new Date().getFullYear()} Renggli-Treuhand. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-4">
            <a href="#kontakt" onClick={(e) => handleAnchorClick(e, "kontakt")} className="hover:text-white/60 transition-colors">
              Impressum
            </a>
            <a href="#kontakt" onClick={(e) => handleAnchorClick(e, "kontakt")} className="hover:text-white/60 transition-colors">
              Datenschutz
            </a>
            <a href="#kontakt" onClick={(e) => handleAnchorClick(e, "kontakt")} className="hover:text-white/60 transition-colors">
              Kontakt
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
