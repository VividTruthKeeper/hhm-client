// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-calendar/dist/Calendar.css";
import "./styles/style.scss";

// Pages
import Main from "./pages/Main";
import NewsArticle from "./pages/NewsArticle";
import Category from "./pages/Category";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/news/:id" element={<NewsArticle />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
