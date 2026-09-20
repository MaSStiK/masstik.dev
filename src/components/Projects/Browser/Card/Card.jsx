import Image from "next/image"
import formatTimeAgo from "@/utils/formatTimeAgo"
import projectTypeColors from "@/data/projectTypeColors"
import useProjectFilter from "@/hooks/useProjectFilter"

import "./Card.css"

export default function Card({ project }) {
    const [projectFilter] = useProjectFilter()

    return (
        <div
            className="card"
            style={{"--accent-color": projectTypeColors[project.type]}}
        >
            <div className="card__image">
                <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    draggable={false}
                    sizes={projectFilter === "commercial" ? "500px" : "336px"}
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
        </div>
    )
}
