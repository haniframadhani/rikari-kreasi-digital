import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ContactCard from "../components/contactCard";
import { Mail, Phone as PhoneIcon, MessageCircle } from "lucide-react";

const meta = {
  component: ContactCard,
  title: "Contact/Card",
  argTypes: {
    contact: {
      description:
        "The contact detail, e.g. email address, phone number, or URL",
    },
    label: {
      description: "Optional label to display instead of the contact detail",
    },
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
    type: {
      description:
        "Type of contact, determines the link format: 'email' for mailto, 'phone' for tel, 'other' for a regular link",
    },
  },
} satisfies Meta<typeof ContactCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    title: "Email Us",
    description: "Send us a message anytime",
    contact: "info@rikarikreasi.com",
    type: "email",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    icon: <Mail className="w-8 h-8 text-purple-600" />,
  },
};

export const Phone: Story = {
  args: {
    title: "Call Us",
    description: "Speak with our team",
    contact: "+622112345678",
    type: "phone",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    icon: <PhoneIcon className="w-8 h-8 text-blue-600" />,
    label: "+62 21 1234 5678",
  },
};

export const Other: Story = {
  args: {
    title: "Message Us",
    description: "Message us on WhatsApp",
    contact: "wa.me/622112345678",
    type: "other",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icon: <MessageCircle className="w-8 h-8 text-green-600" />,
    label: "+62 21 1234 5678",
  },
};
