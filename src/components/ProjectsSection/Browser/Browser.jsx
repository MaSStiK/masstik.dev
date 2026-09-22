import clsx from "clsx"
import { useEffect, useState } from "react"
import projectsData from "@/data/projectsData"
import getGithubProjects from "@/utils/getGithubProjects"

import Project from "@/components/Project/Project"
import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import BrowserSidebar from "./BrowserSidebar/BrowserSidebar"
import Card from "./Card/Card"

import useCategoryFilter from "@/hooks/useCategoryFilter"
import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"

import "./Browser.css"

export default function Browser() {
    const [projects, setProjects] = useState(projectsData)
    const [categoryFilter] = useCategoryFilter()
    const [activeProjectSlug] = useActiveProjectSlug()

    const filteredProjects = categoryFilter === "all"
        ? projects
        : projects.filter((project) => project.type === categoryFilter)

    // Переключение на две колонны при выборе коммерческих проектов
    const browserContentClasses = clsx(
        "browser__content",
        categoryFilter === "commercial" && "browser__content--two-columns"
    )

    useEffect(() => {
        async function loadProjects() {
            const repos = await getGithubProjects()

            const updatedProjects = projectsData.map((project) => {
                const repo = repos.find(
                    (repo) => repo.name === project.githubRepo
                )

                // console.log(repo?.pushed_at)

                return {
                    ...project,
                    github: repo?.html_url ?? null,
                    // description: repo?.description ?? project.description, // Это вообще не надо получать, в проектах должно быть три описание на трех языках
                    website: repo?.homepage ?? null,
                    lastUpdated: repo?.pushed_at ?? null
                }
            })

            setProjects(updatedProjects)
        }

        loadProjects()
    }, [])

    return (
        <div className="browser">
            <BrowserToolbar />
            <div className="browser__body">
                <BrowserSidebar />
                <div className={browserContentClasses}>
                    {activeProjectSlug
                        ? <Project projectSlug={activeProjectSlug} />
                        : filteredProjects.map(item => (
                            <Card
                                key={item.slug}
                                project={item}
                                categoryFilter={categoryFilter}
                            />
                    ))}
                </div>
            </div>
        </div>
    )
}
