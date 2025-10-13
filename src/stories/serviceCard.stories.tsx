import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ServiceCard from "../components/serviceCard";
import { Gamepad2 } from "lucide-react";

const meta = {
  component: ServiceCard,
  title: "Service/Card",
  argTypes: {
    gradientColor: {
      description:
        "Using default Tailwind CSS color names or [custom color](https://tailwindcss.com/docs/colors#customizing-your-colors) with gradient format, e.g. 'from-purple-500 to-purple-600'",
    },
    icon: {
      description:
        "React node for the icon, e.g. from [Lucide icons](https://lucide.dev/icons/)",
    },
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Game Development",
    longDescription:
      "From concept to deployment, we create engaging games that captivate audiences and deliver meaningful experiences.",
    shortDescription: "Custom game solutions for entertainment and education",
    gradientColor: "from-purple-500 to-purple-600",
    tags: ["Mobile Games", "PC Games", "Educational Games", "Serious Games"],
    details: [
      "Custom game design and development",
      "Cross-platform compatibility",
      "Educational game mechanics",
      "Performance optimization",
    ],
    icon: <Gamepad2 className="w-10 h-10 text-white" />,
  },
};
