import DigitalComicsImg from "../assets/img/buy-comics-digital-comics.png";
import MerchandiseImg from "../assets/img/buy-comics-merchandise.png";
import SubscriptionImg from "../assets/img/buy-comics-subscriptions.png";
import ShopLocationImg from "../assets/img/buy-comics-shop-locator.png";
import VisaImg from "../assets/img/buy-dc-power-visa.svg";

export default function AppServices() {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 py-5">
          <div className="col d-flex align-items-center justify-content-center m-0">
            <img className="services_img" src={DigitalComicsImg} alt="" />
            <span className="text-white ps-3 text-uppercase services_text">Digital Comics</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center m-0">
            <img className="services_img" src={MerchandiseImg} alt="" />
            <span className="text-white ps-3 text-uppercase services_text">Dc Merchandise</span>
          </div>

          <div className="col d-flex align-items-center justify-content-center m-0">
            <img className="services_img" src={SubscriptionImg} alt="" />
            <span className="text-white ps-3 text-uppercase services_text">Subscription</span>
          </div> 
          <div className="col d-flex align-items-center justify-content-center m-0">
            <img className="services_img" src={ShopLocationImg} alt="" />
            <span className="text-white ps-3 text-uppercase services_text">Comic Shop Locator</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center m-0">
            <img className="services_img" src={VisaImg} alt="" />
            <span className="text-white ps-3 text-uppercase services_text">Dc Power Visa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
