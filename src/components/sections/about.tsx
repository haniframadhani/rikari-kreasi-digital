import { Zap, Users, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
        <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <CardTitle className="text-xl">Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Pushing boundaries with cutting-edge technology and creative
              solutions that shape the future of digital entertainment.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <CardTitle className="text-xl">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Empowering students and educators with comprehensive programs that
              make learning interactive and engaging.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-xl">Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Creating immersive experiences that transport users to new worlds
              and possibilities through VR and interactive media.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
