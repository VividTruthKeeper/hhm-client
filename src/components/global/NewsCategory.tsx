// Modules
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const NewsCategory = ({ title }: Props) => {
  return <p className="news-category">{title}</p>;
};

export default NewsCategory;
