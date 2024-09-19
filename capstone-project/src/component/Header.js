import '../App.css'
import {logo} from '../asset/image'
import { useState } from 'react'

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
                    <a href="https://www.google.com/"><li>Home</li></a>
                    <a href="https://www.google.com/"><li>About</li></a>
                    <a href="https://www.google.com/"><li>Menu</li></a>
                    <a href="https://www.google.com/"><li>Reservartions</li></a>
                    <a href="https://www.google.com/"><li>Order online</li></a>
                    <a href="https://www.google.com/"><li>Login</li></a>
                </ul>
            </nav>
        </header>
    )
}