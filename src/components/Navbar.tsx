import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const isHomePage = location.pathname === "/";
    
    // If we're on home page, scroll smoothly.
    // If not, let the React Router Link naturally handle the navigation with the hash,
    // which our global ScrollToTop component will pick up and scroll to!
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // height of navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-bg-warm/95 backdrop-blur-md border-b border-brand-primary/10 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          onClick={(e) => handleAnchorClick(e, "home")}
          className="flex items-center gap-3 group"
        >
          {!logoError ? (
            <img
              src="/images/logo.png"
              alt="Renggli-Treuhand Logo"
              className="h-10 w-auto object-contain transition-all duration-200 group-hover:scale-[1.02]"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex flex-col items-center select-none transition-transform duration-200 group-hover:scale-[1.02]">
              <span className="font-serif font-medium text-2xl tracking-normal text-brand-primary leading-none">
                RENGGLI
              </span>
              <span className="font-sans font-semibold text-[8px] tracking-[0.38em] text-brand-primary block mt-1.5 uppercase text-center w-full pl-[0.38em]">
                TREUHAND
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/services"
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === "/services" ? "text-brand-accent" : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Leistungen
          </Link>
          <Link
            to="/#ueber-uns"
            onClick={(e) => handleAnchorClick(e, "ueber-uns")}
            className="font-sans text-xs font-bold uppercase tracking-wider text-brand-primary/80 hover:text-brand-primary transition-colors"
          >
            Über mich
          </Link>
          <Link
            to="/tax-tips"
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === "/tax-tips" ? "text-brand-accent" : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Steuertipps
          </Link>
          <Link
            to="/faq"
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === "/faq" ? "text-brand-accent" : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            FAQ
          </Link>
          <Link
            to="/blog"
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === "/blog" ? "text-brand-accent" : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Ratgeber
          </Link>
          <Link
            to="/contact"
            className="font-sans text-xs font-bold px-5 py-2.5 bg-brand-primary text-white hover:bg-brand-accent rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 text-brand-primary hover:text-brand-accent md:hidden transition-colors"
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-bg-warm border-b border-brand-primary/10 shadow-lg px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200 text-left">
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-base font-bold py-2 border-b border-brand-primary/5 text-brand-primary/90 hover:text-brand-primary"
          >
            Dienstleistungen
          </Link>
          <Link
            to="/#ueber-uns"
            onClick={(e) => handleAnchorClick(e, "ueber-uns")}
            className="font-sans text-base font-bold py-2 border-b border-brand-primary/5 text-brand-primary/90 hover:text-brand-primary"
          >
            Über mich
          </Link>
          <Link
            to="/tax-tips"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-base font-bold py-2 border-b border-brand-primary/5 text-brand-primary/90 hover:text-brand-primary"
          >
            Steuer-Tipps
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-base font-bold py-2 border-b border-brand-primary/5 text-brand-primary/90 hover:text-brand-primary"
          >
            FAQ (Fragen)
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-base font-bold py-2 border-b border-brand-primary/5 text-brand-primary/90 hover:text-brand-primary"
          >
            Ratgeber / Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-center font-bold mt-2 py-3.5 bg-brand-primary text-white rounded-lg hover:bg-brand-accent transition-colors shadow-sm"
          >
            Anfrage senden
          </Link>
        </div>
      )}
    </nav>
  );
}
