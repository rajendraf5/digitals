// 'use client'

// import { useEffect, useMemo, useState } from 'react'

// type TeamSlide = {
//   name: string
//   title: string
//   description: string
//   imageUrl: string
//   socials: { iconClass: string; url: string; label: string }[]
// }

// const slides: TeamSlide[] = [
//   {
//     name: 'Michael Chen',
//     title: 'Senior Software Engineer, Cloud Infrastructure',
//     description:
//       'Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.',
//     imageUrl:
//       'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=900&auto=format&fit=crop',
//     socials: [
//       { iconClass: 'bi bi-github', url: '#', label: 'GitHub' },
//       { iconClass: 'bi bi-twitter', url: '#', label: 'Twitter' },
//       { iconClass: 'bi bi-youtube', url: '#', label: 'YouTube' },
//       { iconClass: 'bi bi-linkedin', url: '#', label: 'LinkedIn' }
//     ]
//   },
//   {
//     name: 'Jessica Roberts',
//     title: 'Lead Data Scientist, InsightX',
//     description:
//       'The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=900&q=80',
//     socials: [
//       { iconClass: 'bi bi-github', url: '#', label: 'GitHub' },
//       { iconClass: 'bi bi-twitter', url: '#', label: 'Twitter' },
//       { iconClass: 'bi bi-youtube', url: '#', label: 'YouTube' },
//       { iconClass: 'bi bi-linkedin', url: '#', label: 'LinkedIn' }
//     ]
//   },
//   {
//     name: 'William Carter',
//     title: 'VP Product, NovaLabs',
//     description:
//       'NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80',
//     socials: [
//       { iconClass: 'bi bi-github', url: '#', label: 'GitHub' },
//       { iconClass: 'bi bi-twitter', url: '#', label: 'Twitter' },
//       { iconClass: 'bi bi-youtube', url: '#', label: 'YouTube' },
//       { iconClass: 'bi bi-linkedin', url: '#', label: 'LinkedIn' }
//     ]
//   }
// ]

// export default function TeamCarousel() {
//   const [index, setIndex] = useState(2)
//   const activeSlide = useMemo(() => slides[index], [index])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length)
//     }, 4000)

//     return () => clearInterval(timer)
//   }, [])

//   const handlePrevious = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)
//   const handleNext = () => setIndex((prev) => (prev + 1) % slides.length)

//   return (
//     <>
//     <div className="position-relative">
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
   
//         <section id="team" className="gradient pt-5 pb-5">
//           <div className="heading-content pb-lg-4 pb-3 text-center">
//             <div className="heading-subtitle">Our Team</div>
//               <h2 className='heading-title'>Led by Industry Experts</h2>
//               <p>Dedicated professionals committed to digital excellence in government and legaltechnology.
//               </p>
//           </div>

//           <div className="digitalls-team-stage">
//             <div className="digitalls-team-image-wrap">
//               <img
//                 key={activeSlide.imageUrl}
//                 src={activeSlide.imageUrl}
//                 alt={activeSlide.name}
//                 className="digitalls-fade-in"
//               />
//             </div>

//             <article key={activeSlide.name} className="digitalls-team-info-card digitalls-fade-in">
//               <h3>{activeSlide.name}</h3>
//               <h4>{activeSlide.title}</h4>
//               <p>{activeSlide.description}</p>

//               <div className="digitalls-team-socials">
//                 {activeSlide.socials.map((social) => (
//                   <a key={social.label} href={social.url} aria-label={social.label}>
//                     <i className={social.iconClass} aria-hidden="true" />
//                   </a>
//                 ))}
//               </div>
//             </article>
//           </div>

//           <div className="digitalls-team-controls">
//             <button type="button" onClick={handlePrevious} aria-label="Previous testimonial">
//               <i className="bi bi-chevron-left" aria-hidden="true" />
//             </button>

//             <div className="digitalls-team-dots">
//               {slides.map((slide, slideIndex) => (
//                 <button
//                   key={slide.name}
//                   type="button"
//                   onClick={() => setIndex(slideIndex)}
//                   className={slideIndex === index ? 'active' : ''}
//                   aria-label={`Go to ${slide.name}`}
//                 />
//               ))}
//             </div>

//             <button type="button" onClick={handleNext} aria-label="Next testimonial">
//               <i className="bi bi-chevron-right" aria-hidden="true" />
//             </button>
//           </div>
//         </section>
//       </div>  
//     </>    
//   )
// }
"use client";

import { useEffect, useMemo, useState } from "react";

type TeamSlide = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  socials: { iconClass: string; url: string; label: string }[];
};

export default function TeamCarousel() {
  const [slides, setSlides] = useState<TeamSlide[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const activeSlide = useMemo(() => {
    return slides[index];
  }, [slides, index]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        // const res = await fetch("/api/team", {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/team`, {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setSlides(result.data);
        }
      } catch (error) {
        console.error("Team API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  if (loading) {
    return null;
  }

  if (!activeSlide) {
    return null;
  }

  return (
    <>
      <div className="position-relative">
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

        <section id="team" className="gradient pt-5 pb-5">
          <div className="heading-content pb-lg-4 pb-3 text-center">
            <div className="heading-subtitle">Our Team</div>
            <h2 className="heading-title">Led by Industry Experts</h2>
            <p>
              Dedicated professionals committed to digital excellence in
              government and legal technology.
            </p>
          </div>

          <div className="digitalls-team-stage">
            <div className="digitalls-team-image-wrap">
              <img
                key={activeSlide.imageUrl}
                src={activeSlide.imageUrl}
                alt={activeSlide.name}
                className="digitalls-fade-in"
              />
            </div>

            <article
              key={activeSlide.name}
              className="digitalls-team-info-card digitalls-fade-in"
            >
              <h3>{activeSlide.name}</h3>
              <h4>{activeSlide.title}</h4>
              <p>{activeSlide.description}</p>

              <div className="digitalls-team-socials">
                {activeSlide.socials.map((social) => (
                  <a key={social.label} href={social.url} aria-label={social.label}>
                    <i className={social.iconClass} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div className="digitalls-team-controls">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left" aria-hidden="true" />
            </button>

            <div className="digitalls-team-dots">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.name}
                  type="button"
                  onClick={() => setIndex(slideIndex)}
                  className={slideIndex === index ? "active" : ""}
                  aria-label={`Go to ${slide.name}`}
                />
              ))}
            </div>

            <button type="button" onClick={handleNext} aria-label="Next testimonial">
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}