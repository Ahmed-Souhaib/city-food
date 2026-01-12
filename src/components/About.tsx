import { Users, Award, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion för mat",
    description: "Vi älskar det vi gör och det syns i varje produkt vi erbjuder.",
  },
  {
    icon: Award,
    title: "Kvalitet först",
    description: "Vi väljer noggrant ut våra leverantörer för att garantera bästa kvalitet.",
  },
  {
    icon: Leaf,
    title: "Färska varor",
    description: "Dagsleveranser säkerställer att du alltid får de färskaste produkterna.",
  },
  {
    icon: Users,
    title: "Familjeägd",
    description: "Ett familjeföretag som värnar om personlig service och gemenskap.",
  },
];

const About = () => {
  return (
    <section id="om-oss" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Om oss
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Din lokala matbutik <br />
              <span className="text-primary">sedan 2009</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                City Food grundades 2009 med en vision att erbjuda Växjös invånare 
                autentiska smaker från Mellanöstern och Medelhavet. Vad som började 
                som en liten familjebutik har vuxit till en destination för alla 
                som söker kvalitetsprodukter och äkta smaker.
              </p>
              <p>
                Med över 15 års erfarenhet och ett team på 12 dedikerade medarbetare 
                fortsätter vi att växa och utvecklas. Vårt mål är enkelt: att erbjuda 
                bästa möjliga produkter till rättvisa priser, med service som får 
                dig att känna dig som hemma.
              </p>
              <p>
                Vi importerar direkt från pålitliga producenter i Libanon, Turkiet, 
                Marocko och många andra länder för att säkerställa autenticitet 
                och kvalitet i varje produkt.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="h-16 w-1 bg-primary rounded-full" />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  City Food Växjö AB
                </p>
                <p className="text-muted-foreground text-sm">
                  Org.nr: 556779-3905
                </p>
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl shadow-soft card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
