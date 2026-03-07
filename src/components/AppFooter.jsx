import LogoFooter from "../assets/img/dc-logo-bg.png";

export default function AppFooter() {
  return (
    <footer>
      <div className="bkg_img">
        <div className="container overflow-hidden">
          <div className="row text-white py-5 ">
            <div className="col top_index">
              <div className="row">
                <div className="col">
                  <h3 className="text-uppercase pb-2">Dc Comics</h3>
                  <ul className="p-0">
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Characters
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Comics
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Movies
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        TV
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Games
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Videos
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        News
                      </a>
                    </li>
                  </ul>
                  <h3 className="text-uppercase pb-2">Shop</h3>
                  <ul className="p-0">
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Shop DC
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Shop DC Collectibles
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3 className="text-uppercase pb-2">Dc</h3>
                  <ul className="p-0">
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Terms Of Use
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Privacy policy (New)
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Ad Choices
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Advertising
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Jobs
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Subscription
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Talent Workshops
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        CPSC Certificates
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Ratings
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Shop Help
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3 className="text-uppercase pb-2">Sites</h3>
                  <ul className="p-0">
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        DC
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        MAD Magazine
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        DC Kids
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        DC Universe
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="" className="nav-link footer_text">
                        DC Power Visa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <img className="logo_footer" src={LogoFooter} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg_footer">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <button className="btn btn-outline-primary rounded-0 text-uppercase text-white">
                Sing-up now!
              </button>
            </div>
            <div className="col d-flex justify-content-end align-items-center gap-3">
              <span className="text-primary fw-bold text-uppercase">
                Follow us
              </span>

              <img src="/src/assets/img/footer-facebook.png" alt="" />
              <img src="/src/assets/img/footer-twitter.png" alt="" />
              <img src="/src/assets/img/footer-youtube.png" alt="" />
              <img src="/src/assets/img/footer-pinterest.png" alt="" />
              <img src="/src/assets/img/footer-periscope.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
