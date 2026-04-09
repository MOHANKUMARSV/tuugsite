import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Real-World Execution", desc: "We don't just strategize — we build, launch, and optimize. Hands-on, every step." },
  { icon: TrendingUp, title: "Result-Driven Mindset", desc: "Vanity metrics don't pay bills. We focus on growth that actually moves the needle." },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(0_80%_55%/0.04)_0%,_transparent_50%)]" />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            About TUUG
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We don't just run ads.
            <br />
            <span className="text-gradient">We build systems that scale.</span>
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            TUUG is a performance-driven growth partner for brands that want more than likes and followers. We combine branding, marketing, and technology into one integrated system that drives real business results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group p-6 sm:p-8 rounded-2xl glass neu hover:border-primary/30 transition-all duration-500 glow-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl neu-icon flex items-center justify-center mb-5 group-hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] transition-all duration-500">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3">{p.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
