import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t, dir, language } = useLanguage();

  const images = [
    { src: gallery1, alt: "City Food galleri 1", titleKey: "gallery.image1" },
    { src: gallery2, alt: "City Food galleri 2", titleKey: "gallery.image2" },
    { src: gallery3, alt: "City Food galleri 3", titleKey: "gallery.image3" },
    { src: gallery4, alt: "City Food galleri 4", titleKey: "gallery.image4" },
    { src: gallery5, alt: "City Food galleri 5", titleKey: "gallery.image5" },
    { src: gallery6, alt: "City Food galleri 6", titleKey: "gallery.image6" },
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
