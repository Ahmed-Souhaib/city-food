import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, dir, language } = useLanguage();

  const features = language === "ar"
    ? [
        "متخصصون في المنتجات العربية والشرقية",
        "مجموعة كبيرة من المنتجات الحلال المعتمدة",
        "منتجات طازجة يتم توصيلها يومياً",
        "متجر محلي ومُدار محلياً",
        "فريق عمل ذو خبرة ومساعد",
        "أسعار تنافسية",
      ]
    : language === "en"
    ? [
        "Specialized in Arabic and Oriental products",
        "Wide selection of halal-certified goods",
        "Fresh products delivered daily",
        "Locally owned and operated",
        "Knowledgeable and helpful staff",
        "Competitive prices",
      ]
    : [
        "Specialiserade på arabiska och orientaliska produkter",
        "Stort urval av halal-certifierade varor",
        "Färska produkter levereras dagligen",
        "Lokalt ägd och driven butik",
        "Kunnig och hjälpsam personal",
        "Konkurrensmässiga priser",
      ];

  return (
    <section id="om-oss" className="py-24 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("about.title")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {language === "ar" ? (
                <>متجرك المحلي العربي<br /><span className="text-primary">للأغذية</span></>
              ) : language === "en" ? (
                <>Your local Arabic<br /><span className="text-primary">grocery store</span></>
              ) : (
                <>Din lokala arabiska <br /><span className="text-primary">livsmedelsbutik</span></>
              )}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* Features list */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats and highlight */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">1000+</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {language === "ar" ? "منتج" : language === "en" ? "Products" : "Produkter"}
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">7</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {language === "ar" ? "أيام مفتوح" : language === "en" ? "Days open" : "Dagar öppet"}
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">13h</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {language === "ar" ? "يومياً" : language === "en" ? "Per day" : "Per dag"}
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">100%</p>
                  <p className="text-muted-foreground text-sm mt-1">Halal</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {language === "ar" ? "وعدنا لكم" : language === "en" ? "Our promise to you" : "Vårt löfte till dig"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "ar"
                  ? "نضمن منتجات طازجة وأسعار عادلة وتجربة تسوق تشعرك بأنك في بيتك. لم تجد ما تبحث عنه؟ اسألنا - سنبذل قصارى جهدنا لتوفيره لك!"
                  : language === "en"
                  ? "We guarantee fresh products, fair prices and a shopping experience that feels like home. Can't find what you're looking for? Ask us – we'll do our best to get it for you!"
                  : "Vi garanterar färska produkter, schyssta priser och en shoppingupplevelse som känns som hemma. Kommer du inte hittar det du söker? Fråga oss – vi gör vårt bästa för att ordna det åt dig!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
