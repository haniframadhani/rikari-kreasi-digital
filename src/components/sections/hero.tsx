import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white ">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Rikari Kreasi Digital
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Pioneering the future of interactive entertainment and education
          through innovative game development, immersive VR experiences, and
          comprehensive educational programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
            asChild
          >
            <Link href="#service">Explore Our Services</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
