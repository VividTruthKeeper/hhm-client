// Modules
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const NewsCategory = ({ title }: Props) => {
  return <span className="news-category">{title}</span>;
};

export default NewsCategory;
