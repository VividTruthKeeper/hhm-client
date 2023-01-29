// Components
import SectionTitle from "../global/SectionTitle";

const Videos = () => {
  return (
    <section className="videos">
      <div className="container">
        <div className="videos-inner">
          <SectionTitle
            title="Видео"
            givenClass="videos"
            linkData={{ link: "/", title: "Посмотреть все" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Videos;
