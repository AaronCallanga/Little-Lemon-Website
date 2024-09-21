import '../App.css'
import {logo} from '../asset/image'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export function Header() {

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
                        <a href="https://www.google.com/"><li>About</li></a>
                        <a href="https://www.google.com/"><li>Menu</li></a>
                        <Link to="/BookingForm">Reservartions</Link>
                        <a href="https://www.google.com/"><li>Order online</li></a>
                        <a href="https://www.google.com/"><li>Login</li></a>
                    </ul>   
                </nav>
            </header>


    )
}