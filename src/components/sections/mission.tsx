import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Mission() {
  return (
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
                To democratize access to cutting-edge digital creation tools and
                knowledge, empowering students and educators to explore, create,
                and innovate in the digital realm while fostering creativity,
                critical thinking, and technological literacy for the future
                workforce.
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
                To become the leading catalyst for digital creativity education
                in Indonesia, bridging the gap between traditional learning and
                modern technology, and inspiring a new generation of digital
                innovators who will shape the future of interactive
                entertainment and educational technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
