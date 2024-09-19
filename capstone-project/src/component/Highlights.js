import '../App.css'
import { highlights1 } from '../asset/image'
import { highlights2 } from '../asset/image'
import { highlights3 } from '../asset/image'
import { deliveryIcon } from '../asset/image'


function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.alt}></img>
            <div>
                <p className="card-title">{props.title}</p>
                <p className="card-price">{props.price}</p>
            </div>
            <p className="card-description">{props.description}</p>
            <button>
                Order a delivery
                <img src={deliveryIcon} alt="delivery icon"></img>
            </button>
        </div>
    )
}



export function Highlights() {

    const myItems = [
        {  
            key: 1,
            image: highlights1,
            alt: "Greek Salad",
            title:"Greek Salad",
            price: "$12.99",
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
        },
        {
            key: 2,
            image: highlights2,
            alt: "Bruchetta",
            title:"Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"
        },
        {
            key: 3,
            image: highlights3,
            alt: "Lemon Dessert",
            title:"Lemon Dessert",
            price: "$4.70",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
        }
    ]

    return (
        <div className="Highlights">
            <div className="specials-btn">
                <h1>Our Specialties!</h1>
                <div className="specials-btn-container">
                    <button>Order online</button>
                </div>
            </div>
            <section className="card-container">
                {myItems.map((item) => (
                    <Card 
                    key = {item.key}
                    image = {item.image}
                    alt = {item.alt}
                    title = {item.title}
                    price = {item.price}
                    description = {item.description}
                    />
                ))}
            </section>
        </div>
    )
}
