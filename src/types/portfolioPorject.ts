import { StaticImageData } from "next/image";

interface PortfolioProject {
  type: "game" | "vr" | "educational";
  title: string;
  coverImage?: string | StaticImageData;
  tags?: string[];
  description?: string;
  client?: string;
  duration: string;
  demoUrl?: string;
  outcomes?: string[];
  features?: string[];
  objectives?: string[];
  galleryImages?: (string | StaticImageData)[];
  downloadNumber?: number | string;
}

export default PortfolioProject;
