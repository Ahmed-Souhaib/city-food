import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "sv" | "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  sv: {
    // Navigation
    "nav.home": "Hem",
    "nav.offers": "Veckans Erbjudanden",
    "nav.products": "Sortiment",
    "nav.about": "Om oss",
    "nav.gallery": "Galleri",
    "nav.contact": "Kontakt",
    
    // Header
    "header.open": "Öppet: Mån-Sön 08:00-21:00",
    "header.tagline": "Arabisk livsmedelsbutik i Växjö",
    
    // Hero
    "hero.title": "Äkta arabisk och orientalisk mat i hjärtat av Växjö",
    "hero.subtitle": "Kryddor, ris, halal-kött, bröd och delikatesser från Mellanöstern",
    "hero.cta": "Besök oss idag",
    "hero.products": "Se vårt sortiment",
    "hero.trust.fresh": "Färska varor dagligen",
    "hero.trust.halal": "Halal-certifierat",
    "hero.trust.local": "Lokalt i Växjö",
    
    // Categories
    "categories.title": "Vårt Sortiment",
    "categories.subtitle": "Upptäck vårt breda utbud av autentiska arabiska och orientaliska produkter",
    "categories.rice": "Ris & Spannmål",
    "categories.rice.desc": "Premium basmatiris, bulgur, couscous och mer",
    "categories.spices": "Kryddor & Smaksättare",
    "categories.spices.desc": "Zaatar, sumak, kardemumma, spiskummin och mer",
    "categories.canned": "Konserver & Tillbehör",
    "categories.canned.desc": "Tahini, hummus, vinblad, oliver och mer",
    "categories.halal": "Halal-kött & Frysvaror",
    "categories.halal.desc": "Färsk kyckling, nöt, lamm och shawarma",
    "categories.bread": "Bröd & Mejeri",
    "categories.bread.desc": "Pitabröd, libabröd, halloumi och feta",
    "categories.sweets": "Sötsaker & Drycker",
    "categories.sweets.desc": "Baklava, dadlar, arabiskt kaffe och te",
    
    // About
    "about.title": "Om City Food",
    "about.subtitle": "Din lokala butik för äkta arabiska och orientaliska smaker",
    "about.p1": "Välkommen till City Food – din destination för autentiska arabiska och orientaliska livsmedel i Växjö. Vi har noggrant valt ut produkter av högsta kvalitet för att ge dig den äkta smaken av Mellanöstern.",
    "about.p2": "Vår butik erbjuder ett brett sortiment av halal-certifierat kött, färska grönsaker, kryddor, ris, bröd och traditionella delikatesser. Vi strävar efter att vara mer än bara en butik – vi vill vara en mötesplats för alla som älskar god mat.",
    "about.feature.quality": "Kvalitetsprodukter",
    "about.feature.quality.desc": "Noggrant utvalda varor från pålitliga leverantörer",
    "about.feature.halal": "Halal-certifierat",
    "about.feature.halal.desc": "Stort utbud av halal-kött och produkter",
    "about.feature.fresh": "Färska varor",
    "about.feature.fresh.desc": "Dagliga leveranser av frukt, grönt och bröd",
    "about.feature.service": "Personlig service",
    "about.feature.service.desc": "Kunnig personal som hjälper dig hitta rätt",
    
    // Gallery
    "gallery.title": "Galleri",
    "gallery.subtitle": "Ta en titt på vår butik och vårt sortiment",
    "gallery.store": "Vår butik",
    "gallery.vegetables": "Färska grönsaker",
    "gallery.fruits": "Färsk frukt",
    "gallery.exotic": "Exotiska varor",
    "gallery.offers": "Veckans erbjudanden",
    
    // Contact
    "contact.title": "Kontakta Oss",
    "contact.subtitle": "Vi ser fram emot att välkomna dig till vår butik",
    "contact.visit": "Besök oss",
    "contact.address": "Adress",
    "contact.phone": "Telefon",
    "contact.email": "E-post",
    "contact.hours": "Öppettider",
    "contact.hours.value": "Måndag - Söndag: 08:00 - 21:00",
    "contact.form.title": "Skicka ett meddelande",
    "contact.form.name": "Namn",
    "contact.form.email": "E-post",
    "contact.form.message": "Meddelande",
    "contact.form.submit": "Skicka meddelande",
    "contact.form.success": "Meddelandet har skickats!",
    
    // Footer
    "footer.tagline": "Din destination för äkta arabiska och orientaliska livsmedel i Växjö.",
    "footer.navigation": "Navigation",
    "footer.contact": "Kontakt",
    "footer.hours": "Öppettider",
    "footer.rights": "Alla rättigheter förbehållna.",
    
    // Weekly Offers
    "offers.badge": "Spara pengar",
    "offers.title": "Veckans Erbjudanden",
    "offers.subtitle": "Missa inte våra fantastiska erbjudanden - gäller endast denna vecka!",
    "offers.cta": "Besök butiken",
  },
  
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.offers": "عروض الأسبوع",
    "nav.products": "المنتجات",
    "nav.about": "من نحن",
    "nav.gallery": "معرض الصور",
    "nav.contact": "اتصل بنا",
    
    // Header
    "header.open": "مفتوح: الإثنين-الأحد 08:00-21:00",
    "header.tagline": "متجر أغذية عربي في فاكشو",
    
    // Hero
    "hero.title": "طعام عربي وشرقي أصيل في قلب فاكشو",
    "hero.subtitle": "التوابل والأرز واللحوم الحلال والخبز والمأكولات الشهية من الشرق الأوسط",
    "hero.cta": "زورونا اليوم",
    "hero.products": "تصفح منتجاتنا",
    "hero.trust.fresh": "منتجات طازجة يومياً",
    "hero.trust.halal": "معتمد حلال",
    "hero.trust.local": "محلي في فاكشو",
    
    // Categories
    "categories.title": "منتجاتنا",
    "categories.subtitle": "اكتشف مجموعتنا الواسعة من المنتجات العربية والشرقية الأصيلة",
    "categories.rice": "الأرز والحبوب",
    "categories.rice.desc": "أرز بسمتي فاخر، برغل، كسكس والمزيد",
    "categories.spices": "التوابل والنكهات",
    "categories.spices.desc": "زعتر، سماق، هيل، كمون والمزيد",
    "categories.canned": "المعلبات والإضافات",
    "categories.canned.desc": "طحينة، حمص، ورق عنب، زيتون والمزيد",
    "categories.halal": "لحوم حلال ومجمدات",
    "categories.halal.desc": "دجاج طازج، لحم بقر، لحم ضأن وشاورما",
    "categories.bread": "الخبز والألبان",
    "categories.bread.desc": "خبز بيتا، خبز لبناني، حلوم وجبنة فيتا",
    "categories.sweets": "الحلويات والمشروبات",
    "categories.sweets.desc": "بقلاوة، تمر، قهوة عربية وشاي",
    
    // About
    "about.title": "عن City Food",
    "about.subtitle": "متجرك المحلي للنكهات العربية والشرقية الأصيلة",
    "about.p1": "مرحباً بكم في City Food - وجهتكم للأغذية العربية والشرقية الأصيلة في فاكشو. اخترنا بعناية منتجات عالية الجودة لنقدم لكم الطعم الأصيل للشرق الأوسط.",
    "about.p2": "يقدم متجرنا مجموعة واسعة من اللحوم الحلال المعتمدة والخضروات الطازجة والتوابل والأرز والخبز والمأكولات التقليدية الشهية. نسعى لأن نكون أكثر من مجرد متجر - نريد أن نكون مكان لقاء لجميع محبي الطعام اللذيذ.",
    "about.feature.quality": "منتجات عالية الجودة",
    "about.feature.quality.desc": "منتجات مختارة بعناية من موردين موثوقين",
    "about.feature.halal": "معتمد حلال",
    "about.feature.halal.desc": "مجموعة كبيرة من اللحوم والمنتجات الحلال",
    "about.feature.fresh": "منتجات طازجة",
    "about.feature.fresh.desc": "توصيل يومي للفواكه والخضروات والخبز",
    "about.feature.service": "خدمة شخصية",
    "about.feature.service.desc": "فريق عمل ذو خبرة لمساعدتك",
    
    // Gallery
    "gallery.title": "معرض الصور",
    "gallery.subtitle": "ألقِ نظرة على متجرنا ومنتجاتنا",
    "gallery.store": "متجرنا",
    "gallery.vegetables": "خضروات طازجة",
    "gallery.fruits": "فواكه طازجة",
    "gallery.exotic": "منتجات غريبة",
    "gallery.offers": "عروض الأسبوع",
    
    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "نتطلع للترحيب بكم في متجرنا",
    "contact.visit": "زورونا",
    "contact.address": "العنوان",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.hours": "ساعات العمل",
    "contact.hours.value": "الإثنين - الأحد: 08:00 - 21:00",
    "contact.form.title": "أرسل رسالة",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.success": "تم إرسال الرسالة!",
    
    // Footer
    "footer.tagline": "وجهتكم للأغذية العربية والشرقية الأصيلة في فاكشو.",
    "footer.navigation": "التنقل",
    "footer.contact": "اتصل بنا",
    "footer.hours": "ساعات العمل",
    "footer.rights": "جميع الحقوق محفوظة.",
    
    // Weekly Offers
    "offers.badge": "وفر المال",
    "offers.title": "عروض الأسبوع",
    "offers.subtitle": "لا تفوت عروضنا الرائعة - صالحة هذا الأسبوع فقط!",
    "offers.cta": "زوروا المتجر",
  },
  
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.offers": "Weekly Offers",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    
    // Header
    "header.open": "Open: Mon-Sun 08:00-21:00",
    "header.tagline": "Arabic grocery store in Växjö",
    
    // Hero
    "hero.title": "Authentic Arabic and Oriental Food in the Heart of Växjö",
    "hero.subtitle": "Spices, rice, halal meat, bread and delicacies from the Middle East",
    "hero.cta": "Visit Us Today",
    "hero.products": "See Our Products",
    "hero.trust.fresh": "Fresh products daily",
    "hero.trust.halal": "Halal certified",
    "hero.trust.local": "Local in Växjö",
    
    // Categories
    "categories.title": "Our Products",
    "categories.subtitle": "Discover our wide range of authentic Arabic and Oriental products",
    "categories.rice": "Rice & Grains",
    "categories.rice.desc": "Premium basmati rice, bulgur, couscous and more",
    "categories.spices": "Spices & Seasonings",
    "categories.spices.desc": "Zaatar, sumac, cardamom, cumin and more",
    "categories.canned": "Canned Goods & Condiments",
    "categories.canned.desc": "Tahini, hummus, vine leaves, olives and more",
    "categories.halal": "Halal Meat & Frozen",
    "categories.halal.desc": "Fresh chicken, beef, lamb and shawarma",
    "categories.bread": "Bread & Dairy",
    "categories.bread.desc": "Pita bread, flatbread, halloumi and feta",
    "categories.sweets": "Sweets & Beverages",
    "categories.sweets.desc": "Baklava, dates, Arabic coffee and tea",
    
    // About
    "about.title": "About City Food",
    "about.subtitle": "Your local store for authentic Arabic and Oriental flavors",
    "about.p1": "Welcome to City Food – your destination for authentic Arabic and Oriental groceries in Växjö. We have carefully selected the highest quality products to bring you the true taste of the Middle East.",
    "about.p2": "Our store offers a wide range of halal-certified meat, fresh vegetables, spices, rice, bread and traditional delicacies. We strive to be more than just a store – we want to be a meeting place for everyone who loves good food.",
    "about.feature.quality": "Quality Products",
    "about.feature.quality.desc": "Carefully selected goods from reliable suppliers",
    "about.feature.halal": "Halal Certified",
    "about.feature.halal.desc": "Wide range of halal meat and products",
    "about.feature.fresh": "Fresh Products",
    "about.feature.fresh.desc": "Daily deliveries of fruits, vegetables and bread",
    "about.feature.service": "Personal Service",
    "about.feature.service.desc": "Knowledgeable staff to help you find what you need",
    
    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "Take a look at our store and our products",
    "gallery.store": "Our Store",
    "gallery.vegetables": "Fresh Vegetables",
    "gallery.fruits": "Fresh Fruits",
    "gallery.exotic": "Exotic Products",
    "gallery.offers": "Weekly Offers",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We look forward to welcoming you to our store",
    "contact.visit": "Visit Us",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Opening Hours",
    "contact.hours.value": "Monday - Sunday: 08:00 - 21:00",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message sent successfully!",
    
    // Footer
    "footer.tagline": "Your destination for authentic Arabic and Oriental groceries in Växjö.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.hours": "Opening Hours",
    "footer.rights": "All rights reserved.",
    
    // Weekly Offers
    "offers.badge": "Save Money",
    "offers.title": "Weekly Offers",
    "offers.subtitle": "Don't miss our amazing offers - valid this week only!",
    "offers.cta": "Visit the Store",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sv");
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  const dir = language === "ar" ? "rtl" : "ltr";
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
