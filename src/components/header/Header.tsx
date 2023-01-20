// Components
import SupHeader from "./SupHeader";
import Nav from "./Nav";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <div className="header">
      <SupHeader />
      <SubHeader />
      <Nav />
    </div>
  );
};

export default Header;
