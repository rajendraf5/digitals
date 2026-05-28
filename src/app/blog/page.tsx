import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
const blogs = [
  {
    id: 1,
    slug: "online-platform-design-1",
    image: "/assets/images/blog-list-01.jpg",
    category: "ios, design",
    title: "Court seeks to help with secret documents",
  },
  {
    id: 2,
    slug: "online-platform-design-2",
    image: "/assets/images/blog-list-02.jpg",
    category: "ios, design",
    title: "Lawyers saw two men at supreme court",
  },
  {
    id: 3,
    slug: "online-platform-design-3",
    image: "/assets/images/blog-list-03.jpg",
    category: "ios, design",
    title: "The shareholder’s grant is starting practise",
  },
];
export default function Blog() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient banner-technology-inner h-100" style={{ background: "url('/assets/images/main-banner9.jpg') no-repeat center center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">Blog</h1>
                  <Breadcrumbs />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-image">
          <img className="img-fluid" src="/assets/images/background-shape.svg" alt="Bg images" />
        </div>
      </section>

      <section className="service-wrap">
      <div className="container pt-5 pb-5">
        <div className="row pt-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mb-3">
              <div className="case-study">
                <Link href={`/blog/${blog.slug}`}>
                  <div className="thumbnail mb-3"><img src={blog.image} alt={blog.title} /></div>
                  <div>
                    <p className="category mb-0">{blog.category}</p>
                    <h4>{blog.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
