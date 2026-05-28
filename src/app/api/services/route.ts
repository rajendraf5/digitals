import { NextResponse } from "next/server";

const managementServices = [
  {
    title: "Web Development",
    description:
      "Maximize Your Online Potential with Our Tailored Web development Solutions",
    image: "/assets/images/services-img1.png",
    link: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with result-driven marketing and advertising solutions",
    image: "/assets/images/services-img2.png",
    link: "/services/digital-marketing",
  },
  {
    title: "SEO Services",
    description: "Improve your website ranking and reach more customers online",
    image: "/assets/images/services-img3.png",
    link: "/services/seo-services",
  },
  {
    title: "Business Consulting",
    description:
      "Professional consulting services to manage and grow your business",
    image: "/assets/images/services-img4.png",
    link: "/services/business-consulting",
  },
];

const ppcFeatures = [
  {
    icon: "bi bi-gear",
    title: "Reach the Right Customers",
    description:
      "Search engines are THE no. 1 place that people head to for information. When PPC ads are set up.",
  },
  {
    icon: "bi bi-gear-wide",
    title: "Measurable Results",
    description:
      "When you work with us, you can easily see how many people saw and clicked on your PPC ads and the number of people.",
  },
  {
    icon: "bi bi-watch",
    title: "Pay only when the ad is clicked",
    description:
      "Pay-Per-Click means exactly that: You only pay when someone clicks on your ad. If a customer sees your ad.",
  },
  {
    icon: "bi bi-people",
    title: "Audience Targeting",
    description:
      "Reach specific audiences based on customer location, interest, and business requirements.",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      managementServices,
      ppcFeatures,
    },
  });
}