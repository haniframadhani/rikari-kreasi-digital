import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import ContactCard from "../contactCard";

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your digital vision to life or implement our programs
            in your school? We&apos;d love to hear from you and discuss how we
            can collaborate.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ContactCard
            title="Email Us"
            description="Send us a message anytime"
            type="email"
            bgColor="bg-purple-100"
            textColor="text-purple6100"
            contact="info@rikarikreasi.com"
            icon={<Mail className="w-8 h-8 text-purple-600" />}
          />
          <ContactCard
            title="Call Us"
            description="Speak with our team"
            type="phone"
            bgColor="bg-pink-100"
            textColor="text-pink-600"
            contact="+622112345678"
            label="+62 21 1234 5678"
            icon={<Phone className="w-8 h-8 text-pink-600" />}
          />
          <ContactCard
            title="Message Us"
            description="Message us on WhatsApp"
            type="other"
            bgColor="bg-green-100"
            textColor="text-green-600"
            contact="wa.me/622112345678"
            label="+62 21 1234 5678"
            icon={<MessageCircle className="w-8 h-8 text-green-600" />}
          />
          <ContactCard
            title="Visit Us"
            description="Come to our studio"
            type="other"
            bgColor="bg-blue-100"
            textColor="text-blue-600"
            contact="+622112345678"
            label="Yogyakarta, Indonesia"
            icon={<MapPin className="w-8 h-8 text-blue-600" />}
          />
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
  );
}
