import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Instagram,
  MessageCircle,
  Monitor,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Video,
} from "lucide-react";

const syllabus = [
  { day: 1, title: "Introduction to Digital Marketing for Boutiques" },
  { day: 2, title: "Boutique Brand Structure" },
  { day: 3, title: "Social Media Optimisation" },
  { day: 4, title: "Content Strategy for Boutiques" },
  { day: 5, title: "Content Writing Structure" },
  { day: 6, title: "Video Shooting for Reels" },
  { day: 7, title: "Video Editing Basics" },
  { day: 8, title: "Instagram Growth Strategy" },
  { day: 9, title: "Comment & DM Conversions" },
  { day: 10, title: "Automation & WhatsApp Business" },
  { day: 11, title: "Meta Ads Basics" },
  { day: 12, title: "Meta Ads Advanced + Boutique Sales Funnel" },
];

const highlights = [
  "Instagram growth strategies for boutiques",
  "Content creation using mobile",
  "Viral reel strategies",
  "DM conversion techniques",
  "WhatsApp catalogue & automation",
  "Meta Ads for boutique sales",
  "Meta Ads Advanced + Boutique Sales Funnel",
];

const features = [
  { icon: Calendar, title: "12 Days", desc: "Intensive hands-on training" },
  { icon: Monitor, title: "Online / Offline / Hybrid", desc: "Learn your way" },
  { icon: GraduationCap, title: "Certificate", desc: "On course completion" },
  { icon: MessageCircle, title: "Lifetime Support", desc: "Community & doubt clearing" },
];

function SyllabusCard({ item, index }: { item: typeof syllabus[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`group relative p-4 sm:p-5 rounded-xl glass neu-sm hover:border-primary/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg neu-icon flex items-center justify-center flex-shrink-0 group-hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] transition-all duration-500">
          <span className="text-sm sm:text-base font-heading font-bold text-primary">
            {String(item.day).padStart(2, "0")}
          </span>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary/70 font-semibold mb-1">
            Day {item.day}
          </p>
          <h4 className="text-sm sm:text-base font-heading font-semibold leading-snug">
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default function BoutiqueCourse() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);
  const { ref: highlightRef, isVisible: highlightVisible } = useScrollReveal(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0_80%_55%/0.12)_0%,_transparent_60%)]" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

        <div ref={heroRef} className="container mx-auto px-4 sm:px-6 relative text-center max-w-4xl">
          <span
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full glass-primary transition-all duration-700 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            New Course
          </span>

          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Digital Marketing
            <br />
            <span className="text-gradient">for Boutique Owners</span>
          </h1>

          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 transition-all duration-700 delay-200 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A 12-day intensive course designed to help boutique owners master Instagram, content creation, Meta Ads, and sales funnels — from zero to profitable.
          </p>

          {/* Feature pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 transition-all duration-700 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass neu-sm"
              >
                <f.icon className="w-4 h-4 text-primary" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold">{f.title}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://wa.me/919384538848?text=Hi%2C%20I%27m%20interested%20in%20the%20Boutique%20Marketing%20Course"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 animate-pulse-glow w-full sm:w-auto justify-center neu-sm"
            >
              <Phone className="w-4 h-4" />
              Enroll Now
            </a>
            <a
              href="#syllabus"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass text-foreground font-semibold text-sm sm:text-base hover:bg-secondary/30 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Syllabus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Course Syllabus
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold">
              12 Days to <span className="text-gradient">Transform</span> Your Boutique
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {syllabus.map((item, i) => (
              <SyllabusCard key={item.day} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div ref={highlightRef} className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span
                  className={`inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${
                    highlightVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Course Highlights
                </span>
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6 transition-all duration-700 delay-100 ${
                    highlightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  Everything You Need to{" "}
                  <span className="text-gradient">Grow Online</span>
                </h2>
                <p
                  className={`text-sm sm:text-base text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
                    highlightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  This isn't generic digital marketing. Every module is crafted specifically for boutique owners who want real sales — not just followers.
                </p>
              </div>

              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <div
                    key={h}
                    className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl glass neu-sm transition-all duration-500 ${
                      highlightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    }`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold">
              Who Is This <span className="text-gradient">For?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Target, text: "Boutique owners struggling to get online sales" },
              { icon: Instagram, text: "Anyone wanting to grow their boutique on Instagram" },
              { icon: Video, text: "Owners who want to create reels & content themselves" },
              { icon: TrendingUp, text: "Boutiques ready to run profitable Meta Ads" },
            ].map((item, i) => {
              const { ref, isVisible } = useScrollReveal(0.1);
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`text-center p-5 sm:p-6 rounded-2xl glass neu hover:border-primary/20 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl neu-icon flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_80%_55%/0.1)_0%,_transparent_60%)]" />
        <div ref={ctaRef} className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl glass-strong neu">
            <h2
              className={`text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 transition-all duration-700 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ready to Take Your Boutique{" "}
              <span className="text-gradient">Online?</span>
            </h2>
            <p
              className={`text-muted-foreground mb-8 max-w-lg mx-auto transition-all duration-700 delay-100 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Limited seats per batch. Enroll now and start building your boutique's digital presence.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="https://wa.me/919384538848?text=Hi%2C%20I%27m%20interested%20in%20the%20Boutique%20Marketing%20Course"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 animate-pulse-glow neu-sm"
              >
                <Phone className="w-4 h-4" />
                Enroll via WhatsApp
              </a>
              <a
                href="/"
                className="px-8 py-3.5 rounded-xl glass text-foreground font-semibold hover:bg-secondary/30 transition-colors inline-flex items-center justify-center gap-2"
              >
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
