// Modules
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./hooks/ScrollToTop";
import { changeLanguage } from "i18next";

// Styles
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-calendar/dist/Calendar.css";
import "./styles/style.scss";

// Pages
import Main from "./pages/Main";
import NewsArticle from "./pages/NewsArticle";
import Category from "./pages/Category";
import SearchResult from "./pages/SearchResult";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Api } from "./api/Api";
// import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const language = new Api("").language;

  // useEffect(() => {
  //   changeLanguage(language);
  // }, [language]);

  return (
    <ScrollToTop>
      <div className="App">
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/search/:word" element={<SearchResult />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ScrollToTop>
  );
};

export default App;
