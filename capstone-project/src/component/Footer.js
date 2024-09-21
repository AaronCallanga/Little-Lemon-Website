import '../App.css'
import { logo } from '../asset/image'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer>
            <aside className='footer-img-container'>
                <img src={logo} alt="little lemon logo" className='footer-img'></img>
            </aside>
            <div>
                <p>Doormat Navigation</p>
                <ul>
                    <li>Home</li>
                    <Link to="/"><li>About</li></Link>
                    <li>Menu</li>
                    <Link to="/BookingForm"><li>Reservations</li></Link>
                    <li>Order online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <p>Social Media Links</p>
                <ul>
                    <a className='social-media-nav' href="https://www.facebook.com/"><li>Facebook</li></a>
                    <a className='social-media-nav' href="https://www.instagram.com/"><li>Instagram</li></a>
                    <a className='social-media-nav' href="https://www.youtube.com/"><li>Youtube</li></a>
                </ul>
            </div>
        </footer>
    )
}