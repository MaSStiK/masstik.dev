
import useLocale from "@/hooks/useLocale"
import useProjects from "@/hooks/useProjects"

import ProjectGallery from "./ProjectGallery/ProjectGallery"

import categories from "@/data/categories"

import "./Project.css"

const projectStatuses = {
    completed: "✅",
    ongoing: "🟡",
    paused: "⏸️",
    archived: "📦"
}

export default function Project({ projectSlug }) {
    const projects = useProjects()
    const project = projects.find(project => project.slug === projectSlug)
    const locale = useLocale()

    
    if (!project) return (
        <div>
            <span>Project Not Found</span>
        </div>
    )

    console.log(project);

    function getProjectStatus(status) {
        return `${projectStatuses[status]} ${locale.projects.status[status]}`
    }

    return (
        <div
            className="project"
            style={{"--accent-color": categories[project.type].color}}
        >
            <ProjectGallery project={project} />

            <div className="project__content flex-col">
                <div className="project__title">
                    <div className="project__type"></div>
                    <span>{project.title}</span>
                </div>
                
                <div className="project__meta">
                    <span>📅 {project.year}</span>
                    <span>{getProjectStatus(project.status)}</span>
                    <span>🛠️ {project.role}</span>
                    <span>📂 ~/{project.type}/{project.slug}.{project.extension}</span>
                </div>

                <span>{project.description}</span>
            </div>
        </div>
    )
}
