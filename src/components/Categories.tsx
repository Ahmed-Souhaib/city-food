import spicesImage from "@/assets/spices.jpg";
import freshProduceImage from "@/assets/fresh-produce.jpg";
import bakeryImage from "@/assets/bakery.jpg";
import pantryImage from "@/assets/pantry.jpg";

const categories = [
  {
    title: "Kryddor & Örter",
    description: "Autentiska kryddor från hela Mellanöstern – sumak, za'atar, saffran och mycket mer.",
    image: spicesImage,
  },
  {
    title: "Färska Varor",
    description: "Dagsfärska grönsaker, frukt och örter. Kvalitet du kan lita på.",
    image: freshProduceImage,
  },
  {
    title: "Bröd & Bakverk",
    description: "Nybakat pitabröd, tunnbröd, baklava och traditionella arabiska sötsaker.",
    image: bakeryImage,
  },
  {
    title: "Skafferi",
    description: "Olivolja, tahini, inlagda grönsaker, konserver och alla vardagsessentials.",
    image: pantryImage,
  },
];

const Categories = () => {
  return (
    <section id="produkter" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Vårt sortiment
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Upptäck våra produkter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av högkvalitativa livsmedel från Mellanöstern, 
            Medelhavet och hela världen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-xl overflow-hidden shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional product highlights */}
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Mer än bara livsmedel
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Utöver vårt breda sortiment av livsmedel erbjuder vi även:
              </p>
              <ul className="space-y-3">
                {[
                  "Hushållsartiklar och köksredskap",
                  "Presenter och inredningsartiklar",
                  "Tobaksvaror",
                  "Pappersartiklar och förbrukningsvaror",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center">
              <p className="font-display text-5xl font-bold text-primary mb-2">1000+</p>
              <p className="text-foreground font-medium">Produkter i sortimentet</p>
              <p className="text-muted-foreground text-sm mt-2">
                Nya produkter varje vecka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
