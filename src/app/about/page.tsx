import TeamCarousel from "@/components/home/TeamCarousel";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutContent from "@/components/AboutContent";
const serviceHighlights = [
  {
    icon: "bi bi-graph-up-arrow",
    title: "Strategic Consulting",
    description:
      "We are passionate about our work. Our designers stay ahead of the curve to provide engaging",
  },
  {
    icon: "bi bi-palette",
    title: "Digital Solutions",
    description:
      "We are passionate about our work. Our designers stay ahead of the curve to provide engaging",
  },
  {
    icon: "bi bi-megaphone",
    title: "Marketing Strategy",
    description:
      "We are passionate about our work. Our designers stay ahead of the curve to provide engaging",
  },
];

const missionVisionData = [
  {
    title: "Our Mission",
    description: [
      "We’re more than just a digital marketing company. We’ve got goals and dreams too – the same as every other person out there! We want our clients to be successful! With us as your partner in professional life’s adventures.",
      "We have the know-how and the drive to help your business succeed.",
    ],
  },
  {
    title: "Our Vision",
    description: [
      "We’re more than just a digital marketing company. We’ve got goals and dreams too – the same as every other person out there! We want our clients to be successful! With us as your partner in professional life’s adventures.",
      "We have the know-how and the drive to help your business succeed.",
    ],
  },
];

export default function About() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient banner-technology-inner h-100" style={{ background: "url('/assets/images/main-banner4.jpg') no-repeat center center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">About</h1>
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

      <section className="service-wrap pt-1 pt-lg-5 position-relative">
         <div className="position-absolute start-0 top-0">
          <div style={{ background: "url('/assets/images/shape-left.png')", backgroundSize: "cover" }} className="shape-left"></div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3">
              <div className="position-relative z-1">
                <img src="/assets/images/about-img.png" className="img-fluid" alt="about img" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="heading-content ps-lg-4">
                 <AboutContent isAboutPage={true} />
              </div>  
            </div> 
          </div>
        </div>
      </section>

    <section className="position-relative">
      <div className="shape shape-top" data-negative="true"> 
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150"> <path className="elementor-shape-fill" d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"> <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"> </animate> </path> </svg></div>
        <div className="theme-bg pb-lg-5 pb-1">
          <div className="container pt-5 pb-5">
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8 mx-auto col-md-12 col-12 mt-4 mt-lg-0">
                    <div className="heading-content pb-3 text-center">
                      <div className="heading-subtitle">how it work</div>
                      <h2 className="heading-title">“ Because We’re the Best ”</h2>
                      <p>You are looking for an seo company that can help you boost sales and increase visits, we are the top candidate for you. Ea pro tibique comprehensam, sed ea verear numquam.</p>
                    </div>  
                </div>
              </div>
              <div className="row">
                {serviceHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mb-4 mb-lg-0"
                  >
                    <div className="services-card text-center">
                      <div className="item-icon item-bg-orange">
                        <i className={item.icon}></i>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>  
      </div> 
    </section> 
    <section className="position-relative pt-5">
      <div className="container pt-2 pt-lg-5 pb-2 pb-lg-5">
         <div className="row">
            {missionVisionData.map((item, index) => (
              <div
                key={index}
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-12"
              >
                <div className="heading-content pb-3">
                  <h2 className="heading-title">{item.title}</h2>

                  {item.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>   
      </section>   
    <TeamCarousel />  
     {/* <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mx-auto">
              <div className="heading-content text-center">
                <div className="heading-subtitle">our team member</div>
                <h2 className="heading-title">Meet Our Best Teams</h2>
                <p>Inspiring leadership has kept the hunger for success alive and helped SalePush improve relentlessly. Donec ac ligula sed dolor posuere maximus imperdiet sit amet arcu.</p>
              </div>  
            </div> 
          </div>
          <div className="row pt-5">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
              <div className="team-member">
                <div className="content-team">
                  <h4>Web Developer</h4>
                  <p>Finance manager</p>
                </div>
                <div className="img-wrap">
                  <img src="/assets/images/team1.jpg" alt="team member" />
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
              <div className="team-member">
                <div className="content-team">
                  <h4>Web Developer</h4>
                  <p>Finance manager</p>
                </div>
                <div className="img-wrap">
                  <img src="/assets/images/team1.jpg" alt="team member" />
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
              <div className="team-member">
                <div className="content-team">
                  <h4>Web Developer</h4>
                  <p>Finance manager</p>
                </div>
                <div className="img-wrap">
                  <img src="/assets/images/team1.jpg" alt="team member" />
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
              <div className="team-member">
                <div className="content-team">
                  <h4>Web Developer</h4>
                  <p>Finance manager</p>
                </div>
                <div className="img-wrap">
                  <img src="/assets/images/team1.jpg" alt="team member" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    
      
    </>
  )
}
