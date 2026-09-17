import { useEffect, useState } from "react"
import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import BrowserSidebar from "./BrowserSidebar/BrowserSidebar"
import Card from "./Card/Card"
import projectsData from "@/data/projectsData"
import getGithubProjects from "@/utils/getGithubProjects"

import "./Browser.css"

export default function Browser() {
    const [projects, setProjects] = useState(projectsData)

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
                    description: repo?.description ?? project.description,
                    website: repo?.homepage ?? null,
                    lastUpdated: repo?.pushed_at ?? null
                }
            })

            setProjects(updatedProjects)
        }

        loadProjects()
    }, [])

    // Прокинуть сеттер фильтра в BrowserSidebar и вызывать от туда смену фильтра отображаемых проектов
    return (
        <div className="browser">
            <BrowserToolbar />
            <div className="browser__body">
                <BrowserSidebar />
                <div className="browser__content">
                    {projects.map((item) => (
                        <Card   
                            key={item.slug}
                            project={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
