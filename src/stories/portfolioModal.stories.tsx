import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import PortfolioModal from "../components/portfolioModal";

import numberRun from "../assets/number-run-cover.png";
import nr1 from "../assets/nr-1.png";
import nr2 from "../assets/nr-2.png";
import nr3 from "../assets/nr-3.png";
import nr4 from "../assets/nr-4.png";
import nr5 from "../assets/nr-5.png";
import { Button } from "@/components/ui/button";
import PortfolioProject from "@/types/portfolioPorject";

const meta = {
  component: PortfolioModal,
  title: "Portfolio/Modal",
  argTypes: {
    selectedProject: {
      description: "Selected portfolio project data",
    },
    closeModal: {
      description: "Function to close the modal",
      action: fn(),
    },
  },
} satisfies Meta<typeof PortfolioModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const selectedProject: PortfolioProject = {
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
};

export const Default: Story = {
  args: {
    selectedProject,
    closeModal: fn(),
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <PortfolioModal
          {...args}
          selectedProject={selectedProject}
          closeModal={() => setOpen(false)}
          open={open}
        />
      </div>
    );
  },
};
