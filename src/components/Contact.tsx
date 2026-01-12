import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adress",
    details: ["Smedjegatan 24", "352 46 Växjö"],
    link: "https://www.google.com/maps/dir//Smedjegatan+24,+352+46+Växjö",
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+46 73 360 17 85"],
    link: "tel:+46733601785",
  },
  {
    icon: Clock,
    title: "Öppettider",
    details: ["Måndag – Söndag", "08:00 – 21:00"],
  },
  {
    icon: Mail,
    title: "E-post",
    details: ["info@cityfood.se"],
    link: "mailto:info@cityfood.se",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Hitta till oss
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi finns centralt i Växjö och är öppna 7 dagar i veckan. Välkommen!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info and form */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="bg-card p-5 rounded-xl shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        info.link ? (
                          <a
                            key={i}
                            href={info.link}
                            className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Skicka ett meddelande
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="070-123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Skriv ditt meddelande här..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Skickar..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Skicka meddelande
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl overflow-hidden shadow-card h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2145.8!2d14.8077!3d56.8795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4657073df6f35f25%3A0x6d2d7b8e8f6e0a3e!2sSmedjegatan%2024%2C%20352%2046%20V%C3%A4xj%C3%B6!5e0!3m2!1ssv!2sse!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="City Food Växjö - Smedjegatan 24"
              />
            </div>

            {/* Quick action */}
            <a
              href="https://www.google.com/maps/dir//Smedjegatan+24,+352+46+Växjö"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary text-center"
            >
              Få vägbeskrivning i Google Maps
            </a>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Välkommen till City Food!
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Vi är öppna varje dag 08:00–21:00 och ser fram emot ditt besök. 
            Kom och upplev smakerna från Mellanöstern!
          </p>
          <a
            href="tel:+46733601785"
            className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 transition-all duration-300 font-medium px-8 py-4 rounded-lg shadow-soft"
          >
            <Phone className="w-5 h-5" />
            Ring oss: +46 73 360 17 85
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
