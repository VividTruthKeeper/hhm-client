// Images
import Logo from "../../assets/images/sup-header.png";

const SupHeader = () => {
  return (
    <div className="supheader">
      <div className="container">
        <div className="supheader-inner">
          <h1>Halkara Habarlar Merkezi</h1>
          <div className="supheader-logo">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupHeader;
