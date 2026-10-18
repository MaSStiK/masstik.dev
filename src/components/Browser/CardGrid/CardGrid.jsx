import clsx from "clsx"
import Card from "@/components/Browser/Card/Card"

import useProjects from "@/hooks/useProjects"
import useCategoryFilter from "@/hooks/useCategoryFilter"

import "./CardGrid.css"

export default function CardGrid() {
    const projects = useProjects()
    const [categoryFilter] = useCategoryFilter()

    // Фильтруем проекты по фильтру
    const filteredProjects = categoryFilter === "all"
        ? projects
        : projects.filter((project) => project.type === categoryFilter)

    // Переключение на две колонны при выборе коммерческих проектов
    const cardGridClasses = clsx(
        "browser__card-grid",
        categoryFilter === "commercial" && "browser__card-grid--two-columns"
    )

    return (
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
