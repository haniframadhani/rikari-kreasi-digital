import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function PartnerList({
  partnerType,
  partnerList,
  more,
  icon,
  color,
}: {
  partnerType: string;
  partnerList: string[];
  more?: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
      <CardHeader>
        <div
          className={`w-16 h-16 ${
            "bg-" + color + "-100"
          } rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl">{partnerType}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm text-gray-600">
          {partnerList.map((partner, index) => (
            <div key={index} className="font-semibold">
              {partner}
            </div>
          ))}
          {more && (
            <div className={`${"text-" + color + "-600"} font-medium`}>
              {more}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
