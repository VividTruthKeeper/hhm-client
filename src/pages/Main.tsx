// Components
import Aside from "../components/aside/Aside";
import NewsScroll from "../components/global/NewsScroll";
import Videos from "../components/videos/Videos";
import MainContent from "../components/main/MainContent";

const Main = () => {
  return (
    <main className="main">
      <h1 style={{ display: "none" }}>Туркменистан новостной портал</h1>
      <div className="news-section">
        <div className="container">
          <div className="news-inner">
            <MainContent />
            <div className="news-outer-wrapper">
              <NewsScroll title={true} />
              <Aside type="popular" />
            </div>
            <Videos />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
