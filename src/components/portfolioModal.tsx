import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  Gamepad2,
  Headphones,
  Target,
  Zap,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PortfolioProject from "@/types/portfolioPorject";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioModal({
  selectedProject,
  closeModal,
}: {
  selectedProject: PortfolioProject;
  closeModal: () => void;
}) {
  return (
    <Dialog open onOpenChange={closeModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${
                selectedProject.type === "game"
                  ? "from-red-400 to-red-600"
                  : selectedProject.type === "vr"
                  ? "from-green-400 to-green-600"
                  : "from-blue-400 to-blue-600"
              } rounded-lg flex items-center justify-center`}
            >
              {selectedProject.type === "game" && (
                <Gamepad2 className="w-6 h-6 text-white" />
              )}
              {selectedProject.type === "vr" && (
                <Headphones className="w-6 h-6 text-white" />
              )}
              {selectedProject.type === "educational" && (
                <BookOpen className="w-6 h-6 text-white" />
              )}
            </div>
            {selectedProject.title}
          </DialogTitle>
        </DialogHeader>

        {/* Project Images */}
        <div className="flex justify-center">
          <Carousel className="w-full max-w-xs" opts={{ loop: true }}>
            <CarouselContent>
              {selectedProject.galleryImages?.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt={`${selectedProject.title} image ${index + 1}`}
                    className="max-h-96 object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-6">
          {/* Project Overview */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-purple-100 text-purple-700 capitalize">
                {selectedProject.type}
              </Badge>
              {selectedProject.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>

          {/* Project Details Grid */}
          {(selectedProject.client ||
            selectedProject.duration ||
            selectedProject.downloadNumber) && (
            <div className="grid md:grid-cols-3 gap-6">
              {selectedProject.duration && (
                <Card className="border-0 bg-gray-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 capitalize">
                      {selectedProject.duration}
                    </p>
                  </CardContent>
                </Card>
              )}

              {selectedProject.client && (
                <Card className="border-0 bg-gray-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Client
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600">
                      {selectedProject.client}
                    </p>
                  </CardContent>
                </Card>
              )}

              {selectedProject.downloadNumber && (
                <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {selectedProject.downloadNumber}
                      </div>
                      <div className="text-xs text-gray-600">Downloads</div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Objectives */}
          {selectedProject.objectives && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Project Objectives
              </h3>
              <ul className="space-y-2">
                {selectedProject.objectives?.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          {selectedProject.features && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-pink-600" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedProject.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes */}
          {selectedProject.outcomes && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                Project Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedProject.outcomes?.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {selectedProject.demoUrl && (
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link
                  href={selectedProject.demoUrl}
                  target="_blank"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </Link>
              </Button>
            )}
            <Button variant="outline" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
