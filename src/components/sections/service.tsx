import { Gamepad2, Headphones, BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";

export default function Service() {
  return (
    <section className="py-20 bg-white" id="service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to bring digital
            creativity to life and foster the next generation of innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Development */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Game Development</CardTitle>
              <CardDescription className="text-base">
                Custom game solutions for entertainment and education
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                From concept to deployment, we create engaging games that
                captivate audiences and deliver meaningful experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Mobile Games</Badge>
                <Badge variant="secondary">PC Games</Badge>
                <Badge variant="secondary">Educational Games</Badge>
                <Badge variant="secondary">Serious Games</Badge>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Custom game design and development</li>
                <li>Cross-platform compatibility</li>
                <li>Educational game mechanics</li>
                <li>Performance optimization</li>
              </ul>
            </CardContent>
          </Card>

          {/* VR Experiences */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl">VR Experiences</CardTitle>
              <CardDescription className="text-base">
                Immersive virtual reality solutions for various applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Transform learning and entertainment through cutting-edge VR
                technology that creates unforgettable immersive experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Educational VR</Badge>
                <Badge variant="secondary">Training Simulations</Badge>
                <Badge variant="secondary">Virtual Tours</Badge>
                <Badge variant="secondary">Interactive Learning</Badge>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Immersive learning environments</li>
                <li>Virtual field trips and tours</li>
                <li>Skills training simulations</li>
                <li>Multi-platform VR support</li>
              </ul>
            </CardContent>
          </Card>

          {/* Educational Courses */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Educational Courses</CardTitle>
              <CardDescription className="text-base">
                Comprehensive game development programs for schools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Structured extracurricular programs that teach students the
                fundamentals of game development and digital creativity.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Coding Basics</Badge>
                <Badge variant="secondary">Game Design</Badge>
                <Badge variant="secondary">3D Modeling</Badge>
                <Badge variant="secondary">Project Management</Badge>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Age-appropriate curriculum design</li>
                <li>Hands-on project-based learning</li>
                <li>Professional instructor support</li>
                <li>Portfolio development guidance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
