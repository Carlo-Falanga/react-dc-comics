import LogoFooter from "../assets/img/dc-logo-bg.png";


export default function AppFooter({footerListDcComics, footerListShop, footerListDc, footerListSites}) {
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
                    {footerListDcComics.map((item) => (
                      <li className="list-unstyled" key={item.id}>
                        <a href={item.url} className="nav-link footer_text">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-uppercase pb-2">Shop</h3>
                  <ul className="p-0">
                    {footerListShop.map((item) => (
                      <li className="list-unstyled" key={item.id}>
                        <a href={item.url} className="nav-link footer_text">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <h3 className="text-uppercase pb-2">Dc</h3>
                  <ul className="p-0">
                    {footerListDc.map((item) => (
                      <li className="list-unstyled" key={item.id}>
                        <a href={item.url} className="nav-link footer_text">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <h3 className="text-uppercase pb-2">Sites</h3>
                  <ul className="p-0">
                    {footerListSites.map((item) => (
                      <li className="list-unstyled" key={item.id}>
                        <a href={item.url} className="nav-link footer_text">
                          {item.text}
                        </a>
                      </li>
                    ))}
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
          <div className="row row-cols-1 row-cols-lg-2 gy-5">
            <div className="col text-center text-lg-start">
              <button className="btn btn-outline-primary rounded-0 text-uppercase text-white">
                Sing-up now!
              </button>
            </div>
            <div className="col d-flex justify-content-center  justify-content-lg-end align-items-center gap-3">
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
