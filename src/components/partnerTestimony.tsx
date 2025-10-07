import { Card, CardContent } from "./ui/card";

export default function PartnerTestimony({
  testimony,
  name,
  company,
  occupation,
  star,
}: {
  testimony: string;
  name: string;
  company?: string;
  occupation?: string;
  star: number;
}) {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex text-yellow-400 mb-2">{"★".repeat(star)}</div>
          <p className="text-gray-600 italic mb-4">&quot;{testimony}&quot;</p>
        </div>
        <div className="flex items-center">
          <div>
            <div className="font-semibold">{name}</div>
            {occupation && company ? (
              <div className="text-sm text-gray-500">
                {occupation}, {company}
              </div>
            ) : company ? (
              <div className="text-sm text-gray-500">{company}</div>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
