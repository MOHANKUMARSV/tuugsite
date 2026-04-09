import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram, Video, Sparkles } from "lucide-react";

const strategies = [
  { icon: Sparkles, title: "Brand Storytelling", desc: "Content that connects emotionally and builds lasting brand loyalty." },
  { icon: Video, title: "Reel Strategy", desc: "Scroll-stopping reels designed for reach, engagement, and conversions." },
  { icon: Instagram, title: "Instagram Growth", desc: "Organic + paid strategies that build real, engaged audiences." },
];

export default function ContentSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Mock reels */}
          <div className={`relative flex gap-3 sm:gap-4 justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-28 sm:w-36 md:w-44 aspect-[9/16] rounded-2xl glass neu flex flex-col items-center justify-center gap-3 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                style={{ transform: `rotate(${(n - 2) * 5}deg)`, zIndex: n === 2 ? 10 : 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Video className="w-6 sm:w-8 h-6 sm:h-8 text-primary/40 relative z-10" />
                <span className="text-[10px] sm:text-xs text-muted-foreground relative z-10">Reel {n}</span>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10">
                  <div className="h-1 rounded-full bg-primary/30 mb-2">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${30 + n * 20}%` }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary/20" />
                    <span className="text-[8px] sm:text-[10px] text-muted-foreground">tuug.agency</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Content Strategy
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Content That <span className="text-gradient">Converts</span>
            </h2>
            <p className={`text-base sm:text-lg text-muted-foreground mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              We don't just post content — we engineer it. Every reel, every story, every post is designed with one goal: measurable business growth.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {strategies.map((s, i) => (
                <div
                  key={s.title}
                  className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass neu-sm hover:border-primary/20 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg neu-icon flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm sm:text-base mb-1">{s.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
