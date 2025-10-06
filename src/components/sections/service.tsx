import { Gamepad2, Headphones, BookOpen } from "lucide-react";
import ServiceCard from "../serviceCard";

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
          <ServiceCard
            title="Game Development"
            shortDescription="Custom game solutions for entertainment and education"
            longDescription="From concept to deployment, we create engaging games that
                captivate audiences and deliver meaningful experiences."
            tags={[
              "Mobile Games",
              "PC Games",
              "Educational Games",
              "Serious Games",
            ]}
            details={[
              "Custom game design and development",
              "Cross-platform compatibility",
              "Educational game mechanics",
              "Performance optimization",
            ]}
            color="purple"
            icon={<Gamepad2 className="w-10 h-10 text-white" />}
          />

          <ServiceCard
            title="VR Experiences"
            shortDescription="Immersive virtual reality solutions for various applications"
            longDescription="Transform learning and entertainment through cutting-edge VR
                technology that creates unforgettable immersive experiences."
            tags={[
              "Educational VR",
              "Training Simulations",
              "Virtual Tours",
              "Interactive Learning",
            ]}
            details={[
              "Immersive learning environments",
              "Virtual field trips and tours",
              "Skills training simulations",
              "Multi-platform VR support",
            ]}
            color="pink"
            icon={<Headphones className="w-10 h-10 text-white" />}
          />

          <ServiceCard
            title="Educational Courses"
            shortDescription="Comprehensive game development programs for schools"
            longDescription="Structured extracurricular programs that teach students the
                fundamentals of game development and digital creativity."
            tags={[
              "Coding Basics",
              "Game Design",
              "3D Modeling",
              "Project Management",
            ]}
            details={[
              "Age-appropriate curriculum design",
              "Hands-on project-based learning",
              "Professional instructor support",
              "Portfolio development guidance",
            ]}
            color="red"
            icon={<BookOpen className="w-10 h-10 text-white" />}
          />
        </div>
      </div>
    </section>
  );
}
