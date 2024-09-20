import '../App.css'
import { logo } from '../asset/image'

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
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
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
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </footer>
    )
}