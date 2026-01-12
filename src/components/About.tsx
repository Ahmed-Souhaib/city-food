import { CheckCircle } from "lucide-react";

const features = [
  "Specialiserade på arabiska och orientaliska produkter",
  "Stort urval av halal-certifierade varor",
  "Färska produkter levereras dagligen",
  "Lokalt ägd och driven butik",
  "Kunnig och hjälpsam personal",
  "Konkurrensmässiga priser",
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
              Din lokala arabiska <br />
              <span className="text-primary">livsmedelsbutik</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Välkommen till City Food – din pålitliga källa för arabiska och orientaliska 
                livsmedel i Växjö. Vi är en lokal butik som brinner för att erbjuda våra 
                kunder de bästa produkterna från Mellanöstern och Medelhavsregionen.
              </p>
              <p>
                Hos oss hittar du allt från färska grönsaker och kryddor till halal-certifierat 
                kött, traditionellt bröd och sötsaker. Vi strävar alltid efter att ha de 
                produkter du behöver för att laga autentiska rätter hemma.
              </p>
              <p>
                Vår passion är att dela med oss av de fantastiska smakerna från våra hemländer 
                och att hjälpa dig hitta precis det du söker. Välkommen in – vi ser fram 
                emot att hjälpa dig!
              </p>
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
                  <p className="text-muted-foreground text-sm mt-1">Produkter</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">7</p>
                  <p className="text-muted-foreground text-sm mt-1">Dagar öppet</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">13h</p>
                  <p className="text-muted-foreground text-sm mt-1">Per dag</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-display text-4xl font-bold text-primary">100%</p>
                  <p className="text-muted-foreground text-sm mt-1">Halal</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Vårt löfte till dig
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vi garanterar färska produkter, schyssta priser och en shoppingupplevelse 
                som känns som hemma. Kommer du inte hittar det du söker? Fråga oss – 
                vi gör vårt bästa för att ordna det åt dig!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
