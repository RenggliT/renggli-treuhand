@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  
  --color-brand-primary: #4a3d34;
  --color-brand-accent: #8c7a6b;
  --color-brand-bg-warm: #f7f2ef;
  --color-brand-bg-card: #faf8f6;
  --color-brand-muted: #bcaba0;
}

/* Custom CSS scroll snap and scroll behavior */
html {
  scroll-behavior: smooth;
  background-color: #fcfcfc;
  color: #1a1a1a;
  -webkit-font-smoothing: antialiased;
}

/* Reveal transition classes to match user's ScrollReveal pattern */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

