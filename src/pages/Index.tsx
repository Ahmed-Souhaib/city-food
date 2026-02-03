import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeeklyOffers from "@/components/WeeklyOffers";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WeeklyOffers />
        <Categories />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
