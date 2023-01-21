// Components
import SupHeader from './SupHeader';
import Nav from './Nav';
import SubHeader from './SubHeader';

const Header = () => {
  return (
    <header className="header">
      <SupHeader />
      <SubHeader />
      <Nav />
    </header>
  );
};

export default Header;
