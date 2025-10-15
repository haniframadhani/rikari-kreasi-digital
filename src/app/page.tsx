import Portfolio from "@/components/sections/portfolio";
import About from "@/components/sections/about";
import Service from "@/components/sections/service";
import Partner from "@/components/sections/partner";
import Mission from "@/components/sections/mission";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pt-16">
      <Hero />

      <About />

      <Service />

      <Portfolio />

      <Partner />

      <Mission />

      <Contact />

      <Footer />
    </div>
  );
}
