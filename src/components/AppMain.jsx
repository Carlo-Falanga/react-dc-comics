import Jumbo from "../assets/img/jumbotron.jpg";
import AppComics from "./AppComics";



export default function AppMain({comics}) {
  return (
    <main>
      <div>
        <img className="jumbo" src={Jumbo} alt="" />
      </div>
      <div className="container mt-3 py-5">
        <div className="position-relative">
          <span className="text-uppercase bg-primary px-4 py-2 text-white position-absolute fs-5 custom_text_series fw-bold">
            Current series
          </span>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gy-5">
          {comics.map((comic) => (
            <AppComics title={comic.title} image={comic.thumb} key={comic.id} />
          ))}
        </div>
        <div className="text-center">
          <div className="btn btn-primary text-white rounded-0 text-uppercase mt-5 mb-3 text-center px-5 fw-bold">
            Load more
          </div>
        </div>
      </div>
    </main>
  );
}
