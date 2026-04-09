import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Package, Users, MessageCircle, ClipboardList, ArrowRight } from "lucide-react";

const features = [
  { icon: ClipboardList, title: "Order Tracking", desc: "Track cutting, stitching, delivery — every step, automated." },
  { icon: Users, title: "Worker Management", desc: "Assign tasks, track progress, manage your entire team." },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "Send updates to customers directly via WhatsApp." },
  { icon: Package, title: "Customer Tracking", desc: "Complete customer history, preferences, and order logs." },
];

export default function TuugCRMSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tuugcrm" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_80%_55%/0.06)_0%,_transparent_60%)]" />
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Our Product
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Meet <span className="text-gradient">TuugCRM</span>
            </h2>
            <p className={`text-base sm:text-lg text-muted-foreground mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              A smart boutique management system built to track orders, manage customers, and streamline operations — so you can focus on growing your business.
            </p>

            <a
              href="https://tuugcrm.tuug.in"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 animate-pulse-glow neu-sm ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            >
              View Product
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group p-5 sm:p-6 rounded-2xl glass neu hover:border-primary/30 transition-all duration-500 glow-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl neu-icon flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] transition-all duration-500">
                  <f.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-sm sm:text-base mb-1 sm:mb-2">{f.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
