import { Gamepad2, Headphones, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import PortfolioProject from "@/types/portfolioPorject";

const typeConfig = {
  game: {
    gradient: "from-red-400 to-red-600",
    badge: {
      label: "Game Development",
      className: "bg-red-100 text-red-700 hover:bg-red-100",
    },
    icon: <Gamepad2 className="w-16 h-16 text-white" />,
  },
  vr: {
    gradient: "from-green-400 to-green-600",
    badge: {
      label: "VR Development",
      className: "bg-green-100 text-green-700 hover:bg-green-100",
    },
    icon: <Headphones className="w-16 h-16 text-white" />,
  },
  educational: {
    gradient: "from-blue-400 to-blue-600",
    badge: {
      label: "Educational Game",
      className: "bg-blue-100 text-blue-700 hover:bg-blue-100 ",
    },
    icon: <BookOpen className="w-16 h-16 text-white" />,
  },
};

export default function PortfolioCard({
  project,
  openModal,
}: {
  project: PortfolioProject;
  openModal: (project: PortfolioProject) => void;
}) {
  const { gradient, badge, icon } = typeConfig[project.type];

  return (
    <Card
      className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden pb-6 pt-0 cursor-pointer"
      onClick={() => openModal(project)}
    >
      {project.coverImage ? (
        <div className="h-48 overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ) : (
        <div
          className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          {icon}
        </div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className={`${badge.className} capitalize`}>
            {badge.label}
          </Badge>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag, index) => (
            <Badge variant="outline" className="text-xs capitalize" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
