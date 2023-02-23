// Modules
import { Link } from "react-router-dom";
// import {Api} from '../api/Api';

// Icons
import Robot404 from "../assets/icons/404.svg";

const NotFound404 = () => {
  // const language = new Api('').language;
  return (
    <main className="not-found">
      <div className="container">
        <div className="not-found-inner">
          <div className="not-found-left">
            <h1>Page not found!</h1>
            <h3>Oops! We coudn't find the page you were looking for</h3>
            <h4>
              <Link to="/">Go to home page</Link>
            </h4>
          </div>
          <div className="not-found-right">
            <img src={Robot404} alt="404" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound404;
