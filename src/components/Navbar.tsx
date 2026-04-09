import { useState, useEffect } from "react";
import tuugLogo from "@/assets/tuug-logo.jpeg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "TuugCRM", href: "#tuugcrm" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Course", href: "/boutique-course" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <img src={tuugLogo} alt="TUUG" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover" />
          <span className="font-heading text-lg sm:text-xl font-bold tracking-tight">TUUG</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity neu-sm hover:shadow-[0_0_20px_hsl(0_80%_55%/0.3)]">
            Work With Us
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-strong animate-fade-in h-[calc(100vh-56px)]">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center">
              Work With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
