import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MissionCard from '../components/missionCard';

const meta = {
  component: MissionCard,
  title: "Mission/Card",
} satisfies Meta<typeof MissionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Our Mission",
    description:
      "To democratize access to cutting-edge digital creation tools and knowledge, empowering students and educators to explore, create, and innovate in the digital realm while fostering creativity, critical thinking, and technological literacy for the future workforce.",
  },
};