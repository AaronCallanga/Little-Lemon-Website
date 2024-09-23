import '../App.css'
import { useEffect, useState } from 'react'
import { fetchAPI } from '../component/api'



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
    
    const [bookings, setBookings] = useState([])
    const [availableTimes, setAvailableTimes] = useState([])
    const [formData, setFormData] = useState(
        {
            date: "",
            time: "",
            noOfGuests: 1,
            occasion: "",
            notes: ""
        }
    )

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    useEffect(() => {
        if (formData.date) {
            const selectedDate = new Date(formData.date)
            const availTimes = fetchAPI(selectedDate)
            setAvailableTimes(availTimes)
        }
    },[formData.date]) 

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
                notes: ""
            })
        }
    }

    return(
        <div className='form-section'>
            <h1>Reservations</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="date-container">
                    <label htmlFor="date">Date</label>
                    <input 
                    className='form-date'
                    type="date" 
                    id="date"
                    value = {formData.date}
                    onChange={handleChange} /> 
                </div>
                <div className="time-container">
                <label htmlFor="time">Time</label>
                    <select 
                    className='form-time'
                    id="time"
                    value={formData.time}
                    onChange={handleChange}>
                        <option>Time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
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
                    value={formData.notes}
                    placeholder="Enter a text here"
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