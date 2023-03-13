// Modules
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
// Icons
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/mail.svg';
import location from '../../assets/icons/location.svg';
import { ReactComponent as Instagram } from '../../assets/icons/insta-black.svg';
import { ReactComponent as Facebook } from '../../assets/icons/fb-black.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok-black.svg';

// Types
import { RootState } from '../../types/store.types';

// Components
import FooterListItem from './FooterListItem';
import { Api } from '../../api/Api';

const Footer = () => {
  const language = new Api('').language;

  const categories = useSelector<RootState, RootState['categories']['data']>(
    (state) => state.categories.data,
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {categories.data[0].id > -1
                ? categories.data.map((category) => (
                    <FooterListItem id={category.id} name={category.name} key={uuidv4()} />
                  ))
                : ''}
            </ul>
          </nav>
          <div className="footer-info">
            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <img src={phone} alt="phone" />
              </div>
              <h3 className="footer-info-item-title">+993 64 28-28-66 </h3>
            </div>
            <div className="footer-info-item">
              <div className="footer-info-item-icon">
                <img src={mail} alt="mail" />
              </div>
              <h3 className="footer-info-item-title">turkmentv24@gmail.com</h3>
            </div>

            {language === 'RU' ? (
              <>
                <div className="footer-info-item">
                  <div className="footer-info-item-icon">
                    <img src={location} alt="location" />
                  </div>
                  <h3 className="footer-info-item-title">
                    744000, Ашхабад, Олимпийский городок, Международный вещательный центр enesha
                  </h3>
                </div>
              </>
            ) : language === 'EN' ? (
              <>
                <div className="footer-info-item">
                  <div className="footer-info-item-icon">
                    <img src={location} alt="location" />
                  </div>
                  <h3 className="footer-info-item-title">
                    744000, Ashgabat, International broadcasting center
                  </h3>
                </div>
              </>
            ) : (
              <>
                <div className="footer-info-item">
                  <div className="footer-info-item-icon">
                    <img src={location} alt="location" />
                  </div>
                  <h3 className="footer-info-item-title">
                    744000, Asgabat, Olimpiya säherjigi, Halkara yaylyma beris merkezi enesha{' '}
                  </h3>
                </div>
              </>
            )}

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
