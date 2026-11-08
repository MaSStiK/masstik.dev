"use client"
import useLocale from "@/hooks/useLocale"
import Browser from "@/components/Browser/Browser"
import SectionHeader from "@/components/SectionHeader/SectionHeader"

import "./ProjectsSection.css"

export default function ProjectsSection() {
    const locale = useLocale()

    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <div className="projects__info">
                    <SectionHeader
                        accentColor="--orange"
                        header="projects"
                        number="02"
                    />
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
