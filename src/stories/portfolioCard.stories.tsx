import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import numberRun from "../assets/number-run-cover.png";
import nr1 from "../assets/nr-1.png";
import nr2 from "../assets/nr-2.png";
import nr3 from "../assets/nr-3.png";
import nr4 from "../assets/nr-4.png";
import nr5 from "../assets/nr-5.png";

import PortfolioCard from "../components/portfolioCard";
import PortfolioProject from "@/types/portfolioProject";

const meta = {
  component: PortfolioCard,
  title: "Portfolio/Card",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a project card inside the portfolio grid. The card shows a project image, tags, and type badge. Clicking it calls the `openModal` handler to show details.",
      },
    },
  },
  argTypes: {
    openModal: {
      description: "Function to open the project modal.",
      action: "openModal",
    },
    project: {
      description:
        "The portfolio project data displayed in the card. [See PortfolioProject](/?path=/docs/type-portfolioproject--docs)",
    },
  },
} satisfies Meta<typeof PortfolioCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleProject: PortfolioProject = {
  type: "educational",
  title: "Number Run",
  coverImage: numberRun,
  tags: ["unity", "c#", "mobile", "educational"],
  description:
    "Number Run is a fun educational game that challenges quick math skills.",
  duration: "3 months",
  demoUrl:
    "https://play.google.com/store/apps/details?id=com.robiin.numberrun&pcampaignid=web_share",
  galleryImages: [nr1, nr2, nr3, nr4, nr5],
  downloadNumber: "100+",
};

export const Default: Story = {
  args: {
    project: sampleProject,
    openModal: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default card style, showing a cover image, tags, and the educational category.",
      },
    },
  },
};
