import Image from 'next/image';
import { whyChooseTabs } from './data/whyChooseData';
import LeadersTestimonialsMarquee from '@/components/home/LeadersTestimonialsMarquee'
import {
  LegacyServicesSection,
  LegacyTeamSection,
  // LegacyTestimonialsSection
} from '@/components/home/LegacyBlocks'
import SolutionsMarquee from '@/components/home/SolutionsMarquee'
import TeamCarousel from '@/components/home/TeamCarousel'
import AboutContent from "@/components/AboutContent";
export default function Home() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient  banner-technology h-100" style={{ background: "url('/assets/images/main-banner1.jpg') no-repeat", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  {/* <h1 className="pb-4 fw-bolder">Technology & design studio</h1>
                  <a className="btn-theme btn-large btn-transparent" href="/services">
                    <span className="button-text">View Showcase</span>
                    <span className="button-icon"></span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-image">
          <img className="img-fluid" src="/assets/images/background-shape.svg" alt="Bg images" />
        </div>
        {/* <div className='v1'></div> */}
      </section>
      
      <LegacyServicesSection />
      <SolutionsMarquee />
      
      <section className="pt-1 pt-lg-5 position-relative">
        <div className="position-absolute start-0 top-0">
          <div className="shape-left d-lg-block d-none">
            <img src="/assets/images/shape-left.png" className="img-fluid" alt="shape" />
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3">
              <div className="position-relative z-1">
                <img src="/assets/images/about-img.png" className="img-fluid" alt="about" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="heading-content ps-lg-4">
                 <AboutContent />
              </div>  
            </div> 
          </div>
        </div>
      </section>

      <section className="position-relative pb-1 pb-lg-5">
        <div className="shape shape-top" data-negative="true"> 
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150"> <path className="elementor-shape-fill" d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"> <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"></animate></path></svg>
        </div>
        <div className="theme-bg">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-12 pb-2">
                <div className="heading-content pt-1 pt-lg-5">
                    <div className="heading-subtitle">why choose us</div>
                    <h2 className="heading-title">We Always Prioritize Your Development</h2>
                  </div>  
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-tabs custom-tabs pt-2" id="whyChooseTabs" role="tablist">
                  {whyChooseTabs.map((tab, index) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                      <button
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        id={tab.tabId}
                        data-bs-toggle="tab"
                        data-bs-target={`#${tab.id}`}
                        type="button"
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={index === 0 ? "true" : "false"}
                      >
                        {tab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              <div className="tab-content pt-4" id="whyChooseTabsContent">
                {whyChooseTabs.map((tab, index) => (
                  <div
                        key={tab.id}
                        className={`tab-pane fade slide-tab ${index === 0 ? "show active" : ""}`}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={tab.tabId}
                      >
                    <div className="tabcontent pb-4">
                      <div className="row">
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-12">
                          <h3 className="heading-title pb-3 fs-3">{tab.heading}</h3>

                          <ul className="list-unstyled">
                            {tab.points.map((point) => (
                              <li className="pb-2" key={point}>
                                <i className="bi bi-exclamation-circle-fill text-danger pe-2"></i>
                                {point}
                              </li>
                            ))}
                          </ul>

                          {tab.description.map((text) => (
                            <p key={text}>{text}</p>
                          ))}
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 offset-lg-1">
                          <img src={tab.image} className="img-fluid" alt={tab.heading} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>     
            </div>
          </div>  
        </div> 
        </div>
        <div className="shape-svg-bottom">
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1517 59" className="img-fluid">
            <defs>
              <image width="1517" height="59" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABe0AAAA7CAMAAADRo1HNAAAAAXNSR0IB2cksfwAAAqlQTFRF5/Pz5vLy5vT04/Hx5PLy5fPz6PDy6PT05/L06PP16fX16vb26PLz4/Py5PTz6PTy5fHv5vDv6PPv6fTw6vPw6PHu6fLv6vXx5/Px5/Hy6vT16vX35/X15fHx6fP07Pb17/n48Pj48fr38/z59/37+v/++///8vv47vj36fPy5u7w6vL07vb48vf68/j79fr99vr9/f7//f/+/v///P79+v7/+f3++Pz/8fb57fX35+/x5fX05vb15vXy5fTx5PPw5vLw6vLy6fHx6/Pz7PT07/X18/n59Pr6/P3/+/z+//////7///3+/v7+/v7//f3/+vv9+P7+9/399vz89fv75/bz4vLx6fXz6/f17ff28vj4+f///vz//vz9/P//8ff18vj28/n39Pr49fv59vz6+f38/Pz8///9+Pz77PXy6/X27vP27/P28/f6+Pz9/f39/P77/v/97PT26/P16fHz7ff47/n68Pr78vz98/3+9P7/9f//+//++f7/+P3/9vv+9Pn85vHt5/Lu8PTz9/n4+vr6+/v7+fn58fX06vb07/j18Pn2+v796/X06vTz6PLx5/Hw6Pb25PDw7/f59/v++f3/5vDx6PDw8Pb27vT07fPz5vbz5fXy8ff3//3///z94/Lv7fbz7vf0//78+vz7+/38/f/89fn89Pj78vb58PX47/T37fL17PH05vHz5+/v7fX18Pb08/f49Pj59fn69vr79v//9///6/Tx9ff29vj3+Pr5+fv67/f38fn58vr68/v7+f/95e/w6/by/fv87Pb38fX48fv85/Dt8Pr5+P78+Pn7+fr87Pj27fn37vr46/f39/z/+v//8vb19Pj39fn49vr59P369f779v/87vj59Pz8//z/7Pj47vr68Pz88v7+8///+P//8uzHugAADhJJREFUeJztnX+MXUUVx8/s2+22u10KC5alXX6kiiUiUg3gYhVaohFUwkIpSEQjBlqVH6HF+IcJ+AcaE4htbSIkRUIiBSXILzWhopjSgDSobaRFCih/2JVusRSbBcvSfXudM3POu/ed924eW9rt633fT7J73txf7757Z7537syZM44AAAAUH3eoTwAAAMAkALUHAIBWAGoPAACtANQeAABaAag9AAC0AlB7AABoBaD2AADQCkDtQVPgamz45DS9T+yU3O0jeymhzhK5MUmPip1u0uNi28QmchDdb4rZvsd8j7I35/coet4zGpx3I6vnWzRK4YonNcunmLRe53fE2uuhR5hmlr8l6zol/a5Yva6lnPM6RuwOsbp/h1jNJ4mx4bx9ZtmZs/6QArUHTUW7WC3NfWLfEKvqO1vsbrG2FKstm+NpaT1W7GtiS7Ktrtfj9Yv9d2a7LGMmraVa1UG/Z39VvqgFVO8HXy++5/ty1k8Vq9dhu9i3zHJ9Ouj91nzzH7Hvmu3Gzfb2vur5tBmr91vzn+aLE8TukkOWzfZNQVEzEzhMUbUPGTNJS6WWxnJ2fR1bplS5s/vllbr+zOch/9ctn3vNdvpu0EiN89b/z2zXnbNdq6JPSVVVe13s+r1med71HOIKQU/6FNfagearo9Pt6p5PR85yazWfTZXv1vsNtQcgD60Thzq8S1tQtFR9TOwWk95fFa60lLTFRN76XWI/0OB73iuN9rPrm6IlYBJRVS+b5VobsCqqqmzfAU7gNkFHI1adba3Btgy9KHau2U/f1X4n9jSxz4u9gB4PR9V3ULVNAdQeNAW2DtcV/pdr3vBt3U9L6WfSTbbtpfNpnSQuMNur1Zah7spu4au7XpbEHvO9H2pw3pajTPrNBvu3mppnqXcN7fXoNcvzrqfdT9vfN4rV/hO9vx8VO5WqsU+H9WJPEfuMWa/58GyzvqnuL9QeNAWaEfsyy0YordtnlzHHm+VnVY7jHPfwrjfrF4r9a873NkLrdNryo2/+bXW2ZWzp7q+7VW0Lgj2vxKSLQtX1cRO/XnnvPrZl5bWwrK3m+Pa62vWan/4g9hyx+u65Xqy+Q2g+3REO2V959xjOOf4hoWiZCBym2F7NfTTSO0aDDVtgnhWrTwn75p+H7ZWb4/9ezaTtcWy/wXtFfTP03cO242+v3pxeF9sU6nAQ0eswM2f93JzlG8Qea5bXu5/MKznb2X6d93pf9X7OF2vr9pvOJrfuAlrdZ7ZvihYdqD1oCrrEXivWhUq6oyckrXUlW5fWdvRMaa/K07YOl+fJWJICn1cghnOWzzJpqyLqs3Fuzv4bTPpUserj8S+TLgr6u14I/5OaOnaj66Vqb9V6Z/XmdFz2oBkaPU3z+n00/9jv0XfOy32+ffTih+nzkv6pWNtLf0iA2heckvFbt5bbQ7nny9ZBtNerHA9SQdX2DLHaO6V+0GPi3aztlwv9V61y6X435JyHtnMCUET6T4otSprfV4j15Su50ReZqZto3TQ6pVIOtB8hPEU6owcpl6ySFBl96kxLqDzqF01RtwZ5jrGn6Q2Z7xnX1aCAaMuI9nJqO6jWqdRfOOtvzuR5PCpaJ2o3y/V7Ql3KZ9ELJf1xR3d2+GeAqv1Ssb8Uq2/E9o0bgCJRmhO8Rk9Sf/81Ysu+JO37FiUlR3ct8XJ8oyy3o7h0v9uIbmer5VbLVSl1YwuFVN85tWVwrLISFA9V+6DeSe1oI/vmnDdq6CecuzJdido7epnYE8XeJXbJvf7f14hekvSf/BlkM5m2VLwg1ra/AlBYSqmv1guZxVzn/whtpBm+pOg78jViXyR6NFatwrCBm5exqmd6tfmpwGW6jeIy67lalYbaFxTrt66jg6y/+un8ry9tybEjyhfTg9kX0GxdogrdoN24Qqs3hK7XOknW9waAVkH7f7TuraUjPxKEI+fflS8meuhS//kBrj0tJnpQ1mth+yrFMnZPTG7RY+gY4neJoPaFx/qtW3919jef5/+2SXqB2M+JfdxnmiRJe1H/LNb6n+vxQt3lPJ81JX2pfNDcq7kddXrQimitSms7Um4WPSRFR8f6anmJ4wU20gDX/R0NDAXxT+hyWf8EraNpp8Ttr6L4TsCf+16LNbKq8SpQ+4LD7ehZv3Xrr76AfEZyqf+w+jwcKXY8J498Wqy2t1dFF/N8Way2z1ufBk3njZkEoEiEd+FMJreFysZjyvP9CSRpuZnnE1wd4xG8XM/v9C/Xu3tCOe+hm4lule121PtSUBC0JafX+K3buv1Z/tNK/3KYV9e2LTaNVHlYjn2TpNeK1Vyrb7A2BiXUHhSZk1+NefxkST8tVsvdlRTfm1+yOwqNxgUcE3x0j2TvC/eMr4s5HmC40NEyWR/KH9S+oGhEgGvFb13b+ezY1FmSf2zdPM8fWTPMDpPWXPu6+Hqp2v9YjvYFSW8Sq99X1Ei+AGQpGaHWiA5bpQTdJG2kqva1LT6xRNpy2SYLh6WTNqwfp2NnbqQZX6efV8YAr44HAQeF4EGlb1xnqMrdT1fIY/poGgqB2FX1Rqn6TvJbGd+coM6nET0nyzlmH8f/Wy5+7PrMXy5Ws9RGkwYAtC5BJ6D2B5isnzu3WoyLY/oqWb6Y/4kHFV987VPXdjv1WamMbuKNymkdeKW46l4lfuyq9kvE6kh8jQIAtQcAQO0PBqr2Y67+xVXX93K4/klFjfs54FOmcn8cd7T0xlFQ3LOq7wB8fI7fd0SOH7tG5t3fuC4AgOIBtT8Y2BnRFgcnxvRCs7djkklrhN07aTh4tl+v6R5KEu5vp9jKY28U/NgBABMCan+Q6OJq9SiPNnKhgh2q+k4iBWzjONnbiOOw/022P5Goh7Vd59XUurnW1bNxbTi49yL4sQMAJgLU/iAxXbxfbqZbQ5PMcq/La+ga+qBf9jBpjEda/03Z/hdmfyctNare2pKj8W3yZlZDCw4AoC5Q+wNMZm763rHBcIEXJLSCvhcFPkTw5R7UPDWuE3+7alPrl6ueWjraCb2zAIC6QO0PMBU/dy/ubW6+u4X20AClUZBMu7qr9m8vZaOWhXujfu2ZURjBMXeD7KUzrWmLDwAA1KVl1L5dfiu3iKTzyMR40J0lif/eG9VV4kiH7XQ0ksamU393f5zvJ2u8yrrxtY8NuOHT3XOfdMOO7puUXwMAABOk8GpfFed9Vtre3Smar3Hay3ESjspcSHbeUa2Dr+T292somXc13e1Cx+vV4SLewgEIHHpJAQBNSsuoPY9OSqg2KpfW4/uiwCfHi9/7BtrKEYVGdPYNnTFvIW1M9gxwhICd4UngxqnqKkLtAQBNScuofZgCgPor83tydFBW9XslHerw21K/98voV7Sog558U9ZX4r6XdfvqiBX61EDvKACgKSm82it2jCvPtXSPF2mv8tvY7z2o/ebU7307EVfha/zdnYZwN/7uCUv9HMy4BwBoUlpG7e8I7TJEt0X3d3rL//R2X3+/O7i9u3gh5qZ+74lcGvVs/KfY2dWHjXPJLyX6UWU/AABoQgqv9pU47yPB//0rbjs9TfMp+SPN/S9PyZ3nuahxqG1d3T8Q6Ez/95Sk/yJWPSuh9gCApqTwaq/+79fR4GOujeavJtrJrTbLVxK70LBKh2uwSCbXi724pUpvrvq7a53+inSyPmLdXyefkhDPAPHaAQBNyiFX+07pQH1qK6duFXV1PJNeCAa8g6JrpPZ+SoRgx37wvOZtGX7aPS+2vy+7kJK1jw14FY8O8PB/BwAAagK174rBwzK+M5VzCiHfdZ5GjSgwpqNOXSU+fMJ799GnNtM79MAacuvv38tx3l2ovcMjEgAAqCnUPlTbR+dviem9stwvLCXRZyboeVlU/fdbKcQZW+qTz44spfveJnfJIzT4Jk/XlNCe6eYXQe0BAICaQO1DnX6UZ+eQuO+nxeVB5f3ZfSP4SRJd8SArf/CdYTd4WuY//cDv1zFWfbx0vtP4NgD/dwAAoCZQe51dN8R93xI9GvmkuonmcQR4Ov8T9FlybhPRk7v8mt3RDb7GD96SUHSAh/87AABQU6h97IadSTF0QR/RSC/R2EU04IbdnbTAhYb4q2dQDPieyBlLC00pRoE/iluEAkOksc4i8IgEAABqArXnphyuhX+bHqfzk2fpRnaHT4InY90oY9x1y/M7SRz3SkPN3PD/TFohad0Pag8AANQEat/F5/AM0aOPDF7yULKYvhuDjVXU2sk/OdE5/5DlO2Vup1ki+HNl+Rtid1NUeqg9AADQfqh9R5DPRDS21i9eRxe1SURhlm6uu2tc+OV+n1WO2q+jji9yzILvvN9fAAAAoDETVvvo8zKL28fr+sUrYezpUFg5xE+HVRIX/g6i37JnzW8oBC7AnEsAADAZTFjt28NO5ez8qVV+8Svo9qDv3TwTlK/1r/KL3nZ0yW6JC79VvvNU2R9qDwAAk8B+t9sfkeMX387K79MzaZfj2ME89pWbetK48LEtXePP9NkDAwAAOPBMWO27pc2+TPX94n+YUJJQF72SRMf42Gu6iB6WuPC75TjDYjHWFQAAJoEJq/10qszMXdcvvkcOqfHhNcakxpDU+V7hKwMAAJPIhNX+OI4TT4N0bo5ffKY9vwqNCx9mC5lT8ZdHZAMAAJgMJqz2L//MDf66bT6tzvGLt7N8z6Zpr7KkXylx4TfIcrTgAADAJFKj9mFBP9GHx/nzYl8XT7602W1+Z02IFr+SZk7+OQIAAHi/1Kh9jEA8SueRu77Htc2+vpPoIjqHLpf1qJMDAMBhSI3ad5bc887z95A6lZZA7QEA4PDn/9Ozb6Dsk/sgAAAAAElFTkSuQmCC" />
            </defs>
            <use id="Background" href="#img1" x="0" y="0" />
            <rect
              x="0"
              y="0"
              width="1517"
              height="59"
              fill="#eee"
              style={{ mixBlendMode: "color" }}
              opacity="0.9"
            />
          </svg>
        </div> 
      </section> 

      
      <LeadersTestimonialsMarquee />
      {/* <LegacyTeamSection /> */}
      {/* <LegacyTestimonialsSection /> */}
      <TeamCarousel />
    </>
  )
}
