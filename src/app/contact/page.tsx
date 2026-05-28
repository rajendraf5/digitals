import Breadcrumbs from "@/components/Breadcrumbs";

const contactInfo = [
  {
    icon: "bi bi-telephone",
    title: "Phone",
    value: "1-800-552-8300",
  },
  {
    icon: "bi bi-envelope",
    title: "Email",
    value: "info@example.com",
  },
  {
    icon: "bi bi-geo-alt",
    title: "Address",
    value: "58 Howard Street #2 San Francisco, CA 94105",
  },
];

const mapInfo = {
  address: "Downtown Conference Center, New York",
};

const getMapUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export default function Contact() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div
          className="theme-gradient banner-technology-inner h-100"
          style={{
            background:
              "url('/assets/images/main-banner11.png') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">Contact</h1>
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

      <section className="service-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mx-auto">
              <div className="heading-content text-center">
                <div className="heading-subtitle">GET IN TOUCH</div>
                <h2 className="heading-title">How To Find Us?</h2>
                <p>
                  I have world-class, flexible support via live chat, email and
                  phone. I guarantee that you’ll be able to have any issue
                  resolved within 24 hours.
                </p>
              </div>
            </div>

            <div className="row pt-4 pb-4">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="heading-content">
                  <h2 className="heading-title fs-4 pb-2">
                    Get a free quote now
                  </h2>
                </div>

                <form>
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      placeholder="Name"
                      required={true}
                    />
                    <label htmlFor="floatingName">Name</label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required={true}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPhone"
                      placeholder="Phone"
                      required={true}
                    />
                    <label htmlFor="floatingPhone">Phone</label>
                  </div>

                  <div className="form-floating mb-2">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      required={true}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                  </div>

                  <div className="form-floating mb-2 mt-3">
                    <button
                      type="submit"
                      className="btn-theme btn-large btn-transparent bg-transparent"
                    >
                      <span className="button-text">Send message</span>
                      <span className="button-icon"></span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="shadow rounded-2">
                  {contactInfo.map((item) => (
                    <div className="contact-card mb-1" key={item.title}>
                      <div className="icon-box">
                        <i className={item.icon}></i>
                      </div>

                      <div className="contact-text">
                        <h4>{item.title}</h4>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-block">
        <iframe
          src={getMapUrl(mapInfo.address)}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}