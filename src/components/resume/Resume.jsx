import "./resume.scss"
import { useState } from 'react'
import { resumeData } from '../../resumeData'

export default function Resume() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
        setCurrentSlide(currentSlide < resumeData.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="resume" id="resume">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {resumeData.map((item) => 
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desciption}</p>
                                    <span><a href={item.url} target="_blank" rel="noreferrer">{item.urldesc}</a></span>
                                </div>
                            </div>

                            <div className="right">
                                {item.info.map((detail) =>
                                <div className="container">
                                    <h2>{detail.name}</h2>
                                    <h3>{detail.date}</h3>
                                    <ul>
                                        {detail.details.map((desc) =>
                                        <li>{desc.description}</li> )}
                                    </ul>
                                </div> )}
                            </div>     
                        </div>
                    </div>
                )}
            </div>
            <img className="left arrow" src="assets/left.png" alt="left arrow" onClick={() => handleClick("left")} />
            <img className="right arrow" src="assets/right.png" alt="right arrow" onClick={() => handleClick("right")}/>
        </div>
    )
}
