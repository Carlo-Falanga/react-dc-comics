import HeaderLogo from "../assets/img/dc-logo.png";




export default function AppHeader({navbar}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={HeaderLogo} alt="" />
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


            {
              navbar.map(item => (

              <li className="nav-item ps-3" key={item.id}>
                <a className={`nav-link text-uppercase custom_text ${item.current ? 'active text-primary' : ''}`}  aria-current="page" href={item.url}>
                  {item.text}
                </a>
              </li>

              ))
            }

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
