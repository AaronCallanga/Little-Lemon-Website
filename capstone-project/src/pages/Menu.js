import { gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10} from "../asset/image"
export function Menu () {
    const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10]
    return (
        <div className="Menu-section">
            <h1>Menu</h1>
            <div className="Menu-img-container">
                {images.map((item, index) => (
                    <div className={`gal-${index}`}>
                        <img src={item} alt="menu" key={index}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}