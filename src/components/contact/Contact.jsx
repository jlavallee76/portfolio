import "./contact.scss"

export default function Contact() {
    const handlesubmit = (e) => {
        e.preventDefault();
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
                </form>
            </div>
        </div>
    )
}
