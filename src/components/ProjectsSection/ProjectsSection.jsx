import useLocale from "@/hooks/useLocale"
import Browser from "./Browser/Browser"
import "./ProjectsSection.css"

export default function ProjectsSection() {
    const locale = useLocale()

    return (
        <section className="projects">
            <div className="projects__container">
                <div className="projects__info">
                    <span className="projects__info-header">{locale.projects.header}</span>
                    <span className="projects__info-description">
                        {locale.projects.descriptionTopLine}<br />
                        {locale.projects.descriptionBottomLine}
                    </span>
                </div>
                <Browser />
            </div>
        </section>
    )
}
