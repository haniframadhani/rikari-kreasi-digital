import { BookOpen, Users, Zap, Gamepad2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Partner() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our Partners & Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to collaborate with leading educational
            institutions, government agencies, and technology partners to
            deliver exceptional digital learning experiences across Indonesia.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {/* Educational Institutions */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">
                Educational Institutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="font-semibold">SMA Negeri 1 Jakarta</div>
                <div className="font-semibold">SMAN 3 Bandung</div>
                <div className="font-semibold">SMP Labschool Kebayoran</div>
                <div className="font-semibold">SMPN 5 Surabaya</div>
                <div className="font-semibold">SMA Santa Ursula</div>
                <div className="text-purple-600 font-medium">
                  +35 more schools
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Government Partners */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <CardTitle className="text-xl">Government Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="font-semibold">Kemendikbud RI</div>
                <div className="font-semibold">Dinas Pendidikan DKI</div>
                <div className="font-semibold">Dinas Pendidikan Jabar</div>
                <div className="font-semibold">BPPT Indonesia</div>
                <div className="font-semibold">Kominfo RI</div>
                <div className="text-pink-600 font-medium">
                  Digital literacy programs
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Partners */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-xl">Technology Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="font-semibold">Unity Technologies</div>
                <div className="font-semibold">Meta (Oculus)</div>
                <div className="font-semibold">Google for Education</div>
                <div className="font-semibold">Microsoft Education</div>
                <div className="font-semibold">Adobe Creative Cloud</div>
                <div className="text-red-600 font-medium">
                  Certified partners
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industry Collaborations */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Industry Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="font-semibold">Toge Productions</div>
                <div className="font-semibold">Agate International</div>
                <div className="font-semibold">Digital Happiness</div>
                <div className="font-semibold">Touchten Games</div>
                <div className="font-semibold">Kidalang</div>
                <div className="text-emerald-600 font-medium">
                  Game industry network
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Partners Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;Rikari Kreasi Digital transformed our computer science
                    curriculum. Students are now more engaged and excited about
                    learning programming through their game development
                    course.&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Dra. Sari Wijaya, M.Pd</div>
                    <div className="text-sm text-gray-500">
                      Principal, SMAN 1 Jakarta
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;The VR History Museum project has revolutionized how
                    our students learn about ancient civilizations. The
                    engagement level is unprecedented.&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Ahmad Fauzi</div>
                    <div className="text-sm text-gray-500">
                      History Teacher, SMP Labschool
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;Working with Rikari has been exceptional. Their
                    educational games have improved our students&apos; math
                    scores by 40% while making learning fun.&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Gamepad2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Ibu Ratna Sari, S.Pd</div>
                    <div className="text-sm text-gray-500">
                      Math Coordinator, SMPN 5 Surabaya
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Partnership Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
              <p className="text-gray-600 font-medium">School Partners</p>
              <p className="text-sm text-gray-500">Across Indonesia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
              <p className="text-gray-600 font-medium">Government Projects</p>
              <p className="text-sm text-gray-500">National & Regional</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">8+</div>
              <p className="text-gray-600 font-medium">Tech Partnerships</p>
              <p className="text-sm text-gray-500">Global Companies</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                25+
              </div>
              <p className="text-gray-600 font-medium">
                Industry Collaborations
              </p>
              <p className="text-sm text-gray-500">Game Studios</p>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Become Our Partner
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our growing network of educational institutions and
            organizations committed to transforming digital education in
            Indonesia.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}