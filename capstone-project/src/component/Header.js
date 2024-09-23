import '../App.css'
import {logo} from '../asset/image'
import { useState } from 'react'
import { Link } from 'react-router-dom';



export function Header({aboutUsRef}) {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {setIsOpen((isOpen) => !isOpen)};

    return (
            <header>
                <div>
                    <img src={logo} alt="little lemon logo" className="logo"></img>
                </div>
                <button className={`burger-menu ${isOpen ? "close": ""}`} onClick={toggleMenu}>{isOpen ? '✖' : '☰'}</button>
                <nav className={`nav ${isOpen ? "is-open": ""}`}>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/About-us">About</Link>
                        <Link to="/Menu">Menu</Link>
                        <Link to="/Booking-Form">Reservations</Link>
                        <Link to="/Order-online">Order online</Link>
                        <Link to="/Login">Login</Link>
                    </ul>   
                </nav>
            </header>


    )
}