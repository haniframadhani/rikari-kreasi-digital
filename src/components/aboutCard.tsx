import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function AboutCard({
  title,
  description,
  color,
  icon,
}: {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div
          className={`w-16 h-16 ${
            "bg-" + color + "-100"
          } rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
