import "./projects.scss"
import {useState, useEffect } from 'react'
import ProjectList from '../project_list/ProjectList'
import { recentProjects, mobileProjects, webProjects, photoProjects } from '../../projectData'

export default function Projects() {
    const [selected, setSelected] = useState("recent")
    const [projectData, setData] = useState([])
    const projectList = [
        {
            id: "recent",
            title: "Recent"
        },
        {
            id: "mobile",
            title: "Mobile Applications"
        },
        {
            id: "web",
            title: "Web Applications"
        },
        {
            id: "photo",
            title: "Photography"
        },
    ]

    useEffect(() => {
        switch(selected) {
            case "recent":
                setData(recentProjects)
                break;
            case "mobile":
                setData(mobileProjects)
                break;
            case "web":
                setData(webProjects)
                break;
            case "photo":
                setData(photoProjects)
                break;
            default:
                setData(recentProjects)
                break;
        }
    }, [selected]);

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {projectList.map((project) => (
                    <ProjectList 
                        id={project.id}
                        title ={project.title} 
                        active={selected === project.id} 
                        setSelected={setSelected} 
                    />
                ))}
            </ul>

            <div className="container">
                {projectData.map((project) => (
                    <div className="item">
                        <img src={project.img} alt={project.title} />
                        <h3>
                            <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
