import Cards from "./Cards/Cards"
import "./Projects.css"

export default function Projects() {
    return (
        <section className="projects">
            <span className="font-secondary fs-xxlarge fw-bold">Проекты</span>

            <div className="projects__container">
                <div className="flex-row">
                    <div className="flex-col">
                        <p>Проект 1</p>
                        <p>Проект 2</p>
                    </div>
                    <div className="flex-col">
                        <p>Проект 3</p>
                        <p>Проект 4</p>
                    </div>
                    <div className="flex-col">
                        <p>Проект 5</p>
                        <p>Проект 6</p>
                    </div>
                    <div className="flex-col">
                        <p>Проект 7</p>
                        <p>Проект 8</p>
                    </div>
                </div>
                <Cards />
            </div>
        </section>
    )
}
