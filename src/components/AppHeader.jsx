import headerLogo from "../assets/img/dc-logo.png";

export default function AppHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={headerLogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" aria-current="page" href="#">
                  Characters
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase text-primary custom_text" href="#">
                  Comics
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Tv
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Collectibles
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Videos
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Fans
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  News
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase custom_text" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
