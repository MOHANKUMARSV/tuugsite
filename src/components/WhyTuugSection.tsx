import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { num: "01", title: "We don't chase trends — we create systems.", desc: "While others follow algorithms, we build frameworks that outlast any trend cycle." },
  { num: "02", title: "Results over vanity metrics.", desc: "Followers don't pay bills. We focus on revenue, leads, and real business outcomes." },
  { num: "03", title: "We understand local + digital.", desc: "Born in the real market, built for the digital world. We bridge both worlds seamlessly." },
  { num: "04", title: "We build what we sell.", desc: "TuugCRM isn't just a product — it's proof that we practice what we preach." },
];

export default function WhyTuugSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Why TUUG
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Built Different. <span className="text-gradient">By Design.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={`group flex gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl glass neu hover:border-primary/30 transition-all duration-500 glow-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <span className="text-2xl sm:text-3xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors flex-shrink-0">
                {r.num}
              </span>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-semibold mb-1 sm:mb-2">{r.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
