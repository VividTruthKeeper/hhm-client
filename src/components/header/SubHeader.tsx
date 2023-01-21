// Modules
import { Link } from 'react-router-dom';

// Images
import Logo from '../../assets/images/logo.png';

// Icons
import { ReactComponent as ArrowDownBlack } from '../../assets/icons/arrow-down-black.svg';

// Components
import SearchForm from './SearchForm';

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className="container">
        <div className="subheader-inner">
          <ul className="subheader-left">
            <li>
              <div id="time">
                <span className="time">12:30</span>
                <span className="date">14 февраля</span>
              </div>
            </li>
            <li>
              <Link to="/">Туркменистан</Link>
            </li>
            <li>
              <Link to="/">СНГ</Link>
            </li>
            <li>
              <Link to="/">Зарубежье</Link>
            </li>
          </ul>
          <div className="subheader-mid">
            <img src={Logo} alt="" />
          </div>
          <div className="subheader-right">
            <div className="language-wrapper">
              <div className="language-trig">
                <span>EN</span>
                <div>
                  <ArrowDownBlack />
                </div>
              </div>
            </div>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
