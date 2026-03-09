import LogoFooter from "../assets/img/dc-logo-bg.png";

const footerListDcComics = [
  {
    id: 1,
    url: "#",
    text: "Characters",
  },
  {
    id: 2,
    url: "#",
    text: "Comics",
  },
  {
    id: 3,
    url: "#",
    text: "Movies",
  },
  {
    id: 4,
    url: "#",
    text: "Tv",
  },
  {
    id: 5,
    url: "#",
    text: "Games",
  },
  {
    id: 6,
    url: "#",
    text: "Videos",
  },
  {
    id: 7,
    url: "#",
    text: "news",
  },
];

const footerListShop = [
  {
    id: 1,
    url: "#",
    text: "Shop DC",
  },
  {
    id: 2,
    url: "#",
    text: "Shop DC Collectibles",
  },
];

const footerListDc = [
  {
    id: 1,
    url: "#",
    text: "Terms Of Use",
  },
  {
    id: 2,
    url: "#",
    text: "Privacy policy (New)",
  },
  {
    id: 3,
    url: "#",
    text: "Ad Choices",
  },
  {
    id: 4,
    url: "#",
    text: "Advertising",
  },
  {
    id: 5,
    url: "#",
    text: "Jobs",
  },
  {
    id: 6,
    url: "#",
    text: "Subscription",
  },
  {
    id: 7,
    url: "#",
    text: "Talent Workshops",
  },
  {
    id: 8,
    url: "#",
    text: "CPSC Certificates",
  },
  {
    id: 9,
    url: "#",
    text: "Ratings",
  },
  {
    id: 10,
    url: "#",
    text: "Shop help",
  },
  {
    id: 11,
    url: "#",
    text: "Contact Us",
  },
];

const footerListSites = [
  {
    id: 1,
    url: "#",
    text: "DC",
  },
  {
    id: 2,
    url: "#",
    text: "MAD Magazine",
  },
  {
    id: 3,
    url: "#",
    text: "DC Kids",
  },
  {
    id: 4,
    url: "#",
    text: "DC Universe",
  },
  {
    id: 5,
    url: "#",
    text: "DC Power Visa",
  },
];

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
