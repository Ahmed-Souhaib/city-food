import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adress",
    details: ["Smedjegatan 24", "352 46 Växjö"],
  },
  {
    icon: Clock,
    title: "Öppettider",
    details: ["Måndag - Lördag: 09:00 - 20:00", "Söndag: 10:00 - 18:00"],
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["Kontakta oss för frågor"],
  },
  {
    icon: Mail,
    title: "E-post",
    details: ["info@cityfood.se"],
  },
];

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Besök oss idag
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi finns centralt i Växjö och välkomnar dig varmt till vår butik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card p-6 rounded-xl shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2145.8!2d14.8!3d56.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDUyJzQ4LjAiTiAxNMKwNDgnMDAuMCJF!5e0!3m2!1ssv!2sse!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="City Food Växjö - Smedjegatan 24"
            />
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Välkommen till City Food!
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Vi ser fram emot att välkomna dig till vår butik. Kom och upptäck 
            vårt breda sortiment av autentiska produkter från hela världen.
          </p>
          <a
            href="https://www.google.com/maps/dir//Smedjegatan+24,+352+46+Växjö"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-background text-foreground hover:bg-background/90 transition-all duration-300 font-medium px-8 py-4 rounded-lg shadow-soft"
          >
            Få vägbeskrivning
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
