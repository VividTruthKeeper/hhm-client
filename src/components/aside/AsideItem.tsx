interface Props {
  title: string;
  category: string;
}

const AsideItem = ({ title, category }: Props) => {
  return (
    <div className="aside-item">
      <h3 className="aside-item-category">{category}</h3>
      <h2 className="aside-item-title">{title}</h2>
    </div>
  );
};

export default AsideItem;
