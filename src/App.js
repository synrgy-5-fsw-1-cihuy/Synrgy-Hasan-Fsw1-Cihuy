import './App.css';
import './assets/style.css';
import Footer from './components/Footer';
import Navbar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Car from './pages/Car';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cars' element={<Car />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
