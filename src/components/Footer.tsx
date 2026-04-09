import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import tuugLogo from "@/assets/tuug-logo.jpeg";

export default function Footer() {
  return (
    <footer className="border-t border-border glass-strong">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={tuugLogo} alt="TUUG" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading text-xl font-bold">TUUG</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Together We Grow. A performance-driven growth partner for brands that want real results.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/tuug.__" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg neu-icon flex items-center justify-center hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919384538848" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg neu-icon flex items-center justify-center hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] hover:text-primary transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:info.tuug@gmail.com" className="w-10 h-10 rounded-lg neu-icon flex items-center justify-center hover:shadow-[inset_0_0_12px_hsl(0_80%_55%/0.15)] hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["About", "Services", "TuugCRM", "Results", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info.tuug@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                WhatsApp Us
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TUUG. All rights reserved.</p>
          <p>Together We Grow.</p>
        </div>
      </div>
    </footer>
  );
}
