import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
const blogs = [
  {
    id: 1,
    slug: "online-platform-design-1",
    category: "ios, design",
    title: "Court seeks to help with secret documents",
    description: "Main intro description of the blog.",
    sections: [
      {
        heading: "Secure Document Handling",
        image: "/assets/images/blog-list-01.jpg",
        text: "Courts deal with sensitive documents. Digital systems help manage them securely and efficiently.",
      },
      {
        heading: "Role Based Access",
        image: "/assets/images/blog-list-02.jpg",
        text: "Only authorized users should access confidential data to maintain privacy and security.",
      },
      {
        heading: "Workflow Optimization",
        image: "/assets/images/blog-list-03.jpg",
        text: "Automated workflows improve efficiency and reduce manual errors.",
      },
    ],
  },
  {
    id: 2,
    slug: "online-platform-design-2",
    category: "ios, design",
    title: "Lawyers saw two men at supreme court",
    description: "Main intro description of the blog.",
    sections: [
      {
        heading: "Courtroom Observation",
        image: "/assets/images/blog-list-02.jpg",
        text: "Legal professionals depend on accurate courtroom records and structured information.",
      },
      {
        heading: "Case Tracking",
        image: "/assets/images/blog-list-01.jpg",
        text: "Digital tools make it easier to search cases, track hearings, and review updates.",
      },
    ],
  },
  {
    id: 3,
    slug: "online-platform-design-3",
    category: "ios, design",
    title: "The shareholder’s grant is starting practise",
    description: "Main intro description of the blog.",
    sections: [
      {
        heading: "Workflow Management",
        image: "/assets/images/blog-list-03.jpg",
        text: "Proper workflow management reduces manual effort and improves processing speed.",
      },
      {
        heading: "Digital Records",
        image: "/assets/images/blog-list-01.jpg",
        text: "Digital records are easier to store, search, update, and share securely.",
      },
    ],
  },
];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const recentBlogs = blogs.filter((item) => item.slug !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden position-relative">
        <div
          className="theme-gradient banner-technology-inner h-100"
          style={{
            background:
              "url('/assets/images/main-banner9.jpg') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">{blog.title}</h1>

                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="breadcrumb-item active">Details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape-image">
          <img
            className="img-fluid"
            src="/assets/images/background-shape.svg"
            alt="Bg"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="service-wrap">
        <div className="container pt-5 pb-5">
          <div className="row">
            
            {/* Blog Content */}
            <div className="col-lg-8 col-md-12 col-12 mb-4">
              <div className="blog-detail">

                <p className="category mb-2">{blog.category}</p>

                <h2 className="fw-bold mb-3">{blog.title}</h2>

                <p className="mb-5">{blog.description}</p>

                {/* Sections */}
                {blog.sections.map((section, index) => (
                  <div key={index} className="mb-5">

                    {/* Full Width Image */}
                    <div className="mb-3">
                      <img
                        src={section.image}
                        alt={section.heading}
                        className="img-fluid w-100 rounded"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Heading */}
                    <h4 className="fw-bold mb-2">
                      {section.heading}
                    </h4>

                    {/* Description */}
                    <p>{section.text}</p>

                    <hr className="my-5" />
                  </div>
                ))}

                {/* Conclusion */}
                <div className="mt-4 p-4 border rounded bg-light">
                  <h4 className="fw-bold mb-2">Conclusion</h4>
                  <p className="mb-0">
                    A structured digital system improves efficiency,
                    security, and overall workflow in legal environments.
                  </p>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-12">
              <aside className="blog-sidebar">

                {/* Recent Blogs */}
                <div className="sidebar-widget mb-4 p-4 border rounded">
                  <h4 className="mb-3">Recent Blogs</h4>

                  {recentBlogs.map((item) => (
                    <div key={item.id} className="d-flex mb-3">
                      <Link href={`/blog/${item.slug}`}>
                        <img
                          src={item.sections[0].image}
                          alt={item.title}
                          className="rounded me-3"
                          style={{
                            width: "90px",
                            height: "70px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>

                      <div>
                        <p className="mb-1 small">{item.category}</p>
                        <h6 className="mb-0">
                          <Link href={`/blog/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Categories */}
                <div className="sidebar-widget mb-4 p-4 border rounded">
                  <h4 className="mb-3">Categories</h4>

                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link href="/blog">Design</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/blog">iOS</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/blog">Technology</Link>
                    </li>
                    <li>
                      <Link href="/blog">Court News</Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Box */}
                <div className="sidebar-widget p-4 border rounded">
                  <h4 className="mb-3">Need Help?</h4>
                  <p className="mb-3">
                    Contact us for more information about our services.
                  </p>

                  <Link className="btn-theme btn-large btn-transparent" href="/contact">
                    <span className="button-text">More about us</span>
                    <span className="button-icon"></span>
                  </Link>
                </div>

              </aside>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}