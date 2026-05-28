// import { servicesData } from "@/app/data/services"
// export default function ServicesData() {
//     return(
//         <>
//               {servicesData.map((service) => (
//                   <div key={service.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
//                     <div className="services-card text-center position-relative">
//                       <div className={`item-icon ${service.bgClass}`}>
//                         <i className={service.icon} />
//                       </div>
//                       <h3>{service.title}</h3>
//                       <p>{service.description}</p>
//                       <span className="slide-dot pos-top style-default"></span>
//                     </div>
                    
//                   </div>
//                 ))}
//         </>
//     )
// }

import { servicesData } from "@/app/data/services";

export default function ServicesData() {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-4 mb-lg-0"
        >
          <div className="services-card text-center position-relative">
            <div className={`item-icon ${service.bgClass}`}>
              <i className={service.icon} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <span
              className={`slide-dot ${
                index % 2 === 0 ? "pos-top" : "pos-bottom"
              } style-default`}
            />
          </div>
        </div>
      ))}
    </>
  );
}