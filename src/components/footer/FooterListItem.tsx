// Modules
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  name: string;
}

const FooterListItem = ({ id, name }: IProps) => {
  return (
    <li className="footer-nav-list-item">
      <Link to={`/category/${id}`}>{name}</Link>
    </li>
  );
};

export default FooterListItem;
