
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MealsPage from './pages/MealsPage/MealsPage';
import CartPage from './pages/CartPage/CartPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer'
import RestaurantMenuItems from './pages/SingleRestaurantPage/SingleRestaurantPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ScrollToTop from './helpers/ScrollToTop';
import ScrollTopBtn from './components/ScrollTopBtn/ScrollTopBtn'
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meals' element={<MealsPage />} />
          <Route path='/meals/:name' element={<RestaurantMenuItems />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <ScrollTopBtn />
        <Footer />
      </Router>
    </div>

  );
}

export default App;
