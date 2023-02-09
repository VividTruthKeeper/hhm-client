// Modules
import { Link } from "react-router-dom";

interface Props {
  title: string;
  id: number;
}

const NewsCategory = ({ title, id }: Props) => {
  return (
    <Link to={`/category/${id}`} className="news-category">
      {title}
    </Link>
  );
};

export default NewsCategory;
