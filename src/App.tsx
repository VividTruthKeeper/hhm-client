// Modules
import { Routes, Route } from 'react-router-dom';

// Styles
import './styles/style.scss';

// Pages
import Main from './pages/Main';

// Static
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
