import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Lock, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { TaxInquiry } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<TaxInquiry>({
    name: "",
    email: "",
    phone: "",
    category: "Privatperson",
    region: "Stallikon",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xaqgkoyb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Formular konnte nicht gesendet werden.");
    }

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "Privatperson",
      region: "Stallikon",
      message: "",
    });
  } catch (error) {
    alert("Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@renggli-treuhand.ch.");
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="kontakt" className="py-20 bg-white border-b border-brand-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                Einfach & unkompliziert
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary tracking-tight mb-6">
                Kontakt aufnehmen.
              </h2>
              <p className="font-sans text-brand-primary/80 text-sm sm:text-base leading-relaxed mb-8">
                Haben Sie Fragen oder möchten Sie Ihre Steuererklärung direkt in Auftrag geben? Schreiben Sie mir oder rufen Sie mich ganz unkompliziert an. Ich freue mich auf Ihre Nachricht!
              </p>

              {/* Direct Contacts list */}
              <div className="space-y-5">
                <a
                  href="tel:0765243983"
                  className="flex items-center gap-4 p-3 bg-brand-bg-card hover:bg-brand-primary/[0.02] border border-brand-primary/10 rounded-xl transition-colors group"
                >
                  <div className="p-2.5 bg-brand-primary/5 text-brand-accent rounded-lg group-hover:bg-brand-primary/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-brand-accent uppercase block">
                      Telefon
                    </span>
                    <span className="font-sans text-sm font-bold text-brand-primary">
                      076 524 39 83
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@renggli-treuhand.ch"
                  className="flex items-center gap-4 p-3 bg-brand-bg-card hover:bg-brand-primary/[0.02] border border-brand-primary/10 rounded-xl transition-colors group"
                >
                  <div className="p-2.5 bg-brand-primary/5 text-brand-accent rounded-lg group-hover:bg-brand-primary/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-brand-accent uppercase block">
                      E-Mail-Adresse
                    </span>
                    <span className="font-sans text-sm font-bold text-brand-primary break-all">
                      info@renggli-treuhand.ch
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 bg-brand-bg-card border border-brand-primary/10 rounded-xl">
                  <div className="p-2.5 bg-brand-primary/5 text-brand-accent rounded-lg">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-brand-accent uppercase block">
                      Adresse
                    </span>
                    <span className="font-sans text-sm font-bold text-brand-primary">
                      Püntenstrasse 26, 8143 Stallikon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Representation */}
            <div className="mt-8 rounded-xl overflow-hidden border border-brand-primary/10 shadow-sm h-48 bg-gray-100 relative">
              <iframe
                title="Renggli-Treuhand Stallikon"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=P%C3%BCntenstrasse%2026,%208143%20Stallikon&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="filter contrast-95 saturate-75 opacity-90"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-bg-warm/60 border border-brand-primary/10 p-6 sm:p-10 rounded-2xl relative overflow-hidden h-full flex flex-col justify-between">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full"
                >
                  <div className="p-4 bg-brand-primary/10 text-brand-accent rounded-full mb-6 animate-bounce">
                    <CheckCircle2 size={36} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-brand-primary mb-3">
                    Nachricht erfolgreich gesendet!
                  </h3>
                  <p className="font-sans text-sm text-brand-primary/80 max-w-md leading-relaxed mb-6">
                    Vielen Dank für Ihre Anfrage. Ich habe Ihre Details erhalten und werde mich innerhalb der nächsten 24 Stunden persönlich bei Ihnen melden.
                  </p>
                  <div className="bg-white border border-brand-primary/10 p-4 rounded-xl text-left w-full max-w-sm text-xs shadow-xs">
                    <div className="flex justify-between py-1 border-b border-brand-primary/5">
                      <span className="text-brand-accent font-medium">Name:</span>
                      <span className="font-bold text-brand-primary">{formData.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-brand-primary/5">
                      <span className="text-brand-accent font-medium">E-Mail:</span>
                      <span className="font-bold text-brand-primary">{formData.email}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-brand-accent font-medium">Gruppe:</span>
                      <span className="font-bold text-brand-primary">{formData.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-sans text-xs text-brand-accent font-bold hover:text-brand-primary hover:underline mt-8"
                  >
                    Eine weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif font-bold text-lg text-brand-primary text-left mb-2">
                    Unverbindliche Anfrage senden
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="text-left">
                      <label className="block font-sans text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="z.B. Hans Muster"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full font-sans text-sm bg-white border border-brand-primary/10 rounded-lg p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="text-left">
                      <label className="block font-sans text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="z.B. hans.muster@gmx.ch"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full font-sans text-sm bg-white border border-brand-primary/10 rounded-lg p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Telefon */}
                    <div className="text-left">
                      <label className="block font-sans text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="z.B. 079 123 45 67"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full font-sans text-sm bg-white border border-brand-primary/10 rounded-lg p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all"
                      />
                    </div>

                    {/* Category Selection matching Target Groups */}
                    <div className="text-left">
                      <label className="block font-sans text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                        Lebenssituation / Gruppe
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full font-sans text-sm bg-white border border-brand-primary/10 rounded-lg p-3 focus:border-brand-primary focus:outline-none transition-all"
                      >
                        <option>Privatperson</option>
                        <option>Familie</option>
                        <option>Rentner</option>
                        <option>Berufstätig</option>
                        <option>Junger Erwachsener</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="text-left">
                    <label className="block font-sans text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                      Nachricht (z.B. Fragen zur Fristerstreckung oder Unterlagen)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Geben Sie hier Ihre Fragen ein oder beschreiben Sie kurz Ihr Anliegen..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full font-sans text-sm bg-white border border-brand-primary/10 rounded-lg p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-primary/10">
                    <div className="flex items-center gap-1.5 text-brand-primary/60 text-[11px]">
                      <Lock size={12} className="text-brand-accent" />
                      <span>Sichere & diskrete Schweizer Datenübertragung</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-sans text-center font-bold text-sm px-6 py-3.5 bg-brand-primary hover:bg-brand-accent text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Wird gesendet..." : "Unverbindliche Anfrage senden"}
                      <Send size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
