import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Palette, BarChart3, Settings2, Globe, ShoppingBag, Smartphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding",
    tag: "Identity",
    items: ["Identity Creation", "Content Strategy", "Visual Direction", "Brand Positioning"],
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    tag: "Growth",
    items: ["Instagram Growth", "Lead Generation", "Ad Campaigns", "Analytics & ROI"],
  },
  {
    icon: Settings2,
    title: "Systems & Automation",
    tag: "Scale",
    items: ["TuugCRM Platform", "Workflow Automation", "Process Design", "Tech Integration"],
  },
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    tag: "Web",
    items: ["Business Websites", "Landing Pages", "UI/UX Design", "Speed Optimization"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify & E-Commerce",
    tag: "Commerce",
    items: ["Shopify Store Setup", "Product Listings", "Payment Integration", "Store Optimization"],
  },
  {
    icon: Smartphone,
    title: "Apps & Automations",
    tag: "Tech",
    items: ["Custom App Development", "API Integrations", "Business Automations", "WhatsApp Bots"],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            What We Do
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Everything You Need for <span className="text-gradient">Unstoppable Growth</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-6 sm:p-8 rounded-2xl glass neu hover:border-primary/30 transition-all duration-500 overflow-hidden glow-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl neu-icon flex items-center justify-center group-hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] transition-all duration-500">
                    <s.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground glass-primary rounded-full px-2 sm:px-3 py-1">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4 sm:mb-5">{s.title}</h3>

                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
