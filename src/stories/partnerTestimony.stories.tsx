import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PartnerTestimony from "../components/partnerTestimony";

const meta = {
  component: PartnerTestimony,
  title: "Portfolio/Testimony",
} satisfies Meta<typeof PartnerTestimony>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoCompanyNoOccupation: Story = {
  args: {
    testimony:
      "Rikari Kreasi Digital transformed our computer science curriculum. Students are now more engaged and excited about learning programming through their game development course.",
    name: "Dra. Sari Wijaya, M.Pd",
    star: 5,
  },
};

export const WithCompanyWithOccupation: Story = {
  args: {
    testimony:
      "Rikari Kreasi Digital transformed our computer science curriculum. Students are now more engaged and excited about learning programming through their game development course.",
    name: "Dra. Sari Wijaya, M.Pd",
    star: 5,
    occupation: "History Teacher",
    company: "SMP Labschool",
  },
};

export const CompanyOnly: Story = {
  args: {
    testimony:
      "Rikari Kreasi Digital transformed our computer science curriculum. Students are now more engaged and excited about learning programming through their game development course.",
    name: "Dra. Sari Wijaya, M.Pd",
    star: 5,
    company: "SMP Labschool",
  },
};
