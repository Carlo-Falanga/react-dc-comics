export default function AppComics({title, image}) {
  return (
    <div className="col">
      <img
        className="series_img w-100 object-fit-cover"
        src={image}
        alt=""
      />
      <div className="text-uppercase text-white pt-3">{title}</div>
    </div>
  );
}
