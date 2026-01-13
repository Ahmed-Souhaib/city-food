import { Wheat, Leaf, Package, Drumstick, Croissant, Candy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Categories = () => {
  const { t, dir, language } = useLanguage();

  const categories = [
    {
      icon: Wheat,
      titleKey: "categories.rice",
      descKey: "categories.rice.desc",
      items: language === "ar" 
        ? ["أرز بسمتي", "برغل", "كسكس", "عدس"]
        : language === "en"
        ? ["Basmati rice", "Bulgur", "Couscous", "Lentils"]
        : ["Basmatiris", "Bulgur", "Couscous", "Linser"],
    },
    {
      icon: Leaf,
      titleKey: "categories.spices",
      descKey: "categories.spices.desc",
      items: language === "ar"
        ? ["زعتر", "سماق", "هيل", "كمون"]
        : language === "en"
        ? ["Zaatar", "Sumac", "Cardamom", "Cumin"]
        : ["Za'atar", "Sumak", "Kardemumma", "Spiskummin"],
    },
    {
      icon: Package,
      titleKey: "categories.canned",
      descKey: "categories.canned.desc",
      items: language === "ar"
        ? ["طحينة", "حمص", "ورق عنب", "زيتون"]
        : language === "en"
        ? ["Tahini", "Hummus", "Vine leaves", "Olives"]
        : ["Tahini", "Hummus", "Vinblad", "Oliver"],
    },
    {
      icon: Drumstick,
      titleKey: "categories.halal",
      descKey: "categories.halal.desc",
      items: language === "ar"
        ? ["دجاج", "لحم بقر", "لحم ضأن", "شاورما"]
        : language === "en"
        ? ["Chicken", "Beef", "Lamb", "Shawarma"]
        : ["Kyckling", "Nötkött", "Lamm", "Shawarma"],
    },
    {
      icon: Croissant,
      titleKey: "categories.bread",
      descKey: "categories.bread.desc",
      items: language === "ar"
        ? ["خبز بيتا", "خبز لبناني", "حلوم", "جبنة فيتا"]
        : language === "en"
        ? ["Pita bread", "Flatbread", "Halloumi", "Feta cheese"]
        : ["Pitabröd", "Libabröd", "Halloumi", "Fetaost"],
    },
    {
      icon: Candy,
      titleKey: "categories.sweets",
      descKey: "categories.sweets.desc",
      items: language === "ar"
        ? ["بقلاوة", "تمر", "قهوة عربية", "شاي"]
        : language === "en"
        ? ["Baklava", "Dates", "Arabic coffee", "Tea"]
        : ["Baklava", "Dadlar", "Arabiskt kaffe", "Te"],
    },
  ];

  return (
    <section id="sortiment" className="py-24 bg-gradient-warm" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("categories.title")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {language === "ar" ? "كل ما تحتاجه للمطبخ الشرقي" : language === "en" ? "Everything for Oriental Cuisine" : "Allt du behöver för det orientaliska köket"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("categories.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.titleKey}
              className="group bg-card rounded-xl p-8 shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {t(category.titleKey)}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {language === "ar" ? "والمزيد..." : language === "en" ? "And much more..." : "Och mycket mer..."}
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            {language === "ar" 
              ? "بالإضافة إلى المواد الغذائية، نقدم أيضًا أدوات منزلية وأدوات مطبخ وهدايا وكل ما تحتاجه لطهي طعام أصيل في المنزل."
              : language === "en"
              ? "In addition to groceries, we also offer household items, kitchen utensils, gifts and everything you need to cook authentic food at home."
              : "Utöver livsmedel erbjuder vi även hushållsartiklar, köksredskap, presenter och allt du behöver för att laga autentisk mat hemma."}
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-background text-foreground hover:bg-background/90 transition-all duration-300 font-medium px-8 py-4 rounded-lg shadow-soft"
          >
            {language === "ar" ? "زورونا لاكتشاف كل شيء" : language === "en" ? "Visit us to discover everything" : "Besök oss för att upptäcka allt"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
