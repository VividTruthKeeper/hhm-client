interface Props {
  date: string;
}

const NewsDate = ({ date }: Props) => {
  return <h3 className="news-date">{date}</h3>;
};

export default NewsDate;
