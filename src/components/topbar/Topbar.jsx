import "./topbar.scss"
import {Phone, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Josh Lavallee.</a>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>(204) 297-2126</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>joshlavallee11@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
