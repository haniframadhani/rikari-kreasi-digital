import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PartnerList from "../components/partnerList";
import { BookOpen } from "lucide-react";

const meta = {
  component: PartnerList,
  title: "Portfolio/List",
  argTypes: {
    bgColor: {
      description:
        "Using default Tailwind CSS color names or [custom color](https://tailwindcss.com/docs/colors#customizing-your-colors)",
    },
    textColor: {
      description:
        "Using default Tailwind CSS color names or [custom color](https://tailwindcss.com/docs/colors#customizing-your-colors)",
    },
    icon: {
      description:
        "React node for the icon, e.g. from [Lucide icons](https://lucide.dev/icons/)",
    },
  },
} satisfies Meta<typeof PartnerList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    partnerType: "Educational Institutions",
    partnerList: [
      "SMA Negeri 1 Jakarta",
      "SMAN 3 Bandung",
      "SMP Labschool Kebayoran",
      "SMPN 5 Surabaya",
      "SMA Santa Ursula",
    ],
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    more: "+35 more schools",
  },
};
