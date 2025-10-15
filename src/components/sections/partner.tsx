import { BookOpen, Users, Zap, Gamepad2 } from "lucide-react";
import { Button } from "../ui/button";
import PartnerList from "../partnerList";
import PartnerTestimony from "../partnerTestimony";
import SimpleStats from "../simpleStats";

export default function Partner() {
  return (
    <section className="py-20 bg-white" id="partners">
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
          <PartnerList
            partnerType="Educational Institutions"
            partnerList={[
              "SMA Negeri 1 Jakarta",
              "SMAN 3 Bandung",
              "SMP Labschool Kebayoran",
              "SMPN 5 Surabaya",
              "SMA Santa Ursula",
            ]}
            icon={<BookOpen className="w-8 h-8 text-purple-600" />}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
            more="+35 more schools"
          />

          <PartnerList
            partnerType="Government Partners"
            partnerList={[
              "Kemendikbud RI",
              "Dinas Pendidikan DKI",
              "Dinas Pendidikan Jabar",
              "BPPT Indonesia",
              "Kominfo RI",
            ]}
            icon={<Users className="w-8 h-8 text-pink-600" />}
            bgColor="bg-pink-100"
            textColor="text-pink-600"
            more="Digital literacy programs"
          />

          <PartnerList
            partnerType="Technology Partners"
            partnerList={[
              "Unity Technologies",
              "Meta (Oculus)",
              "Google for Education",
              "Microsoft Education",
              "Adobe Creative Cloud",
            ]}
            icon={<Zap className="w-8 h-8 text-blue-600" />}
            bgColor="bg-blue-100"
            textColor="text-blue-600"
            more="Certified partners"
          />

          <PartnerList
            partnerType="Industry Partners"
            partnerList={[
              "Toge Productions",
              "Agate International",
              "Digital Happiness",
              "Touchten Games",
              "Kidalang",
            ]}
            icon={<Gamepad2 className="w-8 h-8 text-emerald-600" />}
            bgColor="bg-emerald-100"
            textColor="text-emerald-600"
            more="Game industry network"
          />
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Partners Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <PartnerTestimony
              testimony="Rikari Kreasi Digital transformed our computer science
                    curriculum. Students are now more engaged and excited about
                    learning programming through their game development
                    course."
              name="Dra. Sari Wijaya, M.Pd"
              star={5}
              occupation="Principal"
              company="SMAN 1 Jakarta"
            />

            <PartnerTestimony
              testimony="The VR History Museum project has revolutionized how
                    our students learn about ancient civilizations. The
                    engagement level is unprecedented."
              name="Dr. Ahmad Fauzi"
              star={5}
              occupation="History Teacher"
              company="SMP Labschool"
            />

            <PartnerTestimony
              testimony="Working with Rikari has been exceptional. Their
                    educational games have improved our students' math
                    scores by 40% while making learning fun."
              name="Ibu Ratna Sari, S.Pd"
              star={5}
              occupation="Math Coordinator"
              company="SMPN 5 Surabaya"
            />
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Partnership Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <SimpleStats
              number="40+"
              label="School Partners"
              subLabel="Across Indonesia"
              numberSize="3xl"
              color="text-purple-600"
            />
            <SimpleStats
              number="15+"
              label="Government Projects"
              subLabel="National & Regional"
              numberSize="3xl"
              color="text-pink-600"
            />
            <SimpleStats
              number="8+"
              label="Tech Partnerships"
              subLabel="Global Companies"
              numberSize="3xl"
              color="text-blue-600"
            />
            <SimpleStats
              number="25+"
              label="Industry Collaborations"
              subLabel="Game Studios"
              numberSize="3xl"
              color="text-emerald-600"
            />
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
