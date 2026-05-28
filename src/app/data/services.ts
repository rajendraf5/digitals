// data/servicesdata.tsx

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgClass: string;
}

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "Content Marketing",
    description:
      "We help you define your SEO objectives & develop a realistic strategy with you.",
    icon: "bi bi-pencil-square",
    bgClass: "item-bg-blue",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Create, publish, and promote engaging content to generate more traffic and build.",
    icon: "bi bi-code-slash",
    bgClass: "item-bg-orange",
  },
  {
    id: 3,
    title: "Social Marketing",
    description:
      "Create and manage top performing social campaigns and start developing.",
    icon: "bi bi-people-fill",
    bgClass: "item-bg-red",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Your website has to impress your visitors within just a few seconds. If it runs slow.",
    icon: "bi bi-globe",
    bgClass: "item-bg-green",
  },
];