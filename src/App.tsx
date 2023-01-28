// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-calendar/dist/Calendar.css";
import "./styles/style.scss";

// Pages
import Main from "./pages/Main";

// Components
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
