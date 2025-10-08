import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function MissionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl text-center mb-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
