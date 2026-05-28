export default function Footer() {
  return (
    <>
      <footer>
        <div className="container pt-5">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
              <a href="/" className="logo"><img src="/assets/images/logo.png" className="logo" alt="Logo" /></a>
              <p className="pt-4 pb-1 lh-base pe-lg-5">There are many variations of passages of Lorem Ipsum available but the that majority have suffered.</p>
              <div className="social-links-side d-flex pb-3">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 offset-lg-1">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul className="ft-menu liststyle link-hover ps-3">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 d-flex justify-content-start justify-content-lg-end">
              <div className="footer-links">
                <h4>Contact Us</h4>
                <ul className="address-list link-hover">
                  <li><a href="#"><i className="bi bi-geo-alt"></i>58 Howard Street #2 San Francisco, CA 94105</a></li>
                  <li><a href="#"><i className="bi bi-telephone"></i>1-800-552-8300</a></li>
                  <li><a href="#"><i className="bi bi-envelope"></i>info@example.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right pt-3 pb-3 mt-lg-0 mt-3">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-12">
                <p className="text-center text-lg-start text-md-start mb-0">© 2026 Digital Legal Services Pvt Ltd. All Rights Reserved</p>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-12 pt-1 pt-lg-0 d-flex justify-content-center justify-content-lg-end justify-content-md-end">
                <p className="text-center text-lg-start mb-0 d-flex gap-3 link-hover">
                  <a href="/terms">Terms of use</a>    
                  <a href="/privacy-policy">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
