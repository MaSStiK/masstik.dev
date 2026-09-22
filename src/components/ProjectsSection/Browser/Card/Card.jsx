import Image from "next/image"
import formatTimeAgo from "@/utils/formatTimeAgo" // TODO: Добавить дату, год создания или дату последнего обновления
import categories from "@/data/categories"
import useFoldersState from "@/hooks/useFoldersState"
import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"

import "./Card.css"

export default function Card({
    project,
    categoryFilter
}) {
    const {setFolderOpen} = useFoldersState()
    const [activeProjectSlug, setActiveProjectSlug] = useActiveProjectSlug()

    function openProject() {
        if (activeProjectSlug === project.slug) return

        // Открываем папку с категорией файла и подсвечиваем активный файл
        setFolderOpen(project.type, true)
        setActiveProjectSlug(project.slug)
    }
    
    return (
        <button
            className="card"
            style={{"--accent-color": categories[project.type].color}}
            onClick={openProject}
        >
            <div className="card__image">
                <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    draggable={false}
                    sizes={categoryFilter === "commercial" ? "500px" : "336px"}
                    fill
                />
            </div>
            <div className="card__content">
                <div className="card__title">
                    <div className="card__type"></div>
                    <span>{project.title}</span>
                </div>
                <p className="card__description">{project.description}</p>
                <div className="card__stack">
                    {project.stack.map((item) => (
                        <span key={item} className="card__stack-item">{item}</span>
                    ))}
                </div>
            </div>
        </button>
    )
}
