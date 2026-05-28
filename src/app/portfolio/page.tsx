"use client";
import Breadcrumbs from "@/components/Breadcrumbs"
export default function Portfolio() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient banner-technology-inner h-100" style={{ background: "url('/assets/images/main-banner5.jpg') no-repeat center center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="fw-bolder">Portfolio</h1>
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
        <div className="container pt-2 pt-lg-5 pb-2 pb-lg-5">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12">
              <div className="heading-content">
                {/* <div className="heading-subtitle">Punjab </div> */}
                <h2 className="heading-title">Selected Projects</h2>
              </div>  
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
              <div className="case-study">
                <a href="https://new.phhc.gov.in/" target="_blank">
                  <div className="content">
                    {/* <p className="category">ios, design</p> */}
                    <h4>High Court of Punjab and Haryana Chandigarh</h4>
                  </div>
                  <div className="thumbnail">
                      <img src="/assets/images/case-stydy-06.jpg" alt="" />
                  </div>
                </a>  
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
              <div className="case-study">
                <a href="https://lokpal.gov.in/" target="_blank">
                  <div className="content">
                    {/* <p className="category">ios, design</p> */}
                    <h4>Lokpal of india</h4>
                  </div>
                  <div className="thumbnail">
                      <img src="/assets/images/case-stydy-07.jpg" alt="" />
                  </div>
                </a>  
              </div>
            </div>           
          </div>
        </div>    
      </section>
    </>
  )
}
