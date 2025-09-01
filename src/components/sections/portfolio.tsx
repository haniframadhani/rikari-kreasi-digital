"use client";

import PortfolioCard from "../portfolioCard";
import numberRun from "../../assets/number-run-cover.png";
import ct from "../../assets/ct-cover.png";
import PortfolioProject from "@/types/portfolioPorject";
import { useState } from "react";
import PortfolioModal from "../portfolioModal";
import ct1 from "../../assets/ct-1.png";
import ct2 from "../../assets/ct-2.png";
import ct3 from "../../assets/ct-3.png";
import ct4 from "../../assets/ct-4.png";
import ct5 from "../../assets/ct-5.png";
import nr1 from "../../assets/nr-1.png";
import nr2 from "../../assets/nr-2.png";
import nr3 from "../../assets/nr-3.png";
import nr4 from "../../assets/nr-4.png";
import nr5 from "../../assets/nr-5.png";

const portfolioProjects: PortfolioProject[] = [
  {
    type: "educational",
    title: "Number Run",
    coverImage: numberRun,
    tags: ["unity", "c#", "mobile", "educational"],
    description:
      "Number Run is a fun casual game to play. Choose the correct answer by selecting the right lane, avoid obstacles so you can keep collecting coins, and get your dream character.",
    duration: "3 months",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.robiin.numberrun&pcampaignid=web_share",
    galleryImages: [nr1, nr2, nr3, nr4, nr5],
    downloadNumber: "100+"
  },
  {
    type: "educational",
    title: "Concentration & Thinking",
    coverImage: ct,
    tags: ["unity", "c#", "mobile", "educational"],
    description:
      "Concentration & Thinking is a fun casual game to play, choose the hole with the correct answer, avoid platforms that can kill you, there are 2 game modes that can train your concentration and cognitive abilities.",
    duration: "3 months",
    galleryImages: [ct1, ct2, ct3, ct4, ct5],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've transformed ideas into
            engaging digital experiences across games, VR, and educational
            programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              project={project}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <PortfolioModal
          selectedProject={selectedProject}
          closeModal={closeModal}
        />
      )}
    </section>
  );
}
