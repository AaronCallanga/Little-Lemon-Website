import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Home } from './pages/Home';
import { BookingForm } from './pages/BookingForm';
import { AboutUsPage } from './pages/AboutUs';
import { Login } from './pages/Login';
import { Menu } from './pages/Menu';
import { OrderOnline } from './pages/OrderOnline';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Booking-Form" element={<BookingForm/>}/>
                <Route path="/About-us" element={<AboutUsPage/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Order-online" element={<OrderOnline/>}/>
          </Routes>
          <Footer />
        </Router>
      </>
    );
}

export default App;
