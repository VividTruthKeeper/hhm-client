// Modules
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-inner">
          <ul>
            <li>
              <Link to="/">Политика</Link>
            </li>
            <li>
              <Link to="/">Экономика</Link>
            </li>
            <li>
              <Link to="/">Общество</Link>
            </li>
            <li>
              <Link to="/">Культура</Link>
            </li>
            <li>
              <Link to="/">Спорт</Link>
            </li>
            <li>
              <Link to="/">Технологии</Link>
            </li>
            <li>
              <Link to="/">Экология</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
