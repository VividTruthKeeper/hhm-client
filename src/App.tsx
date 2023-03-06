// Modules
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./hooks/ScrollToTop";

// Styles
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-calendar/dist/Calendar.css";
import "./styles/style.scss";

// Pages
import Main from "./pages/Main";
import NewsArticle from "./pages/NewsArticle";
import Category from "./pages/Category";
import SearchResult from "./pages/SearchResult";
import AllPosts from "./pages/AllPosts";
import NotFound404 from "./pages/NotFound404";
// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Api } from "./api/Api";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const language = new Api("").language;

  useEffect(() => {
    try {
      const title = document.querySelector("title") as any;
      language === "EN"
        ? (title.innerText = "Turkmenistan News Portal")
        : language === "RU"
        ? (title.innerText = "Туркменистан новостной портал")
        : language === "TM"
        ? (title.innerText = "Türkmenistan Habarlar Portaly")
        : "Türkmenistan Habarlar Portaly";
    } catch (err) {
      console.log(err);
    }
  }, [language]);

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
            <Route path="/all" element={<AllPosts />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ScrollToTop>
  );
};

export default App;
