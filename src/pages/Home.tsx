import React from "react";
import SEO from "../components/SEO";
import { BUSINESS_SCHEMA } from "../lib/seoData";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <SEO
        title="Renggli-Treuhand | Steuererklärung & Steuerberatung Stallikon Zürich"
        description="Professionelle Steuererklärung und persönliche Steuerberatung für Privatpersonen in Stallikon, Zürich, Affoltern am Albis, Bonstetten und Wettswil. Unkompliziert, regional und transparent."
        canonicalUrl="https://renggli-treuhand.ch"
        schema={BUSINESS_SCHEMA}
      />
      <Hero />
      <Features />
      <About />
      <WhyUs />
      <Pricing />
      <ContactForm />
    </>
  );
}
