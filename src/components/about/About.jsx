import "./about.scss"

export default function about() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="rainingIcons">
                    <img src="assets/skateboard.png" alt="skateboard" />
                    <img src="assets/football.png" alt="football" />
                    <img src="assets/laptop.png" alt="laptop" />
                    <img src="assets/travel.png" alt="travel" />
                    <img src="assets/camera.png" alt="camera" />
                </div>
                <a href="#resume">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
            <div className="right">
                <div className="contentContainer">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perferendis officiis assumenda dolorem ad doloremque esse eveniet amet iste itaque ea consectetur excepturi nobis ipsam atque quidem aliquam, voluptatem mollitia?</p>
                </div>
            </div>
        </div>
    )
}
