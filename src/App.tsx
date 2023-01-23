// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles/style.scss";

// Pages
import Main from "./pages/Main";

// Static
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Video from "./components/video/Video";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Video />
      <Footer />
    </div>
  );
};

export default App;
