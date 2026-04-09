import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0_80%_55%/0.08)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-52 md:w-80 h-52 md:h-80 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_100%/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-primary mb-6 sm:mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">Performance-Driven Growth Systems</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-5 sm:mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Not Just Marketing.
          <br />
          <span className="text-gradient">We Build Growth</span>
          <br />
          Systems.
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Branding that positions. Performance that converts. Systems that scale.
          <br className="hidden md:block" />
          We don't run campaigns — we engineer growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <a href="#contact" className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 animate-pulse-glow w-full sm:w-auto justify-center neu-sm">
            Work With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/portfolio" className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass text-foreground font-semibold text-sm sm:text-base hover:bg-secondary/30 transition-all duration-300 w-full sm:w-auto justify-center">
            <Play className="w-4 h-4" />
            View Case Studies
          </a>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          {[
            { num: "50+", label: "Brands Scaled" },
            { num: "3x", label: "Avg. Growth" },
            { num: "1M+", label: "Reach Generated" },
            { num: "100%", label: "Result Focused" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl glass neu-sm">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gradient">{s.num}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
