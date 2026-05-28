"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import GtranslateWidget from "./gtranslate";
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const isActive = (path: string) => pathname === path;
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header-transparent headerfixed ${isSticky ? "is-sticky" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="navbar navbar-expand-lg navbar-dark w-100">
          <Link className="navbar-brand logo" href="/"><img loading="lazy" src="/assets/images/logo.png" alt="Logo" /></Link>
          <button className="navbar-toggler first-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <div className="animated-icon1"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-lg-auto navmenu">
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/") ? "active" : ""}`} href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} href="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/services") ? "active" : ""}`} href="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/portfolio") ? "active" : ""}`} href="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/blog") ? "active" : ""}`} href="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} href="/contact">Contact</Link>
              </li>
              {/* <li> <GtranslateWidget /> </li> */}
            </ul>
            <div className="d-none d-lg-block">
              <a className="axil-menuToggle ax-hamburger-trigger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <span></span> 
                <span></span>
                <span></span>
              </a>
            </div>              
          </div>
        </nav>
      </div> 

      <div className="offcanvas offcanvas-end side-nav" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="side-nav-inner">
          <div className="offcanvas-header">
            <button type="button" className="btn-close ms-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="side-nav-content">
              <form action="#">
                <div className="search-bar">
                  <input type="text" placeholder="Search..." />
                  <span className="search-icon">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </form>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="menu-links">
                    <Link className={`nav-link ${isActive("/") ? "active" : ""}`} href="/">Home</Link>
                    <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} href="/about">About Us</Link>
                    <Link className={`nav-link ${isActive("/services") ? "active" : ""}`} href="/services">Services</Link>
                    <Link className={`nav-link ${isActive("/portfolio") ? "active" : ""}`} href="/portfolio">Portfolio</Link>
                    <Link className={`nav-link ${isActive("/blog") ? "active" : ""}`} href="/blog">Blog</Link>
                    <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} href="/contact">Contact</Link>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="info-title">Contact Information</div>
                  <p>58 Howard Street #2 San Francisco, CA 94105</p>
                  <div className="info-title">We're Available 24/ 7. Call Now.</div>

                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>1-800-552-8300</span>
                  </div>

                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>info@example.com</span>
                  </div>

                  <div className="info-title pt-3 pb-3">Find us here</div>

                  <div className="social-links-side">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div> 
    </header>
  )
}
