import "./resume.scss"
import { resumeData } from '../../resumeData'

export default function Resume() {
    // const data = resumeData
    return (
        <div className="resume" id="resume">
            <div className="slider">
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
                                    <span><a href="{item.url}">{item.urldesc}</a></span>
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
                {/* <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/education.png" alt="" />
                                </div>
                                <h2>Red River College</h2>
                                <p>Red River has been accredited by the Canadian Information Processing Society's (CIPS) College Program Accreditation Council (CPAC). The CPAC works with academic institutions to ensure that educational programs prepare students for the demands of the Information System profession.</p>
                                <span><a href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP">More About The Program</a></span>
                            </div>
                        </div>

                        <div className="right">
                            <div className="container">
                                <h2>Business Information Technology</h2>
                                <h3>Diploma | GPA 4.45 | January 2019 - April 2021</h3>
                                <ul>
                                    <li>Web Development (HTML, CSS, JavaScript, PHP, Ruby, & MySQL)</li>
                                    <li>Data Structures & Algorithms</li>
                                    <li>Programming (Java & C#)</li>
                                    <li>Database (SQL)</li>
                                    <li>Object-Oriented Analysis & Design (UP, UML, & Agile Methodologies)</li>
                                    <li>Business Issues & Management</li>
                                    <li>Financial Accounting & Statistics</li>
                                    <li>Communications & Professional Development</li>
                                </ul>
                            </div>

                            <div className="container">
                                <h2>Introduction to Business Information Technology</h2>
                                <h3>Certificate | GPA 4.50 | September 2018 - December 2019</h3>
                                <ul>
                                    <li>Introduction to Programming Logic</li>
                                    <li>Foundations for Success</li>
                                    <li>Business Computing</li>
                                    <li>Mathematics for Business Information Techonology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <img className="left arrow" src="assets/left.png" alt="left arrow" />
            <img className="right arrow" src="assets/right.png" alt="right arrow" />
        </div>
    )
}
