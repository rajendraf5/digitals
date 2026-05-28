import ServicesData from "@/components/servicesdata"
export function LegacyServicesSection() {
  return (
    <section className="service-wrap">
      <div className="container">
        <div className="row">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mx-auto">
            <div className="heading-content text-center">
              <div className="heading-subtitle">OUR SERVICES</div>
              <h2 className="heading-title">Services To Help Your Business Grow</h2>
              <p>
                Our strategy includes consistently evolving, to ensure we&apos;re producing
                exceptional SEO for business. Nullam vel accumsan nisi, eget elementum est. Donec
                accumsan tempor gravida.
              </p>
            </div>
          </div>
          <div className="col-lg-12 pt-5 pb-5">
            <div className="rounded-2 border-1 services-main service-border">
              <div className="row">
                <ServicesData />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute position-absolute top-25 end-0">
        <img src="/assets/images/net.png" alt="net" />
      </div>
    </section>
  )
}

export function LegacyTeamSection() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mx-auto">
            <div className="heading-content text-center">
              <div className="heading-subtitle">our team member</div>
              <h2 className="heading-title">Meet Our Best Teams</h2>
              <p>
                Inspiring leadership has kept the hunger for success alive and helped SalePush
                improve relentlessly. Donec ac ligula sed dolor posuere maximus imperdiet sit amet
                arcu.
              </p>
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
                <img src="/assets/images/team1.jpg" alt="team" />
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
                <img src="/assets/images/team1.jpg" alt="team" />
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
                <img src="/assets/images/team1.jpg" alt="team" />
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
                <img src="/assets/images/team1.jpg" alt="team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// export function LegacyTestimonialsSection() {
//   return (
//     <section className="position-relative">
//       <div className="shape shape-top" data-negative="true">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           viewBox="0 0 1440 150"
//         >
//           <path
//             className="elementor-shape-fill"
//             d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"
//           >
//             <animate
//               repeatCount="indefinite"
//               fill="freeze"
//               attributeName="d"
//               dur="10s"
//               values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
//             />
//           </path>
//         </svg>
//       </div>
//       <div className="gradient">
//         <div className="container pt-5 pb-5">
//           <div className="row">
//             <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
//               <div className="heading-content pb-3">
//                 <div className="heading-subtitle">TESTIMONIALS</div>
//                 <h2 className="heading-title">What Do Our Customers Say Us?</h2>
//               </div>
//               <div className="testimonials">
//                 <div className="start pb-2">
//                   <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" />{' '}
//                   <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" />{' '}
//                   <i className="bi bi-star-fill" />
//                 </div>
//                 <p>
//                   “ Thankyou Sanja, Alex and others in the Dejan Adwords PPC team for your great
//                   work and efforts to build up my business online. Together with Dejan my very niche
//                   online business gave PPC a very good go over 4 months. Sanja and others worked
//                   diligently and effectively while also fielding.”
//                 </p>
//                 <h6 className="mb-0">HAILEY ROBERTS</h6>
//                 <p>Founder, Vidly</p>
//               </div>
//             </div>
//             <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 offset-lg-1">
//               <img src="/assets/images/client_testi.jpg" className="img-fluid" alt="client" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
