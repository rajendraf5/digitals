import { NextResponse } from "next/server";

const slides = [
  {
    name: "Michael Chen",
    title: "Senior Software Engineer, Cloud Infrastructure",
    description:
      "Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=900&auto=format&fit=crop",
    socials: [
      { iconClass: "bi bi-github", url: "#", label: "GitHub" },
      { iconClass: "bi bi-twitter", url: "#", label: "Twitter" },
      { iconClass: "bi bi-youtube", url: "#", label: "YouTube" },
      { iconClass: "bi bi-linkedin", url: "#", label: "LinkedIn" },
    ],
  },
  {
    name: "Jessica Roberts",
    title: "Lead Data Scientist, InsightX",
    description:
      "The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.",
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=900&q=80",
    socials: [
      { iconClass: "bi bi-github", url: "#", label: "GitHub" },
      { iconClass: "bi bi-twitter", url: "#", label: "Twitter" },
      { iconClass: "bi bi-youtube", url: "#", label: "YouTube" },
      { iconClass: "bi bi-linkedin", url: "#", label: "LinkedIn" },
    ],
  },
  {
    name: "William Carter",
    title: "VP Product, NovaLabs",
    description:
      "NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
    socials: [
      { iconClass: "bi bi-github", url: "#", label: "GitHub" },
      { iconClass: "bi bi-twitter", url: "#", label: "Twitter" },
      { iconClass: "bi bi-youtube", url: "#", label: "YouTube" },
      { iconClass: "bi bi-linkedin", url: "#", label: "LinkedIn" },
    ],
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: slides,
  });
}