import { useState } from "react";
import storeExterior from "@/assets/store-exterior.jpg";
import offerVegetables from "@/assets/offer-vegetables.jpg";
import offerDeals from "@/assets/offer-deals.jpg";
import offerFruits from "@/assets/offer-fruits.jpg";
import offerProduce from "@/assets/offer-produce.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t, dir, language } = useLanguage();

  const images = [
    { src: storeExterior, alt: "City Food butik i Växjö", titleKey: "gallery.store" },
    { src: offerVegetables, alt: "Färska grönsaker hos City Food", titleKey: "gallery.vegetables" },
    { src: offerFruits, alt: "Färsk frukt hos City Food", titleKey: "gallery.fruits" },
    { src: offerProduce, alt: "Exotiska frukter och grönsaker", titleKey: "gallery.exotic" },
    { src: offerDeals, alt: "Veckans erbjudanden - Halv pris", titleKey: "gallery.offers" },
  ];

  return (
    <section id="galleri" className="py-24 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("gallery.title")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {language === "ar" ? "نظرة على متجرنا" : language === "en" ? "A look at our store" : "En titt i vår butik"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-card"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{t(image.titleKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white font-display text-xl">{t(images[selectedImage].titleKey)}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
