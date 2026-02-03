import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

// ========================================
// REDIGERA DINA ERBJUDANDEN HÄR NEDAN
// Edit your offers here below
// ========================================

const offers = [
  {
    id: 1,
    // Bild - ändra sökvägen till din egen bild
    image: "/placeholder.svg",
    // Pris eller rabatt att visa
    discount: "-30%",
    // Titlar på olika språk
    title: {
      sv: "Färsk Halal Kyckling",
      ar: "دجاج حلال طازج",
      en: "Fresh Halal Chicken",
    },
    // Beskrivningar på olika språk
    description: {
      sv: "Hela kycklingen, perfekt för helgen",
      ar: "دجاجة كاملة، مثالية لعطلة نهاية الأسبوع",
      en: "Whole chicken, perfect for the weekend",
    },
    // Ordinarie pris
    originalPrice: "89 kr/kg",
    // Rabatterat pris
    salePrice: "59 kr/kg",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    discount: "-25%",
    title: {
      sv: "Premium Basmatiris",
      ar: "أرز بسمتي فاخر",
      en: "Premium Basmati Rice",
    },
    description: {
      sv: "5kg säck av högsta kvalitet",
      ar: "كيس 5 كجم من أعلى جودة",
      en: "5kg bag of highest quality",
    },
    originalPrice: "149 kr",
    salePrice: "109 kr",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    discount: "-20%",
    title: {
      sv: "Arabiska Kryddor Mix",
      ar: "مزيج التوابل العربية",
      en: "Arabic Spice Mix",
    },
    description: {
      sv: "Zaatar, sumak och baharat",
      ar: "زعتر، سماق وبهارات",
      en: "Zaatar, sumac and baharat",
    },
    originalPrice: "79 kr",
    salePrice: "59 kr",
  },
];

// ========================================

const WeeklyOffers = () => {
  const { t, language, dir } = useLanguage();

  return (
    <section id="erbjudanden" className="py-20 bg-muted/50" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4" />
            <span className="font-medium">{t("offers.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("offers.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("offers.subtitle")}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 bg-card border-border"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Discount Badge */}
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg px-3 py-1 font-bold">
                  {offer.discount}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {offer.title[language]}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {offer.description[language]}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">
                    {offer.salePrice}
                  </span>
                  <span className="text-muted-foreground line-through">
                    {offer.originalPrice}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-card"
          >
            {t("offers.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeeklyOffers;
