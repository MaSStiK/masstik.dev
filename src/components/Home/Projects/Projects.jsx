// import Cards from "./Cards/Cards"
import Project from "./Project/Project"
import projectsData from "./projectsData"

import "./Projects.css"

export default function Projects() {
    return (
        <section className="projects">
            <span className="font-secondary fs-xxlarge fw-bold">Проекты</span>

            <div className="projects__container">
                {projectsData.map((item) => (
                    <Project
                        key={item.slug}
                        title={item.title}
                        icon={item.icon}
                        iconAlt={item.iconAlt}
                        image={item.image}
                        alt={item.alt}
                    />
                ))}
                {/* <Cards /> */}
            </div>
        </section>
    )
}
