import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: [
      "Maximize Your Online Potential with Our Tailored Web development Solutions",
      "We build modern, scalable, and high-performance websites tailored to your business needs. Our development approach ensures speed, security, and seamless user experience across all devices.",
      "Our team specializes in responsive design, ensuring your website looks perfect on mobile, tablet, and desktop. We follow best coding practices and industry standards to deliver reliable solutions.",
      "From static websites to complex web applications, we provide end-to-end development services including frontend, backend, and API integrations.",
      "We also focus on SEO-friendly architecture, helping your website rank better on search engines and attract more organic traffic.",
    ],
    image: "/assets/images/services-img1.png",
    sectionTitle: "Problems we solve",
    sectionSubtitle:
      "From development to optimization, we solve real business challenges with scalable web solutions.",
    problemSections: [
      {
        title: "Launching a New Product",
        points: [
          "Fast project turnaround time",
          "Modern UI/UX design",
          "SEO-ready structure",
          "Scalable architecture",
        ],
      },
      {
        title: "Increasing Online Sales",
        points: [
          "Optimized conversion funnels",
          "Secure payment integrations",
          "Mobile-first design",
          "Performance optimization",
        ],
      },
      {
        title: "Business Growth & Automation",
        points: [
          "Custom admin dashboards",
          "API integrations",
          "Real-time data systems",
          "Automation workflows",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: ["Grow your business with result-driven marketing and advertising solutions"],
    image: "/assets/images/services-img2.png",
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    description: ["Improve your website ranking and reach more customers online"],
    image: "/assets/images/services-img3.png",
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    description: ["Professional consulting services to manage and grow your business"],
    image: "/assets/images/services-img4.png",
  },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="overflow-hidden position-relative">
        <div
          className="theme-gradient banner-technology-inner h-100"
          style={{
            background: "url('/assets/images/main-banner4.jpg') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">{service.title}</h1>
                  <Breadcrumbs />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape-image">
          <img
            className="img-fluid"
            src="/assets/images/background-shape.svg"
            alt="Bg images"
          />
        </div>
      </section>

      <section className="service-wrap pt-1 pt-lg-5 pb-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3">
              <h1 className="fw-bold">{service.title}</h1>

              {service.description.map((text, index) => (
                <p key={index} className={index === 0 ? "lead" : ""}>
                  {text}
                </p>
              ))}
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {service.problemSections && (
        <section className="pt-1 pt-lg-5 pb-5">
          <div className="container">
            <h2 className="fw-bold mb-0">{service.sectionTitle}</h2>
            <p>{service.sectionSubtitle}</p>

            {service.problemSections.map((item, index) => (
              <div key={index} className="mb-4 pt-2">
                <div className="row">
                  <div className="col-md-5">
                    <h5 className="fw-semibold">
                      <span style={{ color: "#6c63ff", marginRight: "8px" }}>
                        •
                      </span>
                      {item.title}
                    </h5>
                  </div>

                  <div className="col-md-7">
                    <ul className="list-unstyled">
                      {item.points.map((point, i) => (
                        <li key={i} className="mb-1 text-muted">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <hr />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
