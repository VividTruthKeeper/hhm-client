interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return <h1 className="title">{title}</h1>;
};

export default SectionTitle;
