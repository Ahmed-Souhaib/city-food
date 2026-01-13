import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, dir, language } = useLanguage();

  const navLinks = [
    { href: "#hem", labelKey: "nav.home" },
    { href: "#sortiment", labelKey: "nav.products" },
    { href: "#om-oss", labelKey: "nav.about" },
    { href: "#galleri", labelKey: "nav.gallery" },
    { href: "#kontakt", labelKey: "nav.contact" },
  ];

  return (
    <footer className="bg-foreground text-background" dir={dir}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="City Food" 
                className="h-14 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-background/80 max-w-md leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t("footer.navigation")}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/dir//Smedjegatan+24,+352+46+Växjö"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Smedjegatan 24<br />352 46 Växjö
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+46733601785"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  +46 73 360 17 85
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  {language === "ar" ? "الإثنين-الأحد: 08:00-21:00" : language === "en" ? "Mon-Sun: 08:00-21:00" : "Mån-Sön: 08:00-21:00"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} City Food – Växjö. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
