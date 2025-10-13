import { Users, Headphones, Lightbulb } from "lucide-react";
import AboutCard from "../aboutCard";

export default function About() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          About Rikari Kreasi Digital
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Founded with a passion for digital innovation, Rikari Kreasi Digital
          stands at the intersection of technology and creativity. We specialize
          in creating engaging digital experiences that not only entertain but
          also educate and inspire the next generation of digital creators and
          innovators.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <AboutCard
          title="Innovation"
          description="Pushing boundaries with cutting-edge technology and creative
              solutions that shape the future of digital entertainment."
          bgColor="bg-purple-100"
          icon={<Lightbulb className="w-8 h-8 text-purple-600" />}
        />

        <AboutCard
          title="Education"
          description="Empowering students and educators with comprehensive programs that
              make learning interactive and engaging."
          bgColor="bg-pink-100"
          icon={<Users className="w-8 h-8 text-pink-600" />}
        />

        <AboutCard
          title="Experience"
          description="Creating immersive experiences that transport users to new worlds
              and possibilities through VR and interactive media."
          bgColor="bg-green-100"
          icon={<Headphones className="w-8 h-8 text-green-600" />}
        />
      </div>
    </section>
  );
}
