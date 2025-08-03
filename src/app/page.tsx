import About from "@/Components/About";
import Contact from "@/Components/Contact";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Pricing from "@/Components/Pricing";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
   <>
      <Header/>
      <Hero/>
      <Pricing/>
      <Gallery/>
      <About/>
      <Testimonials/>
      <Contact/>
      <FAQSection/>
      <Footer/>
   </>
  );
}
