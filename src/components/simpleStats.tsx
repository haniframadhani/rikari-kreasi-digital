export default function SimpleStats({
  number,
  label,
  color,
  numberSize,
  subLabel,
}: {
  number: string;
  label: string;
  color: string;
  numberSize:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  subLabel?: string;
}) {
  return (
    <div className="text-center">
      <div className={`${"text-" + numberSize} font-bold ${color} mb-2`}>
        {number}
      </div>
      <p className="text-gray-600">{label}</p>
      {subLabel && <p className="text-sm text-gray-500">{subLabel}</p>}
    </div>
  );
}
