import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function ServiceCard({
  title,
  shortDescription,
  longDescription,
  gradientColor,
  tags,
  details,
  icon,
}: {
  title: string;
  shortDescription?: string;
  longDescription: string;
  gradientColor: string;
  tags?: string[];
  details?: string[];
  icon: React.ReactNode;
}) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <CardHeader>
        <div
          className={`w-20 h-20 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{longDescription}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
          {details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
