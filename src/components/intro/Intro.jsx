import { useEffect, useRef} from 'react'
import { init } from 'ityped'
import "./intro.scss"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            typeSpeed: 75,
            backSpeed:50,
            strings: ["developer.", "photographer.", "traveller.", "student.", "sports fan.", "fantasy football legend.", "dog dad.", "gamer.", "skateboarder."]
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/logo.png" alt="logo" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Welcome, I'm</h2>
                    <h1>Josh Lavallee.</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}
