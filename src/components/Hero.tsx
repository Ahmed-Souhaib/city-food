import heroImage from "@/assets/hero-store.jpg";

const Hero = () => {
  return (
    <section id="hem" className="relative min-h-screen flex items-center justify-center pt-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="City Food butik - Arabiska och mellanöstern livsmedel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in shadow-soft">
            Välkommen till Växjös bästa orientaliska matbutik
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in [animation-delay:200ms] opacity-0">
            City Food
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms] opacity-0 leading-relaxed">
            Autentiska smaker från Mellanöstern och Medelhavet. 
            Färska produkter, kryddor och specialiteter – allt under ett tak.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms] opacity-0">
            <a
              href="#produkter"
              className="btn-primary text-lg"
            >
              Utforska våra produkter
            </a>
            <a
              href="#kontakt"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 font-medium px-6 py-3 rounded-lg border border-white/30"
            >
              Hitta till oss
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in [animation-delay:800ms] opacity-0">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">15+</p>
              <p className="text-white/80 text-sm">År i Växjö</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">1000+</p>
              <p className="text-white/80 text-sm">Produkter</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">12</p>
              <p className="text-white/80 text-sm">Anställda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
