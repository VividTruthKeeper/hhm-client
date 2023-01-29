// Modules
import { Link } from "react-router-dom";

// Types
interface Props {
  givenClass?: string;
  title: string;
  linkData?: {
    title: string;
    link: string;
  };
}

const SectionTitle: React.FC<Props> = ({ givenClass, title, linkData }) => {
  return (
    <div className={`${givenClass ? givenClass + "-title" : ""} section-title`}>
      <h2>{title}</h2>
      {linkData ? <Link to={linkData.link}>{linkData.title}</Link> : null}
    </div>
  );
};

export default SectionTitle;
