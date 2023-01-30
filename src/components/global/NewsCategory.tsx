// Modules
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
}

const NewsCategory = ({ title, link }: Props) => {
  return (
    <Link to={`/${link}`} className="news-category">
      {title}
    </Link>
  );
};

export default NewsCategory;
