import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ========================================
// REDIGERA DINA ERBJUDANDEN HÄR NEDAN
// Edit your offers here below
// ========================================

const offers = [
  {
    id: 1,
    // Image – replace with your own path
    image: "/placeholder.svg",
    // Discount label (optional)
    discount: "",
    // Titles in different languages
    title: {
      sv: "Exempelprodukt A",
      ar: "منتج تجريبي أ",
      en: "Example Product A",
    },
    // Descriptions in different languages
    description: {
      sv: "Detta är en exempelbeskrivning",
      ar: "هذا وصف تجريبي",
      en: "This is an example description",
    },
    // Original price
    originalPrice: "",
    // Sale price
    salePrice: "",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    discount: "",
    title: {
      sv: "Exempelprodukt B",
      ar: "منتج تجريبي ب",
      en: "Example Product B",
    },
    description: {
      sv: "Exempelbeskrivning för produkt B",
      ar: "وصف تجريبي للمنتج ب",
      en: "Example description for product B",
    },
    originalPrice: "",
    salePrice: "",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    discount: "",
    title: {
      sv: "Exempelprodukt C",
      ar: "منتج تجريبي ج",
      en: "Example Product C",
    },
    description: {
      sv: "Ytterligare en exempelbeskrivning",
      ar: "وصف تجريبي إضافي",
      en: "Another example description",
    },
    originalPrice: "",
    salePrice: "",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    discount: "",
    title: {
      sv: "Exempelprodukt D",
      ar: "منتج تجريبي د",
      en: "Example Product D",
    },
    description: {
      sv: "Exempeltext för produkt D",
      ar: "نص تجريبي للمنتج د",
      en: "Example text for product D",
    },
    originalPrice: "",
    salePrice: "",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    discount: "",
    title: {
      sv: "Exempelprodukt E",
      ar: "منتج تجريبي هـ",
      en: "Example Product E",
    },
    description: {
      sv: "Exempeltext för produkt E",
      ar: "نص تجريبي للمنتج هـ",
      en: "Example text for product E",
    },
    originalPrice: "",
    salePrice: "",
  },
  {
    id: 6,
    image: "/placeholder.svg",
    discount: "",
    title: {
      sv: "Exempelprodukt F",
      ar: "منتج تجريبي و",
      en: "Example Product F",
    },
    description: {
      sv: "Exempeltext för produkt F",
      ar: "نص تجريبي للمنتج و",
      en: "Example text for product F",
    },
    originalPrice: "",
    salePrice: "",
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
