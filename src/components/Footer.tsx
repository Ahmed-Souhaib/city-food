import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">CF</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">City Food</h3>
                <p className="text-sm text-background/60">Växjö sedan 2009</p>
              </div>
            </div>
            <p className="text-background/80 max-w-md leading-relaxed mb-6">
              Din destination för autentiska smaker från Mellanöstern och Medelhavet. 
              Vi erbjuder ett brett sortiment av livsmedel, kryddor, färskvaror och 
              mycket mer till hela familjen.
            </p>
            <p className="text-sm text-background/60">
              City Food Växjö AB • Org.nr: 556779-3905
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              {[
                { href: "#hem", label: "Hem" },
                { href: "#produkter", label: "Produkter" },
                { href: "#om-oss", label: "Om oss" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/80">
                  Smedjegatan 24<br />352 46 Växjö
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/80">
                  Mån-Lör: 09:00-20:00<br />Sön: 10:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} City Food Växjö AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
