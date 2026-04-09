import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_80%_55%/0.1)_0%,_transparent_60%)]" />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl glass-strong neu">
          <h2 className={`text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Ready to <span className="text-gradient">Scale Your Brand?</span>
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Let's build a growth system that works while you sleep. No fluff, no filler — just results.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a
              href="https://wa.me/919384538848"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 animate-pulse-glow w-full sm:w-auto justify-center neu-sm"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </a>
            <a href="#services" className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass text-foreground font-semibold text-sm sm:text-base hover:bg-secondary/30 transition-all duration-300 w-full sm:w-auto justify-center">
              Start Your Growth
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
