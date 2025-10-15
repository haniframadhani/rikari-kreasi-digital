import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Navbar from "../components/navbar";

const meta = {
  component: Navbar,
  title: "Other/Navbar",
  argTypes:{
    links:{
      description: "Array of link objects with id and label for navigation"
    }
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "portfolio", label: "Portfolio" },
      { id: "partners", label: "Partners" },
      { id: "mission", label: "Vision & Mission" },
      { id: "contact", label: "Contact" },
    ],
  },
};
