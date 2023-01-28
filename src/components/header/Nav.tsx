// Icons
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Instagram } from "../../assets/icons/insta-black.svg";
import { ReactComponent as Facebook } from "../../assets/icons/fb-black.svg";
import { ReactComponent as TikTok } from "../../assets/icons/tiktok-black.svg";

// Components
import Search from "./Search";
import LanguageSelect from "./LanguageSelect";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-left">
            <Search />
            <LanguageSelect />
          </div>
          <div className="nav-mid">
            <Logo />
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <a href="#" target={"_blank"}>
                  <Instagram />
                  <span>hhm@inst.com</span>
                </a>
              </li>
              <li>
                <a href="#" target={"_blank"}>
                  <Facebook />
                  <span>hhm@face.com</span>
                </a>
              </li>
              <li>
                <a href="#" target={"_blank"}>
                  <TikTok />
                  <span>@hhm</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
