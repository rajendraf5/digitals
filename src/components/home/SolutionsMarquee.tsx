type Service = {
  title: string
  description: string
  iconClass: string
}

const services: Service[] = [
  {
    title: 'ERP Solutions',
    description:
      'Comprehensive enterprise resource planning systems for seamless organizational management.',
    iconClass: 'bi bi-database'
  },
  {
    title: 'RTI eFiling Systems',
    description: 'Digital Right to Information filing platforms with secure document management.',
    iconClass: 'bi bi-file-earmark-text'
  },
  {
    title: 'eNotary Solutions',
    description: 'Secure digital notarization and authentication services for legal documents.',
    iconClass: 'bi bi-vector-pen'
  },
  {
    title: 'eOffice Systems',
    description: 'Modern digital office management platforms for government institutions.',
    iconClass: 'bi bi-building'
  },
  {
    title: 'HRMS Systems',
    description: 'Human Resource Management Systems with advanced analytics and compliance tools.',
    iconClass: 'bi bi-people'
  },
  {
    title: 'Roster Management',
    description: 'Intelligent roster and scheduling systems for government and judicial operations.',
    iconClass: 'bi bi-list-check'
  },
  {
    title: 'Cause List Management',
    description: 'Specialized case management systems for courts and judicial bodies.',
    iconClass: 'bi bi-bank'
  },
  {
    title: 'Court Websites & Apps',
    description: 'High Court and Supreme Court digital presence with citizen services.',
    iconClass: 'bi bi-globe'
  },
  {
    title: 'Lokpal/Lok Adalat Systems',
    description: 'Systems for Public Grievance Redressal and Alternative Dispute Resolution.',
    iconClass: 'bi bi-shield-check'
  },
  {
    title: 'Custom Government Software',
    description: 'Tailored solutions for specific government agency requirements and workflows.',
    iconClass: 'bi bi-code-slash'
  }
]

const topRow = services.slice(0, 5)
const bottomRow = services.slice(5)

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="digitalls-service-card flex-card">
      <div className="flex-body">
          <div className="digitalls-service-icon">
            <i className={service.iconClass} aria-hidden="true" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
      </div>
      <div className="d-flex justify-centent-center align-items-center">
        <a href="/services">
          Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
        </a>
      </div>  
    </article>
  )
}

function MarqueeRow({ servicesList, reverse = false }: { servicesList: Service[]; reverse?: boolean }) {
  const rendered = [...servicesList, ...servicesList]

  return (
    <div className="digitalls-marquee-row">
      <div className={`digitalls-marquee-track${reverse ? ' reverse' : ''}`}>
        {rendered.map((service, index) => (
          <ServiceCard key={`${service.title}-${index}`} service={service} />
        ))}
      </div>
    </div>
  )
}

export default function SolutionsMarquee() {
  return (
    <>      
      <section id="services" className="position-relative overflow-hidden">
        <div className="shape shape-top" data-negative="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
          >
            <path
              className="elementor-shape-fill"
              d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"
            >
              <animate
                repeatCount="indefinite"
                fill="freeze"
                attributeName="d"
                dur="10s"
                values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
              />
            </path>
          </svg>
        </div>
        <div className="gradient pt-5 pb-1 pb-lg-5">
            <div className="container-fluid pb-5">
              <div className="row">
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mx-auto">
                  <div className="heading-content text-center pb-3">
                    <div className="heading-subtitle">OUR Solution</div>
                    <h2 className="heading-title">Services To Help Your Business Grow</h2>
                    <p>Our strategy includes consistently evolving, to ensure we&apos;re producing
                      exceptional SEO for business. Nullam vel accumsan nisi, eget elementum est. Donec
                      accumsan tempor gravida.</p>
                  </div>
              </div>
            </div>
            <div className="digitalls-marquee-shell">
              <MarqueeRow servicesList={topRow} />
              <MarqueeRow servicesList={bottomRow} reverse />
            </div>

            <div className="digitalls-marquee-fade left" />
            <div className="digitalls-marquee-fade right" />
          </div>  
        </div>     
      </section>
    </>  
  )
}