"use client"
import { useState, useEffect } from "react"
import useLocale from "@/hooks/useLocale"
import useLanguage from "@/hooks/useLanguage"
import useProjects from "@/hooks/useProjects"
import useFoldersState from "@/hooks/useFoldersState"
import useCategoryFilter from "@/hooks/useCategoryFilter"
import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"

import Loader from "@/components/Loader/Loader"

import ProjectGallery from "./ProjectGallery/ProjectGallery"
import ProjectMarkdown from "./ProjectMarkdown/ProjectMarkdown"
import { FileText } from "lucide-react"

import categories from "@/data/categories"
import formatTimeAgo from "@/utils/formatTimeAgo"

import "./Project.css"

const projectStatuses = {
    completed: "✅",
    ongoing: "🟡",
    paused: "⏸️",
    archived: "📦"
}

export default function Project({ projectSlug }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    const projects = useProjects()
    const project = projects.find(project => project.slug === projectSlug)
    const locale = useLocale()
    const language = useLanguage()

    const {setFolderOpen} = useFoldersState()
    const [, setCategoryFilter] = useCategoryFilter()
    const [, setActiveProjectSlug] = useActiveProjectSlug()

    // Открытие проекта, устанавливаем фильтр категорий и открытую папку на тип проекта
    useEffect(() => {
        // Закрытие несуществующего проекта
        if (!project) {
            // Не закрываем проект, пока данные загружаются
            if (!projects.length) return null

            const url = new URL(window.location.href)
            url.searchParams.delete("project")

            window.history.replaceState(window.history.state, "", url)

            setActiveProjectSlug(null)
            return
        }

        setFolderOpen(project.type, true)
        setCategoryFilter(project.type)

        // Добавление проекта в URL
        const url = new URL(window.location.href)
        url.searchParams.set("project", projectSlug)

        window.history.replaceState(window.history.state, "", url)

        // Удаление проекта из URL при закрытии
        return () => {
            const url = new URL(window.location.href)

            if (url.searchParams.get("project") !== projectSlug) return

            url.searchParams.delete("project")
            window.history.replaceState(window.history.state, "", url)
        }
    }, [projectSlug, project, project?.type, projects.length, setActiveProjectSlug, setFolderOpen, setCategoryFilter])

    // Загрузка проекта
    if (!project) return <Loader />

    function getProjectStatus(status) {
        return `${projectStatuses[status]} ${locale.project.status[status]}`
    }

    return (
        <div
            className="project"
            style={{ "--accent-color": categories[project.type].color }}
        >
            <ProjectGallery
                project={project}
                isGalleryOpen={isGalleryOpen}
                setIsGalleryOpen={setIsGalleryOpen}
            />

            <div className="project__content flex-col">
                <div className="project__title">
                    <div className="project__type"></div>

                    <span>{project.title}</span>

                    {project.gallery?.length > 0 &&
                        <button
                            className="project__gallery-toggle"
                            onClick={() => setIsGalleryOpen(prev => !prev)}
                        >
                            {isGalleryOpen ? locale.project.gallery.close : locale.project.gallery.open}
                        </button>
                    }
                </div>

                <div className="project__meta">
                    <span>📅 {locale.project.meta.createdAt} {project.year}</span>
                    <span>{getProjectStatus(project.status)}</span>
                    <span>🛠️ {project.role}</span>
                    <span>📂 ~/{project.type}/{project.slug}.{project.extension}</span>
                    <span>🔄 {locale.project.meta.lastUpdated} {formatTimeAgo(project.lastUpdated, language)}</span>
                </div>

                <div className="project__separator">
                    <FileText
                        size={18}
                        color="var(--gray)"
                    />
                    <span>{`README.md`}</span>
                    <hr />
                </div>

                <ProjectMarkdown
                    githubRepo={project.githubRepo}
                    setIsGalleryOpen={setIsGalleryOpen}
                />
            </div>
        </div>
    )
}