// Modules
import { Routes, Route } from 'react-router-dom';

// Styles
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-calendar/dist/Calendar.css';
import './styles/style.scss';

// Pages
import Main from './pages/Main';

// Components
import Header from './components/header/Header';
import Videos from './components/videos/Videos';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import NewsScroll from './components/global/NewsScroll';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Videos />
      <NewsScroll />
      <Footer />
    </div>
  );
};

export default App;
