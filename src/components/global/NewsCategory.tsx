// Modules
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const NewsCategory = ({ title }: Props) => {
  return (
    <Link to={`/category/asd`} className="news-category">
      {title}
    </Link>
  );
};

export default NewsCategory;
