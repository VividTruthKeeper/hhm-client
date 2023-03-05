// Modules
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
// Icons
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import { ReactComponent as Instagram } from "../../assets/icons/insta-black.svg";
import { ReactComponent as Facebook } from "../../assets/icons/fb-black.svg";
import { ReactComponent as TikTok } from "../../assets/icons/tiktok-black.svg";

// Types
import { RootState } from "../../types/store.types";

// Components
import FooterListItem from "./FooterListItem";

const Footer = () => {
  const categories = useSelector<RootState, RootState["categories"]["data"]>(
    (state) => state.categories.data
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {categories.data[0].id > -1
                ? categories.data.map((category) => (
                    <FooterListItem
                      id={category.id}
                      name={category.name}
                      key={uuidv4()}
                    />
                  ))
                : ""}
            </ul>
          </nav>
          <div className="footer-info">
            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <img src={phone} alt="phone" />
              </div>
              <h3 className="footer-info-item-title">
                +(993) 12 68-07-92, 94-08-01{" "}
              </h3>
            </div>
            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <img src={mail} alt="mail" />
              </div>
              <h3 className="footer-info-item-title">turkmen@info.tm</h3>
            </div>
            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <img src={location} alt="location" />
              </div>
              <h3 className="footer-info-item-title">
                115184, Ашхабад, Битарап шаелы, 25 (Центр телерадиовещания
                Туркменистана)
              </h3>
            </div>

            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <Instagram />
              </div>
              <h3 className="footer-info-item-title">hhm@inst.com</h3>
            </div>

            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <Facebook />
              </div>
              <h3 className="footer-info-item-title">hhm@face.com</h3>
            </div>

            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <TikTok />
              </div>
              <h3 className="footer-info-item-title">@hhm</h3>
            </div>

            <div className="footer-info-item">
              <h3 className="footer-info-item-title">
                Реклама на ТВ и радио: (993) 12 78-13-99
              </h3>
            </div>
            <div className="footer-info-item">
              <h3 className="footer-info-item-title">
                Реклама на сайте: (993) 12 78-13-99
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
