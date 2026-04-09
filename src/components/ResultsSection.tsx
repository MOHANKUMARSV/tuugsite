import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const transformations = [
  { before: "Confusion", after: "Structured Workflow", icon: "🔀" },
  { before: "Low Reach", after: "Consistent Growth", icon: "📈" },
  { before: "Manual Tracking", after: "Automated System", icon: "⚙️" },
  { before: "Scattered Branding", after: "Premium Identity", icon: "✨" },
];

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="results" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Impact
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            What We <span className="text-gradient">Transform</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {transformations.map((t, i) => (
            <div
              key={t.before}
              className={`group p-4 sm:p-6 rounded-2xl glass neu hover:border-primary/30 transition-all duration-500 text-center glow-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{t.icon}</div>
              <div className="text-muted-foreground line-through text-xs sm:text-sm mb-2">{t.before}</div>
              <ArrowRight className="w-4 h-4 text-primary mx-auto mb-2 rotate-90" />
              <div className="text-sm sm:text-lg font-heading font-semibold text-gradient">{t.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
