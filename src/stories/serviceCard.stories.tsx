import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ServiceCard from "../components/serviceCard";
import { Gamepad2 } from "lucide-react";

const meta = {
  component: ServiceCard,
  argTypes: {
    color: {
      description:
        "Using default Tailwind CSS color names or [custom color](https://tailwindcss.com/docs/colors#customizing-your-colors) without the 'bg-' or 'text-' prefix and without the '-100' or '-600' suffix.",
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
    color: "purple",
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
