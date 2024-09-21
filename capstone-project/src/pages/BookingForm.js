import '../App.css'
import { useState } from 'react'



function Card(props) {
    return (
        <div key={props.index} className='form-bookings'>
            <h3>Reservation #{props.index + 1}</h3>
            <p>Date: {props.date}</p>
            <p>Time: {props.time}</p>
            <p>Types of Occasion: {props.occasion}</p>
            <p>Notes: {props.notes}</p>
        </div>
    )
}


export function BookingForm() {

    const [formData, setFormData] = useState(
        {
            date: "",
            time: "",
            noOfGuests: 1,
            occasion: "",
            notes: "😎"
        }
    )
    const [bookings, setBookings] = useState([])

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.date || !formData.time || !formData.noOfGuests || !formData.occasion) {
            alert("Fill up all the input fields")
        } else {
            setBookings([...bookings, formData])
            setFormData ({
                date: "",
                time: "",
                noOfGuests: 1,
                occasion: "",
                notes: "😎"
            })
        }
    }

    return(
        <div className='form-section'>
            <h1>Reservations</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="date-container">
                    <label htmlFor="date">Choose a date</label>
                    <input 
                    className='form-date'
                    type="date" 
                    id="date"
                    value = {formData.date}
                    onChange={handleChange} /> 
                </div>
                <div className="time-container">
                <label htmlFor="time">Choose a time</label>
                    <select 
                    className='form-time'
                    id="time"
                    value={formData.time}
                    onChange={handleChange}>
                        <option>Time</option>
                        <option>17:00</option>
                        <option>18:00</option>  
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div className="guests-container">
                    <label htmlFor="noOfGuests">Number of Guests</label>
                    <input 
                    className='form-guests'
                    type="number" 
                    id="noOfGuests" 
                    min="1" max="10" 
                    placeholder="1"
                    value={formData.noOfGuests}
                    onChange={handleChange} />
                </div>
                <div className="occasion-container">
                <label htmlFor="occasion">Type of Occasion</label>
                <select 
                className='form-occasion'
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}>
                    <option>Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                </div>
                <div className='form-notes-container'>
                    <label htmlFor='notes'>Notes:</label>
                    <textarea 
                    className='form-notes'
                    rows ="10"
                    cols = "30"
                    id="notes" 
                    onChange={handleChange}
                    />
                </div>

                <input type="submit" className='form-submit'></input>
            </form>

            {bookings.length > 0 && 
            <div className='bookings'>
                <h1>All reservations</h1>
                <div className='form-bookings-container'>
                    {bookings.map((booking, index)=> (
                        <Card 
                        index={index}
                        date={booking.date}
                        time={booking.time}
                        occasion={booking.occasion}
                        noOfGuests={booking.noOfGuests}
                        notes={booking.notes}
                        />
                    ))}
                </div>
            </div>
            }   
        </div>
    )
}