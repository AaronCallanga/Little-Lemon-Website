
import '../App.css'
import { heroImage } from '../asset/image'
import { Link } from 'react-router-dom'

export function HeroSection() {
    return (
        <div className="hero-section" >
            <section>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <Link to="/BookingForm"><button>Reserve a Table</button></Link>
            </section>
            <aside>
                <img src={heroImage} alt="a food"></img>
            </aside>
        </div>
    )
}