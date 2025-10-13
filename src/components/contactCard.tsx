import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Link from "next/link";
import React from "react";

export default function ContactCard({
  title,
  description,
  contact,
  label,
  type,
  bgColor,
  textColor,
  icon,
}: {
  title: string;
  description?: string;
  contact: string;
  label?: string;
  type: "email" | "phone" | "other";
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="text-center border-0 shadow-lg">
      <CardHeader>
        <div
          className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {type === "email" ? (
          <Link
            href={"mailto:" + contact}
            className={`font-semibold ${textColor}`}
          >
            {label ? label : contact}
          </Link>
        ) : type === "phone" ? (
          <Link
            href={"tel:" + contact}
            className={`font-semibold ${textColor}`}
          >
            {label ? label : contact}
          </Link>
        ) : (
          <Link
            href={contact}
            className={`font-semibold ${textColor}`}
          >
            {label ? label : contact}
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
