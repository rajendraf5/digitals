
import Link from "next/link";
import { LegacyServicesSection } from "@/components/home/LegacyBlocks";
import SolutionsMarquee from "@/components/home/SolutionsMarquee";
import Breadcrumbs from "@/components/Breadcrumbs";

async function getServicesData() {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`, {
  cache: "no-store",
});

  if (!res.ok) {
    throw new Error("Failed to fetch services data");
  }

  const result = await res.json();
  return result.data;
}

export default async function Services() {
  const { managementServices, ppcFeatures } = await getServicesData();

  return (
    <>
      <section className="overflow-hidden position-relative">
        <div
          className="theme-gradient banner-technology-inner h-100"
          style={{
            background:
              "url('/assets/images/main-banner2.jpg') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">Services</h1>
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

      <LegacyServicesSection />
      <SolutionsMarquee />

      <section className="position-relative">
        <div className="theme-bg pb-lg-3 pb-1 pt-lg-5 pt-2">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                <img
                  src="/assets/images/case-study-slide-1.png"
                  className="img-fluid rounded-1"
                  alt="case study"
                />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-content pb-3">
                      <h2 className="heading-title">What PPC Can Do for You?</h2>
                      <p>
                        By working with our team, you get the advantage of having
                        access to a Google Partner. We know Google’s advertising
                        practices.
                      </p>
                    </div>
                  </div>

                  {ppcFeatures.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 mb-2"
                    >
                      <div className="card-items">
                        <div className="card-items-icon">
                          <i className={item.icon}></i>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5 position-relative">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xxl-10 col-xl-10 col-lg-10 mx-auto col-md-12 col-12">
              <div className="heading-content text-center">
                <h2 className="heading-title">Management Services</h2>
                <p>
                  Pay-per-click advertising allows you to purchase top positions
                  for relevant keywords on search engines and their partner
                  websites.
                </p>
              </div>
            </div>

            <div className="row pt-4">
              {managementServices.map((service: any, index: number) => (
                <div
                  key={index}
                  className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-lg-1 pb-lg-4 pb-md-3 pb-3 d-flex align-items-stretch"
                >
                  <Link
                    href={service.link}
                    className="w-100 text-decoration-none"
                  >
                    <div className="services rounded d-flex flex-column p-3 shadow-lg h-100 hover-card">
                      <div className="services-body p-3 text-center">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>

                      <div className="product-img">
                        <div className="pimg">
                          <img
                            loading="lazy"
                            src={service.image}
                            alt={service.title}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}