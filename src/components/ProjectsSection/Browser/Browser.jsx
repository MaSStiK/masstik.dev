import clsx from "clsx"
import useCategoryFilter from "@/hooks/useCategoryFilter"
import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"
import useProjects from "@/hooks/useProjects"

import Project from "@/components/Project/Project"
import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import BrowserSidebar from "./BrowserSidebar/BrowserSidebar"
import Card from "./Card/Card"

import "./Browser.css"

export default function Browser() {
    const projects = useProjects()
    const [categoryFilter] = useCategoryFilter()
    const [activeProjectSlug] = useActiveProjectSlug()

    const filteredProjects = categoryFilter === "all"
        ? projects
        : projects.filter((project) => project.type === categoryFilter)

    // Переключение на две колонны при выборе коммерческих проектов
    const cardGridClasses = clsx(
        "browser__card-grid",
        categoryFilter === "commercial" && "browser__card-grid--two-columns"
    )

    return (
        <div className="browser">
            <BrowserToolbar />
            <div className="browser__body">
                <BrowserSidebar />
                <div className="browser__content">
                    {activeProjectSlug
                        ? <Project projectSlug={activeProjectSlug} />
                        : (
                            <div className={cardGridClasses}>
                                {filteredProjects.map(item => (
                                    <Card
                                        key={item.slug}
                                        project={item}
                                        categoryFilter={categoryFilter}
                                    />
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
