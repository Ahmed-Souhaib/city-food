import { useState } from "react";
import { Menu, X, MapPin, Phone, Clock, Tag } from "lucide-react";
import logo from "@/assets/logo.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, dir } = useLanguage();

  const navLinks = [
    { href: "#hem", label: t("nav.home") },
    { href: "#sortiment", label: t("nav.products") },
    { href: "#om-oss", label: t("nav.about") },
    { href: "#galleri", label: t("nav.gallery") },
    { href: "#kontakt", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" dir={dir}>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center lg:justify-between items-center text-sm gap-x-6 gap-y-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Smedjegatan 24, 352 46 Växjö</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a href="tel:+46733601785" className="hover:underline">+46 73 360 17 85</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{t("header.open")}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hem" className="flex items-center">
            <img 
              src={logo} 
              alt="City Food - Arabisk livsmedelsbutik i Växjö" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Special CTA Button for Weekly Offers */}
            <a href="#erbjudanden">
              <Button variant="default" className="gap-2">
                <Tag className="w-4 h-4" />
                {t("nav.offers")}
              </Button>
            </a>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <ul className="lg:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {/* Special CTA for mobile */}
            <li>
              <a
                href="#erbjudanden"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tag className="w-4 h-4" />
                {t("nav.offers")}
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
