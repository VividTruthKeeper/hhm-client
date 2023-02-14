// Modules
import { Link } from 'react-router-dom';
// Icons
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/mail.svg';
import location from '../../assets/icons/location.svg';
import { ReactComponent as Instagram } from '../../assets/icons/insta-black.svg';
import { ReactComponent as Facebook } from '../../assets/icons/fb-black.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok-black.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li className="footer-nav-list-item">
                <Link to="/">В Туркменистане</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Политика</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Общество</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Статьи</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Культура</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Новости</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Экономика</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Наука и технологии</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Медиа</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">В мире</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Спорт</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Здоровье и медицина</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to="/">Погода</Link>
              </li>
            </ul>
          </nav>
          <div className="footer-info">
            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <img src={phone} alt="phone" />
              </div>
              <h3 className="footer-info-item-title">+(993) 12 68-07-92, 94-08-01 </h3>
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
                115184, Ашхабад, Битарап шаелы, 25 (Центр телерадиовещания Туркменистана)
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
              <h3 className="footer-info-item-title">Реклама на ТВ и радио: (993) 12 78-13-99</h3>
            </div>
            <div className="footer-info-item">
              <h3 className="footer-info-item-title">Реклама на сайте: (993) 12 78-13-99</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
