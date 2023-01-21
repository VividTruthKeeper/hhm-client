// Modules
import { Link } from 'react-router-dom';

// Icons
import { ReactComponent as Phone } from '../../assets/icons/phone-white.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail-white.svg';
import { ReactComponent as Navigation } from '../../assets/icons/navigation-white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/">Реклама на сайте</Link>
              </li>
              <li>
                <Link to="/">О нас</Link>
              </li>
            </ul>
          </div>
          <div className="footer-mid">
            <ul className="footer-list">
              <li className="footer-list-item">
                <Phone />
                <a href="tel: +99312680792">(993) 12 68-07-92, 94-08-01</a>
              </li>
              <li className="footer-list-item">
                <Mail />
                <a href="mailto: turkmen@info.tm">turkmen@info.tm</a>
              </li>
              <li className="footer-list-item">
                <Navigation />
                <ul className="footer-list-inner">
                  <li>
                    <p>
                      115184, Ашхабад, Битарап шаелы, 25 <br /> (Центр телерадиовещания
                      Туркменистана)
                    </p>
                  </li>
                  <li>
                    <a href="tel: +99312781399">Реклама на ТВ и радио: (993) 12 78-13-99</a>
                  </li>
                  <li>
                    <a href="tel: +99312781399">Реклама на сайте: (993) 12 78-13-99</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-right"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
