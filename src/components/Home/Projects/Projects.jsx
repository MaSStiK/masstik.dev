import Browser from "./Browser/Browser"
import "./Projects.css"

export default function Projects() {
    return (
        <section className="projects">
            <div className="projects__info">
                <span className="font-secondary fs-xxlarge fw-bold">Проекты</span>
                <span className="font-console">
                    {`// Здесь собраны мои проекты`}<br />
                    {`// Коммерческие, учебные, экспериментальные и тестовые`}
                </span>
            </div>
            <Browser />
        </section>
    )
}
