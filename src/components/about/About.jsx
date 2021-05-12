import "./about.scss"

export default function about() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="rainingIcons">
                    <img src="assets/skateboard.png" alt="skateboard" />
                    <img src="assets/football.png" alt="football" />
                    <img src="assets/code.png" alt="laptop" />
                    <img src="assets/travel.png" alt="travel" />
                    <img src="assets/camera.png" alt="camera" />
                </div>
                <a href="#resume">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
            <div className="right">
                <div className="contentContainer">
                    <h1>My Story</h1>
                    <p> I grew up in an athletic household, my dad being a football player and my mom a hockey player, among dozens of other sports that they both played, sports around 24/7. 
                        Naturally, I took an interest in athletics early on and played many different sports as a kid and into my teenage years, including lacrosse, baseball, basketball, 
                        and hockey. Throughout this time, I was instilled with a strong work ethic and learned the importance of <strong>teamwork</strong>.
                    </p>
                    <p> As a teenager, I transitioned to an individual sport. I focused full-time on skateboarding, where I learned so many skills that shaped me as a person. Skating taught 
                        me how to be <strong>creative</strong> and to look at my surroundings in unique ways. It taught me <strong>perserverance</strong>, being comfortable with failure, 
                        and using it as a learning opportunity. Most importantly, skateboarding taught me how to <strong>communicate</strong> effectively with a wide variety of people of 
                        different ages, backgrounds, and points of view.
                    </p>
                    <p> Skateboarding also introduced me to a new passion, photography. I took up photography and slowly <strong>self-taught</strong> new skills using YouTube, listening to 
                        podcasts, and practicing constantly. After a few years of improvement, I began accumulating a following on Instagram, where I showcased Winnipeg from a fresh perspective. 
                        I was able to start a small business where I've sold prints, books, and built relationships with brands locally and internationally, including VOAK Sportswear, 
                        Travel Manitoba, Skip the Dishes and Soundset Music Festival. A significant highlight and achievement for me was being featured on and interviewed by CBC as part of 
                        the <a href="https://www.cbc.ca/news/canada/manitoba/community/snapshot-yoshigrams-1.4316840">Snapshot Series</a>, which gave me confidence in my ability 
                        to learn new skills and excel.
                    </p>
                    <p> My dad worked in the IT field growing up, so I had always had an interest in technology, and in 2019 I decided to enroll in the <a href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP/Overview">BIT</a> program
                        at Red River College to pursue a career in software development. During my time in college, I utilized my creative abilities, communication skills, and relentless work 
                        ethic to achieve proficiency in many different technologies and software development processes. This skillset includes Programming (Java, C#, Ruby), 
                        Web Development (HTML, CSS & JavaScript), Relational Databases (SQL) and Project Management Techniques (UML, UP & Agile Methodologies). 
                        Since graduating in April of 2021, I have continued to add to my skillset and started learning <strong>Python</strong> by analyzing fantasy football data
                        and <strong>React</strong> during the creation of this portfolio. When I'm not learning new things, I enjoy spending time with my goldendoodle Winnie, watching sports, skateboarding, and travelling.
                    </p>
                    <p> Currently, in sports terms, I am a free agent! I genuinely enjoy the development process, learning new things every day, and solving problems. I am looking forward to joining 
                        an organization as a software developer to continue learning and contributing positively individually and as part of a team. If you think I would be a good fit for your company 
                        or group, please <a href="#contact">contact me</a> any time!</p>
                </div>
            </div>
        </div>
    )
}
