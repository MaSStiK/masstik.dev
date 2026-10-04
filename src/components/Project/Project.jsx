"use client"
import { useState } from "react"
import useLocale from "@/hooks/useLocale"
import useProjects from "@/hooks/useProjects"

import ProjectGallery from "./ProjectGallery/ProjectGallery"
import ProjectMarkdown from "./ProjectMarkdown/ProjectMarkdown"

import categories from "@/data/categories"

import "./Project.css"

const projectStatuses = {
    completed: "✅",
    ongoing: "🟡",
    paused: "⏸️",
    archived: "📦"
}

export default function Project({ projectSlug }) {
    const [isImageOpen, setIsImageOpen] = useState(false)

    const projects = useProjects()
    const project = projects.find(project => project.slug === projectSlug)
    const locale = useLocale()

    if (!project) return (
        <div>
            <span>Project Not Found</span>
        </div>
    )

    function getProjectStatus(status) {
        return `${projectStatuses[status]} ${locale.projects.status[status]}`
    }

    return (
        <div
            className="project"
            style={{ "--accent-color": categories[project.type].color }}
        >
            <ProjectGallery
                project={project}
                isImageOpen={isImageOpen}
                setIsImageOpen={setIsImageOpen}
            />

            <div className="project__content flex-col">
                <div className="project__title">
                    <div className="project__type"></div>

                    <span>{project.title}</span>

                    <button
                        className="project__gallery-toggle"
                        onClick={() => setIsImageOpen(prev => !prev)}
                    >
                        {isImageOpen ? "Закрыть галерею" : "Открыть галерею"}
                    </button>
                </div>

                <div className="project__meta">
                    <span>📅 {project.year}</span>
                    <span>{getProjectStatus(project.status)}</span>
                    <span>🛠️ {project.role}</span>
                    <span>📂 ~/{project.type}/{project.slug}.{project.extension}</span>
                </div>

                <ProjectMarkdown githubRepo={project.githubRepo} />
            </div>
        </div>
    )
}