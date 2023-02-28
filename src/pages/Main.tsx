// Modules
import { motion } from 'framer-motion';

// Components
import Aside from '../components/aside/Aside';
import NewsScroll from '../components/global/NewsScroll';
import Videos from '../components/videos/Videos';
import MainContent from '../components/main/MainContent';

const Main = () => {
  return (
    <motion.main
      className="main"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.15 } }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}>
      <h1 style={{ display: 'none' }}>Туркменистан новостной портал</h1>
      <div className="news-section">
        <div className="container">
          <div className="news-inner">
            <MainContent />
            <div className="news-outer-wrapper">
              <NewsScroll title={true} />
              <Aside />
            </div>
            <Videos />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Main;
