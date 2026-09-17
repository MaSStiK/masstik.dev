import useLocale from "@/hooks/useLocale"
import Browser from "./Browser/Browser"
import "./Projects.css"

export default function Projects() {
    const locale = useLocale()

    return (
        <section className="projects">
            <div className="projects__container">
                <div className="projects__info">
                    <span className="font-secondary fs-xxlarge fw-bold">{locale.projects.header}</span>
                    <span className="font-console">
                        {`// Здесь собраны мои проекты`}<br />
                        {`// Коммерческие, учебные, личные и тестовые`}
                    </span>
                </div>
                <Browser />
            </div>
        </section>
    )
}
