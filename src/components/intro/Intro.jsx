import { useEffect, useRef} from 'react'
import { init } from 'ityped'
import "./intro.scss"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Developer", "Photographer", "Traveller", "Sports Fan", "Fantasy Football Legend", "Dog Dad"]
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
                    <h1>Hi, I'm Josh!</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}
