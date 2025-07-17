import {
  BookOpen,
  Gamepad2,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
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

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            About Rikari Kreasi Digital
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded with a passion for digital innovation, Rikari Kreasi Digital
            stands at the intersection of technology and creativity. We
            specialize in creating engaging digital experiences that not only
            entertain but also educate and inspire the next generation of
            digital creators and innovators.
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
                Empowering students and educators with comprehensive programs
                that make learning interactive and engaging.
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
                Creating immersive experiences that transport users to new
                worlds and possibilities through VR and interactive media.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="service">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive suite of services designed to bring
              digital creativity to life and foster the next generation of
              innovators.
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
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom game design and development</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Educational game mechanics</li>
                  <li>• Performance optimization</li>
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
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Immersive learning environments</li>
                  <li>• Virtual field trips and tours</li>
                  <li>• Skills training simulations</li>
                  <li>• Multi-platform VR support</li>
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
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Age-appropriate curriculum design</li>
                  <li>• Hands-on project-based learning</li>
                  <li>• Professional instructor support</li>
                  <li>• Portfolio development guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we've transformed ideas
              into engaging digital experiences across games, VR, and
              educational programs.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {/* Game Project 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                    Game Development
                  </Badge>
                </div>
                <CardTitle className="text-xl">EcoQuest Adventure</CardTitle>
                <CardDescription>
                  An educational mobile game teaching environmental conservation
                  through interactive storytelling and puzzle-solving.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Unity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    C#
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Mobile
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Educational
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Developed for middle school students, featuring 20+ levels and
                  interactive mini-games that teach sustainability concepts.
                </p>
              </CardContent>
            </Card>

            {/* VR Project 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <Headphones className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
                    VR Experience
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Virtual History Museum
                </CardTitle>
                <CardDescription>
                  Immersive VR experience allowing students to explore ancient
                  civilizations and historical events firsthand.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Unreal Engine
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    VR
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    3D Modeling
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    History
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Features 5 historical periods with interactive artifacts and
                  guided tours, used by 15+ schools nationwide.
                </p>
              </CardContent>
            </Card>

            {/* Educational Course Project */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                    Educational Program
                  </Badge>
                </div>
                <CardTitle className="text-xl">GameDev Academy</CardTitle>
                <CardDescription>
                  12-week comprehensive game development course for high school
                  students covering programming, design, and project management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Curriculum
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Scratch
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Unity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Portfolio
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Successfully graduated 200+ students with 85% creating their
                  own published games by course completion.
                </p>
              </CardContent>
            </Card>

            {/* Game Project 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    Game Development
                  </Badge>
                </div>
                <CardTitle className="text-xl">Math Heroes</CardTitle>
                <CardDescription>
                  Multiplayer educational game that makes learning mathematics
                  fun through competitive gameplay and achievements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Multiplayer
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Mathematics
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Real-time multiplayer battles with adaptive difficulty,
                  serving 10,000+ active students monthly.
                </p>
              </CardContent>
            </Card>

            {/* VR Project 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Headphones className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                    VR Experience
                  </Badge>
                </div>
                <CardTitle className="text-xl">Science Lab Simulator</CardTitle>
                <CardDescription>
                  Safe virtual laboratory environment for conducting chemistry
                  and physics experiments without real-world risks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Unity VR
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Physics
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Chemistry
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Simulation
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  50+ interactive experiments with realistic physics simulation,
                  adopted by 25+ educational institutions.
                </p>
              </CardContent>
            </Card>

            {/* Educational Course Project 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    Educational Program
                  </Badge>
                </div>
                <CardTitle className="text-xl">VR Creator Workshop</CardTitle>
                <CardDescription>
                  Intensive 8-week program teaching students to create their own
                  VR experiences using industry-standard tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Blender
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Unity VR
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    3D Design
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Workshop
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Hands-on training with VR headsets, resulting in
                  student-created VR experiences showcased at tech exhibitions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">40+</div>
              <p className="text-gray-600">Schools Partnered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5,000+</div>
              <p className="text-gray-600">Students Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                95%
              </div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  To democratize access to cutting-edge digital creation tools
                  and knowledge, empowering students and educators to explore,
                  create, and innovate in the digital realm while fostering
                  creativity, critical thinking, and technological literacy for
                  the future workforce.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  To become the leading catalyst for digital creativity
                  education in Indonesia, bridging the gap between traditional
                  learning and modern technology, and inspiring a new generation
                  of digital innovators who will shape the future of interactive
                  entertainment and educational technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your digital vision to life or implement our
              programs in your school? We&apos;d love to hear from you and
              discuss how we can collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <p className="font-semibold text-purple-600">
                  info@rikarikreasi.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Speak with our team</p>
                <p className="font-semibold text-pink-600">+62 21 1234 5678</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Come to our studio</p>
                <p className="font-semibold text-red-600">
                  Yogyakarta, Indonesia
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Rikari Kreasi Digital</h3>
          <p className="text-gray-400 mb-6">
            Transforming education through innovative digital experiences
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rikari Kreasi Digital. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
