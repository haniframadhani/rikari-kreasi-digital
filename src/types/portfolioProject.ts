import { StaticImageData } from "next/image";

/**
 * Represents a single project in the portfolio section.
 *
 * This type is used by both the `PortfolioCard` and `PortfolioModal` components
 * to describe key information such as project type, description, duration,
 * and related media.
 *
 * @example
 * ```ts
 * const project: PortfolioProject = {
 *   type: "educational",
 *   title: "Number Run",
 *   coverImage: numberRun,
 *   tags: ["unity", "c#", "mobile", "educational"],
 *   description: "An educational mobile game that improves arithmetic skills.",
 *   duration: "3 months",
 *   demoUrl: "https://play.google.com/store/apps/details?id=com.robiin.numberrun",
 *   galleryImages: [nr1, nr2, nr3, nr4, nr5],
 *   downloadNumber: "100+",
 * };
 * ```
 */
export interface PortfolioProject {
  /** Defines the general category of the project. */
  type: "game" | "vr" | "educational";

  /** The main title or name of the project. */
  title: string;

  /**
   * An optional image or illustration representing the project.
   * Accepts either a static image import or a remote image URL string.
   */
  coverImage?: string | StaticImageData;

  /** Keywords or technologies associated with this project (e.g., `"Unity"`, `"C#"`). */
  tags?: string[];

  /** A short paragraph describing the purpose and details of the project. */
  description?: string;

  /** The name of the client or organization that commissioned the project (if applicable). */
  client?: string;

  /** The project’s total duration (e.g., `"3 months"` or `"2 weeks"`). */
  duration: string;

  /** Optional URL to a playable demo, video, or external showcase. */
  demoUrl?: string;

  /** A list of measurable outcomes or impact statements (e.g., `"1000+ downloads"`). */
  outcomes?: string[];

  /** The main features of the project, typically shown as bullet points. */
  features?: string[];

  /** The educational or business objectives the project was designed to achieve. */
  objectives?: string[];

  /** An array of screenshots or gallery images to be shown in the modal. */
  galleryImages?: (string | StaticImageData)[];

  /**
   * Number of downloads, users, or similar quantitative metrics.
   * Can be a raw number or a formatted string (e.g., `"50+"`, `"10,000+"`).
   */
  downloadNumber?: number | string;
}

export default PortfolioProject;
