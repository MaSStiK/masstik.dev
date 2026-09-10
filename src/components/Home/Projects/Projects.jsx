// import Cards from "./Cards/Cards"
import Project from "./Project/Project"
import projectsData from "./projectsData"

import "./Projects.css"

export default function Projects() {
    return (
        <section className="projects">
            <div className="projects__info">
                <span className="font-secondary fs-xxlarge fw-bold">Проекты</span>
                <span className="font-console">{`// Здесь собраны мои проекты`}</span>
                <span className="font-console">{`// Коммерческие, учебные, экспериментальные и тестовые`}</span>
            </div>

            <div className="projects__container">
                {projectsData.map((item) => (
                    <Project
                        key={item.slug}
                        image={item.image}
                        alt={item.alt}
                        category={item.category}
                        title={item.title}
                        desc={item.desc}
                        stack={item.stack}
                    />
                ))}
                {/* <Cards /> */}
            </div>
        </section>
    )
}
