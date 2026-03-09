import HeaderLogo from "../assets/img/dc-logo.png";

const navbar = [
  {
    id: 1,
    url: '#',
    text: 'Characters',
    current: false,
  },
    {
    id: 2,
    url: '#',
    text: 'Comics',
    current: true,
  },
    {
    id: 3,
    url: '#',
    text: 'Movies',
    current: false,
  },
    {
    id: 4,
    url: '#',
    text: 'Tv',
    current: false,
  },
    {
    id: 5,
    url: '#',
    text: 'Games',
    current: false,
  },
    {
    id: 6,
    url: '#',
    text: 'Collectibles',
    current: false,
  },
    {
    id: 7,
    url: '#',
    text: 'Videos',
    current: false,
  },
    {
    id: 8,
    url: '#',
    text: 'Fans',
    current: false,
  },
    {
    id: 9,
    url: '#',
    text: 'News',
    current: false,
  },
    {
    id: 10,
    url: '#',
    text: 'Shop',
    current: false,
  },

]


export default function AppHeader() {
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
