import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import numberRun from "../assets/number-run-cover.png";
import nr1 from "../assets/nr-1.png";
import nr2 from "../assets/nr-2.png";
import nr3 from "../assets/nr-3.png";
import nr4 from "../assets/nr-4.png";
import nr5 from "../assets/nr-5.png";

import PortfolioCard from "../components/portfolioCard";

const meta = {
  component: PortfolioCard,
  title: "Portfolio/Card",
  argTypes: {
    openModal: {
      description: "Function to open the modal",
      action: fn(),
    },
    project: {
      description: "The portfolio project data",
    },
  },
} satisfies Meta<typeof PortfolioCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      type: "educational",
      title: "Number Run",
      coverImage: numberRun,
      tags: ["unity", "c#", "mobile", "educational"],
      description:
        "Number Run is a fun casual game to play. Choose the correct answer by selecting the right lane, avoid obstacles so you can keep collecting coins, and get your dream character.",
      duration: "3 months",
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.robiin.numberrun&pcampaignid=web_share",
      galleryImages: [nr1, nr2, nr3, nr4, nr5],
      downloadNumber: "100+",
    },
    openModal: fn(),
  },
};
