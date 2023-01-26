// Modules
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  category: string;
}

const AsideItem = ({ title, category }: Props) => {
  return (
    <Link to="/news/1" className="aside-item">
      <h3 className="aside-item-category">{category}</h3>
      <h2 className="aside-item-title">{title}</h2>
    </Link>
  );
};

export default AsideItem;
