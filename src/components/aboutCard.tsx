import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function AboutCard({
  title,
  description,
  bgColor,
  icon,
}: {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div
          className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
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
