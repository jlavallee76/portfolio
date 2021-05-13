import "./testimonials.scss"
import { testimonialData } from '../../testimonialData'

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials.</h1>
            <div className="container">
            {testimonialData.map((item) =>
                <div className={item.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img className="left" src="assets/right.png" alt="right arrow" />
                        <img className="user" src={item.img} alt="placeholder" />
                        <img className="right" src={item.icon} alt="linkedin logo" />
                    </div>
                    <div className="center">{item.description}</div>
                    <div className="bottom">
                        <h3>{item.name}</h3>
                        <h4>{item.position}</h4>
                    </div>
                </div> )}
            </div>
            <a href="#contact">
                <img className="bottom arrow"src="assets/down.png" alt="down arrow" />
            </a>
        </div>
    )
}
