import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Home } from './pages/Home';
import { BookingForm } from './pages/BookingForm';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/BookingForm" element={<BookingForm/>}/>
          </Routes>
          <Footer />
        </Router>
      </>
    );
}

export default App;
