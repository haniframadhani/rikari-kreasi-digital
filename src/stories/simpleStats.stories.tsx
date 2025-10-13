import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import SimpleStats from "../components/simpleStats";

const meta = {
  component: SimpleStats,
  title: "Other/Simple Stats",
  argTypes: {
    color: {
      description:
        "Using default Tailwind CSS color names or [custom color](https://tailwindcss.com/docs/colors#customizing-your-colors).",
    },
    numberSize: {
      description: "Using default Tailwind CSS font size names.",
    },
  },
} satisfies Meta<typeof SimpleStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: "40+",
    label: "School Partners",
    color: "text-blue-600",
    numberSize: "3xl",
    subLabel:
      "Empowering the next generation of digital creators through innovative education and cutting-edge technology.",
  },
};
