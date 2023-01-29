// Modules
import { Link } from 'react-router-dom';
// Icons
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/mail.svg';
import location from '../../assets/icons/location.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li className="footer-nav-list-item">В туркменистане</li>
              <li className="footer-nav-list-item">Новости</li>
              <li className="footer-nav-list-item">В мире</li>
              <li className="footer-nav-list-item">Политика</li>
              <li className="footer-nav-list-item">Экономика</li>
              <li className="footer-nav-list-item">Спорт</li>
              <li className="footer-nav-list-item">Общество</li>
              <li className="footer-nav-list-item">Наука и технологии</li>
              <li className="footer-nav-list-item">Здоровье и медицина</li>
              <li className="footer-nav-list-item">Статьи</li>
              <li className="footer-nav-list-item">Медиа</li>
              <li className="footer-nav-list-item">Погода</li>
              <li className="footer-nav-list-item">Культура</li>
            </ul>
          </nav>
          <div className="footer-info"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
