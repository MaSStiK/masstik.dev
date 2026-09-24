import Image from "next/image"
import useLocale from "@/hooks/useLocale"
import useProjects from "@/hooks/useProjects"

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
            <div
                className="project__image"
                style={{ "--cover-image": `url(${project.image})` }}
            >
                <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    draggable={false}
                    sizes={"1058px"}
                    fill
                />
            </div>
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

                <hr />

                <span>{project.description}</span>
            </div>
        </div>
    )
}
