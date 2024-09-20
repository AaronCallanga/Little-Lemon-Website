import '../App.css'
import {adrian, mario} from '../asset/image'

export function AboutUs() {
    return (
        <div className="About-us-section">
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                At Little Lemon, we believe in bringing the zest and freshness of Mediterranean cuisine to your table. Nestled in the heart of the city, we are a family-owned restaurant that prides itself on offering an unforgettable dining experience filled with flavor, warmth, and hospitality.
                </p>
                <p>
                Our journey began with a simple passion: to create dishes that not only satisfy your cravings but also transport you to the Mediterranean coast with every bite. From our signature Greek salads to our handmade lemon desserts, each dish is crafted with the freshest ingredients and an authentic touch.
                </p>
            </div>
            <aside className="about-us-img-container">
                <img src={adrian} alt="adrian" className='about-us-img1'></img>
                <img src={mario} alt="mario" className='about-us-img2'></img>
            </aside>
        </div>
    )
}