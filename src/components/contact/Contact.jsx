import "./contact.scss"
import { useState } from 'react'

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handlesubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/tealcontactme.png" alt="" />
            </div>
            <div className="right">
                <form onSubmit={handlesubmit} >
                    <h2>Contact.</h2>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    { message && <span>Thanks, I will get in contact with you shortly! 😄</span>}
                </form>
            </div>
        </div>
    )
}
