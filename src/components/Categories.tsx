import { Wheat, Leaf, Package, Drumstick, Croissant, Candy } from "lucide-react";

const categories = [
  {
    icon: Wheat,
    title: "Ris & Spannmål",
    items: ["Basmatiris", "Bulgur", "Couscous", "Linser"],
  },
  {
    icon: Leaf,
    title: "Kryddor & Smaksättare",
    items: ["Za'atar", "Sumak", "Kardemumma", "Spiskummin"],
  },
  {
    icon: Package,
    title: "Konserver & Tillbehör",
    items: ["Tahini", "Hummus", "Vinblad", "Oliver"],
  },
  {
    icon: Drumstick,
    title: "Halal-kött & Frysvaror",
    items: ["Kyckling", "Nötkött", "Lamm", "Shawarma"],
  },
  {
    icon: Croissant,
    title: "Bröd & Mejeri",
    items: ["Pitabröd", "Libabröd", "Halloumi", "Fetaost"],
  },
  {
    icon: Candy,
    title: "Sötsaker & Drycker",
    items: ["Baklava", "Dadlar", "Arabiskt kaffe", "Te"],
  },
];

const Categories = () => {
  return (
    <section id="sortiment" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Vårt sortiment
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Allt du behöver för det orientaliska köket
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upptäck vårt breda sortiment av högkvalitativa produkter från Mellanöstern, 
            Nordafrika och hela Medelhavsregionen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-xl p-8 shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {category.title}
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
            Och mycket mer...
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            Utöver livsmedel erbjuder vi även hushållsartiklar, köksredskap, 
            presenter och allt du behöver för att laga autentisk mat hemma.
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-background text-foreground hover:bg-background/90 transition-all duration-300 font-medium px-8 py-4 rounded-lg shadow-soft"
          >
            Besök oss för att upptäcka allt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
