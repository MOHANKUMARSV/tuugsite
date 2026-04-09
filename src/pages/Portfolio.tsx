import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, TrendingUp, Users, BarChart3, Zap, Globe, ShoppingBag } from "lucide-react";

const caseStudies = [
  {
    client: "Luxe Atelier",
    industry: "Fashion & Lifestyle",
    icon: ShoppingBag,
    services: ["Branding", "Performance Marketing", "Shopify Store"],
    challenge: "A premium fashion brand struggling with inconsistent branding, low online visibility, and zero e-commerce presence.",
    solution: "Complete brand overhaul, launched a Shopify store with optimized product pages, and ran targeted Instagram & Meta ad campaigns.",
    results: [
      { label: "Revenue Growth", value: "340%", icon: TrendingUp },
      { label: "Monthly Orders", value: "500+", icon: BarChart3 },
      { label: "New Customers", value: "2.8K", icon: Users },
    ],
    before: ["No online store", "Inconsistent brand identity", "Zero paid advertising", "Manual order management"],
    after: ["High-converting Shopify store", "Premium cohesive branding", "Profitable ad campaigns (4.2x ROAS)", "Automated order & inventory system"],
    color: "from-primary to-orange-500",
  },
  {
    client: "FreshBite Foods",
    industry: "Food & Beverage",
    icon: Zap,
    services: ["Landing Page", "Lead Generation", "Automation"],
    challenge: "A growing food delivery brand with no digital funnel, relying entirely on word-of-mouth and manual WhatsApp orders.",
    solution: "Built a high-converting landing page, set up automated lead capture with WhatsApp integration, and launched geo-targeted ad campaigns.",
    results: [
      { label: "Lead Conversion", value: "28%", icon: TrendingUp },
      { label: "Daily Orders", value: "120+", icon: BarChart3 },
      { label: "Cost Per Lead", value: "₹18", icon: Users },
    ],
    before: ["No website or landing page", "Manual WhatsApp-only orders", "No lead tracking system", "Unstructured marketing spend"],
    after: ["Optimized landing page with 28% CVR", "Automated order flow via WhatsApp API", "CRM-tracked lead pipeline", "Structured ad spend with clear ROI"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    client: "UrbanNest Interiors",
    industry: "Home & Interior Design",
    icon: Globe,
    services: ["Website", "Content Strategy", "Instagram Growth"],
    challenge: "An interior design studio with a strong offline reputation but negligible online presence and no content strategy.",
    solution: "Designed a portfolio website, created a reel-first Instagram strategy, and built a content calendar showcasing transformations.",
    results: [
      { label: "Instagram Growth", value: "15K+", icon: TrendingUp },
      { label: "Inbound Leads/mo", value: "80+", icon: BarChart3 },
      { label: "Engagement Rate", value: "8.4%", icon: Users },
    ],
    before: ["No website or portfolio", "200 Instagram followers", "No content strategy", "Leads only via referrals"],
    after: ["Stunning portfolio website", "15K+ engaged followers in 6 months", "Consistent reel & carousel strategy", "80+ monthly inbound inquiries"],
    color: "from-violet-500 to-purple-500",
  },
  {
    client: "PeakFit Gym",
    industry: "Fitness & Wellness",
    icon: Zap,
    services: ["App Development", "TuugCRM", "Performance Ads"],
    challenge: "A local gym chain losing members due to poor tracking, no digital engagement, and outdated membership management.",
    solution: "Built a custom member app, integrated TuugCRM for member management, and launched hyper-local Meta campaigns for new sign-ups.",
    results: [
      { label: "Member Retention", value: "92%", icon: TrendingUp },
      { label: "New Sign-ups/mo", value: "150+", icon: BarChart3 },
      { label: "Cost Per Sign-up", value: "₹85", icon: Users },
    ],
    before: ["Paper-based member tracking", "40% annual member churn", "No digital marketing", "No member communication system"],
    after: ["Custom app with workout tracking", "92% retention via automated engagement", "Profitable local ad campaigns", "TuugCRM-powered member management"],
    color: "from-amber-500 to-red-500",
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const Icon = study.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="rounded-2xl glass neu overflow-hidden group hover:border-primary/30 transition-colors duration-500">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-border/50">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold">{study.client}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{study.industry}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.services.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full text-xs font-medium glass-primary">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Challenge</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Solution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="px-6 sm:px-8 pb-2">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {study.results.map((r) => (
              <div key={r.label} className="text-center p-3 sm:p-4 rounded-xl neu-inset">
                <div className="text-xl sm:text-2xl font-heading font-bold text-gradient">{r.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl neu-inset">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                Before
              </h4>
              <ul className="space-y-2">
                {study.before.map((b) => (
                  <li key={b} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">✕</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl glass-primary">
              <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                After
              </h4>
              <ul className="space-y-2">
                {study.after.map((a) => (
                  <li key={a} className="text-xs sm:text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0_80%_55%/0.08)_0%,_transparent_60%)]" />
        <div ref={heroRef} className="container mx-auto px-4 sm:px-6 relative text-center max-w-3xl">
          <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${heroVisible ? "opacity-100" : "opacity-0"}`}>
            Portfolio
          </span>
          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Real Work. <span className="text-gradient">Real Results.</span>
          </h1>
          <p className={`text-base sm:text-lg text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We don't show vanity metrics. Here's how we've transformed businesses with branding, systems, and performance marketing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.client} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-4 sm:px-6 relative text-center">
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl glass-strong neu">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's build a growth system tailored to your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 neu-sm">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/" className="px-8 py-3 rounded-xl glass text-foreground font-semibold hover:bg-secondary/30 transition-colors inline-flex items-center justify-center gap-2">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
