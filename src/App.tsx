// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "./styles/style.scss";

// Pages
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
