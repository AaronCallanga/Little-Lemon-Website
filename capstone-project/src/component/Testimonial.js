import '../App.css'
import { testimonial1, testimonial2, testimonial3, testimonial4 } from '../asset/image'
import { useState } from 'react'

function Card(props) {
    return (
        <div className='testimonial-card'>
            <img src={props.image} alt="profile"></img>
            <div>
                <p className='testimonial-rating'>Star Ratings: <span className='stars'>{props.rating}</span></p>
                <p className='testimonial-review'>{props.review}</p>
                <p className='testimonial-name'>{props.name}</p>
                <p className='testimonial-occupancy'>{props.occupancy}</p>
            </div>
        </div>
    )
}
export function Testimonial() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const nextBtn = () => { setCurrentImageIndex((currentImageIndex + 1) % testimonies.length); }
    const prevBtn = () => { setCurrentImageIndex((currentImageIndex - 1 + testimonies.length) % testimonies.length); }
    

    const testimonies = [
        {   
            image:testimonial1,
            name: "Bob Smith",
            occupancy: "Marketing Manager",
            rating: "★★★★★", 
            review: "Absolutely fantastic experience! The service was impeccable, and the food was simply delicious. Highly recommended!",
          },
          {
            image:testimonial2,
            name: "Alice Johnson",
            occupancy: "Software Engineer",
            rating:  "★★★★★",
            review: "Great place with a cozy atmosphere. The food was good, though I expected a bit more variety. Still, I enjoyed my visit.",
          },
          {
            image:testimonial3,
            name: "David Lee",
            occupancy: "Graphic Designer",
            rating:  "★★★", 
            review: "The restaurant was decent, but the service was a bit slow. The food was okay, but I’ve had better elsewhere.",
          },
          {
            image:testimonial4,
            name: "Carla Gomez",
            occupancy: "Teacher",
            rating:  "★★", 
            review: "Not impressed with the experience. The food was underwhelming, and the staff seemed disinterested. I don’t think I’ll return.",
          }
        ]

    return (
        <div className="testimonial">
            <h1>Testimonials</h1>
            <div className="testimonial-card-container">
                <Card 
                image = {testimonies[currentImageIndex].image}
                name = {testimonies[currentImageIndex].name}
                occupancy = {testimonies[currentImageIndex].occupancy}
                rating = {testimonies[currentImageIndex].rating}
                review = {testimonies[currentImageIndex].review}
                />
            </div>
            <div className='carousel-btn-container'>
                <button onClick={nextBtn}>Next</button>
                <button onClick={prevBtn}>Previous</button>
            </div>  
        </div>
    )
}