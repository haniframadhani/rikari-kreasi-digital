import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import AboutCard from "../components/aboutCard";
import { Lightbulb } from "lucide-react";

const meta = {
  component: AboutCard,
  title: "About/Card",
  argTypes: {
    bgColor: {
      description:
        "Using default Tailwind CSS color names or [custom color](https://tailwindcss.com/docs/colors#customizing-your-colors)",
    },
    icon: {
      description:
        "React node for the icon, e.g. from [Lucide icons](https://lucide.dev/icons/)",
    },
  },
} satisfies Meta<typeof AboutCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge technology and creative solutions that shape the future of digital entertainment.",
    bgColor: "purple",
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
  },
};
